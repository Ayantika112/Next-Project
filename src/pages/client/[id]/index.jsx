import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const specificUserInfo = () => {

  var router = useRouter();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const id = router.query.id;

    async function getDataId(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUser(await data.json());
    }

    getDataId(id);
  },[router.query.id]);

  return (
    <div>
        <h1>{user.firstName}</h1>
    </div>
  )
};

export default specificUserInfo;
