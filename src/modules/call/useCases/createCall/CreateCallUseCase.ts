import { prisma } from "../../../../database/prismaClient";


interface ICreateCall {
    title: string
    topic: string
    description: string,
    id_user: string,
    status?: string
}


export class CreateCallUseCase {
    async execute({ title, topic, description, id_user, status = "Em aberto" }: ICreateCall) {
        const call = await prisma.call.create({
            data: {
                title,
                topic,
                description,
                id_user,
                status
            }
        })

        return call;
    }
}