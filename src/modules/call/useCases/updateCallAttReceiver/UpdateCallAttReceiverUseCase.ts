import { prisma } from "../../../../database/prismaClient";


interface IUpdateReceiver {
    id_call: string;
    id_receiver: string
}


export class UpdateCallAttReceiverUseCase {
    async execute({ id_call, id_receiver }: IUpdateReceiver) {

        const result = await prisma.call.update({
            where: {
                id: id_call
            },
            data: {
                id_receiver,
                status: 'Pendente'
            }
        })

        return result;
    }
}