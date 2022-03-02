import { prisma } from "../../../../database/prismaClient";






export class ListCallOpenUseCase {


    async execute(user_id: string) {
        const result = await prisma.user.findMany({
            where: {
                id: user_id
            },
            select: {
                Call: true
            }
        })

        return result
    }

}