import Clickcounter from "./components/Clickcounter";
import Hovercounter from "./components/Hovercounter";

function App() { 
  console.log('app rended')
  return (
    <div className='text-center mt-5'>
      <Clickcounter/>
      <Hovercounter/>
      </div>
  );
}
export default App;
