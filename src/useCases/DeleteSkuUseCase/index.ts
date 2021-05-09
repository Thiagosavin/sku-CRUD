import { FakeSkuRepository } from '../../repositories/implementations/FakeSkuRepository';
import { DeleteSkuController } from './DeleteSkuController';
import { DeleteSkuUseCase } from './DeleteSkuUseCase';

const fakeSkusRepository = new FakeSkuRepository();

const deleteSkuUseCase = new DeleteSkuUseCase(
  fakeSkusRepository,
);

const deleteSkuController = new DeleteSkuController(
  deleteSkuUseCase,
);

export { deleteSkuUseCase, deleteSkuController };
