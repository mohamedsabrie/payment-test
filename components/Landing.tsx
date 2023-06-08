import React, { useState } from "react";
import CSVDownloader from "./ExportCSV";
import Page from "./Page";
export const UserContext = React.createContext<any>(null);
export const UpdateUserContext = React.createContext<any>(null);

function Landing() {
  const [user, setUser] = useState("");
  return (
    <>
      <UpdateUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Page />
        </UserContext.Provider>
      </UpdateUserContext.Provider>
    </>
  );
}

export default Landing;
