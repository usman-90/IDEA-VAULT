import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  console.log(password, "password");
  return bcrypt.hash(password, 5);
};
export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};
