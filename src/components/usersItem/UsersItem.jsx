import PropTypes from 'prop-types';

import styles from './UsersItem.module.scss';

const UsersItem = ({ data }) => {
  const { name, surname, email, phone, birthday, photo } = data;
  return (
    <li className={styles.item}>
      <p className={styles.title}>User</p>
      <div className={styles.containerImage}>
        <img className={styles.image} src={photo} alt="photo_user" />
      </div>
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

UsersItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }),
};
