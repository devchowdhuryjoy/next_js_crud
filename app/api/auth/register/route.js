import { pool } from "../../../lib/db";

import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Email & password required" }), { status: 400 });
    }

    const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return new Response(JSON.stringify({ message: "Email already exists" }), { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);
    await pool.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name || null, email, hashed]);

    return new Response(JSON.stringify({ message: "Registered successfully" }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Server error", error: err.message }), { status: 500 });
  }
}
