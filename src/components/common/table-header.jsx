/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React, { Component } from "react";

class TableHeader extends Component {
  // implementing current sort column
  // and setting state raising event
  raiseSort = key => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.key === key) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.key = key;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  // implement sort icon for the table header
  getSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.key !== sortColumn.key) return null;

    if (sortColumn.order === "asc") return <i className="fa fa-sort-desc"></i>;
    return <i className="fa fa-sort-asc"></i>;
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.key}
              onClick={() => this.raiseSort(column.key)}
              className="clickable"
            >
              {column.label} {this.getSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
