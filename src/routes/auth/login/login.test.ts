import { describe, it, expect, vi, beforeEach } from "vitest";
import { loginRoute } from "./index";
import { prisma } from "../../../services/database/prisma";

vi.mock("../../../services/database/prisma", () => ({
	prisma: {
		user: {
			findUnique: vi.fn(),
		},
	},
}));

const getMockReply = () => {
	const reply = {
		status: vi.fn().mockReturnThis(),
		send: vi.fn().mockReturnThis(),
	};
	return reply;
};

const getMockRequest = (body: any) => ({ body });

describe("loginRoute", () => {
	let handler: any;

	beforeEach(async () => {
		// Simula o app Fastify para capturar o handler
		const app = {
			post: vi.fn((_, __, fn) => {
				handler = fn;
			}),
		};
		await loginRoute(app as any);
		vi.clearAllMocks();
	});

	it("deve logar com sucesso", async () => {
		(prisma.user.findUnique as any).mockResolvedValue({
			id: "123",
			email: "a@a.com",
			password: "senha",
		});
		const reply = getMockReply();
		const request = getMockRequest({ email: "a@a.com", password: "senha" });

		await handler(request, reply);

		expect(reply.status).toHaveBeenCalledWith(202);
		expect(reply.send).toHaveBeenCalledWith({ token: "123" });
	});

	it("deve retornar 401 se usuário não encontrado", async () => {
		(prisma.user.findUnique as any).mockResolvedValue(null);
		const reply = getMockReply();
		const request = getMockRequest({
			email: "nao@existe.com",
			password: "senha",
		});

		await handler(request, reply);

		expect(reply.status).toHaveBeenCalledWith(401);
		expect(reply.send).toHaveBeenCalledWith({ message: "User not found" });
	});

	it("deve retornar 401 se senha inválida", async () => {
		(prisma.user.findUnique as any).mockResolvedValue({
			id: "123",
			email: "a@a.com",
			password: "correta",
		});
		const reply = getMockReply();
		const request = getMockRequest({ email: "a@a.com", password: "errada" });

		await handler(request, reply);

		expect(reply.status).toHaveBeenCalledWith(401);
		expect(reply.send).toHaveBeenCalledWith({ message: "Invalid password" });
	});
});
