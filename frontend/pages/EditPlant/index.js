import { SiteHeader } from "../../blocks/components";
import React, {useEffect, useState} from "react";
import LoadingScreen from "../../blocks/LoadingScreen";
import axios from 'axios'

const EditPlant = ({}) => {
    const [possibleTypes, setPossibleTypes] = useState(null);

    const [name, setName] = useState(null);

    const [type, setType] = useState("");

    useEffect(() => {
        if (possibleTypes == null) {
            axios.get(process.env.NEXT_PUBLIC_API_URL + "/plantAPI/getPossibleTypes")
                .then(function (response) {
                    setPossibleTypes(response.data)
                    setType(response.data[0])
                })
        }

        if (name == null) {
            axios.get(process.env.NEXT_PUBLIC_API_URL + "/plantAPI/getPlants", {params: {"token": localStorage.getItem('token')}})
                .then(function (response) {
                    setName(response.data[localStorage.getItem('activePlant')].name)
                })
        }
    })

    const handleTypeChange = e => {
        setType(e.target.value)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    function submit() {
        const URLParamsType = new URLSearchParams();
        URLParamsType.append("type", type)
        URLParamsType.append("identifier", localStorage.getItem('activePlant'))
        URLParamsType.append("token", localStorage.getItem('token'))

        let promise1 = axios.post(process.env.NEXT_PUBLIC_API_URL + "/plantAPI/setPlantType", URLParamsType)
            .then(function (response) {
                console.log(response.data);
            })

        const URLParamsName = new URLSearchParams();
        URLParamsName.append("name", name)
        URLParamsName.append("identifier", localStorage.getItem('activePlant'))
        URLParamsName.append("token", localStorage.getItem('token'))


        let promise2 = axios.post(process.env.NEXT_PUBLIC_API_URL + "/plantAPI/setPlantName", URLParamsName)
            .then(function (response) {
                console.log(response.data);
            })

        Promise.all([promise1, promise2]).then(() => {
            window.location.href = './'
        })
    }

    function cancel() {
        window.location.href = './'
    }

    return possibleTypes == null || name == null ? (<LoadingScreen />) : (
        <div>
            <SiteHeader loggedIN={true} />
            <div className='pageContent'>
                <p>Plant Name:</p>
                <input type={"text"} onChange={handleNameChange} value={name}></input>
                <p>Plant Type:</p>
                <select onChange={handleTypeChange} value={type}>
                    {possibleTypes.map(type => (<option key={type} value={type}>{type}</option>))}
                </select>
                <button onClick={submit}>Submit</button><button onClick={cancel}>Cancel</button>

            </div>
        </div>
    )
}

export default EditPlant