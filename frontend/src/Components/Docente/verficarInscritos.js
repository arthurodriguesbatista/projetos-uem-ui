import React, { Component } from 'react'
import ReactTable from 'react-table'
import { NavLink } from 'react-router-dom'
import 'react-table/react-table.css'  
import NavBarDocente from './navBarDocente.js';

export class verificarInscritos extends Component {
    state = {'data' : [{
        name: 'Tanner Linsley',
        age: 26,
        curso:'Ciência da computação',
        requisitos: "Tenho todos os pré-requisitos",
        curiculo:"link",
        email: "ra105422@uem.br"
      },{
        name: 'Sandro Henrique',
        age: 20,
        curso:'Ciência da computação',
        requisitos: "Tenho todos os pré-requisitos",
        curiculo:"link",
        email: "ra98133@uem.br"
      }],
      'columns': [
        {
        Header: 'Nome',
        accessor: 'name',
      }, {
        Header: 'Ano da grauduação',
        accessor: 'age',
      }, {
        Header: 'Curso',
        accessor: 'curso'
      }, {
        Header: 'Pré-requisitos' , 
        accessor: 'requisitos'
      },{
        Header: 'Curículo',
        accessor: 'curiculo'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: "Ranque",
        id: "row",
        filterable: false,
        Cell: (row) => {
          return <div><select name="rank" className="custom-select" id="inputGroupSelect01" defaultValue="none">
          <option value="none" disabled>Ranque</option>
          <option value="1">Um</option>
          <option value="2">Dois</option>
      </select></div>;
        }
      }  

    ]
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.handleLancarEdital(this.state)
}


  render() {
    return (
        <div>
          <NavBarDocente></NavBarDocente>
          <div>
            <ReactTable
          data={this.state.data}
          columns={this.state.columns}
          defaultSortDesc={true}
          minRows={12}
      />
          <div >
              <button type="submit" value='Submit' onClick={(e) => this.onSubmit(e)} className="btn btn-dark" style={{float: 'right'}}> Lançar edital </button>
              <NavLink type="submit" className="btn btn-danger" to="/Docente/Projetos" >Voltar</NavLink>
            </div>
          </div>
          
      
      </div>
    )
  }
}

export default verificarInscritos
