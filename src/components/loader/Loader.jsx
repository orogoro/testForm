import PuffLoader from 'react-spinners/PuffLoader';
import PropTypes from 'prop-types';

const Loader = ({ size }) => {
  return <PuffLoader color="#f59256" size={size} />;
};

export default Loader;

Loader.propTypes = {
  size: PropTypes.number,
};
