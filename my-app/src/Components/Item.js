import React from 'react'
import { deleteItem as deleteMethod } from '../utils/methods'
import swal from 'sweetalert'
function Item({ item: { id, title, description }, innerRef, provided, updateData }) {


    const deleteItem = () => {
        swal({
            title: "Delete?",
            text: "Are You Sure You Want To Delete This Note",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteMethod(id);
                    updateData()
                }
            });
    }





    return (
        <div
            className='container'
            ref={innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
            <div className='item'
                data-aos='zoom-in'
                data-aos-once="true"

            >
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
                <button className='image-button' onClick={deleteItem}><img src='https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png' alt='Trash Icon' /></button>
            </div>
        </div>
    );
}

export default Item;
