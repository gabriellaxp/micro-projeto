# Mini Curso Micros projetos 

Criando aplicaçoes rápidas com algumas configurações de integração, 
Utilizando angular, java e mysql neste exemplo.

## Banco de Dados mysql com docker

Normalmente voce terá uma máquina dedicada para o banco de dados, porém, nesse curso
fazemos uma docker e vamos externalizar apenas o volume para a maquina do usuário ou a instância
no ambiente

Pode ser utilizado para fins de teste ou se voce não quiser instalar um banco de dados na sua máquina local,
este exemplo pode ser algo eficiente e prático para testes com banco.

### Passos para subir a instancia do docker

sudo docker build -t micro-projeto-db .

docker run --name=micro-projeto-db -d micro-projeto-db

docker ps 

docker inspect container_id

Caso esteja utilizando o dbeaver, verifique se esta propriedade está setada, para conseguir conectar no banco

dbeaver
Connection settings > Driver properties > AllowPublicKeyRetrieval = true

# Caso queira acessar a instancia e conectar ao banco ...

docker exec -i micro-projeto-db mysql -h 172.17.0.2:3306 -P 3306 -udbusermicro -paulamicro2023 aula-micro 