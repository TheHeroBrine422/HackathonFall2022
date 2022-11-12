import axios from "axios";

class DataFetch extends Component {
    constructor () {
        super()
        this.state = { data: null }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/plantAPI/getPlants")
            .then(response => {this.setState({ data: response.data })})
    }

    render () {
        return data == null ? /*render the page*/ : (
            <span>Loading wells...</span>
        )
    }
}