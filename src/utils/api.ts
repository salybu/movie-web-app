import { firestore } from 'firebase.js';

export const getSignInResult = async (id: string, pw: string) => {
  const usersRef = firestore.collection('users');

  const user = usersRef
    .where('id', '==', id)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data());
    });

  const result = await user;
  if (result.length > 0 && result[0].pw == pw) {
    return true;
  } else {
    return false;
  }
};

export const signUp = (id: string, pw: string, name: string, age: number) => {
  const result = firestore
    .collection('users')
    .add({
      id: id,
      pw: pw,
      name: name,
      age: age,
    })
    .then((docRef) => {
      // console.log('document written with ID');
      return true;
    })
    .catch((error) => {
      console.log('Error adding document: ', error);
      return false;
    });
  return result;
};
