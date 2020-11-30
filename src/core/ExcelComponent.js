import {DomListener} from '@core/DomListener'

/**
 * Main component Excel class
 */
export class ExcelComponent extends DomListener {
  /**
   * @constructor
   * @param {Object} $root
   * @param {Object} options
   */
  constructor($root, options= {}) {
    super($root, options.listeners);
    this.name = options.name || ''
  }
  /**
   * @return {string} Returns the component template
   */
  toHtml() {
    return ''
  }

  /**
   * Create in html listeners
   */
  init() {
    this.initDOMListeners()
  }

  /**
   * Destroy component on html
   */
  destroy() {
    this.removeDOMListeners()
  }
}
