import { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';

import { getDatabase, ref, get, child } from 'firebase/database';

import { UsersItem } from '../';

import styles from './Users.module.scss';

const Users = () => {
  // const db = getDatabase();
  // console.log(db);
  // const starCountRef = ref(db, 'users/');
  // console.log(starCountRef);
  // onValue(starCountRef, snapshot => {
  //   const data = snapshot.val();
  //   console.log(data);
  //   // updateStarCount(postElement, data);
  // });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`))
      .then(snapshot => {
        if (snapshot.exists()) {
          setUsers(Object.entries(snapshot.val()));
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {users?.map(item => (
          <UsersItem key={item[0]} data={item[1]} />
        ))}
      </ul>
    </div>
  );
};

export default Users;
