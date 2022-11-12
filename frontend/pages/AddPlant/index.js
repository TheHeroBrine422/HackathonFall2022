import PlantList from "../../blocks/PlantList"
import { SiteHeader } from "../../views/Home/components"
import React, {useEffect, useState} from "react";
import LoadingScreen from "../../blocks/LoadingScreen";

const AddPlant = ({}) => {

  [unpairedPlants, setUnpairedPlants] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3000/plantAPI/getPlants", {params: {"token": localStorage.getItem('token')}})
        .then(function (response) {
          setUnpairedPlants(response.data)
        })
  })

  return unpairedPlants == null ? (<LoadingScreen/>) : (
    <div>
      <SiteHeader loggedIN={true} />
        <div className='pageContent'>
          <button>Add New Plant Name</button>
          <PlantList/>
          <button>
            Add a new plant
          </button>
        </div>
    </div>
  )
}

export default AddPlant