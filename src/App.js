import React from 'react';
import {Route, Switch} from "react-router-dom";
import Keytaxdate from "./Keytaxdate";
import Cg from "./Cg";
import It from "./It";
import Pas from "./Pas";
import Vat from "./vta";
import Menu from "./Menu";
import Error from "./Error";
  

const App = () => {
  return (
    <> 
     
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route exact path='/keytaxdate' component={Keytaxdate} />
        <Route path='/cg' component={Cg}/>
        <Route path='/It' component={It}/>
        <Route path='/Pas' component={Pas}/>
        <Route path='/Vat' component={Vat}/>
       
      </Switch>
 
   </>
  );
}

export default App;
