import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Options and Tools for working excel table
 */
export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'
  /**
     *
     * @return {string}
     */
  toHtml() {
    return '<div>Toolbar</div>';
  }
}
