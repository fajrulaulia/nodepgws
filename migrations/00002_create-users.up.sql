CREATE TABLE users (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  passkey TEXT NOT NULL,
  isverified BOOLEAN DEFAULT false,
  isdisabled BOOLEAN DEFAULT false,
  phonenumber CHAR(15),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);