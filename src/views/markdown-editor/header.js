'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import SaveMessage from 'components/save-message'

const MarkdownEditorHeader = ({ isSaving, handleCreate, handleRemove }) => (
  <header className='editor-header'>
    <SaveMessage isSaving={isSaving} />
    <Button onClick={handleCreate} kind='success'>
      Create new
    </Button>
    <Button onClick={handleRemove} kind='danger'>
      delete
    </Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
