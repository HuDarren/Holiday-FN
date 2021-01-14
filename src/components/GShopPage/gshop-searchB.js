import React from "react"
import {connect} from "react-redux"
import GameKey from "../../secrets"
import {addItemThunk} from "../../store"

function GShopSearchB (props) {
    const [state,setState] = React.useState ({
        data: ""
    })

    React.useEffect(()=>{
     getData()
    },[])
    
    async function getData() {
        let response = await fetch(`https://api.boardgameatlas.com/api/search?client_id=${GameKey}&order_by=popularity&limit=5`)
        let data = await response.json()
        setState({
            data: data 
        })
    }

    return <div>
        <div>Popular Games</div>
        <div>{ state.data ? 
        <div>{state.data.games.map((item)=>{
            return (
                <div>
                <img alt="img" src={item.images.medium}></img>
                <div>{item.name}</div>
                <div>${item.price}</div>
                <div>
                <button
                onClick={
                    function(){
                        let info = { name : item.name, Image: item.images.medium,
                        }
                        props.addItem(props.wishListId,info)
                    }
                }
                >Wish</button>
                <button
                  type="button"
                     onClick={(e) => {
                     e.preventDefault();
                    window.location.href= item.official_url;
                     }}
                >Buy</button>
                </div>
                </div>
            )
        })}</div> : null 
            }</div>
    </div>
}


const mapState = (state)=>({
    user:state.user
})

const mapDispatch =(dispatch)=>({
    addItem: (wishListId,info)=> dispatch(addItemThunk(wishListId,info))
})


export default connect(mapState,mapDispatch)(GShopSearchB)