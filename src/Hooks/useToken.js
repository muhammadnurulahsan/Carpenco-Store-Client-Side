import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const email = user?.email;
  const name = user?.displayName;
  console.log(name);

  useEffect(() => {
    const currentUser = { name: name, email: email };
    if (email) {
      fetch(`https://carpenco-store.herokuapp.com/user/${email}`, {
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
  }, [email, name]);

  return [token];
};

export default useToken;
