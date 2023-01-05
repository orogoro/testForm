import { useState, useEffect } from 'react';

import { getUsers } from '../../services/firebase/database';
import { UsersItem, ScrollToTop } from '../';

import styles from './Users.module.scss';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const dataUsers = await getUsers();
      if (dataUsers?.length === 0) {
        return;
      }
      setUsers(dataUsers);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {users?.map(item => (
          <UsersItem key={item[0]} data={item[1]} />
        ))}
      </ul>
      <ScrollToTop />
    </div>
  );
};

export default Users;
