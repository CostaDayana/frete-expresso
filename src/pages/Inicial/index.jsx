import React from "react";
import DialogSelect from "../../Components/Dialogo";
import { TextField } from "@mui/material";
import './style.css'
import HorizontalLabelPositionBelowStepper from "../../Components/Steps";
import CustomToolbar from"../../Components/Tollbar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {CADASTRO} from "../../routes"

const Inicial =()=> {

    return(     
            <>
                <div className="container">
                    <h4 className="usuario"> Usuário: Roberto Eder </h4>
                    <h4 className="filial">Filial: PAGUE MENOS - SP </h4>
                    <div className="primeiraParte">
                        <div className="aberturaSoli">
                            <h5 >Abertura da Solicitação</h5>
                            <Button sx={{m:1}} component={Link} to={CADASTRO} variant="contained">Iniciar Solicitação de Frete Expresso</Button>
                        </div>
                        <div className="acompanharSoli">
                            <h5 >Acompanhar Solicitação</h5>
                            <TextField sx={{ m:1,minWidth: 50}}id="outlined-basic" label="Nº da Solicitação" variant="outlined" />
                            <Button sx={{ m: 1}}variant="outlined">Buscar</Button>
                        </div>
                    </div>
                    <div className="steps">
                        <HorizontalLabelPositionBelowStepper/>
                    </div>    
                    {/* <div className="tollbar">
                        <CustomToolbar/>
                    </div>    */}
                </div>
            </>

    );
}

export default Inicial;