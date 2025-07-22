import { prisma } from "../src/services/database/prisma";

async function seed() {
	await prisma.user.create({
		data: {
			name: "Johnqq Doe",
			email: "john222@gmail.com",
			password: "12345678",
			confirmPassword: "12345678",
		},
	});

	await prisma.customer.createMany({
		data: [
			{
				id: "9e8e61aa-065c-44f5-86b2-735d14c72358",
				razaoSocial: "Empresa ABC Ltda",
				email: "contato@empresaabc.com.br",
				cnpj: "12345678000199",
				phone: "11987654321",
				address: "Rua das Flores, 123 - São Paulo/SP",
				description: "Empresa especializada em tecnologia",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "1eb7f637-0d38-431d-ae16-7a70fb3be3e6",
				razaoSocial: "Tech Solutions Ltda",
				email: "vendas@techsolutions.com.br",
				cnpj: "98765432000188",
				phone: "11976543210",
				address: "Av. Paulista, 1000 - São Paulo/SP",
				description: "Soluções em software e consultoria",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "dddaeaff-5873-45c8-bec4-04631c15722e",
				razaoSocial: "Inovação Digital S.A.",
				email: "contato@inovacaodigital.com.br",
				cnpj: "11223344000177",
				phone: "11965432109",
				address: "Rua da Inovação, 456 - Rio de Janeiro/RJ",
				description: "Transformação digital para empresas",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "6746ff62-5af2-42e4-a555-1a4ded63a790",
				razaoSocial: "Comercial Norte Ltda",
				email: "comercial@norte.com.br",
				cnpj: "22334455000166",
				phone: "11954321098",
				address: "Rua do Comércio, 789 - Belo Horizonte/MG",
				description: "Distribuição de produtos eletrônicos",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "92f498c2-d8f3-4c24-bd2e-1ab77fb5a32f",
				razaoSocial: "Serviços Sul Eireli",
				email: "atendimento@servicossul.com.br",
				cnpj: "33445566000155",
				phone: "11943210987",
				address: "Av. Brasil, 2000 - Porto Alegre/RS",
				description: "Prestação de serviços especializados",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "b24daf95-475a-4a0f-8f32-7d3c0fd74ba6",
				razaoSocial: "Construção & Cia Ltda",
				email: "obras@construcaoecia.com.br",
				cnpj: "44556677000144",
				phone: "11932109876",
				address: "Rua dos Construtores, 300 - Salvador/BA",
				description: "Construção civil e reformas",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "bb808cc2-7116-42bb-a515-83da4489a3fb",
				razaoSocial: "Alimentícia Brasil S.A.",
				email: "vendas@alimenticiabrasil.com.br",
				cnpj: "55667788000133",
				phone: "11921098765",
				address: "Estrada Industrial, 1500 - Curitiba/PR",
				description: "Indústria de alimentos processados",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "1b7b213a-a551-426c-a9cc-723144e0f34e",
				razaoSocial: "Logística Express Ltda",
				email: "operacoes@logisticaexpress.com.br",
				cnpj: "66778899000122",
				phone: "11910987654",
				address: "Rodovia dos Transportes, Km 50 - Recife/PE",
				description: "Transporte e logística nacional",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "8b1345e2-ac95-4ce6-be4b-7f7bca77734e",
				razaoSocial: "Consultoria Estratégica Ltda",
				email: "consultores@estrategica.com.br",
				cnpj: "77889900000111",
				phone: "11909876543",
				address: "Torre Empresarial, 25º andar - Fortaleza/CE",
				description: "Consultoria empresarial e estratégica",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "bc122b92-1036-428f-b70d-d70f104cb3a0",
				razaoSocial: "Varejo Moderno S.A.",
				email: "loja@varejomoderno.com.br",
				cnpj: "88990011000100",
				phone: "11898765432",
				address: "Shopping Center, Loja 45 - Brasília/DF",
				description: "Rede de varejo em expansão",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "db84da5f-120a-4925-a8a7-57c80764b3cc",
				razaoSocial: "Energia Renovável Ltda",
				email: "projetos@energiarenovavel.com.br",
				cnpj: "99001122000199",
				phone: "11887654321",
				address: "Parque Tecnológico, Bloco C - Florianópolis/SC",
				description: "Soluções em energia solar e eólica",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
			{
				id: "cfabe2ce-49d7-4b19-8145-e05748ceb36e",
				razaoSocial: "Educação Futuro Eireli",
				email: "coordenacao@educacaofuturo.com.br",
				cnpj: "00112233000188",
				phone: "11876543210",
				address: "Campus Universitário, Prédio 10 - Goiânia/GO",
				description: "Instituição de ensino técnico e superior",
				userId: "99a71efa-85c4-4055-a695-3c3d1f087683",
			},
		],
	});

	await prisma.sell.createMany({
		data: [
			{
				customerId: "6746ff62-5af2-42e4-a555-1a4ded63a790",
				sellDate: new Date("2024-01-15"),
				totalValue: 15750.0,
			},
			{
				customerId: "6746ff62-5af2-42e4-a555-1a4ded63a790",
				sellDate: new Date("2024-01-15"),
				totalValue: 28900.5,
			},
			{
				customerId: "6746ff62-5af2-42e4-a555-1a4ded63a790",
				sellDate: new Date("2024-03-10"),
				totalValue: 45200.75,
			},
			{
				customerId: "6746ff62-5af2-42e4-a555-1a4ded63a790",
				sellDate: new Date("2024-04-05"),
				totalValue: 12300.25,
			},
			{
				customerId: "bc122b92-1036-428f-b70d-d70f104cb3a0",
				sellDate: new Date("2024-05-18"),
				totalValue: 67800.0,
			},
			{
				customerId: "b24daf95-475a-4a0f-8f32-7d3c0fd74ba6",
				sellDate: new Date("2024-06-22"),
				totalValue: 33450.8,
			},
			{
				customerId: "b24daf95-475a-4a0f-8f32-7d3c0fd74ba6",
				sellDate: new Date("2024-07-30"),
				totalValue: 89200.4,
			},
			{
				customerId: "1b7b213a-a551-426c-a9cc-723144e0f34e",
				sellDate: new Date("2024-08-12"),
				totalValue: 54600.9,
			},
		],
	});
}

seed().then(() => {
	console.log("DB Seeded");

	prisma.$disconnect();
});
