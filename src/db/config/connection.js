import { Sequelize } from "sequelize";

const POSTGRES_DATABASE_NAME = "database_development";
const POSTGRES_DATABASE_USERNAME = "anujr";
const POSTGRES_DATABASE_PASSWORD = "anujr";
const POSTGRES_DATABASE_HOST = "db";
const POSTGRES_DATABASE_DIALECT = "postgres";

let retries = 5;
while (retries) {
  (async () => {
    try {
      const sequelize = new Sequelize(
        POSTGRES_DATABASE_NAME,
        POSTGRES_DATABASE_USERNAME,
        POSTGRES_DATABASE_PASSWORD,
        {
          host: POSTGRES_DATABASE_HOST,
          dialect: POSTGRES_DATABASE_DIALECT,
        }
      );

      await sequelize.authenticate();
      await sequelize.sync();

      console.info(
        `DB Connection with ${POSTGRES_DATABASE_NAME} established successfully.`
      );
    } catch (error) {
      console.error("Error occured in db connection", error);
      retries -= 1;
      console.log("retries", retries);
    }
  })();
}
