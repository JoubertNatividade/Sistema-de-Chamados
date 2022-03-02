import { prisma } from "../../../../database/prismaClient";


interface IUpdateReceiver {
    id_call: string;
    id_receiver: string
}

export class UpdateCallEndDateUseCase {

    async execute({ id_call, id_receiver }: IUpdateReceiver) {
        const result = await prisma.call.updateMany({
            where: {
                id: id_call,
                id_receiver
            },
            data: {
                end_at: new Date(),
                status: 'Concluído'
            }
        })

        return result;
    }

}