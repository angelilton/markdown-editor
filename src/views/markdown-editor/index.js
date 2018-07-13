'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'

const MardownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props }) => (
  <section className='editor'>
    <Header {...props} />
    <textarea
      value={value}
      onChange={handleChange}
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
