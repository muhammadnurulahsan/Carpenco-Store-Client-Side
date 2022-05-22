import React from "react";
import loading from "../../Assets/loading.gif";

const Loading = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className="flex justify-center items-center"
    >
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
