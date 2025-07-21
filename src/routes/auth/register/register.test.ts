import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { registerRoute } from "./";
import { prisma } from "../../../services/database/prisma";

// Mock do prisma
vi.mock("../../../services/database/prisma", () => ({
	prisma: {
		user: {
			create: vi.fn(),
		},
	},
}));

const getMockReply = () => {
	const reply: any = {
		status: vi.fn().mockReturnThis(),
		send: vi.fn().mockReturnThis(),
	};
	return reply;
};

describe("registerRoute", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("deve registrar usuário com sucesso", async () => {
		const mockRequest = {
			body: {
				name: "Usuário Teste",
				email: "teste@email.com",
				password: "senha123",
				confirmPassword: "senha123",
			},
		} as any;
		const reply = getMockReply();
		(prisma.user.create as any).mockResolvedValueOnce({ id: "1" });

		// Simula Fastify app.post
		let handler: any;
		const app = {
			post: (_: any, __: any, h: any) => {
				handler = h;
			},
		} as any;
		await registerRoute(app);
		await handler(mockRequest, reply);

		expect(prisma.user.create).toHaveBeenCalledWith({
			data: {
				name: "Usuário Teste",
				email: "teste@email.com",
				password: "senha123",
				confirmPassword: "senha123",
			},
		});
		expect(reply.status).toHaveBeenCalledWith(202);
		expect(reply.send).toHaveBeenCalledWith({
			message: "User registered successfully",
		});
	});

	it("deve retornar erro se as senhas não coincidirem", async () => {
		const mockRequest = {
			body: {
				name: "Usuário Teste",
				email: "teste@email.com",
				password: "senha123",
				confirmPassword: "diferente",
			},
		} as any;
		const reply = getMockReply();

		let handler: any;
		const app = {
			post: (_: any, __: any, h: any) => {
				handler = h;
			},
		} as any;
		await registerRoute(app);
		await handler(mockRequest, reply);

		expect(prisma.user.create).not.toHaveBeenCalled();
		expect(reply.status).toHaveBeenCalledWith(400);
		expect(reply.send).toHaveBeenCalledWith({
			message: "Passwords do not match",
		});
	});
});
