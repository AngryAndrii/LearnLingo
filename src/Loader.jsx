import RiseLoader from 'react-spinners/RiseLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
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
