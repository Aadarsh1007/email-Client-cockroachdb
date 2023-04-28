const { Sequelize } = require('sequelize-cockroachdb')
// const { Sequelize } = require('sequelize')
const fs=require('fs')
const { Umzug, SequelizeStorage } = require('umzug')
const certPath = "/home/ad.rapidops.com/aadarsh.raghuwanshi/Desktop/cockroach/cockroach-v22.2.6.linux-amd64/certs"
const sequelize = new Sequelize('cockroach_1', 'root', 'admin', {
    dialect: 'postgres',
    host: 'localhost',
    port: 26257,
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(certPath+"/ca.crt")
                .toString(),
            key: fs.readFileSync(certPath+'/client.root.key')
                .toString(),
            cert: fs.readFileSync(certPath+'/client.root.crt')
                .toString()
        }
    }
});

// const sequelize = new Sequelize('email_client_5', 'root', 'admin', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

const umzug = new Umzug({
    migrations: { glob: 'migrations-postgre/*.js' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});
(async () => {
    await umzug.up()
        .then(console.log('All migrations have been executed successfully'))
        .catch(error => console.log(`Error: ${error}`));
})();