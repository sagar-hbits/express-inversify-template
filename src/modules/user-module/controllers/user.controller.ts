import { controller } from "inversify-express-utils";

@controller("/users")
export class UserController {
  constructor() {
    // this.userService = CommonBootstrapper.container.get(UserService);
  }

  // public async createUser(req: Request, res: Response) {
  //   const user: User = req.body;
  //   const result = await this.userService.createUser(user);
  //   res.json(result);
  // }

  // public async getUsers(req: Request, res: Response) {
  //   const users = await this.userService.getUsers();
  //   res.json(users);
  // }

  // public async getUser(req: Request, res: Response) {
  //   const id = req.params.id;
  //   const user = await this.userService.getUser(id);
  //   res.json(user);
  // }

  // public async updateUser(req: Request, res: Response) {
  //   const user: User = req.body;
  //   const result = await this.userService.updateUser(user);
  //   res.json(result);
  // }

  // public async deleteUser(req: Request, res: Response) {
  //   const id = req.params.id;
  //   const result = await this.userService.deleteUser(id);
  //   res.json(result);
  // }
}
