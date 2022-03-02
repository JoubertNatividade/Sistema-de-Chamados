import { Router } from "express";
import { ensureAuthenticateReceiver } from "./middlewares/ensureAuthenticateReceiver";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { CreateCallController } from "./modules/call/useCases/createCall/CreateCallController";
import { DeleteCallController } from "./modules/call/useCases/deleteCall/DeleteCallController";
import { FindAvailableController } from "./modules/call/useCases/findAvailable/FindAvailableController";
import { UpdateCallAttReceiverController } from "./modules/call/useCases/updateCallAttReceiver/UpdateCallAttReceiverController";
import { UpdateCallEndDateController } from "./modules/call/useCases/updateCallEndDate/UpdateCallEndDateController";
import { AuthenticateReceiverController } from "./modules/receiver/useCases/authenticateReceiver/AuthenticateReceiverController";
import { CreateReceiverController } from "./modules/receiver/useCases/createReceiver/CreateReceiverController";
import { AuthenticateUserController } from "./modules/user/useCases/authenticateUser/AuthenticateUserController";
import { CrateUserController } from "./modules/user/useCases/createUser/CreateUserController";
import { ListCallOpenController } from "./modules/user/useCases/listCallOpen/ListCallOpenController";



const createUserController = new CrateUserController()
const authenticateUserController = new AuthenticateUserController()
const listCallOpenController = new ListCallOpenController()

const createReceiverController = new CreateReceiverController()
const authenticateReceiverController = new AuthenticateReceiverController()

const createCallController = new CreateCallController();
const updateCallAttReceiver = new UpdateCallAttReceiverController()
const findAvailableController = new FindAvailableController()
const updateCallEndDateController = new UpdateCallEndDateController()
const deleteCallController = new DeleteCallController()






const routes = Router();


// USER
routes.post("/users", createUserController.handle)
routes.post("/users/authenticate", authenticateUserController.handle)
routes.get('/users/callOpen', ensureAuthenticateUser, listCallOpenController.handle)



// RECEIVER
routes.post('/receivers', createReceiverController.handle)
routes.post('/receivers/authenticate', authenticateReceiverController.handle)



// CALL 
routes.post('/calls', ensureAuthenticateUser, createCallController.handle)
routes.put('/calls/updateReceiver/:id', ensureAuthenticateReceiver, updateCallAttReceiver.handle)
routes.get('/calls/available', ensureAuthenticateReceiver, findAvailableController.handle)
routes.put('/calls/updateEndDate/:id', ensureAuthenticateReceiver, updateCallEndDateController.handle)
routes.delete('/calls/delete/:id', ensureAuthenticateReceiver, deleteCallController.handle)


export { routes }