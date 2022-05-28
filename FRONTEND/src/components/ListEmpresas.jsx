import React,{Component} from 'react';
import { variable } from '../service/API';


export class ListEmpreas extends Component{

    constructor(props){
        super(props);

        this.state={
            empresas:[],
            Id_Empresa:0,
            NomeFantasia:""
        }
    }

    refreshList(){
        fetch(variable.API_EMP+'Empresas',{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data => {
            this.setState({empresas:data})
        })
    }

    componentDidMount(){
        this.refreshList();
    }

    dataEmpresa(emp){
        // this.setState({
        //     Id_Empresa:   emp.Id_Empresa,
        //     NomeFantasia: emp.NomeFantasia
        // })
        alert('Available in next version')
    }


    render(){
        const {
            empresas,
            Id_Empresa,
            NomeFantasia
        }=this.state;

        return(
        <div className='listEmp'>
            <h1>Lista de empresas</h1>
               <table  className="table table-striped">
                   <thead>
                        <th>
                            Id Empresa
                        </th>

                        <th>
                          Nome da empresa
                        </th>

                        <th>
                        Options
                         </th>
                   </thead>
                   <tbody>
                       {empresas.map(emp=>
                        <tr key={emp.Id_Empresa}>
                            <td>{emp.Id_Empresa}</td>
                            <td>{emp.NomeFantasia}</td>
                            <tb>
                            <button type="button"
                            className="btn btn-light mr-1"
                            data-bs-toggle="modal"                            
                            // data-bs-target="#exampleModal"
                            onClick={()=>this.dataEmpresa(emp.Id_Empresa)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
                                </svg>
                                </button>
                            </tb>
                        </tr>)}
                   </tbody>
               </table>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ></button>
                    </div>

                        {/* <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">DepartmentName</span>
                                <input type="text" className="form-control"
                                value={Department_Name}
                                onChange={this.changeDepartmentName}/>
                            </div>

                                {Id_Department==0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={()=>this.createClick()}
                                >Create</button>
                                :null}

                                {Id_Department!=0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={()=>this.updateClick()}
                                >Update</button>
                                :null}
                        </div> */}
                    </div>
                </div> 
            </div>
        </div>
        )
    }
   
}

