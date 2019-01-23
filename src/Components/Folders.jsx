import React from 'react'
import FoldersData from '../Data'
import '../Stylesheets/Folders.css'
import pdf from '../Stylesheets/Images/adobe.png'
import csv from '../Stylesheets/Images/csv.png'
import fileFolder from '../Stylesheets/Images/folder.png'

const Folders = ({ handleClick }) => {
    return (
        <div className='Folders'>
            {FoldersData.map((folder, index) => {

                const imageSource = folder.type === 'pdf' ? pdf :
                folder.type === 'csv' ? csv : fileFolder 

                const folderInformation = folder.added ? <p className='Folders__added'>{folder.added}</p> : 
                <i onClick={() => handleClick(index)} className="fas fa-chevron-right fa-2x"></i>

                const newClassName = folder.added ? 'Folders__information' : 'Folders__toggle'

                return (
                    <div
                    className='Folders__item' 
                    key={folder.name}>
                        <img 
                        className='Folders__image'
                        src={imageSource} 
                        alt={folder.type}/>
                        <div className={newClassName}>
                            <p className='Folders__name'>{folder.name}</p>
                            {folderInformation}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Folders