# Davy Levy — Link in Bio (PRD)

## Problema original
Página "Link in Bio" mobile-first e de alta conversão para o criador Davy Levy.
Home com foto de perfil, redes sociais e CTAs principais (TV Grátis, Mind7, Apps
Renda Extra, Meus Vídeos). Seção `/videos` categorizada em abas temáticas, com
páginas individuais compartilháveis por vídeo (vídeo + ferramentas citadas).
Idioma do usuário: **Português** (responder sempre em PT).

## Arquitetura (frontend estático, sem backend)
```
/app/frontend/src/
├── components/
│   ├── icons/SocialIcons.jsx
│   └── VideoCard.jsx        # card do vídeo: badge de data, botão vídeo,
│                            #   botão "Acessar Ferramentas", tools/PDF
│   └── ui/                  # shadcn
├── data/videos.js           # FONTE ÚNICA de dados (CATEGORIES + helpers)
├── pages/
│   ├── LinkInBio.jsx        # home /
│   ├── Videos.jsx           # /videos (abas por categoria)
│   ├── VideoSingle.jsx      # /:slug  e  /v/:id (página compartilhável)
│   ├── Ferramentas.jsx      # /ferramentas (todas as ferramentas em botões)
│   ├── Apps.jsx / AppsAndroid.jsx / AppsIOS.jsx
└── App.js                   # rotas
public/_redirects            # SPA fallback p/ Netlify (/* /index.html 200)
```

## Modelo de dados (videos.js)
Cada vídeo: `{ id, slug?, date?, title, href, tools:[], pdf? }`
- `slug`: código padronizado da Link-da-Bio `/DDMMAAAAvX` (v1, v2... por dia).
- `date`: data de exibição `DD/MM/AAAA` (badge no card).
- `href`: link do Reel do Instagram; `""` => botão "Vídeo em breve".
- `tools[]`: `{ name, description, href, accent }`.
- `pdf`: `{ label, description, href }` (material passo a passo, não é ferramenta).
Helpers: `findVideoById`, `findVideoBySlug`, `findVideo`, `getToolGroups`.

## Rotas
- `/` home · `/videos` lista · `/ferramentas` pasta de ferramentas
- `/:slug` (ex: `/26062026v1`) e `/v/:id` (legado) → VideoSingle
- `/apps`, `/apps/android`, `/apps/ios`

## Implementado (17/07/2026)
- Cards PDF (WhatsApp amante trancada, modo manutenção) com bloco "Material para baixar".
- Cards de canais (5 canais Parte 2 completa: Gabriel Pato, Curso em Vídeo,
  Mente Binária, Filipe Deschamps, UNIVESP).
- **Tarefa 1+2**: `date` e `slug` padronizado em todos os vídeos; Reels
  integrados nos cards que estavam "em breve"; card do Google renomeado para
  "ATENÇÃO: O GOOGLE GRAVA TUDO O QUE VOCÊ FALA".
- **Tarefa 3**: página `/ferramentas` (botões individuais por link, agrupados por
  vídeo/categoria, com âncora `#id` e scroll suave) + botão "Acessar Ferramentas"
  em cada card que tem ferramentas/PDF.
- `VideoSingle` resolve slug OU id legado; link de compartilhar usa o slug padronizado.
- `public/_redirects` para o Netlify servir as rotas client-side.
- Novo card "5 SITES QUE VÃO FACILITAR A SUA VIDA" (Photopea, TinyWow, CapCut Web,
  Pexels, AlternativeTo) em Truques — "Vídeo em breve", sem data/slug ainda.

## Backlog / P1
- Substituir links de Reel "em breve" quando o usuário publicar (card
  "5 sites que facilitam a vida" e outros que surgirem).
- Definir data/slug do card "5 sites que facilitam a vida" quando publicar.
- Localizar imagens do Google Drive (foto perfil, globo) para `/public`
  (evitar rate limit).
- `grampeado` está sem `date`/`slug` (não estava nas listas do usuário).

## Observações
- Domínio de produção do usuário: davylevy.netlify.app (deploy via Netlify).
- Preview atual: link-in-bio-7.preview.emergentagent.com (ignorar em prod).
