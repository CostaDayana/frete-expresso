import React, {useState} from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import './style.css'
import ReactInputMask from "react-input-mask";

function TabPanel(props) {

  let valor ='';
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}




export default function FullWidthTabs() {
  const[ codFreight,setFreigth]=useState();
  const [newItem, setNewItem ] = useState(0);
  const [value, setValue] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [volAmount,setVolAmount ] = useState(0);
  const [totalVol,setTotalVol] = useState(0);
  const [cubage,setCubage]= useState(0);
  const [mask,setMask] = useState(0);
  const [nNf,setNNf] = useState();


  const theme = useTheme();
  const handleNewItem =(e)=>{
    console.log(newItem)
    setNewItem('');
    
  }
  /*
  handleWidth
handleWeight
  */
  const handleNNfNumber = (e) => {
    setNNf(e.target.value.replace(/[^\d\s]/g, "") );
  }
  const handleFreigth = (e) => {
    setFreigth(e.target.value.replace(/[^\d\s]/g, "") );
  }
  const handleWidthNumber = (e) => {
    setWidth(e.target.value.replace(/[^\d\s]/g, "") );
  };
  const handleWeightNumber = (e) => {
    setWeight(e.target.value.replace(/[^\d\s]/g, "") );
  };
  const handleVolAmountNumber = (e) => {
    setVolAmount(e.target.value.replace(/[^\d\s]/g, "") );
  };
  const handleHeightNumber = (e) => {
    setHeight(e.target.value.replace(/[^\d\s]/g, "") );
  };
  const handleLengthNumber = (e) => {
    setLength(e.target.value.replace(/[^\d\s]/g, "") );
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleInputChange = (evento) => {
    console.log(evento.target.value);
  };

  const handleWeight = (e) => {
    setWeight(e.target.value)
      if(e.target.value.length === 0){
        setWeight(0)
      };
  };

  const handleHeight = (e) => {
    
      if(e.target.value.length === 0){
        setHeight(0)
      } else{
        setHeight(e.target.value)
      }
    handleCubagem()
  };
  const handleWidth = (e) => {
    
      if(e.target.value.length === 0){
        setWidth(0)
      } else {
        setWidth(e.target.value)
      }
    handleCubagem()  
  };
  const handleLength = (e) => {
    
      if(e.target.value.length === 0){
        setLength(0)
      } else {
        setLength(e.target.value)
      }
    handleCubagem()
  };
  const handleVolAmount = (e) => {
    setVolAmount(e.target.value)
      if(e.target.value.length === 0){
        setVolAmount(0)
      } else {
        setVolAmount(e.target.value)
      }
    handleCubagem()
  };
  const handleCubagem = () =>{
    setCubage(300*height*width*length*volAmount)
  }

  return (
    <Box sx={{ bgcolor: "background.paper", width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Itens do Frete" {...a11yProps(0)} />
          <Tab label="Notas Fiscais" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="primeirapart">
            <TextField sx={{ m: 1, width: "30%" }} id="outlined-read-only-input" disable placeholder="Total Volume"  value={volAmount> 0 ? volAmount :''}InputProps={{readOnly: true,}}/>
            <TextField sx={{ m: 1, width: "30%"}} id="outlined-read-only-input" disable placeholder="Total Cubagem" InputProps={{readOnly: true,}}/>
            <TextField  sx={{ m: 1, width: "30%" }} id="outlined-read-only-input" disable placeholder="Total Peso Real" value={weight > 0 ? weight + ' KG':''} InputProps={{readOnly: true,}}/>
            
          </div> 
          <div className="segundapart">
            <TextField sx={{ m: 1,width:'12%'}}onChange={handleFreigth} value={codFreight} required id="outlined-required" label="Cód Frete"/>
            <TextField sx={{m: 1,width:'30%'}}onChange={handleInputChange} required id="outlined-required" label="Descrição da Carga"/>
            <Button    sx={{m: 1,width:'8%'}} variant="outlined">Buscar</Button>
            <TextField sx={{m: 1,width:'30%'}}onChange={handleInputChange} required id="outlined-required" label="Tipo de Volume"/>
            <Button sx={{m: 1,width:'8%'}} variant="outlined">Buscar</Button>
          </div>
          <div value={newItem} className="terceipart">
            <TextField sx={{ m: 1, width: "15%" }}onChange={handleVolAmount,handleVolAmountNumber} value={volAmount}requiredid="outlined-number"label="Qtd Vol"InputLabelProps={{shrink: true}}/>
            <TextField sx={{ m: 1, width: "15%" }}onChange={handleHeight,handleHeightNumber} value={height}requiredid="outlined-number"label="Altura"InputLabelProps={{shrink: true}}/>
            <TextField sx={{ m: 1, width: "15%" }}onChange={handleWidth,handleWidthNumber} value={width}requiredid="outlined-number"label="Largura"InputLabelProps={{shrink: true}}/>
            <TextField sx={{ m: 1, width: "15%" }}onChange={handleLength,handleLengthNumber} value={length} requiredid="outlined-number"label="comprimento"type="text"InputLabelProps={{shrink: true}}/>
            <TextField sx={{ m: 1, width: "15%" }} id="outlined-read-only-input" disable  placeholder="Peso Cubado" value={cubage > 0 ? cubage :''}InputProps={{shrink: true}}/>
            <TextField sx={{ m: 1, width: "15%" }}onChange={handleWeight,handleWeightNumber} value={weight}requiredid="outlined-number" label="Peso Real" InputLabelProps={{shrink: true}}/>
          </div>
          <div className="itens"> 
            <Button sx={{ m: 1,width:'50%'}}variant="outlined">Adicionar Item</Button>
            <Button sx={{ m: 1,width:'50%'}} onChange={handleNewItem} variant="outlined">Adicionar Outro Item</Button>
          </div>

        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="quartapart">
            <TextField sx={{ m: 1,width:'11%'}}onChange={handleFreigth} value={codFreight} required id="outlined-required" label="Cód Frete"/>
            <TextField sx={{m: 1,width:'19%'}}onChange={handleInputChange} required id="outlined-required" label="Chave da Nota Fiscal"/>
            <Button    sx={{m: 1,width:'8%'}} variant="outlined">Buscar</Button>
            <TextField sx={{m: 1,width:'8%'}}onChange={handleInputChange,handleNNfNumber} value={nNf}required id="outlined-required" label="Nº NF"/>
            <TextField sx={{m: 1,width:'20%'}}onChange={handleInputChange} required  mask='99.999.999/9999-99'  id="outlined-required" label="CNPJ Remetente"/>
            <TextField sx={{m: 1,width:'20%'}}onChange={handleInputChange} required   mask='99.999.999/9999-99' id="outlined-required" label="CNPJ Destino"/>
          </div>
          <div className="quintapart">
            <TextField sx={{m: 1,width:'30%'}}onChange={handleInputChange} required id="outlined-required" label="Valor"/>
            <Button    sx={{m: 1,width:'8%'}} variant="outlined">Anexar</Button>
            <Button    sx={{m: 1,width:'50%'}} variant="outlined">Atualizar</Button>
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
