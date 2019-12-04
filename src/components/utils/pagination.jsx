/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import _ from "lodash"; // Upgraded version of Underscore Framework

// implementing pagination function using lodash library
export function pagination(items, currentPage, itemsPerPage) {
  // evaluate starting index
  const startIndex = (currentPage - 1) * itemsPerPage;

  // return value
  return _(items)
    .slice(startIndex)
    .take(itemsPerPage)
    .value();
}
