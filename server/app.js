import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import postRoutes from "./routes/posts.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)); // la ruta de donde estoy subiendo

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  fileUpload({
    tempFileDir: "./upload",
    useTempFiles: true,
  })
);

app.use(express.static(path.join(__dirname, '../client/build'))); /// al hacer nom run build esto lo que hace es que el codigo compilado se va ver el el puerto del back end

// Routes
app.use("/api", postRoutes);

export { app };
