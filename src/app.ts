import express from "express";
import sorceryRoutes from "./routes/sorcery.routes.js";
import incantationRoutes from "./routes/incantation.routes.js";

const configureApp = (app: express.Express) => {
  app.use("/sorceries", sorceryRoutes);
  app.use("/incantations", incantationRoutes);
};

export default configureApp;
