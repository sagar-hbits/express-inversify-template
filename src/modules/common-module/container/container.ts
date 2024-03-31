import { Container } from "inversify";
import { CommonBootstrapper } from "../common.bootstrapper";

const globalContainerInstance = new Container();
CommonBootstrapper.initialize(globalContainerInstance);

export default globalContainerInstance;
