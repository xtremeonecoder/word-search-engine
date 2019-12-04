/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

const languages = [
  { key: "en", value: "English" },
  { key: "sv", value: "Swedish" },
  { key: "ja", value: "Japanese" },
  { key: "ar", value: "Arabic" },
  { key: "az", value: "Azeri (Latin)" },
  { key: "bg", value: "Bulgarian" },
  { key: "bn", value: "Bengali" },
  { key: "ca", value: "Catalan" },
  { key: "cs", value: "Czech" },
  { key: "da", value: "Danish" },
  { key: "de", value: "German" },
  { key: "el", value: "Greek" },
  { key: "es", value: "Spanish" },
  { key: "et", value: "Estonian" },
  { key: "fa", value: "Farsi" },
  { key: "fi", value: "Finnish" },
  { key: "fr", value: "French" },
  { key: "he", value: "Hebrew" },
  { key: "hi", value: "Hindi" },
  { key: "hr", value: "Croatian" },
  { key: "hu", value: "Hungarian" },
  { key: "id", value: "Indonesian" },
  { key: "it", value: "Italian" },
  { key: "ko", value: "Korean" },
  { key: "lt", value: "Lithuanian" },
  { key: "lv", value: "Latvian" },
  { key: "ms", value: "Malay" },
  { key: "nl", value: "Dutch" },
  { key: "pl", value: "Polish" },
  { key: "pt", value: "Portuguese" },
  { key: "ro", value: "Romanian" },
  { key: "ru", value: "Russian" },
  { key: "sk", value: "Slovak" },
  { key: "sl", value: "Slovenian" },
  { key: "sq", value: "Albanian" },
  { key: "sw", value: "Swahili" },
  { key: "th", value: "Thai" },
  { key: "tl", value: "Tagalog" },
  { key: "tr", value: "Turkish" },
  { key: "uk", value: "Ukrainian" },
  { key: "ur", value: "Urdu" },
  { key: "vi", value: "Vietnamese" },
  { key: "zh", value: "Chinese" }
];

// returns array of object
// contains language name and code
function getLanguages() {
  return languages;
}

export default getLanguages;
