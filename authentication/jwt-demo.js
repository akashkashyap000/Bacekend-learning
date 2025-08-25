// JWT Authentication Example
const jwt = require("jsonwebtoken");

const secret = "mySecretKey";

// Create token
const token = jwt.sign({ userId: 1, name: "Amit" }, secret, { expiresIn: "1h" });
console.log("JWT Token:", token);

// Verify token
try {
  const decoded = jwt.verify(token, secret);
  console.log("Decoded Data:", decoded);
} catch (err) {
  console.log("Invalid token");
}
