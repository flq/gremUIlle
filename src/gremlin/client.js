import * as Gremlin from "gremlin";
import * as configs from "./config";

const { ENV = "INT" } = process.env;
const config = configs[ENV];

const client = () => Gremlin.createClient(
    443, 
    config.endpoint, 
    { 
        "session": false, 
        "ssl": true, 
        "user": `/dbs/${config.database}/colls/${config.collection}`,
        "password": config.primaryKey
    }
);

export default client;