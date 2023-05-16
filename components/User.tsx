import React from "react";
import { UpdateUserContext, UserContext } from "./Landing";

function User() {
  const user = React.useContext(UserContext);
  const setUser = React.useContext(UpdateUserContext);

  return (
    <div>
      <p>{user}</p>
      <input placeholder="enter user name " className="border" value={user} onChange={(e) => setUser(e.target.value)} />
    </div>
  );
}

export default User;
