import { sequelize } from "../src/lib/db";

async function testConnection() {
  console.log("Testing database connection...");
  console.log("Config:", {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  });

  try {
    await sequelize.authenticate();
    console.log("✅ Connection has been established successfully.");

    // Check if we can sync
    await sequelize.sync();
    console.log("✅ Database models synced successfully.");
  } catch (error: any) {
    console.error("❌ Unable to connect to the database:");
    console.error("Error message:", error.message);

    if (error.message.includes("authentication failed")) {
      console.log(
        "\n💡 TIP: Check if your DB_USER and DB_PASSWORD in .env.local match your PostgreSQL settings.",
      );
    } else if (error.message.includes("does not exist")) {
      console.log(
        `\n💡 TIP: Make sure the database "${process.env.DB_NAME}" exists. You can create it using: CREATE DATABASE ${process.env.DB_NAME};`,
      );
    }
  } finally {
    process.exit(0);
  }
}

testConnection();
