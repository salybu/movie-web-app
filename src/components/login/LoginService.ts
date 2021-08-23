import { firestore } from 'firebase.js';

export default class LoginService {
  public static async login(id: string, pw: string) {
    const usersRef = firestore.collection('users');
    // usersRef.get().then((doc) => {
    //   console.log(doc.data());
    //   //   console.log('ssss');
    // });

    usersRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  }
}
