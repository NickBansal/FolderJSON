import React from 'react'
import '../Stylesheets/Buttons.css'

const buttonNames = ['name', 'added', 'size']

const SortButtons = ({ sortFolders }) => {
    return (
        <div className='Buttons'>
            {buttonNames.map((button, index) => {
                return (
                    <div key={index}>
                        <button 
                        onClick={() => sortFolders(button)}
                        className='Buttons__individual' >{button}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default SortButtons