# Oldflix

## Link do projeto
 https://site-de-compras.netlify.app/

<img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

![](./assets/img-gif-readme/oldflix-showcase.gif)

![](./assets/img-gif-readme/oldflix-screenshot.png)

Este é um projeto de um site de compras de nome "Compras Online", feito para praticar o CTD (Código Todo Dia). O site contém:

- Uma home com os produtos, a imagem do produto, avaliações, preço e o botão "comprar agora";
- Uma página de formulário para Criação da conta;
- Uma página de formulário para Login na conta.

## Tabela de Conteúdos

- [Meu Processo de Desenvolvimento](#meu-processo-de-desenvolvimento)
- [Recursos Usados](#recursos-usados)
- [Autor do Projeto](#autor-do-projeto)

## Meu processo de Desenvolvimento

Pensei em fazer um site de compras e dei o nome de "Compras Online". Pra me inspirar em como fazer um layout para o site, usei o site da Magazine Luiza (https://www.magazineluiza.com.br/), foi aqui que decidi que o layout do meu site não precisava ser cheio de bordas e detalhes, apenas um design minimalista e com cores simples já era o suficiente. Comecei fazendo a parte do header, pelo fato da logo que criei ter um fundo branco, decidi deixar a parte do header com a cor branca pra combinar e deixar uniforme. Coloquei três opções de links: 

- **Home**: leva à página principal com os produtos do site, como eu me inspirei no site da Magalu, decidi colocar uma variedade de produtos (desde vestuário até eletrodomésticos), usei o site PNGEgg para pegar as imagens em png dos produtos em questão. Adicionei no próprio HTML as estrelas como uma forma de simular as avaliações dos usuários com relação ao produto, e logo abaixo, coloquei o valor dos produtos E logo abaixo do preço, adicionei um botão de "Comprar Agora" responsivo (usei o "hover" e "active" no CSS) e mudei a cor de fundo do botão de preto para azul assim que você passa o mouse por cima, e quando o botão é clicado, mudei a cor do texto de branco pra verde;

- **Criar Conta**: leva a uma outra página para criar sua conta, nessa parte eu não me baseei em outros sites no tocante às informações pedidas para cadastro, apenas coloquei aquilo que me veio à cabeça do que é exigido para criar uma conta em um site de compras (Nome Completo, email, telefone, CPF, data de nascimento, endereço de entrega e um formulário para criar sua senha e repeti-la novamente), e na barra de texto do formulário usei o "placeholder" para mostrar uma sugestão de como inserir as informações requeridas. Assim que você coloca suas informações (usei o "required" no formulário), o botão abaixo leva para a página de Login;

- **Login**: leva à página de Login, onde você coloca seu email e senha (também foi usado o "required" aqui), e quando clica no botão de Login, o usuário é levado à página principal (fiz isso mais como uma simulação, porque pra fazer realmente uma página de Criação de Conta e Login funcionais (com armazenamento de informações, acesso à conta criada, etc.), precisarei muito mais do que HTML e CSS).

Na parte dos produtos, usei como cor de background o cinza claro, pra diferenciar do branco, mas ao mesmo tempo, não agredir aos olhos com uma cor mais forte. E na parte do rodapé, deixei a cor branca assim como no header e adicionei a logo do "Compras Online" novamente junto com um texto, logo abaixo, do copyright da empresa fictícia. Usei a tag "a" para levar o usuário às páginas da "Home", "Criar Conta" e "Login", a página Home te leva às páginas de Criar Contas e Login (além disso, deixei alguns easter-eggs na página Home usando a tag "a", não vou dar spoiler do que é rs. Só pra deixar claro, deixei os easter-eggs por ser um projeto de demonstração, logicamente não faria isso num site de verdade), na página de Criar Conta, o usuário é levado à página de Login (se preenchidas todas as informações), e na página de Login o usuário é levado de volta à página Home (após preenchidas o email e senha). E pra finalizar, adaptei todas as páginas do site para o mobile no CSS usando o "@media screen".

### Recursos Usados

- [PNGEgg](https://www.pngegg.com/pt) - foi o site que utilizei para baixar as imagens PNG para colocar no site de compras.
- [Looka](https://looka.com/) - foi o site que utilizei para fazer a logo "Compras Online".

## Autor do Projeto

- GitHub - [Gabriel-L-Santos](https://github.com/Gabriel-L-Santos)
- LinkedIn - [Gabriel Leme dos Santos](https://www.linkedin.com/in/gabriel-leme-dos-santos/)