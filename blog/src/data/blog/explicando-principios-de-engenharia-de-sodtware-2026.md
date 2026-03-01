---
title: 'Alguns "principios" de engenharia de software'
description: "A proposta desse post é demonstrar alguns principios básicos de engenharia de software na minha opnião, continuam sendo imporantes mesmo na era da IA"
pubDatetime: 2026-03-01T10:00:00Z
tags:
  - software-engineering
  - fundamentals
featured: true
draft: false
---

# Vamos começar pelo básico...

Uma pergunta: por que fazemos software dentro do trabalho?
Minha resposta: para resolver problemas e gerar valor, se puxarmos do empreendedorismo por exemplo podemos dizer que queremos reduzir as dores ou amplificar os ganhos de quem utiliza o software, software sempre é feito para alguém, ele não existe no vácuo, ele possui sua utilidade. Bem, isso dentro do ambiente de trabalho, pois quando falamos de Hobbies essas regras não se aplicam necessáriamente.

Acho que todos concordam que podemos assumir uma premissa importante como verdade, o mundo não é estático, ele está em constante transformação e evolução, o que as pessoas consideravam como “valor” a 20, 10 ou mesmo 5 anos atrás não necessáriamente são as mesmas coisas que as pessoas consideram agora, isso pode ser por termos novos problemas ou até mesmo ser os mesmos problemas porém agora temos maneiras melhores de resolve-los.

Como software é feito para gerar valor e resolver problemas, em um mundo em constante mudança ele consequentemente vai mudar, ele precisa mudar, ou simplesmente ele ficará obsoleto. Exemplos de mudanças: Politicas da empresa mudaram, a empresa que antes era uma startup agora é uma multinacional, o governo mudou uma regra que antes era imperativa para o negócio, uma nova tecnologia surgiu que resolve o problema entregando mais valor, uma nova oportunidade surgiu, um novo tipo de cliente surgiu, os mesmos clientes simplesmente preferem outra solução…. enfim, exemplos é o que não faltam, por isso que software é “soft” e não “hard”.

Ao passar dos anos diversas pessoas passaram por multiplos problemas e perceberam que existem maneiras de resolver ou evitar problemas durante a evolução de um software para gerar cada vez mais valor sem perder a qualidade ao longo do tempo (acho importante ressaltar esse trecho, pois não adianta eu resolver um problema agora, enregar valor sendo que estou criando mais 5 problemas no futuro, lembre-se a unica certeza que temos sobre o software é de que ele vai mudar, não sabemos como ou quando, mas ele vai), e é dai que começam a sugir:

- Principios para design de código, como as sopas de letrinhas: DRY, KISS, YAGNI (passaremos por ele em instantes)...
- Principios mais gerais: Alta coesão e baixo acomplamento, SOLID para orientação a objetos, Ortogonalidade…

Na minha humilde opnião, acredito que todos esses “principios” foram criados para resolver o seguinte pepino: “Como podemos entregar cada vez mais valor ao longo do tempo sem perder a qualidade do sotware? Como eu consigo fazer o software resolver o problema atual, mantendo-o manutenivel e passivel de outras evoluções no futuro?”, além disso, acredito que possamos definir todos esses principios como regras especificas de um principio mais geral, **ETC (Easy to change)**, precisamos deixar o software “fácil de mudar”, como descrito no livro “O programador prágmático”. Por exemplo:

- Por que o DRY (don’t repeat yourself) é importante? Pois assim você evita de ter lógicas duplicadas no código, facilitando mudar a lógica em um local centralizado
- Por que baixo acomplamento é bom? Pois mudanças de um lado do sistema não deveriam impactar (ou impactar o minimo possivel) outras áreas do sistema, facilitando assim a mudança do mesmo

Tendo esse principio maior em mente, acredito que possamos explicar agora alguns conceitos importantes e alguns termos da nossa área

# A famosa sopa de letrinhas

## Ortogonalidade:

É um principio de design onde os componentes do software são independentes entre si, esse termo foi emprestado da geometria, linhas são ortogonais quando ao variarmos um ponto em um determinado eixo, ele não afeta outro ponto em outro eixo

(Variar o valor em t não afeta o valor em r)

