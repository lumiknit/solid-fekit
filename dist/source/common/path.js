// path.ts: Path utilities
/**
 * Path separator.
 */
export const PATH_SEPARATOR = '/';
/**
 * Current segments.
 */
export const CURRENT_SEGMENTS = new Set(['.', '']);
/**
 * Parse a path and return segments in canonical form.
 *
 * @param path Path string
 * @param base Base path segments. If it provided, it works as cd in shell.
 */
export const parsePath = (path, base) => {
    const splitted = (base || []).concat(path.split(PATH_SEPARATOR));
    const isRoot = splitted[0] === '';
    if (splitted.length <= 1)
        return ['.'];
    const segments = splitted.filter((s) => !CURRENT_SEGMENTS.has(s));
    // Find root
    for (let p = 0; p < segments.length; p++) {
        if (segments[p] === '..') {
            segments.splice(p - 1, 2);
            p -= 2;
        }
    }
    if (isRoot)
        segments.unshift('');
    return segments;
};
/**
 * Join path segments into a single path string.
 */
export const joinPath = (segments) => segments.join(PATH_SEPARATOR);
/**
 * Check if the path is absolute.
 *
 * @param segments Path segments
 * @returns True if the path is absolute
 */
export const isAbsolute = (segments) => segments[0] === '';
/**
 * Extract filename from the path.
 */
export const extractFilename = (path) => {
    const segments = parsePath(path);
    return segments[segments.length - 1];
};
/**
 * Extract extension from the path.
 */
export const extractFileExtension = (path) => {
    const filename = extractFilename(path);
    const li = filename.lastIndexOf('.');
    if (li === -1)
        return '';
    return filename.slice(li + 1);
};
/**
 * Extract directory from the path.
 */
export const extractDirectory = (path) => {
    const segments = parsePath(path);
    return joinPath(segments.slice(0, -1));
};
/**
 * Increase an index in the filename.
 */
export const incIndexToFilename = (path) => {
    const seg = parsePath(path);
    const filename = extractFilename(path);
    // Split by extension
    let li = filename.lastIndexOf('.');
    if (li < 0)
        li = filename.length;
    const name = filename.slice(0, li);
    const ext = filename.slice(li);
    // Find digits in the name part
    const match = name.match(/([0-9]+)([^0-9]*)$/);
    if (!match)
        return path;
    const num = parseInt(match[1]) + 1;
    const newName = name.slice(0, match.index) + num + match[2] + ext;
    seg[seg.length - 1] = newName;
    return joinPath(seg);
};
