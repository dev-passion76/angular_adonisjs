import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import LoginValidator from "App/Validators/LoginValidator";
import RegisterValidator from "App/Validators/RegisterValidator";

export default class AuthController {
  public async me({ auth }: HttpContextContract) {
    return auth.user;
  }

  public async register({ request, response }: HttpContextContract) {
    const payload = await request.validate(RegisterValidator);
    await User.create(payload);
    return response.status(200).send({ message: "Register successful" });
  }

  public async login({ auth, request, response }: HttpContextContract) {
    await request.validate(LoginValidator);
    const { email, password } = request.all();
    await auth.use("web").attempt(email, password);

    return response.status(200).send({ message: "Login successful" });
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use("web").logout();
    return response
    .send({ message: "Logout successful" });
  }

  public async users({ response }: HttpContextContract) {
    const users = await User.all();
    return response.status(200).send(users);
  }
}
