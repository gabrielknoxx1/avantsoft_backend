import { loginRoute } from "./login";
import { registerRoute } from "./register";
import type { FastifyTypedInstance } from "../../types";

export async function authRoutes(app: FastifyTypedInstance) {
	await registerRoute(app);
	await loginRoute(app);
}
