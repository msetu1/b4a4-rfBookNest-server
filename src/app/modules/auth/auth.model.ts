import { Schema, model } from 'mongoose';
import { TRegisterUser, UserModel } from './auth.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

// Schema definition for User
const userRegisterSchema = new Schema<TRegisterUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    isBlocked: { type: Boolean, default: false },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
// test
userRegisterSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

userRegisterSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// password hashed
userRegisterSchema.statics.isUserExistsEmail = async function (email: string) {
  return await UserRegister.findOne({ email }).select('+password');
};

userRegisterSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

// Create and export the User model
export const UserRegister = model<TRegisterUser, UserModel>(
  'Users',
  userRegisterSchema,
);
