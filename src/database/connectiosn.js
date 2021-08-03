import sql from "mssql";

const dbSettings = {
  user: "dm5imanager",
  password: "El3men200*",
  server: "dr-sql-server.database.windows.net",
  database: "nodeDB",
};

async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

getConnection();
