import {SiteHeader, Grid } from "../../blocks/components";
import {useEffect, useState} from "react";
import LoadingScreen from "../../blocks/LoadingScreen";
import axios from 'axios';

const AddPlant = ({}) => {

  const [unpairedPlants, setUnpairedPlants] = useState(null)

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_URL+"/plantAPI/getUnpairedPlants", {params: {"token": localStorage.getItem('token')}})
        .then(function (response) {
          setUnpairedPlants(response.data)
        })
  })

  function createPlant(key) {
    localStorage.setItem('activePlant', key)
    const URLParams = new URLSearchParams();
    URLParams.append("identifier", key)
    URLParams.append("token", localStorage.getItem('token'))

    axios.post("http://localhost:3001/plantAPI/pair", URLParams)
        .then(function (response) {
          window.location.href = './EditPlant'
        })
  }

  return unpairedPlants == null ? (<LoadingScreen/>) : (
    <div>
      <SiteHeader loggedIN={true} />
        <div className='pageContent'>
          <p>Pairable Plants:</p>
          <Grid classSet="plantsGrid" rows={1} columns={4}>
            {Object.keys(unpairedPlants).map(key => (<button onClick={() => createPlant(key)}>{key +" - "+unpairedPlants[key].name}</button>))}
          </Grid>
        </div>
    </div>
  )
}

export default AddPlant