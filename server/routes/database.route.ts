import { Router, Request, Response, NextFunction } from "express";
import DatabaseController from "../controllers/database.controller";

const router: Router = Router();
const db = new DatabaseController();

router.post("/table", (req: Request, res: Response) => {
    db.table(req.body.name, req.body.props);
    res.send("Hello  User");
});

export const DatabaseRoute: Router = router;