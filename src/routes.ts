import { Router } from 'express';
import { deleteSkuController } from 'useCases/DeleteSkuUseCase';
import { createSkuController } from './useCases/CreateSku';
import { findSkuByIdController } from './useCases/FinSkuByIdUseCase';
const router = Router();

router.post('/sku/create', (request, response) => {
  return createSkuController.handle(request, response);
});


router.get('/sku', (request, response) => {
  return findSkuByIdController.handle(request, response);
})

router.delete('/sku', (request, response) => {
  return deleteSkuController.handle(request, response);
})

// router.post('/createPlan', (request, response) => {
//   return createPlanController.handle(request, response);
// });

// router.put('/editPlan', (request, response) => {
//   return editPlanController.handle(request, response);
// });



export { router };
