import { ListItem, ListItemText, List, ListItemAvatar, Modal, makeStyles, Button} from '@material-ui/core'
import "./Todo.css";
import React, {useState} from 'react'; 
import db from "./Firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { OpenInBrowser } from '@material-ui/icons';
/*Breaks up the code so that it looks cleaner and 
makes it easier to style it without making the main code look messy*/

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen (true);
    };

const updateTodo = () => {
    //Update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set({
        todo: input
    }, {merge: true});

    setOpen(false);
}

    return (
        <>
        <Modal
            open = {open}
            onClose = {e => setOpen(false)}
        >
            <div className = {classes.paper}>
                <form>
                    <input placeholder = {props.todo.todo} value = {input} onChange = {event => setInput(event.target.value)}/>
                    <Button variant = "contained" color = "primary" onClick = {updateTodo} type = "submit">Update Todo</Button>
                </form>
    
            </div>     
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary = {props.todo.todo} secondary = "Dummy headline >:("/>
            </ListItem>
            <button onClick = {e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick = {event => db.collection("todos").doc(props.todo.id).delete()} />
            {/*Creates an delete button that deletes the todos from the database and the page*/}
        </List>
        </>
    )
}

export default Todo
