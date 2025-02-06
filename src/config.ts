import { container } from "tsyringe";
import init from "./config/mongoose.js";
import SpellController from "./controllers/spell.controller.js";

const initServer = async () => {
  await init();

  container.register("SorceriesController", {
    useFactory: () => new SpellController(container.resolve("SorceriesRepo")),
  });
  container.register("IncantationsController", {
    useFactory: () =>
      new SpellController(container.resolve("IncantationsRepo")),
  });
};

export default initServer;
