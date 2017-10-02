import { Request, Response, NextFunction } from "express";

class ContactController {  

    getAll(req: Request, res:Response) : void{
        res.json ({
            id: 1,
            name: "saulo",
            email: "smashraid@gmail.com"
        });
    }
}

export default ContactController;