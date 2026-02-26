import { sequelize, User } from "../src/lib/db";
import bcrypt from "bcryptjs";

async function createAdmin() {
  await sequelize.sync(); // ensure table exists

  const username = process.env.ADMIN_USERNAME || "admin";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const hashedPassword = await bcrypt.hash(password, 8);

  // Check if user already exists
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    await existingUser.update({ password: hashedPassword });
    console.log(`Admin user "${username}" password updated`);
  } else {
    await User.create({
      username,
      password: hashedPassword,
    });
    console.log(`Admin user "${username}" created`);
  }

  process.exit(0);
}

createAdmin();
