import React from 'react'
import FoldersData from '../Data'

const Folders = () => {
    return (
        <div>
            <h1>FOlders</h1>
            {FoldersData.map(folder => {
                return (
                    <div>
                        <p>{folder.type}</p>
                        <p>{folder.name}</p>
                        <p>{folder.added}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Folders