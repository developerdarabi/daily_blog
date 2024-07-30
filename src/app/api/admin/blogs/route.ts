import { SendResponse } from "@/utils/response";
import { NextRequest } from "next/server";

export function POST(req: NextRequest) {
    return SendResponse(200, 'Created successfully')
}