import type { FastifyTypedInstance } from "../types";
import { authRoutes } from "./auth";
import { customerRoutes } from "./customer";
import { statsRoutes } from "./stats";

export async function routes(app: FastifyTypedInstance) {
	app.register(authRoutes, { prefix: "auth" });
	app.register(customerRoutes, { prefix: "customer" });
	app.register(statsRoutes, { prefix: "stats" });
}
