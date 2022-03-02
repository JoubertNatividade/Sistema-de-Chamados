import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";




export class AuthenticateUserUseCase {

    async execute(code: string, password: string) {

        const user = await prisma.user.findFirst({
            where: {
                code
            }
        })

        if (!user) {
            throw new Error("Code or Password incorrect!")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Code or Password incorrect!")
        }

        const token = sign({
            code
        },
            "d81ad03e7d6191e9c039b2cd35ed3039cc8422e2",
            { subject: user.id, expiresIn: '7d' }
        )

        return { user, token };
    }


}