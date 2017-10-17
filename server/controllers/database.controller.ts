import { Request, Response, NextFunction } from "express";
import { verbose, Database } from "sqlite3";

class DatabaseController {
    public db: Database;

    constructor() {

    }

    open(): void {
        //sqlite3.verbose();
        this.db = new Database("hermes.db", (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
        });
    }

    close(): void {
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Close the database connection.');
        });
    }

    table(name: string, properties: Object): void {
        this.open();
        let props: string = this.column(properties);
        let sql: string = `CREATE TABLE ${name} ( ${props} )`;
        this.db.run(sql);
        this.close();
    }

    column(props: Object): string {
        let data: string[] = [];
        for (let key in props) {
            data.push(`${key} ${props[key]}`);
            // if (props.hasOwnProperty(key) && typeof props[key] != undefined) {
            //     var property = key;
            //     var value = props[property];
            //     data.push(`${property} ${value}`);
            // }
        }
        return data.join(',');
    }
}

export default DatabaseController;