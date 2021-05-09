import { FakeSkuRepository } from '../../repositories/implementations/FakeSkuRepository';
import { FindSkuController } from './EditSkuController';
import { FindSkuUseCase } from './EditSkuUseCase';

const fakeSkusRepository = new FakeSkuRepository();

const findSkuByIdUseCase = new FindSkuUseCase(
  fakeSkusRepository,
);

const findSkuByIdController = new FindSkuController(
  findSkuByIdUseCase,
);

export { findSkuByIdController, findSkuByIdUseCase };
