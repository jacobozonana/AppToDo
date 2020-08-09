import React from 'react';
import DeletTodo from '../DeletTodo/DeletTodo';



const TodoCard = (props) => {
    const background ={
        "1": "card text-white bg-danger",
        "2": "card text-white bg-warning",
        "3": "card text-white bg-success"
    };
    return (
        <div className={background[props.priority]}>
            <div className="card-body">
                <div className="card-title">
                    {props.name}
                </div>
                <div className="card-text">
                        {props.done ?  <p>Done</p> :  <p>Not Done</p>}
                    <DeletTodo _id={props._id} />
                </div>
            </div>
        </div>
    )
}

export default TodoCard
