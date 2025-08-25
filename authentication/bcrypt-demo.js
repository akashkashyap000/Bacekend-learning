// Bcrypt Password Hashing
const bcrypt = require("bcrypt");

async function run() {
  const password = "myPassword123";

  // Hash password
  const hash = await bcrypt.hash(password, 10);
  console.log("Hashed:", hash);

  // Verify password
  const match = await bcrypt.compare("myPassword123", hash);
  console.log("Password match:", match);
}

run();
