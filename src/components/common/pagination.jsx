/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
  numberOfPage() {
    // destructuring the props object
    const { totalItemCount, itemPerPage } = this.props;

    // dont show pagination if itemPerpage is not set
    if (itemPerPage <= 0) return [];

    // calculate number of pages
    const pages = Math.ceil(totalItemCount / itemPerPage);

    // dont show pagination if there is only one page
    if (pages <= 1) return [];

    let numberOfPage = [];
    for (let i = 0; i < pages; i++) {
      numberOfPage[i] = i + 1;
    }

    return numberOfPage;
  }

  // implement active class to show current page
  activeClass(page) {
    let className = "page-item";
    className += page === this.props.currentPage ? " active" : "";
    return className;
  }

  render() {
    const { onPageChange } = this.props;
    return (
      <nav>
        <ul className="pagination">
          {this.numberOfPage().map(page => (
            <li key={page} className={this.activeClass(page)}>
              <a
                onClick={() => onPageChange(page)}
                className="page-link"
                href="javascript:void(0)"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

// PropTypes declaration for warning
Pagination.propTypes = {
  totalItemCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
