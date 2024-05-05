// import Carousel from "./topics/components/Carousel/Carousel"
// import UseCallbackDrive from "./topics/use-callback"
// import UseEffectDrive from "./topics/use-effect"
// import UseStateDrive from "./topics/use-state"

import { Provider } from "react-redux"
import Redux from "./redux/redux"
import counterStore from "./redux/store"

const App = () => {
  return (

    <div>
      {/* <UseStateDrive /> */}
      {/* <UseEffectDrive /> */}
      {/* <UseCallbackDrive /> */}
      {/* <Carousel /> */}

      {/* <OurService /> */}

      <Provider store={counterStore}>
        <Redux />
      </Provider>
    </div>
  )
}

export default App