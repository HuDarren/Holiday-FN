import React from "react"
import GShopSearch from "./gshop-search"
// import GShopSearchB from "./gshop-searchB"
// import GShopSearchC from "./gshop-searchC"

function GShopHome(props){


    return <div>
       <GShopSearch
       wishListId={props.match.params.id}
       />
       {/* <GShopSearchB
       wishListId={props.match.params.id}
       />
        <GShopSearchC
       wishListId={props.match.params.id}
       /> */}
    </div>
}

export default GShopHome