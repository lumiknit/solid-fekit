/**
 * A wrapper for IndexedDB Store that provides a promise-based API
 */
export class AsyncIDBStore {
  readonly db: IDBDatabase;
  readonly store: IDBObjectStore;
  readonly mode: IDBTransactionMode;

  constructor(
    db: IDBDatabase,
    store: IDBObjectStore,
    mode: IDBTransactionMode
  ) {
    this.db = db;
    this.store = store;
    this.mode = mode;
  }

  async wrap(fn: (store: IDBObjectStore) => IDBRequest) {
    return new Promise<any>((resolve, reject) => {
      const req = fn(this.store);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async get(key: IDBValidKey) {
    return this.wrap((store) => store.get(key));
  }

  async getAll() {
    return this.wrap((store) => store.getAll());
  }

  async add(value: any, key?: IDBValidKey) {
    return this.wrap((store) => store.add(value, key));
  }

  async put(value: any, key?: IDBValidKey) {
    return this.wrap((store) => store.put(value, key));
  }

  async delete(key: IDBValidKey) {
    return this.wrap((store) => store.delete(key));
  }

  async clear() {
    return this.wrap((store) => store.clear());
  }

  async count() {
    return this.wrap((store) => store.count());
  }

  index(name: string) {
    return this.store.index(name);
  }

  createIndex(
    name: string,
    keyPath: string | string[],
    options?: IDBIndexParameters
  ) {
    return this.store.createIndex(name, keyPath, options);
  }

  deleteIndex(name: string) {
    this.store.deleteIndex(name);
  }
}

/**
 * Open an IndexedDB database
 * If the database does not exist, it will be created with the handler
 *
 * @param dbName The name of the database
 * @param handleUpgrade The handler for the upgrade event
 * @returns A promise that resolves to the database
 */
export const openIDB = (
  dbName: string,
  handleUpgrade?: (db: IDBDatabase, ev: IDBVersionChangeEvent) => Promise<void>
) =>
  new Promise<IDBDatabase>((resolve, reject) => {
    const req = indexedDB.open(dbName);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onupgradeneeded = (event) => {
      const db = req.result;
      if (handleUpgrade) {
        handleUpgrade(db, event)
          .then(() => resolve(db))
          .catch(reject);
      } else {
        reject(new Error('Upgrade needed, but no handler provided'));
      }
    };
  });

/**
 * Open an IndexedDB object store from a database
 *
 * @param db The database
 * @param storeNames The names of the object stores to open
 * @param mode The mode of the transaction
 * @returns The array of object stores
 */
export const openStore = (
  db: IDBDatabase,
  storeNames: string[],
  mode: IDBTransactionMode = 'readonly'
) =>
  new Promise<IDBObjectStore[]>((resolve, reject) => {
    const tx = db.transaction(storeNames, mode);
    tx.oncomplete = () => resolve(stores);
    tx.onerror = () => reject(tx.error);

    const stores: IDBObjectStore[] = [];
    for (const name of storeNames) {
      stores.push(tx.objectStore(name));
    }
  });

/**
 * Open an IndexedDB database and object store
 * If the database does not exist, it will be created with the handler
 */
export const openIDBStore = async (
  dbName: string,
  storeNames: string[],
  handleUpgrade: (db: IDBDatabase, ev: IDBVersionChangeEvent) => Promise<void>,
  mode: IDBTransactionMode = 'readonly'
) => {
  const db = await openIDB(dbName, handleUpgrade);
  const store = await openStore(db, storeNames, mode);
  return store.map((store) => new AsyncIDBStore(db, store, mode));
};
