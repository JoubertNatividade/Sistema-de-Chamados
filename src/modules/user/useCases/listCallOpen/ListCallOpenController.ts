import { Request, Response } from "express";
import { ListCallOpenUseCase } from "./ListCallOpenUseCase";





export class ListCallOpenController {

    async handle(request: Request, response: Response) {
        const { user_id } = request

        const listCallOpenUseCase = new ListCallOpenUseCase();

        const result = await listCallOpenUseCase.execute(user_id);

        return response.json(result)
    }


}


