/**
 * Wrapper for IndexedDB Transaction that provides a promise-based API
 */
export declare class AsyncIDBTransaction {
    transaction: IDBTransaction;
    constructor(transaction: IDBTransaction);
    getStore(storeName: string): AsyncIDBStore;
}
/**
 * A wrapper for IndexedDB Store that provides a promise-based API
 */
export declare class AsyncIDBStore {
    readonly store: IDBObjectStore;
    constructor(store: IDBObjectStore);
    wrap<T>(fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T>;
    add(value: any, key?: IDBValidKey): Promise<IDBValidKey>;
    get(key: IDBValidKey): Promise<any>;
    getAll(): Promise<any[]>;
    getAllKeys(): Promise<IDBValidKey[]>;
    getKey(key: IDBValidKey): Promise<IDBValidKey>;
    clear(): Promise<undefined>;
    count(): Promise<number>;
    delete(key: IDBValidKey): Promise<undefined>;
    put(value: any, key?: IDBValidKey): Promise<IDBValidKey>;
    openCursor(range?: IDBKeyRange | IDBValidKey | null, direction?: IDBCursorDirection): Promise<IDBCursorWithValue>;
    openKeyCursor(range?: IDBKeyRange | IDBValidKey | null, direction?: IDBCursorDirection): Promise<IDBCursor>;
    index(name: string): IDBIndex;
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    deleteIndex(name: string): void;
}
/**
 * Open IDBDatabase asynchronously.
 * @param dbName Name of the database.
 * @param onUpgradeNeeded Callback function to be called when the database is being upgraded.
 * @returns Promise that resolves to the opened IDBDatabase.
 */
export declare const openIDBDatabase: (dbName: string, onUpgradeNeeded: (db: IDBDatabase, event: IDBVersionChangeEvent) => void) => Promise<IDBDatabase>;
/**
 * Create an IDBTransaction asynchronously.
 * @param db IDBDatabase to create the transaction on.
 * @param storeNames Name of the object store or an iterable of object store names.
 * @param mode Transaction mode.
 * @param options Transaction options.
 * @returns An AsyncIDBTransaction object.
 */
export declare const createAsyncIDBTransaction: (db: IDBDatabase, storeNames: string | string[], mode?: IDBTransactionMode, options?: IDBTransactionOptions) => AsyncIDBTransaction;
/**
 * Helper function to open IDB Stores.
 * If the store does not exist, it will be created empty one.
 */
export declare const openIDBStores: (dbName: string, storeNames: string[], mode?: IDBTransactionMode, options?: IDBTransactionOptions) => Promise<AsyncIDBStore[]>;
