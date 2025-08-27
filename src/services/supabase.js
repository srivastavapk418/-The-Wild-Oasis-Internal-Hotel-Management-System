import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bozszrjmzgerfnfdmtvc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvenN6cmptemdlcmZuZmRtdHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxOTY2MTQsImV4cCI6MjA3MDc3MjYxNH0.pXGo5S-Rvp_V7vxyj6gFvFXxUokJZZefjzHlY69KpZo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
