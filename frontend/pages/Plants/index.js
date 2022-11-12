import axios from "axios";
// import Home from "../views/Home/Home";
import React from "react";
import Plants from "./Plants";
import LoadingScreen from "../../blocks/LoadingScreen";

class ToLazy extends React.Component {
    constructor () {
        super()
        this.state = { data: null }
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        this.getData()
        setInterval(this.getData, 60*1000)
    }

    getData() {
        axios.get(process.env.NEXT_PUBLIC_API_URL+"/plantAPI/getPlants", {params: {token: localStorage.getItem("token")}})
            .then(response => {this.setState({ data: response.data })})
    }

    render () {
        console.log(this.state.data)
        return this.state.data != null ? <Plants data={this.state.data} getData={this.getData}/> : (
            <LoadingScreen/>
        )
    }
}

export default ToLazy