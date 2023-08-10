# NLW-spacetime

Spacetime is a project that allows you to save memories through text posts with images and videos to be displayed on a timeline. The project features some interesting technologies such as login with GitHub account via OAuth, JWT authentication, Fastify, Axios, and others.

<img src="https://github.com/alantsx/NLW-spacetime/blob/master/readme-assets/showcase.gif?raw=true" alt="showcase gif" style="height: 350px;"/>

## Back-end
Built on Node.JS + TyeScript using NestJS Framework. Main techs:

### OAuth
Allows for authentication in a system using an existing account from another system. On this project the authentication is made with Github Account
### CORS

Cross-origin Resource Sharing (CORS). It allows the back-end application to specify which origins (domains, ports, and protocols) are allowed to access the back-end routes.

### Prisma

A modern and secure ORM (Object-Relational Mapping), which integrates with various different databases (SQLite, PostgreSQL, MongoDB, MySQL).

### Zod

Zod is a data validation library in JavaScript/TypeScript that provides an easy and robust way to validate and manipulate data. With Zod, you can define validation schemas for various data types such as strings, numbers, dates, objects, and more. These schemas can specify rules like minimum/maximum length, allowed values, specific data formats, and custom validations. One of the main advantages of Zod is its strong typing and native support for TypeScript.
### DotEnv (Dependency)

A dependency that allows reading environment variables saved in the .env file.

### Axios

Used for making HTTP requests. Despite the Node's active fetch API, Axios is a lightweight library with more robust error handling.

### Autenticação JWT

JSON Web Token (JWT) - Identifying a logged-in user.

### Fastify/multipart

Used for image upload in the upload routes. This way, it avoids using a base64-encoded file, which, although it simplifies the code, would make the image heavier and not optimized.

### Feature de steaming do Node.JS

A note system to write a file in parts. The pipeline allows waiting and checking for the upload process to complete. After that, it will transform the pipeline function into a promise using promisify.

## Front-end

React. -- TO DO --

## Mobile

React Native. -- TO DO --