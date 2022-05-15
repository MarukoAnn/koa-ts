// import { Promise } from "bluebird";

import  *  as  jwt  from  'jsonwebtoken';
const secret = 'secret'
const expiresIn = 1000000
const AUTHORIZATION = 'token'

export default class Auth {
    public sign(ctx: any, info: any): string {
        const token = jwt.sign(info || {name: 'name'}, secret, {expiresIn})
        ctx.set(AUTHORIZATION, `${token}`)
        ctx.cookies.set('token', token, {
            maxAge: expiresIn,
            httpOnly: true
        })
        return token
    }
}
