import AllBreeds from "./AllBreeds";
import SelectedBreed from "./SelectedBreed";

const Content = () => {
  return (
    <div style={{ display: "flex" }}>
      <AllBreeds />
      <SelectedBreed />
    </div>
  );
};

export default Content;
