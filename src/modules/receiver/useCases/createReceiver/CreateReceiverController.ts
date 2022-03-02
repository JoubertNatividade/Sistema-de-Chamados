import { Request, Response } from "express";
import { CreateReceiverUseCase } from "./CreateReceiverUseCase";


export class CreateReceiverController {

    async handle(request: Request, response: Response) {
        const { name, code, password, admin } = request.body;

        const createReceiverUseCase = new CreateReceiverUseCase();

        const result = await createReceiverUseCase.execute({
            name,
            code,
            password,
            admin
        })

        return response.status(201).json(result)
    }

}