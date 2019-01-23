import React from 'react'
import '../Stylesheets/FilterForm.css'

const FilterForm = ({ handleSubmit }) => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(e.target[0].value)}}>
                <input type='text' placeholder='Filter...' />
            </form>
        </div>
    )
}

export default FilterForm