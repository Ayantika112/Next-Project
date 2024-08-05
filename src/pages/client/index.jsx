import { useEffect, useState } from "react";
import Link from "next/link";

const ClientPage = () => {
  const [user, setUser] = useState([]);

  console.log('before --> ' , user);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://dummyjson.com/users');
      setUser(await data.json());
    }
    fetchData();
  }, []);

  console.log('after --> ' , user);

  return (
    <>
      This is client side rendering
      <div>
        {user &&
          user.users &&
          user.users.map((item) => (
            <Link href={`/client/${item.id}`} key={item.id}>
              <div>{item.firstName}</div>
            </Link>
          ))}
      </div>
    </>
  );
};
export default ClientPage;
