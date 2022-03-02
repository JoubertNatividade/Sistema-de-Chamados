import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";


interface ICreateUserDTO {
    name: string
    code: string
    password: string
}

export class CrateUserUseCase {

    async execute({ name, code, password }: ICreateUserDTO) {
        const userExist = await prisma.user.findFirst({
            where: {
                code: {
                    equals: code,
                    mode: 'insensitive'
                }
            }
        })

        if (userExist) {
            throw new Error('User already exist')
        }

        const passwordHash = await hash(password, 8)

        const user = await prisma.user.create({
            data: {
                name,
                code,
                password: passwordHash
            }
        })

        return user;
    }

}