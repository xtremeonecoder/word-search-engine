/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React, { Component } from "react";
import queryString from "query-string";
import _ from "lodash";
import { getSemanticallySimilarWords } from "../services/gavagai-service";
import Pagination from "./common/pagination";
import { pagination } from "./utils/pagination";
import WordList from "./word-list";
import Search from "./common/search";

class SearchWords extends Component {
  // Every time when setState function will be called
  // it will change state, and when state will be changed,
  // react will reload the render function.
  state = {
    word: "",
    search: "",
    language: "en",
    synonyms: [],
    currentPage: 1,
    itemPerPage: 10,
    sortColumn: { key: "title", order: "asc" }
  };

  // We will pull the movies and genre data only once
  // If we put these in state, every time onSetState
  // it will pull the movies and genres again and again
  async componentDidMount() {
    // get query string values
    const { page, word, language } = queryString.parse(
      this.props.location.search
    );

    // this if-block executes for back to previous page link
    if (word && language) {
      const result = await getSemanticallySimilarWords({
        language,
        word
      });

      // extract required data from api request result
      // and set  extracted data and other necessary data into state
      const currentPage = page ? parseInt(page) : 1;
      const synonyms = result.data.semanticallySimilarWords;
      this.setState({ synonyms, word, language, currentPage });
    }
  }

  // this event function is raised inside Search component
  // and fires on search form submission to send api call request
  // to the server and to get api return values as response
  onSearch = async ({ word, language }) => {
    // fetch similar words
    const result = await getSemanticallySimilarWords({
      language,
      word
    });

    // get synonyms
    let synonyms = [];
    if (result && result.data && result.data.semanticallySimilarWords)
      synonyms = result.data.semanticallySimilarWords;

    // set state
    this.setState({ synonyms, word, language, currentPage: 1 });
  };

  // we will set only current page and
  // call setState function to execute the script
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  // set current sortColumn into state on sort
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // set state on search
  handleSearch = ({ currentTarget: search }) => {
    this.setState({ search: search.value });
  };

  // prepare data for rendering
  getResult = () => {
    // get synonyms per word
    let allSynonyms = this.state.synonyms;

    // sort data as per table header
    const sortedSynonyms = _(allSynonyms).orderBy(
      [this.state.sortColumn.key],
      [this.state.sortColumn.order]
    );

    // get paginated items
    const synonyms = pagination(
      sortedSynonyms,
      this.state.currentPage,
      this.state.itemPerPage
    );

    return { synonyms, totalCount: allSynonyms.length };
  };

  render() {
    // get count
    const count = this.state.synonyms.length;

    // destructure state
    const { word, language, sortColumn, currentPage, itemPerPage } = this.state;

    // get result
    const { synonyms, totalCount } = this.getResult();
    //console.log("word: ", word);

    return (
      <div className="row">
        <div className="col">
          <Search onSearch={this.onSearch} word={word} language={language} />
          <h4>Total {totalCount} semantically similar word(s) found!</h4>
          {count > 0 && (
            <React.Fragment>
              <WordList
                forWord={word}
                language={language}
                synonyms={synonyms}
                onSort={this.handleSort}
                sortColumn={sortColumn}
                currentPage={currentPage}
              />
              <Pagination
                totalItemCount={totalCount}
                currentPage={currentPage}
                itemPerPage={itemPerPage}
                onPageChange={this.handlePageChange}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default SearchWords;
