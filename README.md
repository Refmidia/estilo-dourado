# Fábrica de Estilo - Curso de Barbeiro Profissional

Site institucional do curso de barbeiro profissional da Fábrica de Estilo, com professores japoneses e brasileiros.

## 🚀 Tecnologias

Este projeto foi construído com:

- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **React** - Biblioteca UI
- **shadcn-ui** - Componentes UI
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Router** - Roteamento

## 📦 Instalação

Para instalar e executar o projeto localmente:

```sh
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

## 🌐 Idiomas

O site suporta 3 idiomas:
- 🇧🇷 Português (PT)
- 🇺🇸 Inglês (EN)
- 🇯🇵 Japonês (JA)

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter
- `npm test` - Executa os testes

## 📊 API de Conversão (Meta Pixel + Conversions API)

O site envia conversões de duas formas (podem ser usadas juntas):

| | **Pixel** (navegador) | **Conversions API – CAPI** (servidor) |
|---|---|---|
| Onde | Script no site | Endpoint `/api/conversion` (token só no servidor) |
| Config | `VITE_META_PIXEL_ID` | `META_CAPI_ACCESS_TOKEN` + `META_PIXEL_ID` no servidor |
| Deduplicação | Mesmo `event_id` nos dois → Meta conta 1 evento |

**Eventos enviados:** PageView, Lead (inscrever), Contact (WhatsApp), ViewContent (módulos).

### Só Pixel (rápido)

1. Crie um Pixel no [Gerenciador de Eventos do Meta](https://business.facebook.com/events_manager).
2. No projeto: `.env` com `VITE_META_PIXEL_ID=SEU_PIXEL_ID` (ou em `siteConfig.metaPixelId`).

### Pixel + Conversions API (recomendado pelo Meta)

Além do Pixel, você pode usar o **Access Token** da Conversions API. O token **nunca** vai para o frontend; fica só no servidor.

1. **Token:** Gerenciador de Eventos do Meta → Seu Pixel → Configurações → **Conversions API** → Gerar token de acesso (ou usar um token do tipo “Sistema de usuário” com permissão `ads_management`).
2. **Deploy com API:** use a pasta `api/` como serverless (ex.: Vercel). A rota `POST /api/conversion` já está implementada em `api/conversion.ts`.
3. **Variáveis no servidor** (ex.: Vercel → Settings → Environment Variables):
   - `META_PIXEL_ID` = ID do seu pixel
   - `META_CAPI_ACCESS_TOKEN` = token gerado no passo 1
4. **Frontend:** não precisa configurar URL. O site envia eventos para `/api/conversion` na **mesma origem** (no deploy na Vercel, o mesmo domínio já tem a API).

**Resumo:** O projeto já vem com Pixel ID e, em `.env.local`, com o token da CAPI (o arquivo é ignorado pelo git). Em **produção na Vercel**, é preciso adicionar **uma vez** em Settings → Environment Variables: `META_PIXEL_ID` e `META_CAPI_ACCESS_TOKEN` (os mesmos valores do `.env.local`), porque esse arquivo não é enviado no deploy.

## 🎨 Estrutura do Projeto

```
api/                # Serverless (ex.: Vercel) – Conversions API
├── conversion.ts   # POST /api/conversion → envia eventos para o Meta com o token
src/
├── assets/         # Imagens e recursos estáticos
├── components/     # Componentes React
├── config/         # Configurações do site
├── contexts/       # Contextos React (i18n)
├── hooks/          # Custom hooks
├── i18n/           # Traduções
├── lib/            # Utilitários (incl. conversion.ts – Pixel + chamada à CAPI)
└── pages/          # Páginas do site
```

## 📄 Licença

Todos os direitos reservados - Fábrica de Estilo
