import lowdb from "lowdb";
import { default as FileAsync } from "lowdb/adapters/FileAsync";

export class DbService {
    private db: lowdb.LowdbAsync<any>;

    constructor(){
        this.initDatabase();
    }

    private async initDatabase() {
        const adapter = new FileAsync("db.json");
        this.db = await lowdb(adapter);
    }

    private async SetSomeonesName(fullname: string): Promise<any> {
        await this.db.set("user.fullname", fullname).write();
    }
}