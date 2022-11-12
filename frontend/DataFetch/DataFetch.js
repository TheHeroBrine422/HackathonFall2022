import axios from "axios";
import Home from "../views/Home/Home";
import React from "react";
import LoadingScreen from "../blocks/LoadingScreen";

class DataFetch extends React.Component {
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
        axios.get("http://172.20.10.12:3000/plantAPI/getPlants")
            .then(response => {this.setState({ data: response.data/*, token: this.props.token     add this once you do backend stuff*/})})
    }

    render () {
        console.log(this.state.token)
        return this.state.data != null ? <Home {...this.state.data} token={this.props.token}/> : (
            <LoadingScreen/>
        )
    }
}

export default DataFetch
