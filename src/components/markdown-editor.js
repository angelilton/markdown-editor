'use strict'

import React, { PropTypes } from 'react'
import Header from './markdown-editor-header'

const MardownEditor = ({ value, handleChange, isSaving, getMarkup }) => (
  <section className='editor'>
    <Header isSaving={isSaving} />
    <textarea value={value} onChange={handleChange} placeholder={'Digite aqui'} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MardownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  getMarkup: PropTypes.func.isRequired
}
export default MardownEditor
