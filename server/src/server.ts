import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors"

const app = fastify();

app.register(memoriesRoutes)
app.register(cors, {
  origin: true, // TODAS as URLs de front-end poderão acessar o back-end
  // origin: ['http://localhost:3000'] essa URL especificamente pode acessar o back-end
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("👾👾 HTTP server running on http://localhost:3333 👾👾");
  });
