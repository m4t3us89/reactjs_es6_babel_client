import api from '../../services/axios'
import { FaSortUp, FaSortDown } from 'react-icons/fa'
import React, { Component } from 'react'


import './styles.css'

export default class Ordenacao extends Component{
   state = {
       todos : []
   }


   componentDidMount(){
      this.todosP()
   } 

   async todosP(order='asc'){
        try{
            const { data : todos } = await api.get(`/order?order=${order}`)
            this.setState({
                todos
            })
            console.table(todos)
        }catch(err){
            console.log('Error', err)
        }
   }

   render(){
       const { todos } = this.state
       return (
           <>
            <div className="order">
                                <div>
                                <FaSortUp onClick={() => this.todosP('asc')}>asc</FaSortUp>
                                </div>
                                <div>
                                <FaSortDown onClick={() => this.todosP('desc')}>desc</FaSortDown>
                                </div>
                                <div>
                                    teste
                                </div>
                                </div>
                <h2>Todos</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <td >
                                <div className="order">
                                <div>
                                <FaSortUp onClick={() => this.todosP('asc')}>asc</FaSortUp>
                                </div>
                                <div>
                                <FaSortDown onClick={() => this.todosP('desc')}>desc</FaSortDown>
                                </div>
                                <div>
                                    teste
                                </div>
                                </div>
                            id</td>
                            <td >
                               
                            title</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(todo=> {
                            return (
                                <tr  key={todo.id}>
                                    <td>{ todo.title }</td>
                                    <td>{ todo.completed }</td>
                                </tr>
                            )    
                        })
                    }
                    </tbody>
                </table>
           </>
       )
   }
}
