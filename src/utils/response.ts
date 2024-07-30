import { NextResponse } from "next/server"

export const SendResponse = (statusCode: number, message?: string) => {
    return NextResponse.json({ message: message ?? '' }, { status: statusCode })
}