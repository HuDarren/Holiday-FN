import React from "react"
import {connect} from "react-redux"
import {addItemThunk} from "../../store"
import "./gshop-searchA.css"


function GShopSearchA(props) {

    return (
    <div
     className="gshopA-container"
    >
    <div>
    <div>
    <div
                
                className="gshopA-content-container3"
                >
                <div
                className="gshopA-content-container4"
                >
                <div
                className="gshopA-image-container"
                >
                <img alt="img" className="gshopA-image" src={props.image}></img>
                </div>
                <div
                className="gshopA-text-container"
                >
                <div
                className="gshopA-text"
                >{props.name}</div>
                </div>
                <div
                  className="gshopA-text-container"
                >
                <div
                className="gshopA-text"
                >${props.price}</div>
                </div>
                <div 
                className="gshopA-button-container"
                >
                    <div 
                    className="gshopA-button-containerA">
                <button
                className="gshopA-button"
                onClick={
                    function(){
                        let info = { name : props.name, Image: props.image }
                        props.addItem(props.wishListId,info)
                    }
                }
                >
                    <span
                    className="gshopA-button-text"
                    >Wish</span>
                    </button>
                    </div>
                             <div 
                    className="gshopA-button-containerA">
                <button
                className="gshopA-button"
                  type="button"
                     onClick={(e) => {
                     e.preventDefault();
                    window.location.href= props.officialUrl;
                     }}
                >      <span
                    className="gshopA-button-text"
                    >View</span></button>
                    </div>
                </div>
                </div>
    </div>
    </div>
    </div>
    </div>
    )
}

const mapState = (state)=>({
    user:state.user
})

const mapDispatch =(dispatch)=>({
    addItem: (wishListId,info)=> dispatch(addItemThunk(wishListId,info))
})

export default connect(mapState,mapDispatch)(GShopSearchA)