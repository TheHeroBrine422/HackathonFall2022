import axios from "axios";
import Home from "../views/Home/Home";
import React from "react";

class DataFetch extends React.Component {
    // const DataFetch = () => {
    constructor () {
        super()
        this.state = { data: null }
    }

    componentDidMount() {
        axios.get("http://192.168.137.1:3000/plantAPI/getPlants")
            .then(response => {this.setState({ data: response.data })})
    }

    render () {
        console.log(this.state.data)
        return this.state.data != null ? <Home {...this.state.data}/> : (
            <span>Loading wells...</span>
        )
    }
}

export default DataFetch
