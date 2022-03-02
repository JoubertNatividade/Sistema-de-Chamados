import { Request, Response } from "express";
import { FindAvailableUseCase } from "./FindAvailableUseCase";

export class FindAvailableController {

    async handle(request: Request, response: Response) {

        const findAvailableUseCase = new FindAvailableUseCase()

        const result = await findAvailableUseCase.execute()
        return response.json(result);
    }

}