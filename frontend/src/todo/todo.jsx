import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    
    constructor(props){
        super(props)
        //Estado inicial do projeto
        this.state = { description: '', list: []}
        //Assim o this aponta pra propria classe e não ficará nula
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh(){
        //Busca na api e ordena por ordem decrescente
        Axios.get(`${URL}?sort=-createdAt`)
                .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }

    handleAdd() {
        //criar uma variável com a descrição
        const description = this.state.description
        //Chamando a API (Método POST), o axios é baseado em Promise
        //adicionando tarefa
        Axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleChange(e){
        this.setState({ ...this.state, description: e.target.value})
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`)
                .then(resp => this.refresh())
    }
    
    render() {
        return (
            <div>
               <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
               <TodoForm description={this.state.description}
                        handleAdd={this.handleAdd} 
                        handleChange={this.handleChange}/>
               <TodoList list={this.state.list}
                            handleRemove={this.handleRemove}/>
            </div>
        )
    }
}