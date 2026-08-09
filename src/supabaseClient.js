import { createClient } from '@supabase/supabase-js';

// Replace these placeholders with your actual project URL and anon key from Step 1
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);