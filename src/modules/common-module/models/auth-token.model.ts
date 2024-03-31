export default class AuthToken {
  private email: string;
  private userId: string;
  private expiresIn: number;

  constructor(email: string, userId: string, expiresIn: number) {
    this.email = email;
    this.userId = userId;
    this.expiresIn = expiresIn;
  }
}
