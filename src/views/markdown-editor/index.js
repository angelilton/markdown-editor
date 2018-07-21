'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Files from './files'

const MardownEditor = ({ value, handleChange, getMarkup, textareaRef, files, handleOpenFile, ...props }) => (
  <section className='editor'>
    <Header {...props} handleChange={handleChange} />
    <Files files={files} handleOpenFile={handleOpenFile} />
    <textarea
      value={value}
      onChange={handleChange('value')}
      placeholder={'Digite aqui'}
      ref={textareaRef}
      autoFocus
    />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MardownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}
export default MardownEditor
