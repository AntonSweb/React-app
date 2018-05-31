Приложение использует архитектуру Flux
````
cd client/src
````
REST API
````
cd server/app.js
````
-Настройка портов и базы данных в config.json

-Для асинхронных запросов к api используеться redux-thunk

-для дебага подключен redux-devtools-extentions, можно отслеживать action и state

Запсук пирложения
1. Запускаем mongodb bin/mongo
2. cd React-app-master
3. npm install
4. npm run server
5. cd client
6. npm install
7. npm start

Запуск тестов 
````
cd client
npm test

