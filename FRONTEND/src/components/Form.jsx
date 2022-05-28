import React,{Component} from "react";
import { variable } from "../service/API";
import InputMask from 'react-input-mask';

export class Form extends Component{

    constructor(props) {
        super(props);

        this.state={
            fName:"",
            rSocial:"",
            cnpjId:"",
            eemail:"",
            telNumber:""
        }
    }

    sendData(){
        if(this.state.fName == ""){
            alert("Favor preencher campo Nome fantasia");
        }else if(this.state.rSocial == ""){
            alert("Favor preencher campo razão social");
        }else if(this.state.cnpjId == ""){
            alert("Favor preencher campo CNJP");
        }else if(this.state.eemail == ""){
            alert("Favor preencher campo de email");
        }else{
            fetch(variable.API_EMP+'Empresas',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    NomeFantasia:this.state.fName,
                    RazaoSocial:this.state.rSocial,
                    CNPJ:this.state.cnpjId,
                    Email:this.state.eemail,
                    Telefone:this.state.telNumber
                })
            })
            .then(res=>res.json())
            .then((result)=>{
                alert(result);
                this.refreshList();
            },(error)=>{
                alert('Ops !, alguma coisa deu errado');
            })
        }


    }

    changeCompanytName = (e) =>{
        this.setState({fName:e.target.value});
    }
    
    chanceRsoci = (e) =>{
        this.setState({rSocial:e.target.value});
    }

    changecnpj = (e) => {
        this.setState({cnpjId:e.target.value});
    }

    changemail = (e) => {
        this.setState({eemail:e.target.value});
    }

    changeTnumber = (e) => {
        this.setState({telNumber:e.target.value});
    }

    render(){
        const {
            fName,
            rSocial,
            cnpjId,
            eemail,
            telNumber       
        }=this.state;

        return(

            
            <main class="cadaEmp">
                <form>
                <img src="./image/Yin_yang.svg.png"  class="imga"/>
                <h1 class="h3 mb-3 fw-normal">Cadastrar nova Empresa</h1>

                    <input  required type="text" value={fName} onChange={this.changeCompanytName} class="form-control top" placeholder="Nome fantasia" autocomplete="off" autofocus />
                    <input required type="text" value={rSocial} onChange={this.chanceRsoci} class="form-control middle" placeholder="Razão social" autocomplete="off"  />
                    <InputMask mask="99.999.999/9999-99" required value={cnpjId} onChange={this.changecnpj}  class="form-control middle" placeholder="CNPJ" maxlength="19" autocomplete="off" ></InputMask>
                    <input type="email" value={eemail} onChange={this.changemail} class="form-control middle"  placeholder="Email"  autocomplete="off" required/>
                    <InputMask mask="(99) 9 9999-9999" value={telNumber} onChange={this.changeTnumber} class="form-control bottom" placeholder="Telefone com DDD" maxlength="20" autocomplete="off"></InputMask>
                    
                    <button class="w-100 btn btn-lg btn-primary" onClick={()=>this.sendData()}>Cadastrar</button>
            
                </form>
            </main>
        )
    }
    
}
