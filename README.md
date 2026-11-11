# Jessica Albuquerque · Corretora de imóveis de alto padrão

Site de página única, estático (HTML, CSS e um arquivo pequeno de JavaScript), publicado na Vercel a partir da pasta `public/`.

## Estrutura

```
public/
  index.html        conteúdo e marcação
  styles.css        todo o visual (fonte Poppins)
  script.js         câmera do scroll, revelações e formulário do WhatsApp
  favicon.svg
  assets/mansao.webp   foto da entrada (1672 x 941), também usada ao fundo do contato
  assets/og.jpg        prévia do link (1200 x 630)
  assets/fonts/        Poppins 300, 400, 500 e 600 (woff2, licença OFL)
vercel.json         publica a pasta public/
PRODUCT.md          contexto do produto (não é publicado)
```

## A entrada

A primeira parte da página é uma cena presa na tela. Conforme o scroll avança, a foto cresce a partir da porta, a folha da porta gira, a luz toma a tela e o visitante cai dentro de uma sala de estar, onde o site começa. Quem usa "reduzir movimento" no sistema, ou navega sem JavaScript, cai direto na sala.

## Visual

Paleta tirada da foto da casa: café quase preto (`#1C1917`), branco quente (`#FAFAF9`), pedra clara (`#F1EEE9`) e um único acento, latão (`#955A06` no claro, `#E4B869` no escuro). Cantos retos, sem sombras nem brilhos. Poppins em tudo: peso 300 nos títulos, 400 no texto e 500 em caixa alta nos rótulos.

Se a foto for trocada, ajuste em `styles.css` a posição da porta (`.cam`, `.vao`, `.folha`) e em `script.js` as constantes `FOTO`, `PORTA_L` e `PORTA_A`.

## O que ainda precisa de dados reais

| Item | Onde trocar |
| --- | --- |
| Número do WhatsApp | `data-whatsapp` no `<body>` de `index.html` e os links `wa.me/5515900000000` (buscar e substituir) |
| CRECI | rodapé de `index.html`, onde está `[a informar]` |
| Fotos das seções | as imagens do Unsplash em `index.html` são ilustrativas |
| Textos | revisar com a Jessica; nenhum número, depoimento ou imóvel real foi inventado |

## Ao alterar o CSS ou o JS

Aumente o número em `styles.css?v=5` e `script.js?v=5` no `index.html`. Isso garante que quem já visitou o site receba os arquivos novos junto com a página nova.

## Rodar localmente

```bash
npx serve public
```

## Publicar

```bash
npx vercel --prod
```
