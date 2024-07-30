import { Validators } from "@/app/validation/validator";
import { NextRequest, NextResponse } from "next/server";
import { SendResponse } from "../response";

export default function UserMiddleware(req: NextRequest) {
    const errors = Validators.UserValidator(req.body);
    if(errors.length!==0){
        return SendResponse(422,'Request body is invalid ')
    }
    return NextResponse.next()
}