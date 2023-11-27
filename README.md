<h1>controle-estoque</h1>

<h1>Tema: Controle de Produtos/Estoques/Doações</h1>

<h2>Sumário</h2>
<h2>
  <ol>
    <li>Sumário</li>
    <li>Introdução</li>
    <li>Instalação</li>
    <li>Clonar o repositório</li>
    <li>Via Interface Gráfica do GitHub</li>
    <li>Instalando dependências</li>
    <li>Rodar a aplicação</li>
  </ol>
</h2>

<h1>Introdução:</h1>
<p>Este aplicativo de Controle de Estoque foi desenvolvido com o framework typescript. Sua principal função é gerenciar os itens do estoque, permitindo a criação, edição e exclusão de itens.</p>

<h1>Instalação:</h1>

<h2>Tutorial para compilar e executar o sistema</h2>

<h2>Instalando Ferramentas</h2>

<h2>Visual Studio Code:</h2>
<ul>
  <li>Passo 1: Acesse o site oficial do Visual Studio Code em Visual Studio Code - Download.</li>
  <li>Passo 2: Clique no botão "Download for Windows" para baixar o instalador do VS Code.</li>
  <li>Passo 3: Após o download, execute o instalador.</li>
  <li>Passo 4: Siga as instruções do instalador, aceitando os termos de uso e mantendo as opções padrão, a menos que você precise personalizá-las.</li>
  <li>Passo 5: Após a conclusão da instalação, você pode abrir o Visual Studio Code pelo menu Iniciar ou procurando por "Visual Studio Code" na barra de pesquisa.</li>
</ul>

<h2>Yarn:</h2>
<ul>
  <li>Passo 1: Baixe o instalador do Yarn para Windows no site oficial do Yarn: Yarn - Installation</li>
  <li>Passo 2: Após o download, execute o instalador.</li>
  <li>Passo 3: Siga as instruções do instalador, aceitando os termos de uso e mantendo as opções padrão, a menos que você precise personalizá-las.</li>
  <li>Passo 4: Após a conclusão da instalação, você pode verificar se o Yarn foi instalado corretamente abrindo o Prompt de Comando e digitando: <strong>yarn -v</strong></li>
  <li>Passo 5: Após a conclusão da instalação, você pode abrir o Visual Studio Code pelo menu Iniciar ou procurando por "Visual Studio Code" na barra de pesquisa.</li>
</ul>
<p>- Isso deverá exibir a versão do Yarn instalada no seu sistema.</p>

<h2>Node.js:</h2>
<ul>
  <li>Passo 1: Acesse o site oficial do Node.js em Node.js website.</li>
  <li>Passo 2: Na página inicial, clique no botão "Downloads" para baixar o instalador do Node.js.</li>
  <li>Passo 3: Serão oferecidas duas versões para download: LTS (Long-Term Support) e Current. Recomenda-se geralmente a versão LTS para a maioria dos usuários, pois é mais estável e é mantida por um período mais longo.</li>
  <li>Passo 4: Após escolher a versão desejada, baixe o instalador adequado para o seu sistema operacional (32 ou 64 bits).</li>
  <li>Passo 5: Execute o instalador após o download. O instalador do Node.js geralmente inclui o npm (Node Package Manager), que é usado para instalar pacotes adicionais do Node.js.</li>
  <li>Passo 6: Siga as instruções do instalador, aceitando os termos de uso e mantendo as opções padrão, a menos que você precise personalizá-las.</li>
  <li>Passo 7: Após a conclusão da instalação, você pode verificar se o Node.js foi instalado corretamente abrindo o Prompt de Comando e digitando: <strong>node -v</strong></li>
</ul>
<p>- Isso deverá exibir a versão do Node.js instalada no seu sistema. Para verificar a versão do npm, você pode digitar: <strong>npm -v</strong></p>

