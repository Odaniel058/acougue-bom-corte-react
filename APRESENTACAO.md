# Roteiro para apresentar — 6 minutos

Use como guia de estudo. Pratique falando com suas palavras e mostrando o código.

## 0:00–0:45 — O projeto

Mostre a Home e explique que o Açougue Bom Corte era um site com quatro páginas HTML. Como o trabalho original foi individual e autorizado pelo professor, você reuniu o conteúdo das quatro em uma landing page com React e Vite.

## 0:45–1:30 — Navegação e identidade

Mostre o menu rolando para história, cortes, kits e contato. As cores, fontes e fotografias foram mantidas. Há um único header, footer e h1. Mostre também o menu no celular e o botão de voltar ao topo. A hero mantém a foto atrás do menu, como no site original. O menu fica no início da página e sai da tela durante a rolagem.

## 1:30–2:30 — Componentes e JSX

Abra `src/App.jsx` e `src/pages/LandingPage.jsx`. A primeira organiza o menu, conteúdo e rodapé; a segunda define a ordem das seções.

Abra `src/components/ProductCard.jsx`: ele recebe um produto por props e monta o card. JSX parece HTML, mas permite expressões JavaScript entre chaves. No JSX usamos `className` no lugar de `class`.

## 2:30–3:45 — Listas e estado

Abra `src/data/products.js` e `src/sections/Catalog.jsx`.

- A lista guarda nome, descrição, foto e categoria de cada carne.
- `map()` cria um card para cada produto, sem copiar o mesmo HTML várias vezes.
- `key={product.id}` identifica cada item da lista para o React.
- `useState('todas')` guarda qual categoria está selecionada.
- Ao clicar, `setSelectedCategory` atualiza o estado e o React renderiza o resultado.
- `filter()` escolhe os produtos da categoria. A lista original não é apagada.

Demonstre o filtro funcionando.

## 3:45–4:45 — Responsividade e acessibilidade

Mostre as classes Bootstrap `row`, `col-md-6` e `col-lg-4`: uma coluna no celular, duas em telas médias e três nas grandes.

No CSS, mostre o menu com `position: absolute` no computador e `relative` no celular, além de `scroll-behavior: smooth` e `scroll-margin-top`. Explique o foco visível, os textos alternativos das imagens e a preferência por movimento reduzido.

## 4:45–5:30 — Organização e publicação

Mostre `referencia-html/`, o README e o histórico de commits. Explique que `npm run build` gera `dist`, e que o Netlify publica essa pasta a partir do repositório GitHub. Abra a versão pública em https://acouguebomcorte.netlify.app/.

## 5:30–6:00 — Fechamento e demonstração

Mostre o contato e o mapa. Destaque que os quatro conteúdos continuam disponíveis em uma só página e que o catálogo ganhou filtro. Esteja pronto para explicar qualquer trecho que você mostrar.

## Antes da entrega

- Entregar os links do GitHub e do Netlify que estão no README.
- Conferir a versão publicada em computador e celular.
- Treinar o roteiro com cronômetro.
- Confirmar com o professor o horário limite: o PDF informa 17h e 18h30 em trechos diferentes. Para evitar atraso, usar 17h de 06/10/2026 como referência mais cedo.
