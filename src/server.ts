import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const app = express();
app.use(router);
app.use(json());

app.listen(3000, async () => {
  await db.sync();
  console.log(`App ${process.env.PROJECT_NAME} running at 3000`);
});
