import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

/**
 * Table Excel
 */
export class Table extends ExcelComponent {
  static className = 'excel__table'
  /**
     *
     * @return {string}
     */
  toHtml() {
    return createTable();
  }
}
