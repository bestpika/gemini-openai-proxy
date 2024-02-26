import { app } from "./src/app.ts"

// @ts-ignore supress warning
Deno.serve({ port: 9009 }, app.fetch)
