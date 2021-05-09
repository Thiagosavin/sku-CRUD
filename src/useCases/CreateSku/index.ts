import { FakeSkuRepository } from '../../repositories/implementations/FakeSkuRepository';
import { CreateSkuController } from './CreateSkuController';
import { CreateSkuUseCase } from './CreateSkuUseCase';

const fakeSkusRepository = new FakeSkuRepository();

const createSkuUseCase = new CreateSkuUseCase(
  fakeSkusRepository,
);

const createSkuController = new CreateSkuController(
  createSkuUseCase,
);

export { createSkuController, createSkuUseCase };
