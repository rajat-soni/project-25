import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const LeftMainDiv = () => {

    const [sliderRef, instanceRef] = useKeenSlider(
        {
          slideChanged() {
            console.log('slide changed')
          },
        },
        [
         
        ]
      )
  return (
         <div className = "row">
            <div className = "col-md-6">
                1
            </div>
            <div className = "col-md-6">
                
            </div>

         </div>
  )
}

export default LeftMainDiv;