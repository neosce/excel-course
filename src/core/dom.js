/**
 * Optimize render for DomListener
 */
class Dom {
  /**
   * @constructor
   * @param {(string | Object)} selector
   */
  constructor(selector) {
    // #app
    this.$el = typeof selector === 'string' ?
        document.querySelector(selector) :
        selector
  }

  /**
   * @return {Object}
   * @param {Object} html
   */
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html

      return this
    }

    return this.$el.outerHTML.trim()
  }

  /**
   * Mini polyfill
   * @return {Object}
   * @param {Object} node - Dom element
   */
  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }

  /**
   * Add Listener
   * @param {event} eventType
   * @param {function} callback
   */
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  /**
   * Remove listener
   * @param {event} eventType
   * @param {function} callback
   */
  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  /**
   * @return {Object} context this (JS Template Chain)
   */
  clear() {
    this.html('')
    return this
  }
}

/**
 * Function export
 * @return {Object}
 * @param {(string | Object)} selector
 */
export function $(selector) {
  return new Dom(selector)
}

// Utils
$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }

  return $(el)
}
