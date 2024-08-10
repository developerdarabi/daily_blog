import { blogRepo } from "@/utils/repositories/blog";
import { SendResponse } from "@/utils/api/response";
import { ApiWrapper } from 'UTILS/api';

async function Get() {
    const data = await blogRepo.getAll()
    return SendResponse(200, 'successfully', data)
}

export const GET = ApiWrapper(Get)