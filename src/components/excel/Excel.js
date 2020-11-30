import {$} from '@core/dom'

/**
 * Excel class component
 */
export class Excel {
  /**
   * Defines the basis for working with the application
   * @constructor
   * @param {string} selector - determines where to draw the application
   * @param {Object} options - includes a list
   */
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  /**
   * Get root nodes
   * @return {Object}
   */
  getRoot() {
    const $root = $.create('div', 'excel')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // DEBUG
      if (component.name) {
        window['c' + component.name] = component
      }
      $el.html(component.toHtml())
      $root.append($el)

      return component
    })

    return $root
  }

  /**
   * Render components at HTML
   */
  render() {
    // this.$el.append(document.createElement('h1'))
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
    /* const node = document.createElement('h1')
    node.textContent = 'Test'
    this.$el.append(node) */
    this.$el.append(this.getRoot())

    this.components.forEach(component => component.init())
  }
}
