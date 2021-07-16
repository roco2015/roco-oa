另一套配置，但是在typeorm中不能通过编译

nodemon.json    "ts": "node --loader ts-node/esm"   // node -r ts-node/register
package.json    "type": "module",
tsconfig.json   "module": "esnext"