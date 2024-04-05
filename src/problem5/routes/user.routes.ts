import { Router } from 'express';
import userController from '../controllers/user.controller';
const routes = Router();
routes.post('/create-resource', userController.createResource);
routes.put('/update-resource', userController.getResourceDetail);
routes.get('/resource-detail', userController.getResourceDetail);
routes.get('/list-resource', userController.listResource);
routes.delete('/delete-resource', userController.deleteResource);
export default routes;