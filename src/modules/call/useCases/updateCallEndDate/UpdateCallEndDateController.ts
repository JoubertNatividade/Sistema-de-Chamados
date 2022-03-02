import { Request, Response } from "express";
import { UpdateCallEndDateUseCase } from "./UpdateCallEndDateUseCase";




export class UpdateCallEndDateController {


    async handle(request: Request, response: Response) {
        const { id: id_call } = request.params;
        const { id_receiver } = request;

        const updateCallEndDateUseCase = new UpdateCallEndDateUseCase();

        const result = await updateCallEndDateUseCase.execute({
            id_receiver,
            id_call
        })

        return response.json(result)

    }

}