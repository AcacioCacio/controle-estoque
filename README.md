# controle-estoque

Controle de Produtos/Estoques/Doações

Tutorial para compilar e executar o sistema

Instalando Ferramentas

Visual Studio Code:
Passo 1: Acesse o site oficial do Visual Studio Code em Visual Studio Code - Download.
Passo 2: Clique no botão "Download for Windows" para baixar o instalador do VS Code.
Passo 3: Após o download, execute o instalador.
Passo 4: Siga as instruções do instalador, aceitando os termos de uso e mantendo as opções padrão, a menos que você precise personalizá-las.
Passo 5: Após a conclusão da instalação, você pode abrir o Visual Studio Code pelo menu Iniciar ou procurando por "Visual Studio Code" na barra de pesquisa.

Yarn:
Passo 1: Baixe o instalador do Yarn para Windows no site oficial do Yarn: Yarn - Installation
Passo 2: Após o download, execute o instalador.
Passo 3: Siga as instruções do instalador, aceitando os termos de uso e mantendo as opções padrão, a menos que você precise personalizá-las.
Passo 4: Após a conclusão da instalação, você pode verificar se o Yarn foi instalado corretamente abrindo o Prompt de Comando e digitando:
yarn -v
Isso deverá exibir a versão do Yarn instalada no seu sistema.

Node.js:
Passo 1: Acesse o site oficial do Node.js em Node.js website.
Passo 2: Na página inicial, clique no botão "Downloads" para baixar o instalador do Node.js.
Passo 3: Serão oferecidas duas versões para download: LTS (Long-Term Support) e Current. Recomenda-se geralmente a versão LTS para a maioria dos usuários, pois é mais estável e é mantida por um período mais longo.
Passo 4: Após escolher a versão desejada, baixe o instalador adequado para o seu sistema operacional (32 ou 64 bits).
Passo 5: Execute o instalador após o download. O instalador do Node.js geralmente inclui o npm (Node Package Manager), que é usado para instalar pacotes adicionais do Node.js.
Passo 6: Siga as instruções do instalador, aceitando os termos de uso e mantendo as opções padrão, a menos que você precise personalizá-las.
Passo 7: Após a conclusão da instalação, você pode verificar se o Node.js foi instalado corretamente abrindo o Prompt de Comando e digitando:
node -v
Isso deverá exibir a versão do Node.js instalada no seu sistema. Para verificar a versão do npm, você pode digitar:
npm -v

Git:
Passo 1: Baixe o instalador do Git para Windows no site oficial do Git: Git for Windows
Passo 2: Após o download, execute o instalador.
Passo 3: Siga as instruções do instalador, aceitando os termos de uso e escolhendo as opções padrão, a menos que você tenha razões específicas para alterá-las.
Passo 4: Durante a instalação, você terá algumas opções para configurar o Git, como o editor de texto padrão, o PATH do Git, etc. A menos que você saiba exatamente o que está fazendo, as opções padrão devem funcionar bem para a maioria dos usuários.
Passo 5: Após a conclusão da instalação, abra o "Git Bash" no seu computador. Isso oferecerá uma interface de linha de comando para utilizar o Git.

Clonar o Repositório

Via Linha de Comando (Terminal ou Prompt de Comando):
Passo 1: Abra o terminal ou prompt de comando no seu computador.
Passo 2: Navegue até o diretório onde deseja clonar o repositório usando o comando cd (change directory). Por exemplo:
cd caminho/para/a/pasta/de/destino
Passo 3: No GitHub, vá até o repositório que você deseja clonar e clique no botão "Code". Certifique-se de selecionar o link com HTTPS ou SSH (dependendo das suas permissões de acesso).
Passo 4: Copie o link fornecido.
Passo 5: No terminal, use o comando git clone seguido pelo link que você copiou.
http
git clone https://github.com/AcacioCacio/controle-estoque.git
SSH
git clone git@github.com:AcacioCacio/controle-estoque.git
Isso vai baixar (clonar) o repositório do GitHub para o diretório especificado.

Via Interface Gráfica do GitHub:
Passo 1: Abra o navegador e acesse o repositório que você deseja clonar no GitHub.
Passo 2: Clique no botão "Code" localizado no canto superior direito do repositório.
Passo 3: Clique no botão "Open with GitHub Desktop" (ou similar, dependendo do navegador e configurações).
Passo 4: O GitHub Desktop (se estiver instalado) abrirá e perguntará onde você deseja salvar o repositório. Selecione o local e clique em "Clone".
Isso vai baixar o repositório para o seu computador usando a interface gráfica do GitHub Desktop.

Instalando dependências

Abra o visual studio code no canto direito em cima na opção “File”. Clique em “Open Folder” e procure a pasta onde foi clonado o repositório e clique em “Abrir”.

Passo 1: Clicando nas teclas Ctrl + ‘ ou na barra de ferramentas a cima clique na opção Terminal e depois new Terminal. Abrindo o Terminal vamos utilizar o comando “cd backend” para abrir a pasta de backend da aplicação.
Passo 2: Na linha de código vamos escrever o comando “npm install” para instalar as dependências do backend.
Passo 3: Após instalar as dependências do backend utilizamos o comando “cd ..” para voltar a pasta da aplicação e com o comando “cd frontend” vamos abrir a pasta do frontend da aplicação.
Passo 4: Na linha de código vamos escrever o comando yarn para instalar as dependências do frontend. Caso haja erro vamos utilizar o comando “npm install –force”.
Passo 5: Na Pasta do backend vamos renomear .env.example para .env
Passo 6: Na Pasta do frontend vamos renomear .env.example para .env

Rodar a aplicação

Passo 1: Novamente no terminal (Tutorial de como abrir o terminal no Passo 1 – Instalando dependências) vamos utilizar o comando “cd backend” e com a pasta do backend aberta vamos utilizar o comando “npx nest start”.
Passo 2: Abrindo um novo terminal (Tutorial de como abrir o terminal no Passo 1 – Instalando dependências) OBS: devemos ter dois terminais abertos simultâneos. vamos utilizar o comando “cd frontend” e com a pasta do frontend aberta vamos utilizar o comando “npm run start”.
Passo 3: o Aplicativo irá abrir em nosso navegador.
