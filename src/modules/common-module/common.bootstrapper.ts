import { Container } from "inversify";
import typesCommon from "./common.types";
import BaseRepository from "./data/base.repository";
import BaseController from "./controllers/base.controller";
import { IBaseController, IBaseRepository } from "./common.interface";

export class CommonBootstrapper {
  static container: Container;

  public static initialize(containerInstance: Container) {
    CommonBootstrapper.container = containerInstance;

    containerInstance
      .bind<IBaseRepository>(typesCommon.baseRepository)
      .to(BaseRepository);

    containerInstance
      .bind<IBaseController>(typesCommon.baseController)
      .to(BaseController);

    // containerInstance.bind(typesCommon.jwtHelper).to(JwtHelper);
    // containerInstance.bind(typesCommon.hashHelper).to(HashHelper);
    // containerInstance.bind(typesCommon.authMiddleware).to(AuthMiddleware);
  }
}
