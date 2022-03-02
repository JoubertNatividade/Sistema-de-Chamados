import { request, Request, Response } from "express";
import { DeleteCallUseCase } from "./DeleteCallUseCase";




export class DeleteCallController {

    async handle(request: Request, response: Response) {

        const { id: id_call } = request.params;


        const deleteCallUseCase = new DeleteCallUseCase();

        await deleteCallUseCase.execute(id_call);

        return response.end()

    }

}