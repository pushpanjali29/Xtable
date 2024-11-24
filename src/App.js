import React, { useState } from "react";
import "./App.css";

function App() {
  // Initial state with the provided data
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  // Sorting functions
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      // First sort by date in descending order
      if (a.date !== b.date) {
        return new Date(b.date) - new Date(a.date);
      }
      // If dates are equal, sort by views in descending order
      return b.views - a.views;
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      // First sort by views in descending order
      if (a.views !== b.views) {
        return b.views - a.views;
      }
      // If views are equal, sort by date in descending order
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div className="buttons">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
