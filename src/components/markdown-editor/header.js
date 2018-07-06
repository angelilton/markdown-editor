'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditorHeader = ({ isSaving, handleCreate, handleRemove }) => (
  <header className='editor-header'>
    <p className='save-message'>
      {isSaving ? 'saving...' : 'Saved!'}
    </p>
    <button onClick={handleCreate}>
      Create new
    </button>
    <button onClick={handleRemove} className='btn-remove'>
      delete
    </button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
