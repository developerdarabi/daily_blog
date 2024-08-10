import { ApiWrapper } from "@/utils/api";
import { blogRepo } from "@/utils/repositories/blog";
import { SendResponse } from "@/utils/api/response";
import { NextRequest } from "next/server";

export async function Post(req: NextRequest) {
    const body = await req.json()

    await blogRepo.create({title:body.title,body:body.body})

    return SendResponse(200, 'successfully')
}

export async function Delete(req: NextRequest) {
    const blogId = req.nextUrl.searchParams.get('id')
    
    if(!blogId||Number.isNaN(blogId))return SendResponse(422,'Blog id needed or its not number')

    await blogRepo.delete(Number(blogId))

    return SendResponse(200, 'successfully')
}
export async function Update(req: NextRequest) {
    const blogId = req.nextUrl.searchParams.get('id')
    const blog = await req.json()

    if(!blogId||Number.isNaN(blogId))return SendResponse(422,'Blog id needed or its not number')

    const dd = await blogRepo.update(Number(blogId),blog)
    console.log(dd);
    
    return SendResponse(200, 'successfully')
}

export const POST = ApiWrapper(Post)
export const PATCH = ApiWrapper(Update)
export const DELETE = ApiWrapper(Delete)