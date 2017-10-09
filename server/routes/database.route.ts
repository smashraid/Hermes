import { Router, Request, Response, NextFunction } from "express";
import DatabaseController from "../controllers/database.controller";

const router: Router = Router();
const db = new DatabaseController();

router.get("/create", (req: Request, res: Response) => {
    db.table(req.body.name, req.body.props);
});

export const DatabaseRoute: Router = router;