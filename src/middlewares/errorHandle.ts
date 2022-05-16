import Auth from "./Auth"
export const errorHandle =(ctx?: any, next?: any) => {
    return next().catch((err: any) => {
        console.log(err.message);
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                error: err.originalError ? err.originalError.message : err.message,
            };
        }
        if(err.message === 'Authentication Error') {
            ctx.status = 200;
            ctx.body = {
                code: 401,
                msg: 'token认证失败'
            };
        }
    });
}