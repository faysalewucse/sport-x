import { SyncLoader } from "react-spinners";

const CustomLoader = ({ loading }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SyncLoader
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default CustomLoader;
