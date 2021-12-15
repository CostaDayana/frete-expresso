import React,{ useState } from 'react';
import BasicDatePicker from'../../Components/Data'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import './style.css'
import FullWidthTabs from '../TopPanel/TopPanel'
import { Link } from "react-router-dom";
import { HOME } from '../../routes';
import InputMask from 'react-input-mask'




const handleInputChange = (e) => {
  console.log(e.target.legth)
  
}
const FormCadastro =()=> {
  const[ codFreight,setFreigth]=useState();
  const[ orig,setOrig]=useState();
  const[ dest,setDest]=useState();
  const[ cityOrig,setCityOrig]=useState();
  const[ origCity,setOrigCity]=useState();
  const[ cityDest,setCityDest]=useState();
  const[ destCity,setDestCity]=useState();
  const[ addressOri,setAddressOri]=useState();
  const[ addresDest,setaddresDest]=useState();
  const[registration,setRegistration]=useState();
  
  const handleFreigth = (e) => {
    setFreigth(e.target.value.replace(/[^\d\s]/g, "") );
     
      }
  const handleRegistration = (e) => {
      setRegistration(e.target.value.replace(/[^\d\s]/g, "") );
  }
  return (
      <>
      <div className='container'>
      <Button sx={{ m: 1,width:'10%'}} component={Link} to={HOME} variant="outlined">Voltar</Button>
        <h2 className='tituloCad'>Cadastro de Solicitação</h2>
        <div className='div0' >
          <TextField onChange={handleRegistration} sx={{ m:1}} id="outlined-basic"value={registration} label="Matrícula" variant="outlined" />
          <TextField onChange={handleInputChange} sx={{ m:1}}id="outlined-basic" label="Solicitante" variant="outlined" />
          <TextField onChange={handleInputChange} sx={{ m:1}}id="outlined-basic" label="Filial" variant="outlined" />
          <BasicDatePicker className='data'/>
        </div>
        <div className='div1'>
          <TextField onChange={handleInputChange} sx={{ m:1}} id="outlined-basic" label="Setor" variant="outlined" />
          <TextField id="outlined-read-only-input" label="Loja" InputProps={{readOnly: true,}}/>
          <TextField onChange={handleInputChange} sx={{ m:1}}id="outlined-basic" label="Contato" variant="outlined" />
        </div>
        <div className="div2">
          <TextField onChange={handleInputChange} sx={{ m: 1, minWidth: '100%'}}id="outlined-multiline-static"  label="Observação" placeholder="Digite alguma observação sobre a solicitação" multiline rows={4} />
        </div>
        <div className='frete'>
            <h2 className='tituloCad'>Informações do Frete</h2>
            <div className="div3">
              
              <TextField sx={{ m: 1,width:'12%'}}onChange={handleFreigth} value={codFreight} required id="outlined-required" type="text" label="Cód Frete"/>
              <TextField sx={{ m: 1,width:'30%'}}onChange={handleInputChange} value={orig} required id="outlined-required" label="Origem"/>
              <Button sx={{ m: 1,width:'8%'}} variant="outlined">Buscar</Button>
              <TextField sx={{ m: 1,width:'30%'}}onChange={handleInputChange} value={dest} required id="outlined-required" label="Destino"/>
              <Button sx={{ m: 1,width:'8%'}}variant="outlined">Buscar</Button> 
            </div>
            <div className="div4">
              <TextField sx={{ m: 1,width:'10%'}} onChange={handleInputChange} required value={cityOrig} id="outlined-basic" label="Cidade"/>
              <TextField sx={{ m: 1,width:'30%'}} onChange={handleInputChange} required value={origCity} id="outlined-required" label="Origem"/>
              <TextField sx={{ m: 1,width:'10%'}} onChange={handleInputChange} required value={cityDest}id="outlined-basic" label="Cidade"/>
              <TextField sx={{ m: 1,width:'30%'}} onChange={handleInputChange} required value={destCity} id="outlined-required" label="Destino"/>
            </div>
            <div className="div5">
              <TextField sx={{ m: 1,width:'50%'}}onChange={handleInputChange} required value={addressOri} id="outlined-required" label="Endereço Origem"/>
              <TextField sx={{ m: 1,width:'50%'}}onChange={handleInputChange} required value={addresDest} id="outlined-required" label="Endereço Destino"/>
            </div>
            <div className="tabs">
                   <FullWidthTabs/> 
            </div>
              
        </div>
        
      </div>


      </>
  );
  
}

export default FormCadastro;