import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context, AuthError } from '../../utils';
import config from '../../config';

export const auth = {
  async login(parent, { email, password }, { prisma, res }: Context) {
    const user = await prisma.user({ email });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, config.appSecret);
    res.cookie('authToken', token);
    return {
      token,
      user
    };
  },

  async logout(parent, args, { res, user }: Context) {
    res.clearCookie('authToken');
    return user;
  },
};
