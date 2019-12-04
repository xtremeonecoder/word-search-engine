/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React from "react";
import Joi from "@hapi/joi";
import Form from "./form";
import getLanguages from "../../sources/languages";

class Search extends Form {
  state = {
    languages: [],
    data: { word: "", language: "en" }
  };

  // define validation schema for search form
  schema = {
    word: Joi.string(),
    language: Joi.string()
  };

  componentDidMount() {
    // prepare language array of objects
    const languages = [
      { key: "", value: "Select Language" },
      ...getLanguages()
    ];

    // get props data
    const { word, language } = this.props;
    //console.log("Search-word: ", word);
    this.setState({ data: { word, language }, languages });
  }

  doSubmit = () => {
    // here I raised the event which is defined
    // in the parent component of this component
    this.props.onSearch(this.state.data);
  };

  render() {
    // get state data by destructuring
    const { word, language: lang } = this.state.data;

    return (
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={this.handleSubmission}>
          <input
            className="form-control mr-sm-2"
            type="search"
            name="word"
            value={word}
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
          />
          <select
            onChange={this.handleChange}
            name="language"
            className="form-control mr-sm-2"
          >
            {this.state.languages.map(language => (
              <option key={language.key} value={language.key}>
                {language.value}
              </option>
            ))}
          </select>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Search;
