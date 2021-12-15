import React, { useState } from 'react';
import './App.css';
import FormCadastro from './pages/FormCadastro';
import Inicial from './pages/Inicial';
import HorizontalLabelPositionBelowStepper from './Components/Steps'
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import MaskedInput from './Components/Maskinput';
import {HOME,CADASTRO} from './routes';

function App(){
  const[cnpj,setCnpj] = useState('');
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={Inicial}/>
        <Route path={CADASTRO} component={FormCadastro}/> 
      </Switch>    
    </BrowserRouter>
  </>
  );
}

export default App;