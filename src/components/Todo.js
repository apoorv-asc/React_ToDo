import React from 'react'
import { List, ListItem, ListItemText, Button} from '@material-ui/core'
import './Todo.css'
import db from '../firebase'

function Todo(props) {
    console.log(props);
    return (
        <>
        <List className="todo_list">
            <ListItem>
                <ListItemText primary={props.todo.todo} />
            </ListItem>
            <Button onClick={events => db.collection('todos').doc(props.todo.id).delete()}>Delete me</Button>
        </List>
        </>
    )
}

export default Todo
