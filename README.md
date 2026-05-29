# contactbook

contactbook

## mongoDB
```
docker run -d -p 27017:27017 --name mongodb mongo:latest
docker start mongodb
```

## run
```
npm init
npm install express
```

- install extensions: eslint, prettier - code formatter
- config VS Code to format code when save or paste

```
npm install -D eslint prettier eslint-config-prettier
```

```
curl -X POST http://localhost:3000/api/contacts -H "Content-Type: application/json" -d '{"name":"Long Tran","email":"longtran@example.com","phone":"1234567890","address":"Vinh Long","favorite":false}'
```

