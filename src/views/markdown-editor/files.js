'use strict'

import React from 'react'

const Files = ({ files, handleOpenFile }) => (
  <div className='files-list-container'>
    <h2>Files</h2>
    <ul>
      {Object.keys(files).map((filesId) => (
        <li key={filesId}>
          <button onClick={handleOpenFile(filesId)}>
            {files[filesId].title}
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default Files
