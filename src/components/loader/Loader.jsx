import PuffLoader from 'react-spinners/PuffLoader';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <PuffLoader
      color={styles.color}
      //   loading={loading}
      size={150}
    />
  );
};

export default Loader;
