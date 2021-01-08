import React from "react"

function GShopSearch() {

    const [state,setState] = React.useState({
        search: "",
        info: ""
    })

    async function getGame() {
        let response = await fetch("")
        let data = response.json()
        setState({
            info: data 
        })
    }

    function handleChange(event){
        setState({...state, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        getGame()
    }

    return <div>
        <div>Games</div>
        <form
        onSubmit={handleSubmit}
        >
            <input
            name ="search"
            type="text"
            value={state.search}
            onChange={handleChange}
            placeholder="Search"
            >
            </input>
            <button
            type="submit"
            >Search</button>
        </form>
    </div>
}


export default GShopSearch