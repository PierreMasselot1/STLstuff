import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'STLstuff',
        //maybe add user and pasword if this shit doesn't work
        type:'postgresql',
        debug: !__prod__
    });
};
main();