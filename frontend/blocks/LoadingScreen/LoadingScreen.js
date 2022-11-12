import { Photo } from "../../views/Home/components"

const LoadingScreen = ({}) => {


  return(
    <div className="loadingScreen">
      <div className="loadingText">Loading Content...</div>
      <div className="loadingImages">
      <div className="BP1">
        <Photo image={''} title={''} ></Photo>
        </div>
      <div className="BP2">
        <Photo image={''} title={''} ></Photo>
        </div>
      <div className="BPMushroom">
        <Photo image={''} title={''} ></Photo>
        </div>
      <div className="BP3">
        <Photo image={''} title={''} ></Photo>
        </div>
      <div className="BP4">
        <Photo image={''} title={''} ></Photo>
        </div>
        </div>
    </div>
  )
}

export default LoadingScreen