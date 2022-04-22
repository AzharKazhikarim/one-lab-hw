import { FC } from "react";
import { Link } from "react-router-dom";

const Main: FC = () => {
  return (
    <>
      <Link to={"/users"}>Users</Link>
    </>
  );
};
export default Main;