<h2>Git:</h2>
<ul>
  <li>Passo 1: Baixe o instalador do Git para Windows no site oficial do Git: Git for Windows</li>
  <li>Passo 2: Após o download, execute o instalador.</li>
  <li>Passo 3: Siga as instruções do instalador, aceitando os termos de uso e escolhendo as opções padrão, a menos que você tenha razões específicas para alterá-las.</li>
  <li>Passo 4: Durante a instalação, você terá algumas opções para configurar o Git, como o editor de texto padrão, o PATH do Git, etc. A menos que você saiba exatamente o que está fazendo, as opções padrão devem funcionar bem para a maioria dos usuários.</li>
  <li>Passo 5: Após a conclusão da instalação, abra o "Git Bash" no seu computador. Isso oferecerá uma interface de linha de comando para utilizar o Git.</li>
</ul>

<h2>Clonar o Repositório</h2>

<p>Via Linha de Comando (Terminal ou Prompt de Comando):</p>
<ul>
  <li>Passo 1: Abra o terminal ou prompt de comando no seu computador.</li>
  <li>Passo 2: Navegue até o diretório onde deseja clonar o repositório usando o comando cd (change directory). Por exemplo:<strong>cd caminho/para/a/pasta/de/destino</strong></li>
  <li>Passo 3: No GitHub, vá até o repositório que você deseja clonar e clique no botão "Code". Certifique-se de selecionar o link com HTTPS ou SSH (dependendo das suas permissões de acesso).</li>
  <li>Passo 4: Copie o link fornecido.</li>
  <li>Passo 5: No terminal, use o comando git clone seguido pelo link que você copiou.</li>
</ul>
<p>
  http
  git clone https://github.com/AcacioCacio/controle-estoque.git
  SSH
  git clone git@github.com:AcacioCacio/controle-estoque.git
</p>
<p>
  <ul>
    <li>Isso vai baixar (clonar) o repositório do GitHub para o diretório especificado.</li>
  </ul>
</p>

<h2>Via Interface Gráfica do GitHub:</h2>

<ul>
  <li>Passo 1: Abra o navegador e acesse o repositório que você deseja clonar no GitHub.</li>
  <li>Passo 2: Clique no botão "Code" localizado no canto superior direito do repositório.</li>
  <li>Passo 3: Clique no botão "Open with GitHub Desktop" (ou similar, dependendo do navegador e configurações).</li>
  <li>Passo 4: O GitHub Desktop (se estiver instalado) abrirá e perguntará onde você deseja salvar o repositório. Selecione o local e clique em "Clone".</li>
</ul>
<p>Isso vai baixar o repositório para o seu computador usando a interface gráfica do GitHub Desktop.</p>

<h2>Instalando dependências</h2>
<p>Abra o visual studio code no canto direito em cima na opção “File”. Clique em “Open Folder” e procure a pasta onde foi clonado o repositório e clique em “Abrir”.</p>

<ul>
  <li>Passo 1: Clicando nas teclas Ctrl + ‘ ou na barra de ferramentas a cima clique na opção Terminal e depois new Terminal. Abrindo o Terminal vamos utilizar o comando “cd backend” para abrir a pasta de backend da aplicação.</li>
  <li>Passo 2: Na linha de código vamos escrever o comando “npm install” para instalar as dependências do backend.</li>
  <li>Passo 3: Após instalar as dependências do backend utilizamos o comando “cd ..” para voltar a pasta da aplicação e com o comando “cd frontend” vamos abrir a pasta do frontend da aplicação.</li>
  <li>Passo 4: Na linha de código vamos escrever o comando yarn para instalar as dependências do frontend. Caso haja erro vamos utilizar o comando “npm install –force”.</li>
  <li>Passo 5: Na Pasta do backend vamos renomear .env.example para .env</li>
  <li>Passo 6: Na Pasta do frontend vamos renomear .env.example para .env</li>
</ul>

<h2>Rodar a aplicação</h2>
<ul>
  <li>Passo 1: Novamente no terminal (Tutorial de como abrir o terminal no Passo 1 – Instalando dependências) vamos utilizar o comando “cd backend” e com a pasta do backend aberta vamos utilizar o comando “npx nest start”.</li>
  <li>Passo 2: Abrindo um novo terminal (Tutorial de como abrir o terminal no Passo 1 – Instalando dependências) OBS: devemos ter dois terminais abertos simultâneos. vamos utilizar o comando “cd frontend” e com a pasta do frontend aberta vamos utilizar o comando “npm run start”.</li>
  <li>Passo 3: o Aplicativo irá abrir em nosso navegador.</li>
</ul>
