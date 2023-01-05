import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyARLTm-j_oBNWYe6EcH-4kQbJvhj9ihyy0',
  authDomain: 'fir-test-f9901.firebaseapp.com',
  databaseURL:
    'https://fir-test-f9901-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-test-f9901',
  storageBucket: 'fir-test-f9901.appspot.com',
  messagingSenderId: '358233767492',
  appId: '1:358233767492:web:50592e65943ec135260611',
};
initializeApp(firebaseConfig);

const db = getDatabase();
const postListRef = ref(db, 'users');
const dbRef = ref(getDatabase());

const onSet = (name, email, surname, phone, birthday, photo) => {
  const newPostRef = push(postListRef);
  set(newPostRef, {
    name,
    email,
    surname,
    phone,
    birthday,
    photo,
  });
};

const getUsers = async () => {
  try {
    const snapshot = await get(child(dbRef, `users`));

    if (snapshot.exists()) {
      return Object.entries(snapshot.val());
    } else {
      console.log('No data available');
    }
  } catch (e) {
    console.error(e);
  }
};

export { onSet, getUsers };
