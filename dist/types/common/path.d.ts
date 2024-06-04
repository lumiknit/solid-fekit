/**
 * Path segments. By join with the PATH_SEPARATOR, it'll create a path string.
 * If the first element is empty, it's an absolute path.
 */
export type PathSegments = string[];
/**
 * Path separator.
 */
export declare const PATH_SEPARATOR = "/";
/**
 * Current segments.
 */
export declare const CURRENT_SEGMENTS: Set<string>;
/**
 * Parse a path and return segments in canonical form.
 *
 * @param path Path string
 * @param base Base path segments. If it provided, it works as cd in shell.
 */
export declare const parsePath: (path: string, base?: PathSegments) => PathSegments;
/**
 * Join path segments into a single path string.
 */
export declare const joinPath: (segments: PathSegments) => string;
/**
 * Check if the path is absolute.
 *
 * @param segments Path segments
 * @returns True if the path is absolute
 */
export declare const isAbsolute: (segments: PathSegments) => boolean;
/**
 * Extract filename from the path.
 */
export declare const extractFilename: (path: string) => string;
/**
 * Extract extension from the path.
 */
export declare const extractFileExtension: (path: string) => string;
/**
 * Extract directory from the path.
 */
export declare const extractDirectory: (path: string) => string;
/**
 * Increase an index in the filename.
 */
export declare const incIndexToFilename: (path: string) => string;
