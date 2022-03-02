import { prisma } from "../../../../database/prismaClient";




export class DeleteCallUseCase {

    async execute(id_call: string) {
        const result = await prisma.call.delete({
            where: {
                id: id_call
            }
        })

        return result;

    }

}