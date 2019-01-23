import React from 'react'
import FoldersData from '../Data'
import '../Stylesheets/Folders.css'
import pdf from '../Stylesheets/Images/adobe.png'
import csv from '../Stylesheets/Images/csv.png'
import fileFolder from '../Stylesheets/Images/folder.png'
import Files from '../Components/Files'

const Folders = ({ handleClick, folderItemElement, toggleInformation }) => {
    return (
        <div className='Folders'>
            {FoldersData.map((folder, index) => {

                const arrow = !toggleInformation ? 'right' : 'down'

                const imageSource = folder.type === 'pdf' ? pdf :
                    folder.type === 'csv' ? csv : fileFolder

                const folderInformation = folder.added ? <p className='Folders__added'>{folder.added}</p> :
                    <i onClick={() => handleClick(index)} className={`fas fa-chevron-${arrow} fa-2x`}></i>

                const newClassName = folder.added ? 'Folders__information' : 'Folders__toggle'

                return (
                    <div
                        className='Folders__files'
                        key={folder.name}>
                        <div className='Folders__item' >
                            <img
                                className='Folders__image'
                                src={imageSource}
                                alt={folder.type} />
                            <div className={newClassName}>
                                <p className='Folders__name'>{folder.name}</p>
                                {folderInformation}
                            </div>
                        </div>
                        {
                            folderItemElement === index && toggleInformation &&
                            <Files />
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Folders