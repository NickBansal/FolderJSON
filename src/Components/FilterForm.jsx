import React from 'react'
import '../Stylesheets/FilterForm.css'

const FilterForm = ({ handleChange }) => {
    return (
        <div>
            <form onChange={(e) => {
                handleChange(e.target.value)}}>
                <input type='text' placeholder='Filter...' />
            </form>
        </div>
    )
}

export default FilterForm