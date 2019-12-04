/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import http from "./http-service";
import { apiUrl, apiKey } from "../config.json";

const apiEndPoint = apiUrl + "/lexicon";
const queryString = `apiKey=${apiKey}&additionalFields=SEMANTICALLY_SIMILAR_WORDS`;

// returns proper and complete api url
function getApiEndPoint(query) {
  if (query.language && query.word)
    return `${apiEndPoint}/${query.language}/${query.word}?${queryString}`;

  return `${apiEndPoint}/en/${query.word}?${queryString}`;
}

// sends api http request to server
// and get api http response result from server
export function getSemanticallySimilarWords(query) {
  return http.get(getApiEndPoint(query));
}
