/**
 * A wrapper for IndexedDB Store that provides a promise-based API
 */
export class AsyncIDBStore {
    db;
    store;
    mode;
    constructor(db, store, mode) {
        this.db = db;
        this.store = store;
        this.mode = mode;
    }
    async wrap(fn) {
        return new Promise((resolve, reject) => {
            const req = fn(this.store);
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
    }
    async add(value, key) {
        return this.wrap((store) => store.add(value, key));
    }
    async get(key) {
        return this.wrap((store) => store.get(key));
    }
    async getAll() {
        return this.wrap((store) => store.getAll());
    }
    async getAllKeys() {
        return this.wrap((store) => store.getAllKeys());
    }
    async getKey(key) {
        return this.wrap((store) => store.getKey(key));
    }
    async clear() {
        return this.wrap((store) => store.clear());
    }
    async count() {
        return this.wrap((store) => store.count());
    }
    async delete(key) {
        return this.wrap((store) => store.delete(key));
    }
    async put(value, key) {
        return this.wrap((store) => store.put(value, key));
    }
    async openCursor(range, direction) {
        return this.wrap((store) => store.openCursor(range, direction));
    }
    async openKeyCursor(range, direction) {
        return this.wrap((store) => store.openKeyCursor(range, direction));
    }
    index(name) {
        return this.store.index(name);
    }
    createIndex(name, keyPath, options) {
        return this.store.createIndex(name, keyPath, options);
    }
    deleteIndex(name) {
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
export const openIDB = (dbName, handleUpgrade) => new Promise((resolve, reject) => {
    const req = window.indexedDB.open(dbName);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    req.onupgradeneeded = (event) => {
        const db = req.result;
        if (handleUpgrade) {
            handleUpgrade(db, event)
                .then(() => resolve(db))
                .catch(reject);
        }
        else {
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
export const openStore = (db, storeNames, mode = 'readonly', onComplete) => new Promise((resolve, reject) => {
    const tx = db.transaction(storeNames, mode);
    if (onComplete)
        tx.oncomplete = onComplete;
    tx.onerror = () => reject(tx.error);
    const stores = [];
    for (const name of storeNames) {
        stores.push(tx.objectStore(name));
    }
    resolve(stores);
});
/**
 * Open an IndexedDB database and object store
 * If the database does not exist, it will be created with the handler
 */
export const openIDBStore = async (dbName, storeNames, options = {}) => {
    const db = await openIDB(dbName, options.handleUpgrade);
    const mode = options.mode || 'readonly';
    const store = await openStore(db, storeNames, mode, options.onComplete);
    return store.map((store) => new AsyncIDBStore(db, store, mode));
};
