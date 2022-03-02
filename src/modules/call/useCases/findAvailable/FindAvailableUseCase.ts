import { prisma } from "../../../../database/prismaClient";



export class FindAvailableUseCase {

    async execute() {
        const result = await prisma.call.findMany({
            where: {
                id_receiver: null,
                end_at: null
            }
        })

        return result;
    }

}