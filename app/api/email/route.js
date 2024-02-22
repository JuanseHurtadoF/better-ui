import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zmoaosbsfcslqgwznxoh.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export async function POST(req) {
  const { email } = await req.json();
  console.log(email);
  const { data, error } = await supabase
    .from("users")
    .insert([{ email: email }])
    .select();

  if (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ data: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
