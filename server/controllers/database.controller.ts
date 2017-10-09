import { Request, Response, NextFunction } from "express";
import { verbose, Database } from "sqlite3";

class DatabaseController { 
    public db: Database;

    constructor() {
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
        let props: string = this.column(properties);
        let sql: string = `CREATE TABLE ${name} ( ${props} )`;
        this.db.run(sql);
        close();
    }

    column(object: Object): string {
        let data: string;
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                var element = object[key];
                data += `${key} ${element}, `;
            }
        }
        return data;
    }
}

export default DatabaseController;