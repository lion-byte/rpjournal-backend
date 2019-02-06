import React from 'react'
import { convertFromRaw, convertToRaw } from 'draft-js'
import { convertToHTML, convertFromHTML } from 'draft-convert'
import { BLOCK_TYPE, ENTITY_TYPE, INLINE_STYLE } from 'draftail'

const defaultExportConfig = {
  blockToHTML: block => {
    switch (block.type) {
      case BLOCK_TYPE.ATOMIC:
        return { start: '', end: '' }
      default:
        return null
    }
  },

  entityToHTML: (entity, originalText) => {
    switch (entity.type) {
      case ENTITY_TYPE.HORIZONTAL_RULE:
        return <hr />

      default:
        return originalText
    }
  },

  styleToHTML: style => {
    switch (style) {
      case INLINE_STYLE.STRIKETHROUGH:
        return <s />

      default:
    }
  }
}

/**
 * @param {import('draft-js').RawDraftContentState} contentState
 * @param {any} [exportConfig]
 * @returns {string} HTML
 */
export const exportHTML = (contentState, exportConfig = {}) => {
  const config = { ...defaultExportConfig, ...exportConfig }

  if (!contentState) {
    return ''
  }

  return convertToHTML(config)(convertFromRaw(contentState))
}

const defaultImportConfig = {
  htmlToBlock: nodename => {
    switch (nodename) {
      case 'value':
        return BLOCK_TYPE.ATOMIC

      default:
        return null
    }
  },

  htmlToEntity: (nodename, node, createEntity) => {
    switch (nodename) {
      case 'hr':
        return createEntity(ENTITY_TYPE.HORIZONTAL_RULE, 'IMMUTABLE', {})

      default:
        return null
    }
  }
}

export const importHTML = (html = '', importConfig = {}) => {
  const config = { ...defaultImportConfig, ...importConfig }

  if (!html) {
    return null
  }

  return convertToRaw(convertFromHTML(config)(html))
}
