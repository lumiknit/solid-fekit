export type HSL = {
    h: number;
    s: number;
    l: number;
};
export declare const RGB2GRAY: (r: number, g: number, b: number) => number;
export declare const HSL2RGB: (h: number, s: number, l: number) => [number, number, number];
export declare const RGB2HSL: (r: number, g: number, b: number) => [number, number, number];
export declare const hslStyle: (h: number, s: number, l: number) => string;
