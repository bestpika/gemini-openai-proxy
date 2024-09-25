import { app } from "./src/app.ts"

Deno.serve({ port: 9009 }, app.fetch)
