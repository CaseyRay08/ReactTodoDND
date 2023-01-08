

// import React, { useState } from 'react'




// const App = () => {
//     const [userTodo, setUserTodo] = useState('')
//     const [todoStorage, setTodoStorage] = useState([])
//     const [editTodo, setEditTodo] = useState(null)
//     const [updateText, setUpdateText] = useState('')

//     const handleStorage = () => {
//         const newTodo = {
//             id: Date.now(),
//             title: userTodo
//         };
//         setTodoStorage(prev => [...prev, newTodo]);
//         setUserTodo('');
//     }
//     const handleDelete = (id) => {
//         const deleteTodo = todoStorage.filter(todo => todo.id !== id)
//         setTodoStorage(deleteTodo)
//     }
//     const handleEdit = (id) => {
//         setEditTodo(id)
//     }

//     const updateTodo = (id) => {
//         const editedTodo = todoStorage.map(todo => {
//             if (todo.id === id) {
//                 return {
//                     ...todo,
//                     title: updateText
//                 }
//             }
//             return todo;
//         })
//         setTodoStorage(editedTodo)
//         setUpdateText('')
//         setEditTodo(null)
//     }
//     console.log(todoStorage)
//     return (
//         <>
//             {editTodo ? (
//                 <div>
//                     <label htmlFor='editTodo'>Edit Your todo! </label>
//                     <input onChange={(e) => setUpdateText(e.target.value)} value={updateText} />
//                     <button onClick={() => updateTodo(editTodo)}>Change Todo!</button>
//                 </div>
//             ) : (

//                 <div>
//                     <label htmlFor='addTodo'>Add a todo! </label>
//                     <input onChange={(e) => setUserTodo(e.target.value)} value={userTodo} />
//                     <button onClick={handleStorage}>Add Todo!</button>
//                     <button onClick={() => setTodoStorage([])}>Reset</button>
//                 </div>
//             )}
//             {todoStorage.map(todo => {
//                 return <p key={todo.id}> {todo.title}
//                     <button onClick={() => handleEdit(todo.id)}>Edit</button>
//                     <button onClick={() => handleDelete(todo.id)}>Delete</button>
//                 </p>
//             })}
//         </>
//     )
// }

// export default App