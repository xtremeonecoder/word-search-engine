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
import { getSemanticallySimilarWords } from "../services/gavagai-service";

class WordInfo extends Component {
  state = {
    wordInformation: false,
    semanticallySimilarWords: [],
    leftSideNeighbours: [],
    rightSideNeighbours: [],
    stringSimilarWords: []
  };

  async componentDidMount() {
    // get url parameters using object destructuring
    let { word, language } = this.props.match.params;

    // use as default language if language is not set
    if (!language) language = "en";

    // send api request to server and get response data
    const result = await getSemanticallySimilarWords({
      language,
      word
    });

    // destructure the api result
    const {
      wordInformation,
      semanticallySimilarWords,
      leftSideNeighbours,
      rightSideNeighbours,
      stringSimilarWords
    } = result.data;

    // set state
    this.setState({
      wordInformation,
      semanticallySimilarWords,
      leftSideNeighbours,
      rightSideNeighbours,
      stringSimilarWords
    });
  }

  // implement table cell value
  getCellValue = data => {
    return (
      <ul>
        {data.map(({ word }) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    );
  };

  render() {
    // destructure the state values
    const {
      wordInformation,
      semanticallySimilarWords,
      leftSideNeighbours,
      rightSideNeighbours,
      stringSimilarWords
    } = this.state;

    // get url parameters value using object destructuring
    const { word: keyword, language, base, page } = this.props.match.params;

    return (
      <div className="word-info">
        <h2>
          Information about the word "{keyword}"
          <Link
            style={{ fontSize: "28px" }}
            className="navbar-brand"
            to={`/search-words?page=${page}&language=${language}&word=${base}`}
          >
            {`<<Back`}
          </Link>
        </h2>
        {!wordInformation && (
          <div style={{ width: "100%", margin: "0px auto" }}>
            <br />
            <br />
            <div className="loader">&nbsp;</div>
          </div>
        )}
        {wordInformation && (
          <React.Fragment>
            <ul>
              <li>word: {wordInformation.word}</li>
              <li>absoluteRank: {wordInformation.absoluteRank}</li>
              <li>documentFrequency: {wordInformation.documentFrequency}</li>
              <li>frequency: {wordInformation.frequency}</li>
              <li>relativeRank: {wordInformation.relativeRank}</li>
            </ul>
            <table className="table">
              <thead>
                <tr>
                  <th>semanticallySimilarWords</th>
                  <th>leftSideNeighbours</th>
                  <th>rightSideNeighbours</th>
                  <th>stringSimilarWords</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.getCellValue(semanticallySimilarWords)}</td>
                  <td>{this.getCellValue(leftSideNeighbours)}</td>
                  <td>{this.getCellValue(rightSideNeighbours)}</td>
                  <td>{this.getCellValue(stringSimilarWords)}</td>
                </tr>
              </tbody>
            </table>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default WordInfo;
