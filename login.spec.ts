import * as dontenv from "dotenv";
import endpoints from "./endpoints.json";
import * as payload from "./payload-login";
import https from "./httpsMethods";

dontenv.config();

describe("desafio", () => {
  it("login", async () => {
    const endpoint = endpoints.signin;
    const payloads = payload.signup();
    const res = await https.postNoToken(endpoint, payloads);
    expect(res.statusCode).toEqual(200);
  });
});
