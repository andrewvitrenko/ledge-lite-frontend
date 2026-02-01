export type ValueOf<T extends object> = T[keyof T];

declare const __brand: unique symbol;

export type Branded<T, B> = T & { [__brand]: B };

export type BrandId<T extends string> = Branded<string, T>;
