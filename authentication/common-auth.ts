import * as dotenv from "dotenv";
import http from "../httpsMethods";
import * as payload from "../payload-login";
import endpoints from "../endpoints.json";

dotenv.config();

class CommonAuth {
  private token!: string;

  public getToken() {
    return this.token;
  }

  public async tokenAuth0() {
    const endpoint = endpoints.signin;
    const payloads = payload.signup();
    const res = await http.postNoToken(endpoint, payloads);
    this.token = res.body.access_token;
  }
}
export default CommonAuth;
