import { SendResponse } from "@/utils/response";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json()
  cookies().set('refreshToken','AAAAAAAAAA')
  return SendResponse(200,'Welcome ')
}