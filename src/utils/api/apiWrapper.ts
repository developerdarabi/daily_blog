import { NextRequest } from "next/server";
import { db } from "../db";
import { SendResponse } from "./response";

export default function ApiWrapper(handler: any) {
    return async function (req: NextRequest) {
        try {
            if (!db.initialized) {
                await db.initialize();
            }
            return handler(req)
        } catch (error: any) {
            return SendResponse(300, 'Internal server', null, error?.message ?? error)
        }
    }
}