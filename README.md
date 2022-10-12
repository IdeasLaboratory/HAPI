# API

## Project development
For the server:
```
npm install
```

After that you will need to install a postgreSQL base on the link :
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads


With the parameters:
```
Password : root
Port : 5432
```

Then create a database with a the name :
```
monocle
```

If you don't want this parameters you will need to modify the file .env !


### Development server
```
npm run serve
```

## Project production
After the run, you should install Postman and add the Postman collection : https://www.postman.com/downloads/
```
./Monocle.postman_collection.json
```


This collection will permit you to understand how the API work. 


In the collection's parameters, you will find the pre-request script,
which auto register a user and connect it automaticly to get a token to
be able to execute all request easly.

![image.png](./pre-request-script.png)
