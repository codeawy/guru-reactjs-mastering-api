import { useEffect, useState } from "react";

const UsersPage = () => {
  const [data, setData] = useState<{ id: number; email: string }[]>([]);

  useEffect(() => {
    (() => {
      fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setData(data.users));
    })();
  }, []);

  return (
    <div className="container">
      <h1 className="my-10">Users Page</h1>
      {data.length ? data.map(item => <p key={item.id}>{item.email}</p>) : <p>No products!</p>}
    </div>
  );
};

export default UsersPage;
