import PlantList from "../../blocks/PlantList"
import { SiteHeader } from "../../views/Home/components"

const AddPlant = ({}) => {
  return(
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