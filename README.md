# Apache Solr: Introdução, Instalação, Indexação e Consultas

O [Apache Solr](http://lucene.apache.org/solr/) (se pronuncia [Solar](http://www.thefreedictionary.com/solar)), segundo a definição constante no site oficial do projeto, é uma plataforma _open source_ de busca textual, muito popular, desenvolvida sob o [Apache Lucene](http://lucene.apache.org/)(TM).

### Quem está usando Solr

Milhares de empresas usam o Solr para indexar conteúdo, provendo uma poderosa ferramenta de busca ao seus usuários. Entre essas empresas estão gigantes como a Apple, Netflix, Disney, AT&T, CNET, Cisco, AOL, NASA, MTV, Goldman Sachs, Cloudspace, Sears, GameSpot, eHarmony, TicketMaster, The Guardian, eBay, StubHub, IBM, Adobe, Best Buy, DuckDuckGo e o Instagram.

Pela lista, já dá pra ter ideia do nível de qualidade dessa ferramenta, que é desenvolvida em [Java](https://www.oracle.com/java/index.html) e está em sua versão 6.3.0, que foi lançada em 8 de novembro de 2016, conforme a _[release notes](http://lucene.apache.org/solr/news.html)_. Para ver as principais carascteristicas dessa versão são:

### O que eu posso fazer com Solr

Basicamente, Solr permite a indexação de documentos que podem ser encontrados mediante a correspondência com uma busca textual, ou como o [Guia de Referência](http://ftp.unicamp.br/pub/apache/lucene/solr/ref-guide/apache-solr-ref-guide-6.3.pdf) diz "O Solr foi criado para localizar documentos que correspondem a consultas." Entre os documentos que podem ser indexado, estão: **xml, json, csv, pdf, doc, docx, ppt, pptx, xls, xlsx, odt, odp, ods, ott, otp, ots, rtf, htm, html, txt
e log**.

### Licença

O Solr é regido pela [Licença Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0), que resumidamente permite o __livre uso, redistribuição e alteração, sem exigência de reciprocidade__.

## Instalação

O Solr pode ser instalado em sistemas GNU/Linux, macOS e Windows. Como é desenvolvido em Java, será preciso instalar o Ambiente de Exucação Java (JRE ou Java Runtime Environment) 1.8 ou superior. A instalação do Solr é bem simples, mas em algumas distribuições GNU/Linux instalar o Java pode ser um pouco trabalhoso, portanto, será mostrando como proceder a instalação dessa dependência em 4 distribuições: [CentOS](https://www.centos.org/), [Debian](http://www.debian.org), [Fedora](https://getfedora.org/) e [Ubuntu](http://www.ubuntu.com). Pela facilidade, o processo de instalação para Windows e macOS não serão demonstrados neste documento.

#### Verificando se o Java está instalado

```bash
$ java -version
```

Se a versão instalada do Java for igual ou superior a versão mínima exigida, avance para a seção [Instalando o Solr](#instalando-o-solr), caso contrário, siga os passos abaixo para instalação do Java, de acordo com a sua distribuição GNU/Linux.

### Instalando o Java 1.8 no CentOS 7 (1511)

```bash
$ sudo yum check-update
$ sudo yum update
$ sudo yum install java-1.8.0-openjdk.x86_64
```

### Instalando o Java 1.8 no Debian 8 (Jessie)

```bash
$ su -c "apt-get update && apt-get upgrade"
$ su -c "echo \"deb http://ftp.br.debian.org/debian jessie-backports main\" >> /etc/apt/sources.list"
$ su -c "apt-get update"
$ su -c "apt-get install openjdk-8-jre"
```

### Instalando o Java 1.8 no Fedora 24 (Server)

```bash
$ sudo dnf update
$ sudo dnf upgrade
$ sudo dnf install java-1.8.0-openjdk.x86_64
```

### Instalando o Java 1.8 no Ubuntu 16.10/16.04.1 LTS (Yakkety Yak/Xenial Xerus)

```bash
$ sudo apt-get update && apt-get upgrade
$ sudo apt-get install default-jre
```

### Instalando o Solr

Não há pacotes da versão 6 do Solr disponíveis nas distribuições, portanto, teremos que baixar e instalar manualmente. Mas não se preocupe, os desenvolvedores do Solr fizeram um excelente trabalho de forma que é extremamente simples proceder com a instalação.

#### Baixando o Solr

```bash
$ sudo wget http://ftp.unicamp.br/pub/apache/lucene/solr/6.3.0/solr-6.3.0.tgz -O /tmp/solr-6.3.0.tgz
```

- Lista de [espelhos](http://www.apache.org/mirrors/) da Apache Foudation.

O arquivo baixado estará salvo na pasta ```/tmp```.

#### Descompactando

<blockquote>Se você deseja instalar o Solr em um ambiente de produção, veja a seção [Instalando o Solr em ambiente de produção](#instalando-o-solr-em-ambiente-de-producao).</blockquote>

```bash
$ tar xzf /tmp/solr-6.3.0.tgz
```

#### Executando o Solr

```bash
$ /tmp/solr-6.3.0/solr start
```

Para testar se o Solr está funcionando, acesse o endereço ```http://localhost:8983/solr/admin/ping```.

### Instalando o Solr em ambiente de produção

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

### Instalação Concluída

Pronto! Se a instalação não retornar nenhum erro, você será capaz de acessar o painel de administração apontando seu navegador para ```http://localhost:8983/solr``` ou ```http://<ip ou domínio>:8983/solr``` se for acessar remotamente o servidor que está hospedando o Solr.

#### Manipular o serviço Solr

| Comando | Descrição |
| ------- | --------- |
| service solr status | Verificar o status do serviço. |
| service solr start | Iniciar o serviço. |
| service solr stop | Parar o serviço. |
| service solr restart | Reiniciar o serviço. |

## Criando Cores

## Indexando documentos

A indexação de conteúdos é feito pelo programa ```post```, que fica localizado na pasta ```bin```, dentro do diterório do Solr.

### PDF, DOC

Indexando um PDF específico:

```bash
$ bin/post -c <corename> <documento>
```

Você também pode indexar todos os PDFs contidos numa pasta:

```bash
$ bin/post -c <corename> <pasta>
```

### Indexando Site

```bash
$ sudo su - solr -c "/opt/solr/bin/solr create -c <corename> -n data_driven_schema_configs"
$ bin/post -c corename <url> -recursive 2 -delay 5
```

## Configurações específicas do TCE-PB

## Troubleshotting

### Firewall

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