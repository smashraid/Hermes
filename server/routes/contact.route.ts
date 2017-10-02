import { Router, Request, Response, NextFunction } from 'express';
import ContactController from "../controllers/contact.controller";

const router: Router = Router();
const user = new ContactController();

router.get("/test", (req: Request, res: Response) => {
    res.send("Hello  User");
});

router.get("/", user.getAll);

export const ContactRoute: Router = router;