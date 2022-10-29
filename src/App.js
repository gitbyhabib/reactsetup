import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";
function App() {
  console.log('app rended')
  return (
    <div className="row text-center mt-5">
      <Counter>
           {(counter,incrementcount)=> (
            <ClickCounter count={counter} incrementcount={incrementcount}/>
            )}
      </Counter>
      <Counter>
           {(counter,incrementcount)=> (
            <HoverCounter count={counter} incrementcount={incrementcount}/>
            )}
      </Counter>
  {/*     <User render={(isLoggdIn)=> isLoggdIn?"habibur rahman" : 'Guest'}/> */}
   </div>
  );
}
export default App;