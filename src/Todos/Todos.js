import { useState } from "react";

function Todos({todos}) {
    return (
        <div className='todos'>
            {todos.map((todo, index) => {
                return (
                    <div key={index}>{todo.title}</div>
                )

            })}
        </div>
    );
}

export default Todos;