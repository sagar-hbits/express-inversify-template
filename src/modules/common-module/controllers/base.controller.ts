import { injectable } from "inversify";
import Joi from "joi";
import { IBaseController } from "../common.interface";
import { controller } from "inversify-express-utils";

// @injectable()
@controller("/api")
export default class BaseController implements IBaseController {
  public extractAndValidate(src: any, schema: Joi.Schema) {
    const { error, value } = schema.validate(src);
    if (error) {
      throw new Error(error?.message);
    }
    return value;
  }
}
