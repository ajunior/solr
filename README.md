# Instruções para instalação, configuração e integração do Apache Solr.

O Apache Solr (se pronuncia Solar), segundo a definição constante no site oficial do projeto, é uma plataforma _open source_ de busca textual, muito popular, desenvolvida sob o Apache Lucene (TM).
Milhares de empresas usam o Solr para indexar conteúdo, provendo uma poderosa ferramenta de busca ao seus usuários. Entre essas empresas estão gigantes como a Apple, Netflix, Disney, AT&T, CNET, Cisco, AOL, NASA, MTV, Goldman Sachs, Cloudspace, Sears, GameSpot, eHarmony, TicketMaster, The Guardian, eBay, StubHub, IBM, Adobe, Best Buy, DuckDuckGo e o Instagram.

## Instalação

Para o funcionamento do Solr, será preciso instalar algumas dependëncias. O Solr é desenvolvido em Java, logo será preciso instalar o Ambiente de Exucação Java (JRE). Também precisaremos de um servidor web baseado em Java, que pode ser o Tomcat ou o Jetty.

Antes de iniciar a instalação do Solr e suas dependências, é importante atualizar o seu sistema.

#### Atualização de sistemas baseados em APT:

```bash
sudo apt-get -y update
sudo apt-get -y upgrade
```

#### Atualização de sistemas baseados em YUM/DNF:

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
wget http://www.us.apache.org/dist/solr/6.0.3/solr-6.0.3.tgz -O /tmp
```

Com o comando acima, foi instruído ao wget para salvar o arquivo na pasta ```/tmp```.

#### Descompactando o script instalador

```bash
tar xzf /tmp/solr-6.0.3.tgz
```

## Indexando PDFs

A indexação de conteúdos é feito pelo programa ```post```, que fica localizado na pasta ```bin```, dentro do diterório do Solr.


