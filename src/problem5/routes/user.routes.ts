import { Router } from 'express';
import userController from '../controllers/user.controller';
const routes = Router();
routes.post('/user/create-resource', userController.createResource);
routes.put('/user/update-resource', userController.getResourceDetail);
routes.get('/user/resource-detail', userController.getResourceDetail);
routes.get('/user/list-resource', userController.listResource);
routes.delete('/user/delete-resource', userController.deleteResource);
export default routes;