import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(400).json({ err: "Token missing!" })
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, 'd81ad03e7d6191e9c039b2cd35ed3039cc8422e2') as IPayload;

        request.user_id = sub;

        return next()
    } catch {
        return response.status(400).json({ err: "Unauthorized!" })
    }
}