import React from 'react'
import '../Stylesheets/Files.css'

const Files = ({ AllFiles }) => {
    return (
        <div>
            {AllFiles.map(file => {
                return (
                    <div key={file.name} className='File'>
                        <p>{file.type}</p>
                        <p>{file.name}</p>
                        <p>{file.added}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Files