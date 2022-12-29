import PuffLoader from 'react-spinners/PuffLoader';

import styles from './Loader.module.scss';

const Loader = ({ size }) => {
  return (
    <PuffLoader
      color="#f59256"
      //   loading={loading}
      size={size}
    />
  );
};

export default Loader;
