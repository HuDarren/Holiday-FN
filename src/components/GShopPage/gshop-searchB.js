import React from "react"
import GameKey from "../../secrets"


function GShopSearchB () {

    const [state,setState] = React.useState ({
        name: "" ,
        description: "",
        photo : "",
        info: ""
    })

    React.useEffect(()=>{
     getInfo()
    },[])
    
    async function getInfo() {
        let response = await fetch(`https://api.boardgameatlas.com/api/search?client_id=${GameKey}&order_by=popularity&limit=10`)
        let data = await response.json()
        setState({
            info: data 
        })
    }

    function clickWish(){

    }



console.log(state)

    return <div>
        <div>Popular Games</div>
        <div>{ state.info ? 
        <div>{state.info.games.map((item)=>{
            return (
                <div>
                <img alt="img" src={item.images.medium}></img>
                <div>{item.name}</div>
                <div>${item.price}</div>
                <div>
                <button
                onClick={clickWish}
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


export default GShopSearchB