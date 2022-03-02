import { Request, Response } from "express";
import { UpdateCallAttReceiverUseCase } from "./UpdateCallAttReceiverUseCase";


export class UpdateCallAttReceiverController {

    async handle(request: Request, response: Response) {

        const { id_receiver } = request;
        const { id: id_call } = request.params;


        const updateCallAttReiceiverUseCase = new UpdateCallAttReceiverUseCase();

        const result = await updateCallAttReiceiverUseCase.execute({
            id_receiver,
            id_call
        })

        return response.json(result)
    }
}