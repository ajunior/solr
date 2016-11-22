# Apache Solr: Introdução e Instalação

O [Apache Solr](http://lucene.apache.org/solr/) (se pronuncia [Solar](http://www.thefreedictionary.com/solar)), segundo a definição constante no site oficial do projeto, é uma plataforma _open source_ de busca textual, muito popular, desenvolvida sob o [Apache Lucene](http://lucene.apache.org/)(TM).

### Quem está usando Solr

Milhares de empresas usam o Solr para indexar conteúdo, provendo uma poderosa ferramenta de busca ao seus usuários. Entre essas empresas estão gigantes como a Apple, Netflix, Disney, AT&T, CNET, Cisco, AOL, NASA, MTV, Goldman Sachs, Cloudspace, Sears, GameSpot, eHarmony, TicketMaster, The Guardian, eBay, StubHub, IBM, Adobe, Best Buy, DuckDuckGo e o Instagram.

Pela lista, já dá pra ter ideia do nível de qualidade dessa ferramenta, que é desenvolvida em [Java](https://www.oracle.com/java/index.html) e está em sua versão 6.3.0, que foi lançada em 8 de novembro de 2016, conforme a _[release notes](http://lucene.apache.org/solr/news.html)_. Para ver as principais carascteristicas dessa versão são:

### O que eu posso fazer com Solr

Indexar sites inteiros, documentos (PDF, Word, Excel), 

## Instalação

Como é desenvolvido em Java, será preciso instalar o Ambiente de Exucação Java (JRE ou Java Runtime Environment) 1.8 ou superior para que o Solr funcione. A instalação do Solr é bem simples, mas em algumas distribuições Linux instalar o Java pode ser um pouco trabalhoso, portanto, será mostrando como proceder a instalação dessa dependência em 4 distribuições: [CentOS](https://www.centos.org/), [Debian](http://www.debian.org), [Fedora](https://getfedora.org/) e [Ubuntu](http://www.ubuntu.com). Pela facilidade, o processo de instalação no Windows não será demonstrado neste documento.

### Instalando o Java 1.8 no CentOS 7 (1511)

#### Atualizando a distribuição

```bash
$ sudo yum update && yum -y upgrade
```

#### Instalando o JRE

### Instalando o Java 1.8 no Debian 8 (Jessie)

#### Atualizando a distribuição

```bash
$ sudo apt-get update && apt-get upgrade
```

#### Instalando o JRE

### Instalando o Java 1.8 no Fedora 24 (Server)

#### Atualizando a distribuição

```bash
$ sudo dnf update
$ sudo dnf upgrade
```

#### Instalando o JRE

```bash
$ sudo dnf install java-1.8.0-openjdk.x86_64
```

### Instalando o Java 1.8 no Ubuntu 16.10/16.04.1 LTS (Yakkety Yak/Xenial Xerus)

#### Atualizando a distribuição

```bash
$ sudo apt-get update && apt-get upgrade
```

#### Instalando o JRE

```bash
$ sudo apt-get install default-jre
```

_Se quiser suprimir as perguntas de confirmação do gerenciado de pacotes use a opção ```-y```. Exemplo: ```sudo apt-get -y install default-jre``` _

### Verificando a versão do Java

Concluída a instalação, verifique se a versão instalada é igual ou superior a versão mínima exigida. Nesse caso, a versão ```1.8```.

```bash
$ java -version
```

### Instalando o Solr

Após a instalação da dependência, segue o procedimento para instalação da versão 6.3 do Apache Solr.

Não há pacotes da versão 6 do Solr disponíveis nas distribuições, portanto, teremos que baixar e instalar manualmente. Mas não se preocupe, os desenvolvedores do Solr fizeram um excelente trabalho de forma que é extremamente simples proceder com a instalação.

#### Baixando o Solr

```bash
$ sudo wget http://ftp.unicamp.br/pub/apache/lucene/solr/6.3.0/solr-6.3.0.tgz -O /tmp/solr-6.3.0.tgz
```

Com o comando acima, foi instruído ao wget para salvar o arquivo na pasta ```/tmp```.

#### Descompactando

<small>Se você deseja instalar o Solr em um ambiente de produção, veja a seção [Instalando o Solr como serviço](#instalando-o-solr-como-serviço).</small>

```bash
$
```

#### Iniciando o Solr


### Instalando o Solr em ambiente de produção

Para facilitar a vida dos Administradores de Sistemas, o Solr vem com um script que procede a instalação de formar que o Solr funcionará como um serviço.

Após

```bash
tar xzf /tmp/solr-6.3.0.tgz solr-6.3.0/bin/install_solr_service.sh --strip-components=2
```

Se estiver instalando o Solr no Fedora, certifique-se de ter o pacote [lsof](https://admin.fedoraproject.org/pkgdb/package/rpms/lsof/) instalado antes de executar o script de instalação. Para verificar se o lsof está instalado use o comando ```lsof -v```.

```bash
sudo ./install_solr_service.sh /tmp/solr-6.3.0.tgz
```

### Instalação Concluída

Pronto! Se a instalação não retornar nenhum erro, você será capaz de acessar o painel de administração apontando seu navegador para ```http://localhost:8983/solr``` ou ```http://<ip>:8983/solr``` se for acessar externamente.

#### Fedora

O Fedora vem com o [FirewallD](https://fedoraproject.org/wiki/FirewallD) ativado por padrão, então, caso você não consiga acesso externo ao painel de administração, verifique se o firewall está ativado. Se for o caso, você pode desativar ou adicionar excessão(ões) as regras do firewall.

```bash
sudo systemctl stop firewalld
```



#### Como manipular o serviço:

| Comando | Descrição |
| ------- | --------- |
| ```service solr status``` | Verificar o status do serviço. |
| ```service solr start``` | Iniciar o serviço. |
| ```service solr stop``` | Parar o serviço. |
| ```service solr restart``` | Reiniciar o serviço. |

## Indexando PDFs

A indexação de conteúdos é feito pelo programa ```post```, que fica localizado na pasta ```bin```, dentro do diterório do Solr.


