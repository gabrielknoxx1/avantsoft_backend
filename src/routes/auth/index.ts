import { registerRoute } from "./register";
import { loginRoute } from "./login";
import { forgotPasswordRoute } from "./forgotPass";
import type { FastifyTypedInstance } from "../../types";

export async function authRoutes(app: FastifyTypedInstance) {
	await registerRoute(app);
	await loginRoute(app);
	await forgotPasswordRoute(app);
}
