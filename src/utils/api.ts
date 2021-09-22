import { firestore } from 'firebase.js';
import { ILiked, IMember } from 'types/types';

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

export const isValidID = async (id: string) => {
  return firestore
    .collection('users')
    .where('id', '==', id)
    .get()
    .then((snapshot) => {
      // return snapshot.docs.map((doc) => doc.data());
      return snapshot.docs.map((doc) => doc.data()).length != 0 ? false : true;
    });
};

export const signUp = (id: string, pw: string, name: string, age: number, level: string, cardNumber: number, address: string) => {
  const result = firestore
    .collection('users')
    .add({
      id: id,
      pw: pw,
      name: name,
      age: age,
      level: level,
      cardNumber: cardNumber,
      address: address,
    })
    .then((docRef) => {
      // console.log('document written with ID');
      return true;
    })
    .catch((error) => {
      // console.log('Error adding document: ', error);
      return false;
    });
  return result;
};

export const getAllUsers = async () => {
  const usersRef = firestore.collection('users');

  const user = await usersRef.get().then((snapshot) => {
    return snapshot.docs.map((doc) => doc.data());
  });

  return user as IMember[];
};

export const getMoviesButtonState = async (type: string, memberId: string) => {
  const likeRef = firestore.collection(type).doc(memberId);

  return likeRef.get().then((doc) => {
    return doc.data();
  });
};

export const pushMovieButton = async (type: string, memberId: string, id: number, title: string, isLiked: boolean) => {
  const likeRef = firestore.collection(type).doc(memberId);

  if (!isLiked) {
    // button false 일 때 > 기존 type(like or notInterested)에서 삭제할 때
    const result = likeRef.get().then((doc) => {
      const res = doc.data();
      return res?.movie.filter((movie: any) => movie.id !== id);
    });

    likeRef.set({
      movie: await result,
    });
  } else {
    // type(like or notInterested) 영화 아이템 추가할 때
    let list: ILiked[] = [];
    const like = likeRef.get().then((doc) => {
      const result = doc.data();
      return result?.movie;
    });

    if ((await like) !== undefined) {
      list = list.concat((await like) as ILiked[]);
      list.push({ id: id, title: title });

      likeRef.set({
        movie: list,
      });
    } else {
      firestore
        .collection(type)
        .doc(memberId)
        .set({
          movie: [{ id: id, title: title }],
        });
    }
  }
};
