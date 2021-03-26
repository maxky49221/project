import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState} from 'react';
import Addre from './pages/Addre';
import Check from './pages/Check';
import Ledger from './pages/Ledger';
import Login from './pages/Login';
import Regis from './pages/Regis';
function App() {
  const dataSet = [
    {serialc:"0001", name:"a",number:"100",price:"20", },
    {serialc:"0002", name:"b",number:"100",price:"14", },
    {serialc:"0003", name:"c",number:"100",price:"38", },
    {serialc:"0004", name:"d",number:"100",price:"65", },
    {serialc:"0005", name:"e",number:"100",price:"10", },
  ]
  const [data, setData] = useState(dataSet);

  const Addhandle = (newData)=>{
    setData([...data,newData])
  }
  return (
    <Router>  
      <div className="App">

        <Switch>

          <Route exact path="/" component={Home}/>
          

          <Route path="/add" component={()=>
            <Addre onAdd={Addhandle}/>
          }/>

          <Route path="/check">
            <Check data={data}/>
          </Route>

          <Route path="/ledger">
            <Ledger data={data}/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/regis">
            <Regis/>
          </Route>

        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
