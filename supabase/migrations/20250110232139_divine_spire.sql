/*
  # Initial Schema Setup for Account Manager

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `username` (text)
      - `full_name` (text)
      - `avatar_url` (text)
      - `updated_at` (timestamp)
    
    - `accounts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `platform` (text)
      - `username` (text)
      - `password` (text, encrypted)
      - `notes` (text)
      - `country` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `account_tags`
      - `id` (uuid, primary key)
      - `account_id` (uuid, references accounts)
      - `tag` (text)
    
    - `files`
      - `id` (uuid, primary key)
      - `account_id` (uuid, references accounts)
      - `name` (text)
      - `path` (text)
      - `size` (bigint)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  CONSTRAINT username_length CHECK (char_length(username) >= 3)
);

-- Create accounts table
CREATE TABLE accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  platform text NOT NULL,
  username text NOT NULL,
  password text NOT NULL,
  notes text,
  country text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- Create account_tags table
CREATE TABLE account_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts ON DELETE CASCADE,
  tag text NOT NULL
);

-- Create files table
CREATE TABLE files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts ON DELETE CASCADE,
  name text NOT NULL,
  path text NOT NULL,
  size bigint NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE account_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE files ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own accounts"
  ON accounts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own accounts"
  ON accounts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own accounts"
  ON accounts FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own accounts"
  ON accounts FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own account tags"
  ON account_tags FOR ALL
  USING (account_id IN (
    SELECT id FROM accounts WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can manage own files"
  ON files FOR ALL
  USING (account_id IN (
    SELECT id FROM accounts WHERE user_id = auth.uid()
  ));