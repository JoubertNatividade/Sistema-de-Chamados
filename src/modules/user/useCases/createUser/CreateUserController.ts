import { Request, Response } from "express";
import { CrateUserUseCase } from "./CreateUserUseCase";




export class CrateUserController {

    async handle(request: Request, response: Response) {
        const { name, code, password } = request.body;

        const createUserUseCase = new CrateUserUseCase();

        const result = await createUserUseCase.execute({
            name,
            code,
            password
        })

        return response.status(201).json(result)
    }

}