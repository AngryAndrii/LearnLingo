import RiseLoader from 'react-spinners/RiseLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  transform: 'translate(-50%, -50%)',
};

const Loader = () => {
  return (
    <RiseLoader
      color="#8a28df"
      cssOverride={override}
      size={45}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
