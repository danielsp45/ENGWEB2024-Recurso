# Persistência de dados

Para limpar o dataset fornecido, todos os campos que tinham mais que um valor foram convertidos para arrays de strings.
Para além disso, o bookId foi convertido para _id.

# Setup da base de dados
Durante o desenvolvimento das aplicações, foi utilizado um `docker-compose.dev.yml` que se encontra na root do projeto para facilmente introduzir os dados num mongodb.
Para correr essa base dados, basta passar a path do ficheiro json lá para dentro e correr com:
```
docker-compose -f docker-compose.dev.yml up -d
```

# Instruções de execução das aplicações desenvolvidas

Para executar as aplicações desenvolvidas foi desenvolvido um `docker-compose.yml` para facilmente se executar a aplicação.
Para tal, basta correr:
```
docker-compose up --build
```

Para parar a aplicação:
```
docker-compose down
```
O backend estará disponível no `http://localhost:17000` e o frontend em `http://localhost:17001`.

De notar que é necessário ter o ficheiro `dataset.json` na root do projeto para a inserção dos dados ser feita corretamente.
