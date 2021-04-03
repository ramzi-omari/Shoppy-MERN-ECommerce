## Project SETUP

**In main Folder**

- npm init (entry point : server.js)
- npm i express
- after changing in package scripts, npm start to run the server
- npm i -D nodemon concurrently : & add scripts to use "npm run dev" to start server & react at the same time
- npm i mongoose
- npm i colors
- npm i bcryptjs // used to encrypt passwords
- npm i express-async-handler // a middleware for handling exceptions inside of async express routes (the avoid try catch every route)
- npm i jsonwebtoken // JWT to handle tokens & users access autorisations

## Frontend additional setup:

install HTTP library to make request to the backend
**In Frontend Folder**

- npm i axios
- add a proxy to connect to the backend server
- npm i redux react-redux redux-thunk redux-devtools-extension

### FrontEnd notes:

- to call an Action in the front we use Dispatch
- to bring something in (datas) we use Selector

## Postman

**Saving the Token in Postman** : to test the access with tokens we add a environment variable which takes the token when we login automatically
![postman](https://i.ibb.co/HdVWLRF/postmantoken.png)
