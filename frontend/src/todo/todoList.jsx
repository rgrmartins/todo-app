import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const rendeRows = () => {
        //Garantido que a lista esteja setada nem que seja vazia
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} ></IconButton>
                </td>
            </tr>
        ))
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>Descrição</tr>
                <tr>Ações</tr>
            </thead>
            <tbody>
                {renderRows()}                
            </tbody>
        </table>
    )
}