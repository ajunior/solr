# Instruções para instalação, configuração e integração do Apache Solr.

O Apache Solr (se pronuncia Solar), segundo a definição constante no site oficial do projeto, é uma plataforma _open source_ de busca textual, muito popular, desenvolvida sob o Apache Lucene (TM).

Milhares de empresas usam o Solr para indexar conteúdo, provendo uma poderosa ferramenta de busca ao seus usuários. Entre essas empresas estão gigantes como a Apple, Netflix, Disney, AT&T, CNET, Cisco, AOL, NASA, MTV, Goldman Sachs, Cloudspace, Sears, GameSpot, eHarmony, TicketMaster, The Guardian, eBay, StubHub, IBM, Adobe, Best Buy, DuckDuckGo e o Instagram.

O Solr é desenvolvido em [Java](https://www.oracle.com/java/index.html) e está em sua versão 6.3.0. Para ver as principais carascteristicas dessa versão são:

## Instalação

Para o funcionamento do Solr, será preciso instalar algumas dependëncias. O Solr é desenvolvido em Java, logo será preciso instalar o Ambiente de Exucação Java (JRE). Também precisaremos de um servidor web baseado em Java, que pode ser o Tomcat ou o Jetty.

### Atualizando o Sistema Operacional

Antes de iniciar o processo de instalação em sí, é importante atualizar o seu sistema para garantir que ele seja capaz de instalar as versões mais atuais do aplicativos necessários para o funcionamento do Solr.

#### 1.1.1 Atualização de sistemas baseados em APT

Instalando o Java 1.8 no Ubuntu 16.10 ():

```bash
$ sudo apt-get -y update && apt-get -y upgrade
$ sudo apt-get -y install default-jre
```

Verificando a versão instalada:

```bash
$ java -version
```


Debian:

```bash
su -c "apt-get update &&  apt-get -y upgrade"
wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u111-b14/jdk-8u111-linux-x64.tar.gz"

```

#### 1.1.2 Atualização de sistemas baseados em YUM/DNF

```bash
sudo yum update
sudo yum upgrade
```

ou

```bash
sudo dnf update
sudo dnf upgrade
```

### Ubuntu 16.04 / Debian 8

#### Instalando o Java Runtime Enviroment 1.8

```bash
sudo apt-get install default-jre
```

#### Instalando o Tomcat 8

```bash
sudo apt-get install tomcat8
```

#### Baixando o Solr

Não há pacotes da versão 6 do Solr disponíveis nas distribuições, portanto, teremos que baixar e instalar manualmente.

#### Baixando o Solr

```bash
sudo wget http://ftp.unicamp.br/pub/apache/lucene/solr/6.3.0/solr-6.3.0.tgz -O /tmp/solr-6.3.0.tgz
```

Com o comando acima, foi instruído ao wget para salvar o arquivo na pasta ```/tmp```.

#### Descompactando o script instalador

```bash
tar xzf solr-6.3.0.tgz solr-6.3.0/bin/install_solr_service.sh --strip-components=2
```

```bash
sudo ./install_solr_service.sh /tmp/solr-6.3.0.tgz
```

Pronto! Se a instalação não retornar nenhum erro, você será capaz de acessar o painel de administração apontando seu navegador para ```http://localhost:8983/```.

Como manipular o serviço:

| Comando | Descrição |
| ------- | --------- |
| ```service solr status``` | Verificar o status do serviço. |
| ```service solr start``` | Iniciar o serviço. |
| ```service solr stop``` | Parar o serviço. |
| ```service solr restart``` | Reiniciar o serviço. |

## Indexando PDFs

A indexação de conteúdos é feito pelo programa ```post```, que fica localizado na pasta ```bin```, dentro do diterório do Solr.


