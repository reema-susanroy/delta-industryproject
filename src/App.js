import axios from "axios";
import "./App.css";
import "./App.scss";
import { useState, useEffect } from "react";
import CompanyCard from "../src/components/CompanyCard/CompanyCard";

function App() {
  const articleCategories = [
    //For optional dropdown category selection
    "business",
    "technology",
    "science",
    "health",
    "entertainment",
    "sports",
    "finance",
    "politics",
    "world",
    "lifestyle",
    "education",
    "environment",
    "culture",
    "automotive",
    "legal",
  ];
  ///////UseState////////
  const [companies, setCompanies] = useState([]);
  const [query, setQuery] = useState("");

  ///////Functions////////

  const getCompanies = async (event) => {
    event.preventDefault();
    try {
      // const query = "finance AND women";
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&from=2024-03-20&to=2024-03-20&apiKey=c4809242d4bc42fa8470f61dde9e773b`
      );

      console.log(response);
      const articles = response.data.articles;
      const companies = articles.map((article) => {
        // // The full URL
        // const fullUrl = article.url;

        // // Use the URL constructor to parse the full URL
        // const parsedUrl = new URL(fullUrl);

        // // Construct the base URL by combining the protocol and host
        // const baseUrl = `${parsedUrl.protocol}//${parsedUrl.host}`;

        // if(article.source.name === "[removed]"){
        //   console.log(article)
        //   return null
        // }
        return {
          name: article.source.name,
          url: article.url,
          author: article.author,
        };
      });
      console.log(companies);

      // // Convert the array to a Set to remove duplicates, then back to an array
      // const uniqueCompanyNames = Array.from(new Set(companies));

      // //filter by geo location, add tags to companies for further filtering, size etc

      // // If you need the list sorted alphabetically
      // const sortedUniqueCompanyNames = uniqueCompanyNames.sort();

      // // Logging the sorted, unique company names
      // console.log(sortedUniqueCompanyNames);

      // Create a Set to track unique company names
      const uniqueCompanyNames = new Set();
      // Filter companies to include only those with unique names
      const uniqueCompanies = companies.filter((company) => {
        if (!uniqueCompanyNames.has(company.name)) {
          uniqueCompanyNames.add(company.name);
          return true; // Keep this company as it's unique so far
        }
        return false; // Exclude this company as it's a duplicate
      });

      console.log(uniqueCompanies);
      setCompanies(uniqueCompanies);
    } catch (error) {}
  };

  const handleChange = (event) => {
    const text = event.target.value;
    setQuery(text);
  };

  useEffect(() => {}, [companies]);

  return (
    <div className="App">
      <header>
        <form onSubmit={getCompanies}>
          <input
            className="search__area"
            type="text"
            placeholder="Search for your tag..."
            value={query}
            onChange={handleChange}
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
      </header>
      <CompanyCard companiesProp={companies} />
    </div>
  );
}

export default App;
