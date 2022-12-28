import { useState } from 'react';
import AddItem from './Components/AddItem';
import Item from './Components/Item';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { getData, updateLocalStorageData } from './utils/methods'
import DraggableHoc from './Components/DraggableHoc'
import './App.css';
function App() {

  const [data, setData] = useState(getData());

  const updateData = () => {
    setData(getData())
  }

  const reorder = ({ source, destination }) => {
    const items = [...data];
    const [removedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, removedItem)
    setData(items)
    updateLocalStorageData(items)
  }

  const dragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    reorder(result)
  }
  return (
    <div className="App">
      <h1 data-aos="fade-up" >My Notes </h1>
      <AddItem updateParentData={updateData} numOfItems={data.length} />
      {!!data.length&& <DragDropContext onDragEnd={dragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className='items-list'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.map((item, index) => (
                <DraggableHoc
                  key={item.id}
                  id={item.id}
                  Component={Item}
                  childProps={{item,updateData}}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext> }
      {!!!data.length&& <p data-aos="zoom-in" className='empty-list-pragraph'>
        No Notes To Show
      </p> }
     






    </div >
  );
}

export default App;
