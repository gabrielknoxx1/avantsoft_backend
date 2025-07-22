import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";
import { prisma } from "../../services/database/prisma";
import {
	sellsByDayQueryDefaultSchema,
	sellsByDayQuerySchema,
	sellsByDayResponseSchema,
} from "../../schemas/stats/sells-by-day";

export async function sellsByDayRoute(app: FastifyTypedInstance) {
	return app.get(
		"/sells-by-day",
		{
			schema: {
				tags: ["Stats"],
				description: "Get sells by day",
				response: {
					202: sellsByDayResponseSchema,
					401: sellsByDayQueryDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			if (!request.cookies.userId) {
				return reply.status(401).send({ message: "User not found" });
			}

			const sells = await prisma.sell.groupBy({
				by: ["sellDate"],

				_sum: {
					totalValue: true,
				},
				_count: {
					sellDate: true,
				},
				orderBy: {
					sellDate: "desc",
				},
			});
			console.log("🚀 ~ sells:", sells);
			return reply.status(202).send({
				data: sells.map((sell) => ({
					date: sell.sellDate,
					sellsQuantity: sell._count.sellDate,
					sellsValue: sell._sum.totalValue || 0,
				})),
			});
		},
	);
}
