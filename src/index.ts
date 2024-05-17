import express from "express";
import { configureCepContainer } from "./containers/cepContainer";
import connectDB from "./config/database";

const app = express();
app.use(express.json());

connectDB();

const { cepRoute } = configureCepContainer();

app.use("/cep", cepRoute);

export default app;
