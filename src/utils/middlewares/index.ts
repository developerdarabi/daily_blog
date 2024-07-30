import { NextRequest, NextResponse } from "next/server";
import { composeMiddlewares } from "./composeMiddlewares";
import { checkRefreshToken } from "./global/auth";
import UserMiddleware from "./user";

export function middlewares(req: NextRequest) {
    const pathname = req.nextUrl.pathname
    const state = pathname.split('/')[2]

    if (state === 'admin') {
        return composeMiddlewares([checkRefreshToken])(req)
    }

    if (state === 'user') {
        return composeMiddlewares([UserMiddleware])(req)
    }

    return NextResponse.next()

}