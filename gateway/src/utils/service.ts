import { Request } from 'express';

export class ApiGateway {
  /**
   * Verify that network request has been authenticated
   * @param req
   */
  static auth(req: Request) {}

  static route() {}
}
