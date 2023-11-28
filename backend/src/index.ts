import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import solicitationsRouter from "./routers/solicitations-router";

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/solicitations", solicitationsRouter);

app.use((req, res) => {
  res.send("Path not found").status(404);
});

app.listen(PORT, () => {
  console.log(`Server Running on ${HOSTNAME}:${PORT}`);
});
