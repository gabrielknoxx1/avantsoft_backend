import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import Fastify from "fastify";
import supertest from "supertest";
import fastifyCookie from "@fastify/cookie";
import { deleteCustomerRoute } from "./";
import { prisma } from "../../../services/database/prisma";

const validCustomerId = "cus_test_123";

vi.mock("../../../services/database/prisma", () => ({
	prisma: {
		customer: {
			delete: vi.fn().mockResolvedValue({ id: validCustomerId }),
		},
	},
}));

describe("DELETE /delete-customer", () => {
	let app: ReturnType<typeof Fastify>;

	beforeAll(async () => {
		app = Fastify();
		await app.register(fastifyCookie);
		await deleteCustomerRoute(app as any);
		await app.ready();
	});

	afterAll(async () => {
		await app.close();
	});

	it("deve retornar 401 se não houver cookie userId", async () => {
		const response = await supertest(app.server)
			.delete("/delete-customer")
			.send({ id: validCustomerId });
		expect(response.status).toBe(401);
		expect(response.body.message).toBe("User not found");
	});

	it("deve retornar 400 se o payload for inválido", async () => {
		const response = await supertest(app.server)
			.delete("/delete-customer")
			.set("Cookie", ["userId=1"])
			.send({});
		expect(response.status).toBe(400);
		expect(response.body.message).toBeDefined();
	});

	it("deve deletar o customer e retornar 202 para payload válido", async () => {
		const response = await supertest(app.server)
			.delete("/delete-customer")
			.set("Cookie", ["userId=1"])
			.send({ id: validCustomerId });
		expect(response.status).toBe(202);
		expect(response.body.message).toBe("Customer deleted");
		expect(prisma.customer.delete).toHaveBeenCalledWith({
			where: { id: validCustomerId },
		});
	});
});
