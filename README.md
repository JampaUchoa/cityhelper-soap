Serviço SOAP de geocodificação para serviço mobile para o cidadão cadastrar consultas sobre requisições feitas a Prefeitura da Cidade do Recife

## Motivação 
Consulta de geocodificação com a API do Google, no qual não pode ser inserida dentro do front end, pois é possivel que um ator mal intecionado possa pegar nossa chave e gerar consultas como se fosse nossa aplicação, o que geraria um custo adicional.


## Features

* Codificação de endereço para transformar o endereço do usuário em coordenadas (Rua Bom Jesus) -> (-8.08, -34.7)
* Transformação em endereço para obter a localização do usuário e transformar em Rua (-8.08, -34.7) -> (Rua Bom Jesus)

## Executando o projeto 

1. Para que o testar o projeto é necessario estar utilizando o app [da aplicação](https://github.com/JampaUchoa/cityhelper-app)
2. Instalar o [node.js](https://nodejs.org/en/)
3. Instalar as dependecias com `npm install`
4. Obter uma chave de [API de geolocalização](https://console.developers.google.com/apis/credentials)
5. Criar um arquivo `key.json` e colocar a chave no seguinte formato: 
```
{
    "key": "AIdwugGtPfSpHer_rDfPTk"
}
```
7. Executar o projeto com `npm start`, que abrirá o serviço SOAP em [http://localhost:7000](http://localhost:7000)

