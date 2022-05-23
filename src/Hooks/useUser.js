import React from "react";
import { useQuery } from "react-query";
import Loading from "../Pages/Shared/Loading";

const useUser = (user) => {
  const { data, isLoading, error, refetch } = useQuery(
    "userProfile",
    async () => {
      const res = await fetch(
        `https://agile-atoll-96122.herokuapp.com/user/${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return res.json();
    }
  );

  if (isLoading) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <Loading>Getting Data...</Loading>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[75vh] grid place-content-center">
        <p>something went wrong!</p>
      </div>
    );
  }
  return { data, refetch };
};

export default useUser;
