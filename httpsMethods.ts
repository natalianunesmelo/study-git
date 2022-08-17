import * as dontenv from "dotenv";
import request from "supertest";

dontenv.config();

class HttpsMethods {
  static postToken(
    endpoint: string,
    payload: object,
    token: string,
    host = process.env.HOST
  ) {
    if (token !== undefined) {
      return request(host)
        .post(endpoint)
        .send(payload)
        .set("Authorization", `JWT ${token}`);
    }
  }
  static postNoToken(
    endpoint: string,
    payload: object,
    host = process.env.HOST
  ) {
    return request(host).post(endpoint).send(payload);
  }

  static async getAuth(
    endpoint: string,
    payload: object,
    host = process.env.HOST
  ) {
    return request(host).get(endpoint).send(payload);
  }
}
export default HttpsMethods;
