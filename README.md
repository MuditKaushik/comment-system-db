<!-- To create `Comment System Database` following are the requirments and commands. -->

<!-- FOR WINDOWS ONLY-->
<!-- REQUIRMENTS -->
1) Node.js v11.6.0
2) `Sequelize` and `Sequelize-cli` for create Migrations and seeding database.
    if you don't have these packages, install them `npm install --save sequelize` and `npm install --save sequelize-cli`
3) `Tedious` npm package to communication with MSSQL.
   if you don't have this package, install it `npm install --save tedious`
4) `Microsoft SQL Server(MSSQL)` needs to be install in your system.

<!-- Settings -->
Please change the `config\config.json` according to your db settings.

<!-- Commands to create DB-->
1) `npx sequelize-cli db:create` or `npm run db-create` to create database.
2) `npx sequelize-cli db:migrate` or `npm run create-tables` to create tables.
3) `npx sequelize-cli db:seed:all` or `npm run seed-data` to seed data into tables.

<!-- Existing Users and there usernames-->
Thor: `Thor`
Ironman: `Ironman`
Deadpool: `Deadpool`
Thanos: `Thanos`
password: `test123`

<!-- Read more about sequelize -->
`https://sequelize.org/v5/index.html`
