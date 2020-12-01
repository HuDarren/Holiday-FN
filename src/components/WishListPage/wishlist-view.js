import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWishList } from "../../store/wishlist";
import WishListViewB from "./wishlist-viewB";

class WishListView extends React.Component {
  constructor() {
    super();
    this.state = {
      list: "",
    };
  }
  componentDidMount() {
    this.props.fetchWishList(14);
  }

  render() {
    console.log(this.props.wishList[0]);
    return (
      <div>
        <div>Placeholder</div>
        {/* <div>{this.props.wishList[0].name}</div> */}
      </div>
    );
  }
}

// function WishListView(props) {
//   //   const [state, setState] = useState({});

//   React.useEffect(() => {
//     const list = props.fetchWishList(props.user.id);
//     return () => {
//       list();
//     };
//     // setState(props.wishList);

//     // console.log("tissssnow", state);
//   });

//   //   console.log("sthatee", state);

//   function searchResults() {
//     const wishList = props.wishList;
//     if (wishList) {
//       return (
//         <div>
//           {wishList.map((result) => {
//             return <div>{result.name}</div>;
//           })}
//         </div>
//       );
//     }
//   }

//   console.log("state", props.wishList);
//   return (
//     <div>
//       <div> List of all WishList</div>
//       {/* <div>
//         {props.wishList.map((item) => {
//           const name = item.name;
//           const detail = item.detail;
//           return <WishListViewB name={name} detail={detail} />;
//         })}
//       </div> */}
//       {/* <div>{props.wishList[0].name}</div> */}
//       <div>button to add new list</div>
//       {/* <div>{searchResults()}</div> */}
//     </div>
//   );
// }

const mapState = (state) => ({
  wishList: state.wishList,
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchWishList: (userId) => dispatch(fetchWishList(userId)),
});

export default connect(mapState, mapDispatch)(WishListView);
