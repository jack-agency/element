import LayoutObserver from './layout-observer';
import { mapStates } from './store/helper';

export default {
  name: 'ElTableFooter',

  mixins: [LayoutObserver],

  render(h) {
    let sums = [];
    let trLines = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({ columns: this.columns, data: this.store.states.data });
    } else {
      this.columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.sumText;
          return;
        }
        const values = this.store.states.data.map(item => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach(value => {
          if (!isNaN(value)) {
            notNumber = false;
            let decimal = ('' + value).split('.')[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = '';
        }
      });
    }

    if (Array.isArray(sums) && sums.length >= 1 && sums.every(sum => Array.isArray(sum))) {
      trLines = sums.map(sum => ({ sums: [].concat(sum) }));
    } else {
      trLines = [ { sums } ];
    }

    return (
      <table
        class="el-table__footer"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this.columns.map(column => <col name={ column.id } key={column.id} />)
          }
          {
            this.hasGutter ? <col name="gutter" /> : ''
          }
        </colgroup>
        <tbody class={ [{ 'has-gutter': this.hasGutter }] }>
          {
            trLines.map(trLine => <tr>
              {
                this.columns.map((column, cellIndex) => {
                  const row = trLine.sums[cellIndex];

                  // we can specify the colspan for the footer independently from the table header/body
                  // if the row returns an object with a colspan key, assume its to change the colspan
                  // to specify the value with the colspan, you must specify the value key containing the desired value
                  // otherwise it will fallback to the column colspan from spanMethod and read the value from the sums index
                  const colspan = !!row && (typeof row === 'object' && !Array.isArray(row) && row !== undefined)
                    ? (row.colspan !== undefined ? row.colspan : column.colSpan)
                    : column.colSpan;

                  // remove the column when the colspan is set to 0
                  // this prevent larger columns from pushing content outside the table
                  if (colspan === 0) {
                    return;
                  }

                  const colvalue = !!row && (typeof row === 'object' && !Array.isArray(row) && row !== undefined)
                    ? (row.value !== undefined ? row.value : row)
                    : row;

                  const cellClass = !!row && (typeof row === 'object' && !Array.isArray(row) && row !== undefined)
                    ? (row.cellClassName !== undefined ? row.cellClassName : column.cellClassName)
                    : null;

                  return (<td
                    key={cellIndex}
                    colspan={ colspan }
                    rowspan={ column.rowSpan }
                    class={ [...this.getRowClasses(column, cellIndex), 'el-table__cell'] }
                  >
                    <div class={ ['cell', cellClass, column.labelClassName] }>
                      {
                        colvalue
                      }
                    </div>
                  </td>);
                }).filter(Boolean)
              }
              {
                this.hasGutter ? <th class="el-table__cell gutter"></th> : ''
              }
            </tr>)
          }
        </tbody>
      </table>
    );
  },

  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: {
    table() {
      return this.$parent;
    },

    hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    },

    ...mapStates({
      columns: 'columns',
      isAllSelected: 'isAllSelected',
      leftFixedLeafCount: 'fixedLeafColumnsLength',
      rightFixedLeafCount: 'rightFixedLeafColumnsLength',
      columnsCount: states => states.columns.length,
      leftFixedCount: states => states.fixedColumns.length,
      rightFixedCount: states => states.rightFixedColumns.length
    })
  },

  methods: {
    isCellHidden(index, columns, column) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        let before = 0;
        for (let i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedLeafCount;
      } else if (!this.fixed && column.fixed) { // hide cell when footer instance is not fixed and column is fixed
        return true;
      } else {
        return (index < this.leftFixedCount) || (index >= this.columnsCount - this.rightFixedCount);
      }
    },

    getRowClasses(column, cellIndex) {
      const classes = [column.id, column.align, column.labelClassName];
      if (column.className) {
        classes.push(column.className);
      }
      if (this.isCellHidden(cellIndex, this.columns, column)) {
        classes.push('is-hidden');
      }
      if (!column.children) {
        classes.push('is-leaf');
      }
      return classes;
    }
  }
};
