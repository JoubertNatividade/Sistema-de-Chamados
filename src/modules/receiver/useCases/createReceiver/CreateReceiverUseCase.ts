import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateReceiverDTO {
    name: string
    code: string
    password: string,
    admin?: boolean
}




export class CreateReceiverUseCase {

    async execute({ name, code, password, admin = false }: ICreateReceiverDTO) {
        const receiverExist = await prisma.receiver.findFirst({
            where: {
                code: {
                    equals: code,
                    mode: 'insensitive'
                }
            }
        })

        if (receiverExist) {
            throw new Error('User already exist')
        }

        const passwordHash = await hash(password, 8)

        const receiver = await prisma.receiver.create({
            data: {
                name,
                code,
                password: passwordHash,
                admin
            }
        })

        return receiver;
    }

}