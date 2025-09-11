import { pool } from "../../../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
    }

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });

    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    return new Response(
      JSON.stringify({ message: "Login successful", token, user: { id: user.id, email: user.email, name: user.name } }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: "Server error", error: err.message }), { status: 500 });
  }
}
