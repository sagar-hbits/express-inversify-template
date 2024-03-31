import "reflect-metadata";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { InversifyExpressServer } from "inversify-express-utils";

import BaseRepository from "./modules/common-module/data/base.repository";
import globalContainerInstance from "./modules/common-module/container/container";
import "./modules/common-module/controllers/base.controller";

BaseRepository.init();

const server = new InversifyExpressServer(globalContainerInstance);

server.setConfig((app) => {
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));
  app.use("/health-check", (req, res) => {
    res.send("OK");
  });
});

const app = server.build();

export default app;
