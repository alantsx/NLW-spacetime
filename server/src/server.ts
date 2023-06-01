import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors"
import 'dotenv/config'
import { authRoutes } from "./routes/auth";
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { uploadRoutes } from "./routes/upload";

const app = fastify();

app.register(multipart)

app.register(cors, {
  origin: true, // TODAS as URLs de front-end poderão acessar o back-end
  // origin: ['http://localhost:3000'] essa URL especificamente pode acessar o back-end
})
app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0'
  })
  .then(() => {
    console.log("👾👾 HTTP server running on http://localhost:3333 👾👾");
  });
