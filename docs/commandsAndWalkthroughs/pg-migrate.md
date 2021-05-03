## Node PG Migrate
[Website](https://salsita.github.io/node-pg-migrate/#/)

to create new migration:

 `npm run migrate create <name of new migration>`

to add new migrations to database

`npm run migrate up`

to rollback a migration

`npm run migrate down`

to drop the migration table

`npm run npgm reset`

## Columns / Column Operations

#### Column Definitions:


The 'createTable' and 'addColumns' methods both take a 'columns' argument that specifies column names and options. It is a object (key/value) where each key is the name of the column, and the value is another object that defines the options for the column.