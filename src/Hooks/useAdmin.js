import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      axios.get(`https://carpenco-store.herokuapp.com/admin/${email}`)
      .then((data) => {
        setAdmin(data?.data?.admin);
        setAdminLoading(false);
      });
    }
  }, [user, setAdmin, setAdminLoading]);
  return [admin, adminLoading];
};

export default useAdmin;
