import { pool } from "../../../lib/db";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const auth = req.headers.get("authorization");
    if (!auth) return new Response(JSON.stringify({ message: "No token" }), { status: 401 });

    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const [rows] = await pool.query("SELECT id, name, email, created_at FROM users WHERE id = ?", [decoded.id]);
    if (rows.length === 0) return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });

    return new Response(JSON.stringify({ user: rows[0] }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Unauthorized", error: err.message }), { status: 401 });
  }
}
