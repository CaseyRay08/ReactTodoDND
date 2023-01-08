<!-- Todo List
1 input a todo
2 storage for todo
3 render the list of todos
4 update todo
5 delete a todo
CRUD,  create read update delete. 

Drag N drop 
working with react-beautiful-dnd
<DragDropContext /> the wrapper for drag and drop table
<Droppable /> defining a div "or other tags" that accepts droppable items
<draggable /> declaring what can be dragged
<droppable /> need a ref prop, droppable provides a provided, and snapshot prop ref={provvided.innerRef}
<droppable /> has to have a droppableId prop which needs to be a string.

other Notes  <Droppable /> has to have a droppalbeId prop, and that id has to be a string which is why in our useState we set the key to a string id
returning <div elements for "columns" has to have a ref prop ref={provided.innerRef} as a reference so react can 
tell that that div accepts droppable items. 
draghandleprops decided what part of the item is the grabbable event, <span> {...provided.dragHandleProps} Drag by me</span> 
exp output // mowe the yardDrag by me// this would be the item and mowe the yard wouldn't be grabbable, drag by me would be. 
{provided.placeholder} expands the div column when we hover something that is droppable over it. 
onDragEnd prop for the DragDropContext shows 2 key things via data source"where it came from" and destination"where it was going"
we use onDragEnd to switch items between columns, "remove", "store", and render items "column/ container"
index is index of the item we are changing/ being dragged

 -->
