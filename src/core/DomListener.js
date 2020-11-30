import {capitalize} from '@core/utils';

/**
 * Adding and removing listeners
 */
export class DomListener {
  /**
   * @param {Object} $root - main element for Dom
   * @param {Array} listeners
   */
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provide for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  /**
   * Dom init listener
   */
  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)

      if (!this[method]) {
        const name = this.name || ''

        throw new Error(
            `Method ${method} is not implemented in ${name} Component`
        )
      }

      this[method] = this[method].bind(this)
      // Analog addEventListener
      this.$root.on(listener, this[method])
    })
  }

  /**
   * Dom remove listener
   */
  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)

      this.$root.off(listener, this[method])
    })
  }
}

/**
 * Pure function for only DomListener (method=>onMethod)
 * @return {string}
 * @param {string} eventName
 */
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
