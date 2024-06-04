/**
 * A wrapper for IndexedDB Store that provides a promise-based API
 */
export declare class AsyncIDBStore {
    readonly db: IDBDatabase;
    readonly store: IDBObjectStore;
    readonly mode: IDBTransactionMode;
    constructor(db: IDBDatabase, store: IDBObjectStore, mode: IDBTransactionMode);
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
 * Open an IndexedDB database
 * If the database does not exist, it will be created with the handler
 *
 * @param dbName The name of the database
 * @param handleUpgrade The handler for the upgrade event
 * @returns A promise that resolves to the database
 */
export declare const openIDB: (dbName: string, handleUpgrade?: (db: IDBDatabase, ev: IDBVersionChangeEvent) => Promise<void>) => Promise<IDBDatabase>;
/**
 * Open an IndexedDB object store from a database
 *
 * @param db The database
 * @param storeNames The names of the object stores to open
 * @param mode The mode of the transaction
 * @returns The array of object stores
 */
export declare const openStore: (db: IDBDatabase, storeNames: string[], mode?: IDBTransactionMode, onComplete?: (this: IDBTransaction, ev: Event) => any) => Promise<IDBObjectStore[]>;
/**
 * Open an IndexedDB database and object store
 * If the database does not exist, it will be created with the handler
 */
export declare const openIDBStore: (dbName: string, storeNames: string[], options?: {
    handleUpgrade?: (db: IDBDatabase, ev: IDBVersionChangeEvent) => Promise<void>;
    mode?: IDBTransactionMode;
    onComplete?: (this: IDBTransaction, ev: Event) => any;
}) => Promise<AsyncIDBStore[]>;
