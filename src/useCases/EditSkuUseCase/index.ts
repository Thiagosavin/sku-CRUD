import { FakeSkuRepository } from '../../repositories/implementations/FakeSkuRepository';
import { EditSkuController } from './EditSkuController';
import { EditSkuUseCase } from './EditSkuUseCase';

const fakeSkusRepository = new FakeSkuRepository();

const editSkuUseCase = new EditSkuUseCase(
  fakeSkusRepository,
);

const editSkuController = new EditSkuController(
  editSkuUseCase,
);

export { editSkuController, editSkuUseCase };
