import React from "react";
import userInfo from "./data/user.json";
import statisticalInfo from "./data/statistical-data.json";
import friendsInfo from "./data/friends.json";
import TransactionInfo from "./data/transactions.json";

import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className="conteiner">
      <Profile name={userInfo.name} 
      tag={userInfo.tag} 
      location={userInfo.location}
      avatar={userInfo.avatar}
      stats={userInfo.stats} />

      <Statistics title="Upload stats" stats={statisticalInfo}/>

      <FriendList friends={friendsInfo}/>

      <TransactionHistory items={TransactionInfo} />
    </div>
  );
}



      // <Profile {...userInfo} />

export default App;
