'use strict'

import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import marked from 'marked'
import MarkdownEditor from './views/markdown-editor'

import './css/style.css'

import('highlightjs').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()

    this.clearState = () => ({
      id: v4(),
      title: '',
      value: ''
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        const newFile = {
          title: this.state.title || 'Sem Titulo',
          content: this.state.value
        }
        localStorage.setItem(this.state.id, JSON.stringify(newFile))
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: newFile
          }
        })
      }
    }

    this.cleateNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)

      const { [this.state.id]: id, ...files } = this.state.files

      this.setState({ files })
      this.cleateNew()
    }

    this.handleCreate = () => {
      this.cleateNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (filesId) => () => {
      this.setState({
        title: this.state.files[filesId].title,
        value: this.state.files[filesId].content,
        id: filesId
      })
    }
  }

  componentDidMount () {
    const files = Object.keys(localStorage)
    this.setState({
      files: files.filter(id => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/))
                  .reduce((acc, fileId) => ({
                    ...acc,
                    [fileId]: JSON.parse(localStorage.getItem(fileId))
                  }), {})
    })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 500)
  }

  componentWillMount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        files={this.state.files}
        title={this.state.title}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        handleChange={this.handleChange}
        handleSave={this.handleSave}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
        handleOpenFile={this.handleOpenFile}
       />
    )
  }
}
export default App
