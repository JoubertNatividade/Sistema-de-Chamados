import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export async function ensureAuthenticateReceiver
    (
        request: Request,
        response: Response,
        next: NextFunction
    ) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(400).json({ err: "Token missing!" })
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, 'ec0eeebfacf6304a260e29559d76f55b') as IPayload;

        request.id_receiver = sub;

        return next()
    } catch {
        return response.status(400).json({ err: "Unauthorized!" })
    }
}