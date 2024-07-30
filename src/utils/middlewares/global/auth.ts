import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function checkRefreshToken(req:NextRequest) {

    const refreshToken = cookies().get('refreshToken')
    if(!refreshToken){
        return NextResponse.json({message:'Unauthenticated'},{status:403})
    }
    return NextResponse.next()
}