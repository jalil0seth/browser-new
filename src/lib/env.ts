export interface Env {
  VITE_SUPABASE_URL: string
  VITE_SUPABASE_ANON_KEY: string
}

export function getEnvVar(key: keyof Env): string {
  const value = import.meta.env[key]
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`)
  }
  return value
}

export const env = {
  SUPABASE_URL: getEnvVar('VITE_SUPABASE_URL'),
  SUPABASE_ANON_KEY: getEnvVar('VITE_SUPABASE_ANON_KEY'),
} as const