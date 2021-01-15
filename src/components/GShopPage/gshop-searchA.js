import React from "react"
import {connect} from "react-redux"
import {addItemThunk} from "../../store"


function GShopSearchA(props) {
    return <div>
        <img alt="img" src={props.image}></img>
        <div>{props.name}</div>
        <div>{props.price}</div>
        <div>
        <button
        onClick={
        function(){
        let info = { name : props.name, Image: props.image }
        props.addItem(props.wishListId,info)}
                }
                >Wish</button>
                <button
                  type="button"
                     onClick={(e) => {
                     e.preventDefault();
                    window.location.href= props.official_url;
                     }}
         >Buy</button>
        </div>
    </div>
}

const mapState = (state)=>({
    user:state.user
})

const mapDispatch =(dispatch)=>({
    addItem: (wishListId,info)=> dispatch(addItemThunk(wishListId,info))
})

export default connect(mapState,mapDispatch)(GShopSearchA)