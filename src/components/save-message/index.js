'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && (
    <p className='save-message'>
      {isSaving ? 'saving...' : 'Saved!'}
    </p>
  )
)

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
}

export default SaveMessage
