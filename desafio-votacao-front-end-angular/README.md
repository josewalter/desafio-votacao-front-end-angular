## Desafio Votação Front End em Angular

Este projeto foi gerado com (Angular CLI versão 18.2.12)
 Vc também vai precisar do (Node js versão 20.15.1),
o NPM estou usando a versão 10.7.0
o Angular/Cli estou usando a versão 18.2.12
mais pode ser qualquer versão superior a essa, bootstrap mais atual. Comando para instalar o angular/cli no Windows, no linux tem que usar o sudo apt caso vc não esteja com o usuário root:(npm install -g @angular/cli) Comando para instalar o node js no Windows, no linux tem que usar o sudo apt caso vc não esteja com o usuário root: install nodejs

## Servidor de desenvolvimento
Execute ng serve para um servidor de desenvolvimento. Navegue até http://localhost:4200/ O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Mais ajuda
Para obter mais ajuda sobre o Angular CLI, use ng help ou confira a página Visão geral e referência de comando do Angular CLI.

## Docker
Comando para gerar o build do docker, vc precisa estar dentro da pasta do projeto:
docker build -t votacao-angular . 

Comando para subir o container:
docker run -p 4200:4200 votacao-angular 
Node versão: 20 e Angular: versão 18

Comando para subir a network com o Front-end:
docker container run -d -p 4200:4200 -e votacao-angular --network votacao-network votacao-angular


