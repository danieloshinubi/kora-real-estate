declare module "cookie" {
  interface CookieParseOptions {
    decode?: (value: string) => string;
  }

  interface CookieSerializeOptions {
    domain?: string;
    encode?: (value: string) => string;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    path?: string;
    sameSite?: boolean | "lax" | "strict" | "none";
    secure?: boolean;
  }

  export function parse(
    str: string,
    options?: CookieParseOptions
  ): Record<string, string>;
  export function serialize(
    name: string,
    value: string,
    options?: CookieSerializeOptions
  ): string;
}
