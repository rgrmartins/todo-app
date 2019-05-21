import Axios from 'axios'

//URL BackEnd
const URL = 'http://localhost:3003/api/todos'

//criar a Actions para alterar o description
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

//Criar Actions de pesquisa no banco
export const search = () => {
    return (dispatch, getState) => {
        //pegando o description do store (não é boa pratica mas foi funcional)
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}` : ''
        const request = Axios.get(`${URL}?sort=-createdAt${search}`)
                            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

//Criar Action de Adição ao banco
export const add = (description) => {
    return dispatch => {
        Axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

//Não precisa criar o type dos reducers nessa pq no backend ele ja retorna o objeto atualizado,
//devido as regras de negocio do backend
//Criar Action de marcar como concluído
export const markAsDone = todo => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
                .then(resp => dispatch(search()))
    }
}

//Criar Action de marcar como pendente
export const markAsPending = todo => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
                .then(resp => dispatch(search()))
    }
}

//Criar Action de remover um TODO
export const remove = todo => {
    return dispatch => {
        Axios.delete(`${URL}/${todo._id}`)
                .then(resp => dispatch(search()))
    }
}

//Criar Action de limpar formulário
export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}