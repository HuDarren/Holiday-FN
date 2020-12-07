import React from "react";

function SpinnerHome() {
  const [state, setState] = React.useState({
    clicked: "No",
  });

  // post 

   /*

   each user in the group will have group id and will have the selected person id next to it 

  group follower
group id , followerid , selected id 
  1             1            4
  1             2            1
  


   */

  return (
    <div>
      <div> List of all usernames</div>
      <div></div>
    </div>
  );
}

export default SpinnerHome;
