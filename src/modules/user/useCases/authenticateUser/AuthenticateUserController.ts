import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";




export class AuthenticateUserController {

    async handle(request: Request, response: Response) {
        const { code, password } = request.body;


        const authenticateUserUseCase = new AuthenticateUserUseCase();

        const result = await authenticateUserUseCase.execute(code, password);

        return response.json(result)
    }

}