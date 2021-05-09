import { FakeSkuRepository } from '../../repositories/implementations/FakeSkuRepository';
import { FindSkuController } from './FindSkuController';
import { FindSkuUseCase } from './FindSkuUseCase';

const fakeSkusRepository = new FakeSkuRepository();

const findSkuByIdUseCase = new FindSkuUseCase(
  fakeSkusRepository,
);

const findSkuByIdController = new FindSkuController(
  findSkuByIdUseCase,
);

export { findSkuByIdController, findSkuByIdUseCase };
