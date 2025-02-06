import jwt from 'jsonwebtoken';

// token create
export const createToken = (
  jwtPayload: { email: string; role: string },
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
// check current email
export let currentUserEmail: string | null = null;

// login user email
export const loginUserEmail = (email: string) => {
  currentUserEmail = email;
};
