import React from 'react'
import FoldersData from '../Data'
import '../Stylesheets/Folders.css'
import pdf from '../Stylesheets/Images/adobe.png'
import csv from '../Stylesheets/Images/csv.png'
import fileFolder from '../Stylesheets/Images/folder.png'
import Files from '../Components/Files'
import { nameSort, dateSort, sizeSort } from '../utils'

const FoldersOrFiles = ({ handleClick, folderItemElement, toggleInformation, sortValue, columnReverse, filter }) => {

    const filteredData = !filter ? FoldersData :
        FoldersData.filter(item => RegExp(filter.toLowerCase().trim()).test(item.name.toLowerCase().trim()))

    const folderSort = !sortValue ? filteredData :
        sortValue === 'added' ? filteredData.sort(dateSort) :
            sortValue === 'name' ? filteredData.sort(nameSort) : filteredData.sort(sizeSort)

    const columnOrder = !columnReverse ? 'column' : 'column-reverse'

    const style = { flexDirection: columnOrder }

    return (
        <div
            style={style}
            className='Folders'>
            {folderSort.map((folder, index) => {

                const arrow = toggleInformation && folderItemElement === index ? 'down' : 'right'

                const imageSource = folder.type === 'pdf' ? pdf :
                    folder.type === 'csv' ? csv : fileFolder

                return (
                    <div
                        className='Folders__files'
                        key={folder.name}>
                        <div className='Folders__item' >
                            <div className='Folders__image'>
                                <img
                                    src={imageSource}
                                    alt={folder.type} />
                                <p>{folder.size}Mb</p>
                            </div>
                            <div className='Folders__information'>
                                <p className='Folders__name'>{folder.name}</p>
                                <p className='Folders__added'>{folder.added}</p>
                            </div>
                            {folder.type === 'folder' && <i onClick={() => handleClick(index)} className={`fas fa-chevron-${arrow} fa-2x`}></i>}
                        </div>
                        {
                            folderItemElement === index && toggleInformation &&
                            <Files AllFiles={folder.files} />
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default FoldersOrFiles