import { Router, Request, Response, NextFunction } from 'express';
import ContactController from "../controllers/contact.controller";

const router: Router = Router();
const user = new ContactController();

router.get("/test", (req: Request, res: Response) => {
    res.send("Hello  User");
});

router.get("/", user.getAll);

router.post("/test2", (req: Request, res: Response) => {

    res.send('POST request to the homepage ' + req.body.name)
});

export const ContactRoute: Router = router;