# imagem do mysql com configurações e estrutura do banco pronto para execução
FROM mysql:latest
# volume criado com link para pasta externa ao docker, necessario criar caminho se sua máquina não tiver
VOLUME [ "/var/lib/mysql", "/var/lib/mysql"]
# porta que será exposta, porta padrão, para conectar será utilizado a 3306
EXPOSE 3306 33060
# Variaveis de ambiente para inicializar o banco de dados, normalmente, as senhas ficam no configmap ou secrets
# fora da imagem, e referenciadas aqui;
# usuario para o backend se conectar, ou ides
ENV MYSQL_USER=dbusermicro
# senha do usuario dbusermicro 
ENV MYSQL_PASSWORD=aulamicro2023
# essa variavel ja instancia um banco de dados com o nome aula micro
ENV MYSQL_DATABASE=aula-micro
# senha do usuario padrao root
ENV MYSQL_ROOT_PASSWORD=a1a2a3a4
# comando que copia o arquivo com os dados pré-criados para gerar a tabela e alguns dados
COPY ./criar_tabela.sql /docker-entrypoint-initdb.d/