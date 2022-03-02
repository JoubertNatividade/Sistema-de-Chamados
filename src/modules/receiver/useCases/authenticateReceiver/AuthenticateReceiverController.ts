import { Request, Response } from "express";
import { AuthenticateReceiverUseCase } from "./AuthenticateReceiverUseCase";




export class AuthenticateReceiverController {

    async handle(request: Request, response: Response) {
        const { code, password } = request.body;


        const authenticateReceiverUseCase = new AuthenticateReceiverUseCase();

        const result = await authenticateReceiverUseCase.execute(code, password);

        return response.json(result)
    }

}