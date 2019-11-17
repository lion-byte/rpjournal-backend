const sanitizeHtml = require('sanitize-html')

/** @type {sanitizeHtml.IOptions} */
const defaultSanitizeConfig = {
  allowedTags: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'p',
    'a',
    'ul',
    'ol',
    'nl',
    'li',
    'b',
    'i',
    'strong',
    'em',
    'strike',
    's',
    'code',
    'hr',
    'br',
    'div',
    'table',
    'thead',
    'caption',
    'tbody',
    'tr',
    'th',
    'td',
    'pre'
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src']
  },
  selfClosing: ['img', 'br', 'hr'],
  // URL schemes we permit
  allowedSchemes: ['http', 'https', 'mailto'],
  allowProtocolRelative: true
}

/**
 * @param {string} html
 * @param {sanitizeHtml.IOptions} [sanitizeConfig]
 * @returns {string}
 */
const sanitize = (html = '', sanitizeConfig = {}) => {
  /** @type {sanitizeHtml.IOptions} */
  const config = { ...defaultSanitizeConfig, ...sanitizeConfig }
  return sanitizeHtml(html, config)
}

module.exports = { sanitize }
