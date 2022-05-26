import React from "react";
import loading from "../../Assets/loading.gif";

const Loading = () => {
  return (
    <div className="text-center py-3">
      <div
        style={{ height: "40vh" }}
        className="flex justify-center items-center"
      >
        <img src={loading} alt="" />
      </div>
      <h1 style={{ height: "40vh" }} className="text-2xl font-bold">
        Data is loading, Please wait.....
      </h1>
    </div>
  );
};

export default Loading;
