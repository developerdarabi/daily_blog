import { SendResponse } from "@/utils/api/response";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json()
  cookies().delete('refreshToken')
  return SendResponse(200,'See you')
}