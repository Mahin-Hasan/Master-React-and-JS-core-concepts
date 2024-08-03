import { useEffect } from "react";
import { useState } from "react";
import "./sorting.css";

const SortData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();
      if (result && result.users && result.users.length > 0) {
        sort !== "" ? handleSort(result.users) : setUsers(result.users); // for setting asc or desc on page load
        // console.log(result.users);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }
  //   console.log(sort);
  useEffect(() => {
    fetchListOfUsers();
  }, []);

  function handleSort(listOfUsers) {
    let copyUsers = [...listOfUsers];
    if (sort === "ascending") {
      copyUsers = copyUsers.sort((firstUser, secondUser) =>
        firstUser.firstName > secondUser.firstName ? 1 : -1
      );
      setUsers(copyUsers);
    } else if (sort === "descending") {
      copyUsers = copyUsers.sort((firstUser, secondUser) =>
        firstUser.firstName > secondUser.firstName ? -1 : 1
      );
      setUsers(copyUsers);
    }
  }

  useEffect(() => {
    handleSort(users);
  }, [sort]);

  if (loading) return <h1>Loading Users !! Wait</h1>;

  return (
    <div className="sort-data-container">
      <h2>Sort Data</h2>
      <div className="sort-dropdown-container">
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          name="sort"
        >
          <option value="" id="">
            Please Select Option
          </option>
          <option value="ascending" id="ascending">
            Sort A - Z
          </option>
          <option value="descending" id="descending">
            Sort Z - A
          </option>
        </select>
      </div>
      <ul>
        {users && users.length > 0
          ? users.map((userItem) => (
              <li key={userItem.id}>
                <p>{userItem.firstName}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SortData;
