import { Router } from 'express';
import { deleteSkuController } from './useCases/DeleteSkuUseCase';
import { createSkuController } from './useCases/CreateSku';
import { findSkuByIdController } from './useCases/FinSkuByIdUseCase';
import { editSkuController } from './useCases/EditSkuUseCase';

const router = Router();



router.get('/sku', (request, response) => {
  return findSkuByIdController.handle(request, response);
})

router.delete('/sku', (request, response) => {
  return deleteSkuController.handle(request, response);
})

router.put('/sku', (request, response) => {
  return editSkuController.handle(request, response);
})
router.post('/sku/create', (request, response) => {
  return createSkuController.handle(request, response);
});


export { router };
