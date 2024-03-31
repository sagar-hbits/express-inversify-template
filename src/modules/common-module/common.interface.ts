import Joi from "joi";
import AuthToken from "./models/auth-token.model";
import { Prisma, PrismaClient } from "@prisma/client";
import { Container } from "inversify";

export interface ICommonBootstrapper {
  initialize(containerInstance: Container): void;
}

export interface IBaseController {
  extractAndValidate(src: any, schema: Joi.Schema): any;
}

export interface IBaseRepository {
  dsClient: PrismaClient | Prisma.TransactionClient;
}

export interface IJWTHelper {
  generateToken(payload: AuthToken): string;
  verifyToken(token: string): any;
}

export interface IHashHelper {
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hash: string): Promise<boolean>;
}
