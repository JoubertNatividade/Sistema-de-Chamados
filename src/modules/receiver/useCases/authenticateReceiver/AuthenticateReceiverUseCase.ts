import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";


export class AuthenticateReceiverUseCase {
    async execute(code: string, password: string) {

        const receiver = await prisma.receiver.findFirst({
            where: {
                code
            }
        })

        if (!receiver) {
            throw new Error("Code or Password incorrect!")
        }

        const passwordMatch = await compare(password, receiver.password);

        if (!passwordMatch) {
            throw new Error("Code or Password incorrect!")
        }

        const token = sign({
            code
        },
            "ec0eeebfacf6304a260e29559d76f55b",
            { subject: receiver.id, expiresIn: '7d' }
        )

        return token;
    }
}