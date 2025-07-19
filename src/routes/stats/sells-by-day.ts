import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";

export async function sellsByDayRoute(app: FastifyTypedInstance) {
	return app.get(
		"/sells-by-day",
		{
			schema: {
				tags: ["Stats"],
				description: "Get sells by day",
				query: z.object({
					date: z.string(),
				}),
				response: {
					202: z.object({
						message: z.string(),
					}),
					401: z.object({
						message: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			return reply.status(202).send({ message: "Hello World" });
		},
	);
}
