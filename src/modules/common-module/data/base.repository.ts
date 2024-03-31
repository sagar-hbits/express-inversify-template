import { Prisma, PrismaClient } from "@prisma/client";
import { injectable, unmanaged } from "inversify";
import { IBaseRepository } from "../common.interface";

@injectable()
export default class BaseRepository implements IBaseRepository {
  private static initialize: boolean;
  private static prisma: PrismaClient;

  public dsClient: PrismaClient | Prisma.TransactionClient;

  constructor(dsClient: PrismaClient | Prisma.TransactionClient) {
    this.dsClient = dsClient ?? BaseRepository.prisma;
  }

  public static init() {
    if (BaseRepository.initialize) return;

    BaseRepository.initialize = true;
    BaseRepository.prisma = new PrismaClient();
  }
}
