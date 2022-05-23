import React from "react";
import Loading from "../Components/Loading/Loading";
import { useQuery } from "react-query";

const useUser = (user) => {
  const { data, isLoading, error, refetch } = useQuery(
    "userProfile",
    async () => {
      const res = await fetch(
        `https://carpenco-store.herokuapp.com/user/${user?.email}`,
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
    return <Loading />;
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
