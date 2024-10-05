import { Router } from 'express';

import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import ExampleRoutes from './ExampleRoutes';


// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //

// Init router
const userRouter = Router();
const ExampleRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);

ExampleRouter.get(Paths.Example.Get, ExampleRoutes.getAll);
ExampleRouter.post(Paths.Example.Add, ExampleRoutes.add);
ExampleRouter.put(Paths.Example.Update, ExampleRoutes.update);
ExampleRouter.delete(Paths.Example.Delete, ExampleRoutes.delete);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);


// **** Export default **** //

export default apiRouter;
