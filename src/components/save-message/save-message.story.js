'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('SaveMessage with isSaving = null', () => (
  <div style={{ background: '#ccc' }}>
    Message: "<SaveMessage isSaving={null} />"
  </div>
))

stories.add('SaveMessage with isSaving = true', () => (
  <div style={{ background: '#ccc' }}>
    Message: "<SaveMessage isSaving={true} />"
  </div>
))

stories.add('SaveMessage with isSaving = false', () => (
  <div style={{ background: '#ccc' }}>
    Message: "<SaveMessage isSaving={false} />"
  </div>
))
