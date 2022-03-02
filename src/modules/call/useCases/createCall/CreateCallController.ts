import { Request, Response } from "express";
import { CreateCallUseCase } from "./CreateCallUseCase";



export class CreateCallController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const { title, topic, description, status } = request.body;

        const createCallUseCase = new CreateCallUseCase();

        const result = await createCallUseCase.execute({
            title,
            topic,
            description,
            id_user: user_id,
            status
        })

        return response.status(201).json(result);
    }
}