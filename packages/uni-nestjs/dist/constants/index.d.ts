export declare enum Method {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
    Patch = "PATCH"
}
export declare const MethodMap: {
    GET: (path?: string | string[]) => MethodDecorator;
    POST: (path?: string | string[]) => MethodDecorator;
    PUT: (path?: string | string[]) => MethodDecorator;
    DELETE: (path?: string | string[]) => MethodDecorator;
    PATCH: (path?: string | string[]) => MethodDecorator;
};
export declare const BUSINESS_HTTP_CODE_KEY = "HttpCode";
export declare const IS_PUBLIC_KEY = "isPublic";
export declare const DEFAULT_PORT = 1118;
