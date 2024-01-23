const { readdirSync } = require("fs");
const { client } = require("../src/main");
const { join } = require("path");
readdirSync('events').forEach(eventFile => require(join(process.cwd(), 'events', eventFile)(client)))