import React from "react";
function ToDoItem(props) {
    return(
        <li>{props.todo.id} {props.todo.title}</li>
    )
}
function ToDoList1(props) {
    const styles={
        div:{
            margin:"0px auto",
            textAlign:"center",
            border:"1px solid",
            padding:"10px",
            width:"200px"
        },
        ul:{
            listStyle:"none",
            margin: 0,
            padding: 0
        }
    };
    const todos = [
        {id: 1, completed: false, title: "Learn JS"},
        {id: 2, completed: false, title: "Learn JSX"},
        {id: 3, completed: false, title: "Learn HTML"},
        {id: 4, completed: false, title: "Learn CSS"},
    ];
    return(
        <div style={styles.div}>
            <h1 className="red">To Do List</h1>
            <ul style={styles.ul}>
                {todos.map(todo=>{
                        return <ToDoItem todo={todo}  key={todo.id} />
                    }
                )}
            </ul>
        </div>
    )
}
export default ToDoList1