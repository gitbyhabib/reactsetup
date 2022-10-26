import Crender from "./components/Crender";

import Clocklist from "./components/Clocklist";
function App() {

  const quantities = [1, 2, 3];
  
  console.log('app rended')
  return (
    <div className="row m-0">
      <div className="col-4">
        <Clocklist quantities={quantities}  />
      </div>
      <div className="col-8 text-center">
        <Crender/>
      </div>
    </div>
  );
}

export default App;
