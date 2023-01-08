import React, { useState } from 'react'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import './App.css'



const item = {
  id: uuidv4(),
  name: "House"
}
const item2 = {
  id: uuidv4(),
  name: "Garage"
}
const item3 = {
  id: uuidv4(),
  name: "Mowe Yard"
}


const App = () => {
  const [text, setText] = useState('')
  const [state, setState] = useState({
    "todo": { //key = "todo":  data = {title: "todo", items: []}
      title: "Todo",
      items: [item]
    },
    "in-Progress": {
      title: "In Progress",
      items: [item2]
    },
    "completed": {
      title: 'Completed',
      items: [item3]
    }
  })

  const handleDragEnd = (data) => {
    let des = data.destination
    let src = data.source
    if (!des) {
      return null;
    }
    if (des.index === src.index && des.droppableId === src.droppableId) {
      return null;
    }
    //creating a copy of the item we are "deleting from one list" so we can set it in another list
    const itemCopy = {
      ...state[src.droppableId].items[src.index]
    }
    //here we are updating "setting state" using prev which gives us a guaranteed snapshot of our previous state which is useful when your new state depends on the previous state. 
    setState(prev => {
      // copying previous state
      prev = { ...prev }
      //grabbing which ever column contains the draggable were dragging .items "entering the items of that column" than with splice we are removing what ever item were grabbing that one.
      prev[src.droppableId].items.splice(src.index, 1)
      // adding item to new array location
      prev[des.droppableId].items.splice(des.index, 0, itemCopy)
      return prev
    })

  }
  const handleTodo = () => {
    const newTodo = {
      id: uuidv4(),
      name: text
    }
    setState(prev => {
      return {
        ...prev,
        todo: {
          title: 'Todo',
          items: [...prev.todo.items, newTodo]
        }
      }
    })
    setText('')
  }



  return (
    <div className='container'>
      <div className='input'>
        <label htmlFor='addTodo'>Enter a Task/Todo</label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleTodo}>Add</button>
      </div>
      <div className='App'>


        <DragDropContext onDragEnd={handleDragEnd} >

          {
            _.map(state, (data, key) => {
              return (
                <div className='column' key={key}>
                  <h3>{data.title}</h3>

                  <Droppable droppableId={key}>
                    {(provided, snapshot) => {
                      return (
                        <div ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={`col ${snapshot.isDraggingOver && "overCol"}`}
                        >
                          {data.items.map((el, index) => {
                            return (
                              <Draggable key={el.id} draggableId={el.id} index={index} >
                                {(provided, snapshot) => {
                                  return (
                                    <div className={`item ${snapshot.isDragging && "dragging"}`}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      {el.name}

                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              )
            })
          }

        </DragDropContext>
      </div >


    </div>
  );
}

export default App
// <Droppable /> has to have a droppalbeId prop, and that id has to be a string which is why in our useState we set the key to a string id
//returning <div elements for "columns" has to have a ref prop ref={provided.innerRef} as a reference so react can 
//tell that that div accepts droppable items. 
//draghandleprops decided what part of the item is the grabbable event, <span> {...provided.dragHandleProps} Drag by me</span> 
// exp output // mowe the yardDrag by me// this would be the item and mowe the yard wouldn't be grabbable, drag by me would be. 
//{provided.placeholder} expands the div column when we hover something that is droppable over it. 
//onDragEnd prop for the DragDropContext shows 2 key things via data source"where it came from" and destination"where it was going"
//we use onDragEnd to switch items between columns, "remove", "store", and render items "column/ container"
//index is index of the item we are changing/ being dragged
