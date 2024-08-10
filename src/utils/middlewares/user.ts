import { userValidators } from "@/app/validation/user";
import { NextRequest, NextResponse } from "next/server";
import { SendResponse } from "../api/response";

export default async function UserMiddleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname
    const state = pathname.split('/')[3]
    const body = await req.json()

    if (state === 'login') {
        const errors = userValidators.LoginValidator(body);
        if (errors.length !== 0) {
            return SendResponse(422, 'Request body is invalid ')
        }
        return NextResponse.next()
    }
    return NextResponse.next()
}