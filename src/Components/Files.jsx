import React from "react";
import "../Stylesheets/Files.css";

const Files = ({ AllFiles }) => {
  return (
    <div>
      {AllFiles &&
        AllFiles.map(file => {
          return (
            <div key={file.name}>
              <div className="File">
                <p>
                  {file.name} - {file.type}
                </p>
                <p>{file.added}</p>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default Files;
