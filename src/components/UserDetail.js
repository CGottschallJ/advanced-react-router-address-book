import React from "react";
import UserInfo from "./UserInfo";

function UserDetail (props) {

  //Returns a string
  const userId = parseInt(props.match.params.id);

  const user = props.users.find(u => u.id === userId) || {};

  //props.match.params is a prop created in ReactRouter
  console.log(props.match.params.id);


  return (
    <div>
      <UserInfo user={user} />
      <img src={user.avatar} />
    </div>
  );
}

export default (UserDetail);
