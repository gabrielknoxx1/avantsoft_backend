# Avantsoft Backend

## 📋 Descrição

API backend para o projeto Avantsoft, desenvolvida com **Fastify**, **TypeScript**, **Prisma ORM** e **SQLite**. A aplicação oferece funcionalidades de gerenciamento de usuários, clientes e vendas, com documentação automática via Swagger.

## 🚀 Tecnologias

- **[Fastify](https://fastify.dev/)** - Framework web rápido e eficiente
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática
- **[Prisma](https://www.prisma.io/)** - ORM moderno para Node.js e TypeScript
- **[SQLite](https://www.sqlite.org/)** - Banco de dados embutido
- **[Zod](https://zod.dev/)** - Biblioteca de validação de esquemas TypeScript-first
- **[Swagger](https://swagger.io/)** - Documentação automática da API
- **[Vitest](https://vitest.dev/)** - Framework de testes unitários

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **pnpm** (versão 10.12.1 ou superior)

### Instalação do pnpm

```bash
npm install -g pnpm@10.12.1
```

## ⚙️ Configuração do Ambiente

### 1. Clone o repositório

```bash
git clone <https://github.com/gabrielknoxx1/avantsoft_backend.git>
cd avantsoft_backend
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Ambiente de desenvolvimento
NODE_ENV=dev

# Porta do servidor (padrão: 3333)
PORT=3333

# URL do banco de dados SQLite
DATABASE_URL="file:./dev.db"
```

### 4. Configure o banco de dados

Execute as migrações do Prisma para criar o banco de dados:

```bash
pnpm prisma migrate dev
```

### 5. Popule o banco com dados de exemplo (Seeds)

Execute o script de seed para popular o banco com dados iniciais:

```bash
pnpm prisma db seed
```

## 🏃‍♂️ Executando o Projeto

### Modo Desenvolvimento

```bash
pnpm dev
```

O servidor estará disponível em: `http://localhost:3333`

### Documentação da API (Swagger)

Acesse a documentação interativa da API em: `http://localhost:3333/docs`

## 🧪 Testes

### Executar todos os testes

```bash
pnpm test
```

### Executar testes em modo watch

```bash
pnpm test --watch
```

## 🗄️ Banco de Dados

### Estrutura do Banco

O projeto utiliza três principais entidades:

- **User** - Usuários do sistema
- **Customer** - Clientes cadastrados
- **Sell** - Registros de vendas

### Comandos Úteis do Prisma

```bash
# Visualizar o banco de dados no Prisma Studio
pnpm prisma studio

# Resetar o banco de dados
pnpm prisma migrate reset

# Gerar o cliente Prisma após mudanças no schema
pnpm prisma generate

# Aplicar mudanças do schema ao banco
pnpm prisma db push

# Criar uma nova migração
pnpm prisma migrate dev --name nome_da_migracao
```

## 📁 Estrutura do Projeto

```
avantsoft_backend/
├── src/
│   ├── env/            # Configurações de variáveis de ambiente
│   ├── routes/         # Definições das rotas da API
│   ├── schemas/        # Esquemas de validação Zod
│   ├── services/       # Lógica de negócio
│   ├── types.ts        # Definições de tipos TypeScript
│   └── server.ts       # Configuração do servidor Fastify
├── prisma/
│   ├── migrations/     # Migrações do banco de dados
│   ├── schema.prisma   # Schema do banco de dados
│   └── seed.ts         # Script para popular o banco
├── generated/          # Arquivos gerados pelo Prisma
├── package.json
├── tsconfig.json
├── biome.json         # Configuração do linter/formatter
└── README.md
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia o servidor em modo desenvolvimento

# Testes
pnpm test            # Executa os testes

# Banco de dados
pnpm prisma studio   # Abre o Prisma Studio
pnpm prisma migrate dev    # Aplica migrações
pnpm prisma db seed       # Executa o seed
pnpm prisma generate     # Gera o cliente Prisma
```

## 🔧 Configurações Adicionais

### Biome (Linter/Formatter)

O projeto utiliza Biome para linting e formatação. As configurações estão em `biome.json`.

```bash
# Verificar código
pnpm biome check .

# Formatar código
pnpm biome format . --write

# Corrigir problemas de linting
pnpm biome lint . --apply
```

### TypeScript

As configurações do TypeScript estão em `tsconfig.json`.

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro de conexão com o banco**: Verifique se a `DATABASE_URL` está correta no `.env`
2. **Prisma Client não encontrado**: Execute `pnpm prisma generate`
3. **Migrações pendentes**: Execute `pnpm prisma migrate dev`
4. **Porta em uso**: Altere a `PORT` no arquivo `.env`

### Logs de Debug

Para ativar logs detalhados, adicione ao `.env`:

```env
DEBUG=prisma*
```

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Gabriel Sousa**

---

Para mais informações sobre as tecnologias utilizadas, consulte a documentação oficial:
- [Fastify Documentation](https://fastify.dev/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
