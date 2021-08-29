import { getSignInResult } from 'utils/api';

export default class SignInService {
  public static async getSignIn(id: string, pw: string) {
    const result = await getSignInResult(id, pw);
    return result;
  }

  public static async signUp(id: string, pw: string, pwConfirm: string, name: string, age: number) {}
}
