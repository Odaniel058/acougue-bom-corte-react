# Açougue Bom Corte

Trabalho de Desenvolvimento Frontend II, feito com React, Vite e Bootstrap. Reuni as quatro páginas do site anterior em uma página só, mantendo as cores, fontes e imagens.

## Autor

Daniel Rodrigues da Silva.

Fiz o trabalho individualmente, com autorização do professor. Na primeira parte, fui responsável pelo `index.html`, `cortes.html`, `sobre.html` e `contato.html`.

## Links

- [Site no Netlify](https://acouguebomcorte.netlify.app/)
- [Repositório deste trabalho](https://github.com/Odaniel058/acougue-bom-corte-react)
- [Repositório da primeira parte](https://github.com/Odaniel058/Trabalho-Front-ll)
- [Site da primeira parte](https://odaniel058.github.io/Trabalho-Front-ll/)

## Como executar

Com Node.js 24 instalado, abra o terminal na pasta do projeto e execute:

```bash
npm ci
npm run dev
```

Abra o endereço que aparecer no terminal. Para gerar a versão de publicação, use `npm run build`. Os arquivos serão gerados na pasta `dist`.

## Seções e origem

| Seções do site | Página original |
| --- | --- |
| Início, diferenciais e cortes em destaque | index.html |
| História do açougue | sobre.html |
| Catálogo e kits de churrasco | cortes.html |
| Contato, mapa, orientações e dúvidas | contato.html |

Cada seção fica em um componente. Os produtos ficam em uma lista, e o catálogo tem filtro por categoria. Os arquivos originais estão em `referencia-html/`.

## Créditos

Usei [Bootstrap](https://getbootstrap.com/), [Bootstrap Icons](https://icons.getbootstrap.com/) e fontes do Google Fonts. As imagens vieram do projeto anterior e foram geradas com auxílio de IA. Também tive auxílio de IA na migração e revisão do código.
