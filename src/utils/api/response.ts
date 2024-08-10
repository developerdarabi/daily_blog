import { NextResponse } from "next/server"

export const SendResponse = (statusCode: number, message?: string, data?: any, error?: any) => {
    return NextResponse.json({
        message: message ?? '',
        ...(data ? { data } : {}),
        ...(error ? { error } : {}),
    }, { status: statusCode })
}