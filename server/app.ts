import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet  from "helmet"

import { ContactRoute } from "./routes/contact.route"
import { DatabaseRoute } from "./routes/database.route"
// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.urlencoded({ extended: false }));        
        this.express.use(bodyParser.json());
        this.express.use(logger('dev'));
        this.express.use(helmet());
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router: express.Router = express.Router();
        // placeholder route handler
        // router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        //     res.json({
        //         message: 'Hello World!'
        //     });
        // });
        this.express.use("/", ContactRoute);
        this.express.use("/db", DatabaseRoute);
    }

}

export default new App().express;