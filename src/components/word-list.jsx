/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class WordList extends Component {
  columns = [
    {
      key: "word",
      label: "Semantically Similar Words",
      content: synonym => (
        <Link
          to={`word-info/${this.props.currentPage}/${this.props.language}/${this.props.forWord}/${synonym.word}`}
        >
          {synonym.word}
        </Link>
      )
    },
    { key: "forWord", label: "For Word" },
    { key: "strength", label: "Strength" }
  ];

  render() {
    // render table
    const { synonyms, onSort, sortColumn } = this.props;
    return (
      <Table
        items={synonyms} // rows
        columns={this.columns} // columns
        onSort={onSort} // click event for sort
        sortColumn={sortColumn} // current sort settings
      />
    );
  }
}

export default WordList;
