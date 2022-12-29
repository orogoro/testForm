import styles from './UsersItem.module.scss';

const UsersItem = ({ data }) => {
  const { name, surname, email, phone, birthday } = data;
  return (
    <li className={styles.item}>
      <p className={styles.title}>User</p>
      <p className={styles.text}>
        Name: <span className={styles.span}>{name}</span>
      </p>
      <p className={styles.text}>
        Surname: <span className={styles.span}>{surname}</span>
      </p>
      <p className={styles.text}>
        Email: <span className={styles.span}>{email}</span>
      </p>
      <p className={styles.text}>
        Phone: <span className={styles.span}>{phone}</span>
      </p>
      <p className={styles.text}>
        Birthday: <span className={styles.span}>{birthday}</span>
      </p>
    </li>
  );
};

export default UsersItem;
