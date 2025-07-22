import { describe, it, expect } from "vitest";
import { registerSchema } from "../../../schemas/auth/register";

// Dados válidos
const validData = {
	name: "Usuário Teste",
	email: "usuario@teste.com",
	password: "senhaSegura123",
	confirmPassword: "senhaSegura123",
};

describe("registerSchema", () => {
	it("deve aceitar dados válidos", () => {
		const result = registerSchema.safeParse(validData);
		expect(result.success).toBe(true);
	});

	it("deve aceitar senhas diferentes (schema não valida igualdade)", () => {
		const result = registerSchema.safeParse({
			...validData,
			confirmPassword: "diferente123",
		});
		// O schema aceita, pois não valida igualdade entre password e confirmPassword
		expect(result.success).toBe(true);
	});

	it("deve rejeitar email inválido", () => {
		const result = registerSchema.safeParse({
			...validData,
			email: "email-invalido",
		});
		expect(result.success).toBe(false);
		expect(result.error?.issues[0].message).toMatch(/email/);
	});

	it("deve rejeitar senha curta", () => {
		const result = registerSchema.safeParse({
			...validData,
			password: "123",
			confirmPassword: "123",
		});
		expect(result.success).toBe(false);
		expect(result.error?.issues[0].message).toMatch(/8/);
	});

	it("deve rejeitar ausência de campos obrigatórios", () => {
		const result = registerSchema.safeParse({});
		expect(result.success).toBe(false);
		expect(result.error?.issues.length).toBeGreaterThan(0);
	});
});