Em software poderiamos dizer que alterar um módulo não deveria causar problemas em outros, por exemplo: se minha camada de apresentação ( um frontend, um json, um yaml… ) é alterada, a lógica interna (que gera essas informações) não deveria ser afetada.

### O que seria um sistema não ortogonal?

Imagine a seguinte situação: digamos que você esteja em um passeio de helicoptero, pousando a alguns metros do chão e de repente o piloto passa mal e desmaia, você esta a poucos metros do chão, então basta você acessar o cockpit e abaixar o manche, mas ao fazer isso o helicoptero gira para o lado, para que você desça você precisa além disso, apertar o pedal ao mesmo tempo que ajusta as helices, isso é um sistema não ortognal, mudanças em um ponto do sistema afetam complementamente outras areas do sistema, em um helicóptero “ortogonal” deveriamos conseguir descer ele apenas usando um comando.

A ortogonalidade é apenas um principio e não diz como implementa-lo, para isso alguns exemplos de implementação são:

- Aplicar principios SOLID (Falaremos sobre isso outro dia)
- Evitar variaveis globais: pois não sabemos onde são chamadas ou o que afetam no sistema
- Utilizar interfaces claras e definidas: Eu sei qual é a saida e entrada de um módulo, se sua implementação interna muda, mantendo a interface, nada mais é afetado

## DRY - Don’t repeat yourself

Esse principio diz respeito a evitar duplicação de lógica, quando digo isso vai além do mais óbvio que seria o código, mas vamos aos poucos.

### Duplicação de código

Um exemplo de duplicação é o próprio código e quando eu faço co clássico `ctrl + c` e o `ctrl + v` de uma determinada parte do código em outra, isso é ruim pois digamos que essa lógica tenha mudado, o calculo da taxa de envio de um determinado produto por exemplo, eu precisaria alterar dois ou mais lugares, (isso se eu lembrar ou souber onde alterar) pois em um determinado ponto o calculo será um e em outro ponto do sistema o calculo será outro, de maneira geral, se eu preciso dar `ctrl + f` para encontrar lógica repetida e substituir tá errado.

### Duplicação de lógica

Outro tipo de duplicação é a de lógica digamos que eu tenha dois serviços que se comunicam, como um front e um back ou dois microserviços, onde um exemplo simples seria a ordenação das informações, se eu realizo ela nos dois lados, digamos que a regra de negócio tenha mudado e agora a minha ordenação não é mais decrescente mais sim ascendente, eu precisaria alterar nos dois lados e realizar dois deploys. Ou digamos que as politicas da empresa estejam sendo aplicadas em ambos os lados, eu precisaria novamente alterar nos dois e realizar o deploy dos dois. Acredito que uma boa maneira de saber em que local colocar a lógica corretamente é entendendo o dominio daquela aplicação, isso é determinado por práticas como o DDD, que poderemos falar outro dia.

### Duplicação de APIs

