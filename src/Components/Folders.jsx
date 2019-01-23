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
                return (
                    <div
                    className='Folders__item' 
                    key={folder.name}>
                        <img 
                        className='Folders__image'
                        src={imageSource} 
                        alt={folder.type}/>
                        <div className='Folders__information'>
                            <p className='Folders__name'>{folder.name}</p>
                            <p className='Folders__added'>{folder.added}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Folders