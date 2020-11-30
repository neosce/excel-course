import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Handles formulas that are stored in a table
 */
export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  /**
   * @constructor
   * @param {Object} $root
   */
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  /**
   *
   * @return {string}
   */
  toHtml() {
    return '<div class="input" contenteditable spellcheck="false"></div>';
  }

  /**
   * Event
   * @param {event} event
   */
  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim())
  }
}
