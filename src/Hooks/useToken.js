import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.email;
    const name = user?.displayName;
    const currentUser = { name: name, email: email };

    if (email) {
      fetch(`https://agile-atoll-96122.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;
          localStorage.setItem("accessToken", token);
          setToken(token);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
