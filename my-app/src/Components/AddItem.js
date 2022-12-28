import React, { useRef, useState } from 'react'
import { addItem } from '../utils/methods'
import swal from 'sweetalert'
function AddItem({ updateParentData, numOfItems }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const titleRef = useRef(null);


    const resetInputs = () => {
        setTitle("")
        setDescription("")
    }

    const submitAction = (e) => {
        e.preventDefault()
        if (title.trim() && description.trim()) {
            addItem(
                {
                    id: numOfItems + 1,
                    title: title.trim(),
                    description: description.trim()
                }
            )
            resetInputs()
            updateParentData()
            titleRef.current.focus()
        }
        else {
            swal({
                title: "Warning",
                text: "Please Insert Title And Description",
                icon: "warning",
            });
        }
    }


    return (
        <div className='add-item'>
            <form onSubmit={submitAction} data-aos="fade-down">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    ref={titleRef}
                    placeholder="Title"

                />
                <textarea
                    type="text"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    placeholder="Description ..."
                />

                <button 
                className='add-button '
                 data-aos="fade-up" 
                 data-aos-mirror="true" >Add Item</button>
            </form>
        </div>
    )
}

export default AddItem
