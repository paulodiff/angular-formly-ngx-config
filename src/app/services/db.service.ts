// import lowdb from "lowdb";
// import { default as FileAsync } from "lowdb/adapters/FileAsync";


import { LowdbAsync } from 'lowdb';
import * as lowdb from 'lowdb';
import * as FileAsync from 'lowdb/adapters/FileAsync';

// private db: LowdbAsync<any>; // TODO provide correct schema instead of any

export class DbService {
    private db: lowdb.LowdbAsync<any>;

    constructor(){
        this.initDatabase();
        /this.setDefaults();
    }

    private async initDatabase() {
        console.log('db.service:initDatabase');
        const adapter = new FileAsync("db.json");
        this.db = await lowdb(adapter);
        this.db.defaults({ user: any });
    }

    private async setDefaults() {
      console.log('db.service:setDefaults');
      await this.db.defaults({ posts: [], user: {}, count: 0 }).write();
      await this.db.get('posts').push({ id: 1, title: 'lowdb is awesome'}).write();

    }

    public async SetSomeonesName(fullname: string): Promise<any> {
        await this.db.set("user.fullname", fullname).write();
    }

    public async GetAllData(): Promise<any> {
        await this.db.get('posts').find({ id: 1 }).value();
    }
}