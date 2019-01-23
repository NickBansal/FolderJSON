import React from 'react'
import FoldersData from '../Data'
import '../Stylesheets/Folders.css'
import pdf from '../Stylesheets/Images/adobe.png'
import csv from '../Stylesheets/Images/csv.png'
import fileFolder from '../Stylesheets/Images/folder.png'

const Folders = () => {
    return (
        <div className='Folders'>
            {FoldersData.map(folder => {

                const imageSource = folder.type === 'pdf' ? pdf :
                folder.type === 'csv' ? csv : fileFolder 

                const folderDate = folder.added ? <p className='Folders__added'>{folder.added}</p> : 
                <i className="fas fa-chevron-right"></i>

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
                            {folderDate}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Folders