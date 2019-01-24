import React from 'react'
import '../Stylesheets/FilterForm.css'

const FilterForm = ({ handleSubmit }) => {
    return (
        <div>
            <form onChange={(e) => {
                e.preventDefault()
                handleSubmit(e.target.value)}}>
                <input type='text' placeholder='Filter...' />
            </form>
        </div>
    )
}

export default FilterForm