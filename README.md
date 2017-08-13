# HT backend using node, express, sequelize and postgres
A simple REST api for the ht app, containing routes for users, technologies
votes and links.

Scaffolded following [scotch.io tutorial](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)

## How to
### Start the server for dev
Assumes a postgres db is running according to [config](./server/config/config.json), see [how to start a dev db](#Start-a-dev-db-using-docker)
```bash
npm run start:dev
```

### Start a dev db using docker
Start a postgres container
```bash
docker run -p5432:5432 --name ht_postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

Connect to the db
```bash
docker run -it --link ht_postgres:postgres postgres psql -h postgres -U postgres
```

Create user and db
```sql
CREATE USER ht_backend;
ALTER USER ht_backend WITH PASSWORD 'devpassword';

CREATE DATABASE ht_db;
GRANT ALL PRIVILEGES ON DATABASE ht_db TO ht_backend;
```

You should now be able to connect to `ht_db` as `ht_backend`,
```bash
docker run -it --link ht_postgres:postgres postgres psql -h postgres -U ht_backend -d ht_db
```