Até mesmo duplicar contratos de APIs é ruim, pois se um serviço muda seu contrato o outro que o consome não saberia dessa informação, atualmente existem bibliotecas para resolver esse problema documentando sua API através de ferramentas como Swagger e da especificação OpenAPI. Podemos deixar o swagger consumir a api e usar bibliotecas para gerar as interfaces de maneira automática para nós Como o [`openapi-typescript`](https://openapi-ts.dev/) para typescript e o [`openapi-python-client`](https://github.com/openapi-generators/openapi-python-client) já criando as tipagens necessárias para acomunicação

## KISS - Keep It Simple Stupid

De maneira geral, queremos resolver o problema atual da maneira mais simples o possivel, porém sem perder a qualidade. Regra básica, qualidade é a possibilidade de evoluirmos a aplicação ao longo do tempo com menos esforço. Faça as seguintes perguntas para garantir a qualidade:

- Eu conseguiria dar manutenção nisso no longo prazo?
- Eu consigo implementar testes isoladamente?
- Eu estou respeitando os outros principios?

## YAGNI - You aren’t gonna need it

Básicamente, “você não vai precisar disso”, a ideia principal disso, foque no agora para resolver o problema atual, mas novamente sem perder a qualidade, não é necessário que eu implemente um Clean arch no dia 0, eu só preciso de um MVP para validar a ideia, mas deve ser possivel eu conseguir refatorar pouco para atingir esse objetivo no dia 100, é muito atrelado ao KISS. Do livro do programador prágmatico podemos vincular a ideia de criar Tracer Bullets, um conceito que explicarei outro dia.

## Alta coesão e baixo acomplamento

A ideia aqui é que minhas lógicas que estão relacionadas fiquem próximas uma das outras, porém que elas tenham poucas dependencias ou modifiquem pouco a lógica externa, um exemplo disso é a utilização de arquiteturas como MVC (Model - View - Controller) onde cada parte é responsável por uma lógica, Model é a camada de dados, responsavel pela conexão com o banco de dados, fontes externas (como APIs), e até mesmo as regras de negócio, o controller só faz o fluxo das informações e a VIew cria as apresentações para o cliente, podendo ser um HTML ou Json.

A regra geral aqui, independente de arquitetura, é que se eu precisar modificar coisas relacionadas a por exemplo o sitema de login, eu deveria encontra-las em um unico local e não espalhada pelo código, além de que o meu sistema de login deveria ser agnótico ao tipo de armazenamento que estou fazendo, não importa se eu uso um NoSQL, um Mysql, um Postgresql ou mesmo uma planilha do sheets, eu deveria conseguir modificar isso sem que o sistema quebre. Para atingirmos isso, na orientação a objetos usamos um conceito chamado de Inversão de dependencia.

# Os principios não se aplicam apenas no dia 0

A ideia aqui é que esses principios sejam seguidos como um objetivo no dia a dia de desenvolvimento, não apenas no dia 0, como o software esta em constante evolução, ele vai mudar, a lógica talvez mude mas os principios continuam os mesmos e aqui acho que vale a pena ressaltar mais um ponto

> Não existe software perfeito

Software nunca estará pronto, ou mesmo finalizado, não existe algo como concluido, então não fique preso a questão de “só vou entregar depois que estiver perfeito”. software só chega ao ponto de resolver o problema atual então sempre teremos que refatorar ou implementar novas features, esses principios nos auxiliam a criar um software onde seja mais fácil de atingirmos esses objetivos, não são regras, são principios, mas segui-los simplesmente ajudará a você mesmo ter menos dor de cabeça no futuro

## E para os finalmentes...

Para finalizar gostaria de abordar uma história, a teoria da janela quebrada:

A Teoria da Janela Quebrada sugere que sinais visíveis de desordem e pequenos delitos — como pichações, sujeira ou uma janela quebrada não reparada — criam um ambiente de impunidade e descaso. Isso incentiva crimes maiores e o vandalismo, indicando que "ninguém se importa" com aquele espaço, gerando um ciclo de degradação social.

Então não deixem janelas quebradas no seu software, não permita isso, viu que tem algo de errado concerte de imediato, seja um escoteiro. Como Uncle Bob disse no livro Clean Code, um escoteiro sempre que monta um acampamento em algum lugar ao sair ele deixa o ambiente mais limpo do que quando chegou.

Não precisa fazer uma refatoração completa do sistema do zero, afinal todos sabemos que existe o famoso prazo, mas faça uma pequena mudança que já melhore o aspecto geral da implementação, pois da mesma forma que uma janela quebrada “atrai” outras janelas quebradas por ninguém se importar, o inverso também é verdade, se uma pessoa encontra um ambiente totalmente limpo e organizado essa pessoa não vai querer ser a primeira a desorganiza-la.

### Tá, mas e a IA nisso tudo?

Sinceramente, acredito que mesmo na era da IA, onde ela pode gerar código de maneira muito mais rápida do que nós (e as vezes até implementações melhores) esses principios continuam sendo fundamentais, pois é **você** que deveria estar no comando, é **você** que terá que concertar qualquer dívida técnica que ela deixe para o futuro, então se ela deixa um código macarrônico que vira uma bomba relógio para daqui a algum tempo, no final das contas quem será responsabilizado sobre isso será **você** e não a IA, ou você acha mesmo que, se der algum problema e o sistema cair em produção, a gerência vai ligar na Anthropic para reclamar? Hoje em dia você não precisa mais literalmente digitar cada caracter do código, mas na minha opnião, você precisa ter **capacidade critica** de conseguir olhar e saber se aquilo faz sentido, se você com **auxilio** IA irão conseguir dar manutenção e continuar gerando valor no longo prazo.

Mas e você, qual é a sua opnião a respeito?
