import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://wqrdpaedamtgjqnlfqen.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxcmRwYWVkYW10Z2pxbmxmcWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MjMxOTUsImV4cCI6MjEwMDM5OTE5NX0.Vw8-PZGF-nGRu0tqItHV7Qx4nMXW1whIZdI6_-UqXM4"
);