# Açougue Bom Corte — React

Landing page do trabalho final de Front-end, feita com React, Vite e Bootstrap 5.3.8. As quatro páginas do projeto anterior foram reunidas em uma página na rota `/`.

## Autor e origem

- **Autor:** Daniel Rodrigues da Silva — [Odaniel058](https://github.com/Odaniel058).
- **Trabalho individual:** as quatro páginas originais foram desenvolvidas pelo aluno, com autorização do professor para fazer o trabalho sozinho.
- **Repositório original:** https://github.com/Odaniel058/Trabalho-Front-ll
- **Site original:** https://odaniel058.github.io/Trabalho-Front-ll/
- **Novo repositório público:** pendente de criação e publicação no GitHub.
- **Site no Netlify:** pendente de conexão do novo repositório e publicação.

Preencher os dois links pendentes acima antes da entrega. Este é um projeto acadêmico: história, horários e dados de atendimento foram mantidos do exercício original e não representam uma operação comercial verificada. O Instagram leva à página geral da plataforma.

## Como rodar

Use Node.js 24 e npm. Na pasta do projeto:

```bash
npm ci
npm run dev
```

Abra o endereço mostrado pelo Vite no terminal. O React deve ser aberto pelo servidor, não clicando duas vezes no HTML.

Para conferir o código e gerar a versão de produção:

```bash
npm run lint
npm run build
npm run preview
```

## Como as páginas foram reunidas

| Arquivo original | Conteúdo na landing | Componentes |
| --- | --- | --- |
| index.html | Hero, faixa de diferenciais e cortes em destaque | Hero, Benefits, Highlights |
| sobre.html | História completa; também recebe a introdução da Home | About |
| cortes.html | 14 carnes, filtro de categorias e 2 kits | Catalog, Kits, ProductCard |
| contato.html | Endereço, telefone, horários, retirada, delivery, mapa, orientações e dúvidas | Contact, Location, ContactGuide, FAQ, FinalCTA |

O menu usa as âncoras `#inicio`, `#sobre`, `#cortes`, `#kits` e `#contato`. Existe um único menu principal, um único rodapé e um único h1. O cabeçalho fica fixo durante a rolagem; `scroll-margin-top` deixa espaço acima das seções. A rolagem suave respeita a preferência por movimento reduzido.

## Organização

- `src/App.jsx`: estrutura geral da aplicação.
- `src/pages/LandingPage.jsx`: ordem das seções.
- `src/components/`: menu, rodapé, card, links sociais e botão de voltar ao topo.
- `src/sections/`: componentes de cada seção.
- `src/data/`: listas de produtos, kits, perguntas, história e dados de contato.
- `src/style.css`: cores, fontes e estilos reaproveitados, com ajustes para a página única.
- `public/images/`: fotos WebP e ícones SVG utilizados pelo React.
- `referencia-html/`: cópia das quatro páginas originais, CSS e imagens, preservada para comparação. Não entra na pasta de publicação.
- `netlify.toml`: comando de build, pasta de publicação e versão do Node.

O catálogo usa `useState` para guardar a categoria selecionada, `filter()` para selecionar as carnes e `map()` para renderizar os cards. O menu mobile também usa `useState`. A FAQ utiliza o elemento nativo `details`. O JavaScript do Bootstrap não é necessário: a abertura do menu é controlada pelo React.

As fotos, a paleta escura, as fontes Montserrat e Playfair Display e o conteúdo foram reaproveitados. Os links entre páginas viraram âncoras; cabeçalhos e rodapés repetidos foram removidos. O endereço do mapa e do link externo vem da mesma variável.

## Publicação no GitHub e Netlify

1. Crie um **novo repositório público e vazio** no GitHub. Não inicialize com README ou outros arquivos, pois este projeto já tem histórico Git.
2. No terminal desta pasta, execute os comandos abaixo substituindo `NOME-DO-NOVO-REPOSITORIO` pelo nome escolhido:

```bash
git remote add origin https://github.com/Odaniel058/NOME-DO-NOVO-REPOSITORIO.git
git push -u origin main
```

3. No Netlify, importe o novo repositório do GitHub. O arquivo `netlify.toml` configura `npm run build` e a pasta `dist`.
4. Abra a URL publicada, confira o menu, as fotos, os filtros e o mapa no computador e no celular.
5. Atualize os links deste README e faça um novo commit antes de enviar a atividade.

Envie pelo Git para preservar os commits incrementais. Não envie `node_modules` nem `dist`; o Netlify instala as dependências e gera o site. A versão antiga permanece no repositório anterior.

## Conferência

- Lint e build de produção, também executados em um clone local limpo com `npm ci`.
- Preview de produção conferido no navegador, incluindo teclado, Escape no menu e movimento reduzido.
- Um h1, um menu principal e um rodapé; sem IDs duplicados ou links para os antigos HTMLs.
- Telas de 320, 390, 768 e 1440 px sem rolagem horizontal.
- Menu mobile, navegação por âncoras e botão de voltar ao topo.
- Filtros: 6 bovinas, 4 suínas, 4 aves, 14 na opção Todas.
- 2 kits, carregamento das imagens e FAQ.
- Mesmo endereço no iframe do mapa e no link do Google Maps.

O mapa, as fontes, o WhatsApp e o Instagram dependem de serviços externos. Os links de atendimento são demonstrativos; os testes não enviam mensagens ou pedidos.

## Créditos

Bootstrap e seus ícones SVG: https://getbootstrap.com/ e https://icons.getbootstrap.com/.
Fontes: Google Fonts. Fotografias reaproveitadas do projeto acadêmico anterior, geradas com auxílio de IA.
A migração teve auxílio de IA; o aluno deve revisar, compreender e conseguir explicar o código.

Veja também [o roteiro de apresentação](APRESENTACAO.md).
