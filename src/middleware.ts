import { NextRequest, NextResponse } from "next/server";
import { middlewares } from "./utils/middlewares";

export const middleware = (req: NextRequest) => {
    const pathname = req.nextUrl.pathname
    const state = pathname.split('/')[1]

    if (state === 'api') {
        return middlewares(req)
    }

    return NextResponse.next()
}