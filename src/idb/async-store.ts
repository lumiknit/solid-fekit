/**
 * Wrapper for IndexedDB Transaction that provides a promise-based API
 */
export class AsyncIDBTransaction {
  transaction: IDBTransaction;

  constructor(transaction: IDBTransaction) {
    this.transaction = transaction;
  }

  getStore(storeName: string) {
    return new AsyncIDBStore(this.transaction.objectStore(storeName));
  }
}

/**
 * A wrapper for IndexedDB Store that provides a promise-based API
 */
export class AsyncIDBStore {
  readonly store: IDBObjectStore;

  constructor(store: IDBObjectStore) {
    this.store = store;
  }

  async wrap<T>(fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
    return new Promise<any>((resolve, reject) => {
      const req = fn(this.store);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async add(value: any, key?: IDBValidKey): Promise<IDBValidKey> {
    return this.wrap((store) => store.add(value, key));
  }

  async get(key: IDBValidKey) {
    return this.wrap((store) => store.get(key));
  }

  async getAll() {
    return this.wrap((store) => store.getAll());
  }

  async getAllKeys() {
    return this.wrap((store) => store.getAllKeys());
  }

  async getKey(key: IDBValidKey) {
    return this.wrap((store) => store.getKey(key));
  }

  async clear() {
    return this.wrap((store) => store.clear());
  }

  async count() {
    return this.wrap((store) => store.count());
  }

  async delete(key: IDBValidKey) {
    return this.wrap((store) => store.delete(key));
  }

  async put(value: any, key?: IDBValidKey) {
    return this.wrap((store) => store.put(value, key));
  }

  async openCursor(
    range?: IDBKeyRange | IDBValidKey | null,
    direction?: IDBCursorDirection
  ) {
    return this.wrap((store) => store.openCursor(range, direction));
  }

  async openKeyCursor(
    range?: IDBKeyRange | IDBValidKey | null,
    direction?: IDBCursorDirection
  ) {
    return this.wrap((store) => store.openKeyCursor(range, direction));
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
 * Open IDBDatabase asynchronously.
 * @param dbName Name of the database.
 * @param onUpgradeNeeded Callback function to be called when the database is being upgraded.
 * @returns Promise that resolves to the opened IDBDatabase.
 */
export const openIDBDatabase = async (
  dbName: string,
  onUpgradeNeeded: (db: IDBDatabase, event: IDBVersionChangeEvent) => void
) =>
  new Promise<IDBDatabase>((resolve, reject) => {
    let req = indexedDB.open(dbName);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onupgradeneeded = (e) => {
      onUpgradeNeeded((e.target as any).result, e);
    };
  });

/**
 * Create an IDBTransaction asynchronously.
 * @param db IDBDatabase to create the transaction on.
 * @param storeNames Name of the object store or an iterable of object store names.
 * @param mode Transaction mode.
 * @param options Transaction options.
 * @returns An AsyncIDBTransaction object.
 */
export const createAsyncIDBTransaction = (
  db: IDBDatabase,
  storeNames: string | string[],
  mode?: IDBTransactionMode,
  options?: IDBTransactionOptions
): AsyncIDBTransaction =>
  new AsyncIDBTransaction(db.transaction(storeNames, mode, options));

/**
 * Helper function to open IDB Stores.
 * If the store does not exist, it will be created empty one.
 */
export const openIDBStores = async (
  dbName: string,
  storeNames: string[],
  mode?: IDBTransactionMode,
  options?: IDBTransactionOptions
) => {
  const db = await openIDBDatabase(dbName, (db) => {
    for (const storeName of storeNames) {
      db.createObjectStore(storeName);
    }
  });
  const tr = createAsyncIDBTransaction(db, storeNames, mode, options);
  return storeNames.map((storeName) => tr.getStore(storeName));
};
