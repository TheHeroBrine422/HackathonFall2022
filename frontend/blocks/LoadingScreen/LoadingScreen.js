import { Photo } from "../components"


const LoadingScreen = ({}) => {


  return(
    <div className="loadingScreen">
      <div className="loadingText">Loading Content...</div>
      <div className="loadingImages">
      <div className="BP1">
        <Photo image={'bigPlant'} title={'bigPlant'} ></Photo>
        </div>
      <div className="BP2">
        <Photo image={''} title={'mediumPlant'} ></Photo>
        </div>
      <div className="BPMushroom">
        <Photo image={''} title={'mushroom'} ></Photo>
        </div>
      <div className="BP3">
        <Photo image={''} title={'smallPlant'} ></Photo>
        </div>
      <div className="BP4">
        <Photo image={''} title={'smallPlant'} ></Photo>
        </div>
        </div>
    </div>
  )
}

export default LoadingScreen