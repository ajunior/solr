# Apache Solr: Introdução, Instalação, Indexação e Consultas

O [Apache Solr](http://lucene.apache.org/solr/) (se pronuncia [Solar](http://www.thefreedictionary.com/solar)), segundo a definição constante no site oficial do projeto, é uma plataforma _open source_ de busca textual, muito popular, desenvolvida sob a biblioteca [Apache Lucene](http://lucene.apache.org/)(TM).

Basicamente, o Solr permite a indexação de documentos que podem ser encontrados mediante a correspondência com uma busca textual, ou como o [Guia de Referência](https://www.apache.org/dyn/closer.cgi/lucene/solr/ref-guide/apache-solr-ref-guide-6.3.pdf) diz "O Solr foi criado para localizar documentos que correspondem a consultas." Entre os documentos que podem ser indexado, estão: **xml, json, csv, pdf, doc, docx, ppt, pptx, xls, xlsx, odt, odp, ods, ott, otp, ots, rtf, htm, html, txt e log**.

Solr é responsável por potencializar o mecanismo de buscas de muitos dos maiores sites da Internet.

### Quem está usando Solr

Milhares de empresas usam o Solr para indexar conteúdo, provendo uma poderosa ferramenta de busca ao seus usuários. Entre essas empresas estão gigantes como a **Apple, Netflix, Disney, AT&T, CNET, Cisco, AOL, NASA, MTV, Goldman Sachs, Cloudspace, Sears, GameSpot, eHarmony, TicketMaster, The Guardian, eBay, StubHub, IBM, Adobe, Best Buy, DuckDuckGo e o Instagram**. Pelas empresas citadas, já dá pra ter ideia do nível de qualidade dessa ferramenta. Veja a [lista completa]().

### Principais caracteristicas

Solr é desenvolvida em [Java](https://www.oracle.com/java/index.html) e está em sua versão [6.3.0](http://www-us.apache.org/dist/lucene/solr/6.3.0), que foi lançada em 8 de novembro de 2016, conforme a _[nota de lançamento](http://lucene.apache.org/solr/news.html)_. As principais características incluem uma poderosa busca textual, hit highlighting, faceted search and analytics, rich document parsing, busca geoespacial, extensive REST APIs as well as parallel SQL. Solr is enterprise grade, seguro e altamente escalável, providing fault tolerant distributed search and indexing, and powers the search and navigation features of many of the world's largest internet sites.

### Alternativas

Existem algumas alternativas ao Solr, mas a principal é o [ElasticSearch](https://www.elastic.co/), que também é desenvolvido sob a biblioteca Lucene.

### Licença

O Solr é regido pela [Licença Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0), que resumidamente permite o **livre uso, redistribuição e alteração, sem exigência de reciprocidade**.

Lista de Conteúdo
======

* [Instalação](#instalacao)
    * [Verificando se o Java está instalado](#verificando-se-o-java-esta-instalado)
    * [Instalando o Java no CentOS](#instalando-o-java-no-centos)
    * [Instalando o Java no Debian](#instalando-o-java-no-debian)
    * [Instalando o Java no Fedora](#instalando-o-java-no-fedora)
    * [Instalando o Java no Ubuntu](#instalando-o-java-no-ubuntu)
    * [Instalando o Solr](#instalando-o-solr)
        * [Baixando](#baixando-o-solr)
        * [Descompactando](#descompactando)
        * [Executando](#executando)
    * [Instalando o Solr em ambiente de produção](#instalando-o-solr-em-ambiente-de-producao)
        * [Instalação concluída](#instalacao-concluida)
        * [Manipulando o serviço](#manipulando-o-servico)
    * [Instalando o Solr via Vagrant](#instalando-o-solr-via-vagrant)
* [Terminologia](#terminologia)
    * [Query](#query)
* [Criando, alterando e deletando Cores](#criando-alterando-e-deletando-cores)
* [Sobre esta Documentação](#sobre-esta-documentacao)
    * [Como contribuir](#como-contribuir)
    * [Referências Bibliográficas](#referencias-bibliograficas)
    * [Notas de Copyright](#notas-de-copyright)

# Instalação

O Solr pode ser instalado em sistemas GNU/Linux, macOS e Windows. Como é desenvolvido em Java, será preciso instalar o Ambiente de Exucação Java (JRE ou Java Runtime Environment) **1.8 ou superior**. A instalação do Solr é bem simples, mas em algumas distribuições GNU/Linux instalar o Java pode ser um pouco trabalhoso, portanto, será mostrando como proceder a instalação dessa dependência em 4 distribuições: [CentOS](https://www.centos.org/), [Debian](http://www.debian.org), [Fedora](https://getfedora.org/) e [Ubuntu](http://www.ubuntu.com). Pela facilidade, o processo de instalação para Windows e macOS não serão demonstrados neste documento.

## Verificando se o Java está instalado

```bash
$ java -version
```

Se a versão instalada do Java for igual ou superior a versão mínima exigida, avance para a seção [Instalando o Solr](#instalando-o-solr), caso contrário, siga os passos abaixo para instalação do Java, de acordo com a sua distribuição GNU/Linux.

## Instalando o Java no CentOS

**Versão: 7 (1511)**

```bash
$ sudo yum check-update
$ sudo yum update
$ sudo yum install java-1.8.0-openjdk.x86_64
```

### Instalando o Java no Debian

**Versão: 8.6 (Jessie)**

```bash
$ su -c "apt-get update && apt-get upgrade"
$ su -c "echo \"deb http://ftp.br.debian.org/debian jessie-backports main\" >> /etc/apt/sources.list"
$ su -c "apt-get update"
$ su -c "apt-get install openjdk-8-jre"
```

### Instalando o Java no Fedora

**Versão: 24 (Server)**

```bash
$ sudo dnf update
$ sudo dnf upgrade
$ sudo dnf install java-1.8.0-openjdk.x86_64
```

### Instalando o Java no Ubuntu

**Versão: 16.10 (Yakkety Yak) e 16.04.1 LTS (Xenial Xerus)**

```bash
$ sudo apt-get update && apt-get upgrade
$ sudo apt-get install default-jre
```

## Instalando o Solr

Não há pacotes da versão 6 do Solr disponíveis nas distribuições, portanto, teremos que baixar e instalar manualmente. Mas não se preocupe, os desenvolvedores do Solr fizeram um excelente trabalho de forma que é extremamente simples proceder com a instalação.

### Baixando

```bash
$ sudo wget http://ftp.unicamp.br/pub/apache/lucene/solr/6.3.0/solr-6.3.0.tgz -O /tmp/solr-6.3.0.tgz
```

Lista completa de [espelhos](http://www.apache.org/mirrors/) da Apache Software Foudation.

O arquivo baixado estará salvo na pasta ```/tmp```.

### Descompactando

**OBS:** Se você deseja instalar o Solr em um ambiente de produção, veja a seção [Instalando o Solr em ambiente de produção](#instalando-o-solr-em-ambiente-de-producao).

```bash
$ tar xzf /tmp/solr-6.3.0.tgz
```

### Executando

```bash
$ /tmp/solr-6.3.0/solr start
```

Por padrão, o Solr utiliza a porta 8983, no entanto, pode-se especificar uma outra porta usando o parametro ```-p``` na inicialização.

```bash
$ /tmp/solr-6.3.0/solr start -p <nova porta>
```

Para testar se o Solr está funcionando, acesse o endereço ```http://localhost:8983/solr/admin/ping```.

## Instalando o Solr em ambiente de produção

Para facilitar a vida dos Administradores de Sistemas, o Solr vem com um script que procede a instalação dele como um serviço.
Após baixar o Solr, descompacte o script instalador e o execute.

```bash
$ tar xzf /tmp/solr-6.3.0.tgz solr-6.3.0/bin/install_solr_service.sh --strip-components=2
$ sudo ./install_solr_service.sh /tmp/solr-6.3.0.tgz
```

**OBS:** Se estiver instalando o Solr no **Fedora** ou no **CentOS**, certifique-se de ter o pacote [lsof](https://admin.fedoraproject.org/pkgdb/package/rpms/lsof/) instalado antes de executar o script de instalação. Para verificar se o ```lsof``` já está instalado use o comando ```lsof -v```. Caso precise instalar o pacote, use ```$ sudo yum install lsof``` para instalá-lo no CentOS ou ```$ sudo dnf install lsof``` para instalá-lo no Fedora.

No caso deste tipo de instalação, após a conclusão pode-se excluir o arquivo baixado e a pasta criada pelo processo de descompactação.

```bash
$ rm /tmp/solr-6.3.0.tgz
$ rm -rf /tmp/solr-6.3.0.tgz
```

### Instalação concluída

Pronto! Se a instalação não retornar nenhum erro, você será capaz de acessar o painel de administração apontando seu navegador para ```http://localhost:8983/solr``` ou ```http://<ip ou domínio>:8983/solr``` se for acessar remotamente o servidor que está hospedando o Solr.

### Manipulando o serviço

Uma vez que foi instalado como um serviço, você pode manipular a execução do Solr, pelo terminal, como qualquer outro serviço, podendo iniciar, parar, reinicar e verificar seu status, conforme os comandos abaixo relacionados:

| Comando | Descrição |
| ------- | --------- |
| service solr start | Iniciar o serviço. |
| service solr stop | Parar o serviço. |
| service solr restart | Reiniciar o serviço. |
| service solr status | Verificar o status do serviço. |

## Instalando o Solr via Vagrant

Para abstrair o processo de instalação e partir direto para prática, você pode criar uma Máquina Virtual com o [Vagrant](http://vagrantup.com), usando esse [Vangrantfile](http://github.com/ajunior/solr/blob/master/vagrant/Vagrantfile), que resultará numa instalação automatizada de um sistema GNU/Linux (Ubuntu 16.04 - Xenial Xerus) com a versão mais recente do Solr devidamente instalada e pronta pra uso.

Para acessar a interface web de administração do Solr, acesse [http://localhost:8983/solr](http://localhost:8983/solr), de qualquer navegador.

## Terminologia

O Solr traz consigo alguns termos desconhecidos para quem não está habituado com sistemas indexadores e buscadores de informações. Por isso, é necessário entender esses termos antes de prosseguir com as configurações, indexação de documentos e realização de consultas.

### Indexar

É um dos processos mais básicos e importantes do Solr. Indexar é o processo de adicionar conteúdo ao Solr, tornando-o pesquisável.

### Query

### Hit highlighting

### Facet

### Relevance (Relevância)

## Criando, alterando e deletando Cores

## Indexando documentos

A indexação de conteúdos é feito pelo programa ```post```, que fica localizado na pasta ```bin```, dentro do diterório do Solr.

### PDF, DOC

A indexação de documentos de formato rico, tais como PDF, RTF, DOC etc, o Solr utiliza outra ferramenta da Apache Software Foundation, o [Tika]().
Indexando um PDF específico:

```bash
$ bin/post -c <corename> <documento>
```

Você também pode indexar todos os documentos contidos numa pasta:

```bash
$ bin/post -c <corename> <pasta>
```

### Indexando Site

Uma das habilidades do Solr é indexar sites.

```bash
$ sudo su - solr -c "/opt/solr/bin/solr create -c <corename> -n data_driven_schema_configs"
$ bin/post -c corename <url> -recursive 2 -delay 5
```

## Consultas

## Configurações específicas do TCE-PB

# Troubleshotting

## Firewall

O Fedora vem com o [FirewallD](https://fedoraproject.org/wiki/FirewallD) ativado por padrão, então, caso você não consiga acesso externo ao painel de administração, verifique se o firewall está ativado. Se for o caso, você pode desativá-lo ou adicionar excessão(ões) as regras do firewall.

```bash
sudo systemctl stop firewalld
```

### Proxy

Caso esteja usando Proxy, talvez seja necessário configurar as informações referentes ao proxy nos arquivos de configuração do ```gerenciador de pacotes``` e do ```wget```. Veja abaixo onde encontrar esses arquivos.

- __apt__  - ```/etc/apt/apt.conf```
- __dnf__  - ```/etc/dnf/dnf.conf```
- __wget__ - ```/etc/wgetrc```
- __yum__  - ```/etc/yum.conf```

```bash
$ export http_proxy=<ip>:<porta>
$ export https_proxy=<ip>:<porta>
$ export ftp_proxy=<ip>:<porta>
```

# Sobre esta documentação

**É importante ressaltar que esta não é uma documentação oficial sobre o Apache Solr e nem intenciona ser.**

Ao me deparar, na instituição pública na qual estou estagiando, com a tarefa de implemntar o Apache Solr para melhorar as bucas no site e documentos gerados pela instituição, como Diário Oficial Eletrônico e Atos Normativos, comecei a pesquisar pelo termo, que até então desconhecia. Tudo que eu achava pertinente, seja teórico ou prático, durante meu aprendizado, fui anotando para não me perder em meio a tantas fontes de informações. Então, diante da realidade que há pouquissíma documentação sobre o Solr em Português e da elevada quantidade de material que eu tinha escrito, resolvi reescrever esse conteúdo de forma organizada e disponibilizá-lo no meu GitHub, pois pode vir a contribuir para o aprendizado de outros interessados.

## Como contribuir

É de grande valia qualquer contribuição que possa tornar esse manual melhor. Então, se você tem algum conhecimento teórico ou prático que possa enriquecer essa documentação ou quer corrigir alguma informação incorreta, não se acanhe, *fork* este repositório, faça as devidas alterações e mande um *Pull Request*, que eu vou analisar e, se possível, aceitá-lo. Correções ortográficas ou outras correções menores, bem como dúvidas e sugestões, devem ser enviadas via [issue track](https://github.com/ajunior/solr/issues/).

## Referências Bibliográficas

- [Solr Reference Guide 6.3](https://archive.apache.org/dist/lucene/solr/ref-guide/apache-solr-ref-guide-6.3.pdf)
- HowToForge

## Notas de Copyright

    Copyright (c) 2016-2017, Adjamilton Junior. Essa documentação é regida sob a licença GPLv3.
    
    Lucene é marca registrada da Apache Foundation. Java é marca registrada da Oracle Inc. macOs e Windows são marcas registradas de seus respectivos proprietários.
