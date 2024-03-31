const typesCommon = {
  //   repositories
  baseRepository: Symbol.for("BaseRepository"),

  //   controllers
  baseController: Symbol.for("BaseController"),

  //   Middlewares
  authMiddleware: Symbol.for("AuthMiddleware"),

  //   helpers
  jwtHelper: Symbol.for("JwtHelper"),
  hashHelper: Symbol.for("HashHelper"),
};

export default typesCommon;
