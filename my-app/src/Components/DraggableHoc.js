import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
function DraggableHoc({ id,Component, childProps, index}) {
    return (
        <Draggable draggableId={"item-" + id} index={index}>
            {(provided) => (
                <Component
                    {...childProps}
                    innerRef={provided.innerRef}
                    provided={provided}
                />
            )}
        </Draggable>


    )
}

export default DraggableHoc
