import { SiteHeader } from "../../views/Home/components"

const AddPlant = ({}) => {
  return(
    <div>
      <SiteHeader loggedIN={true} />
        <div className='pageContent'>
          <button>
            Add a new plant
          </button>
        </div>
    </div>
  )
}

export default AddPlant