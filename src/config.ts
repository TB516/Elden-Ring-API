import { container } from 'tsyringe';
import init from './config/mongoose';
import SpellController from './controllers/spell.controller';

const initServer = async () => {
  await init();

  container.register('SorceriesController', { useFactory: () => new SpellController(container.resolve('SorceriesRepo')) });
  container.register('IncantationsController', { useFactory: () => new SpellController(container.resolve('IncantationsRepo')) });
};

export default initServer;
