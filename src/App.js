import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const articleCategories = [ //For optional dropdown category selection
    'business',
    'technology',
    'science',
    'health',
    'entertainment',
    'sports',
    'finance',
    'politics',
    'world',
    'lifestyle',
    'education',
    'environment',
    'culture',
    'automotive',
    'legal'
  ];

  const getCompanies = async () => {
    try {
      const query = "finance AND women";
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&from=2024-03-20&to=2024-03-20&apiKey=ec175fa86341456eb6362867de1bf088`
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
    } catch (error) {}
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return <div className="App"></div>;
}

export default App;
