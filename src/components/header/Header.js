import {ExcelComponent} from '@core/ExcelComponent';

/**
 * Class for Header Excel
 */
export class Header extends ExcelComponent {
  static className = 'excel__header'
  /**
     *
     * @return {string}
     */
  toHtml() {
    return '<div>Header</div>';
  }
}
