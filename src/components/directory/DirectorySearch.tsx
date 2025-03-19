import React from "react";
import { FaSearch } from "react-icons/fa"; // Importing Font Awesome Search Icon

// Import images directly
import stockPhoto1 from "../../images/stockPhoto1.jpg";
import lauraCutler from "../../images/lauraCutler.jpg";
import stockPhoto2 from "../../images/stockPhoto2.jpg";
import SearchResult from "./SearchResult";

const DirectorySearch: React.FC = () => {
  // Hardcoded search results with imported images
  const results = [
    {
      id: 1,
      name: "Larry Smith",
      image: stockPhoto2, // Use the imported image
    },
    {
      id: 2,
      name: "Laura Cutler",
      image: lauraCutler, // Use the imported image
    },
    {
      id: 3,
      name: "Layla Summerhays",
      image: stockPhoto1, // Use the imported image
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>  Directory</h1>
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search..." style={styles.input} />
        <FaSearch style={styles.magnifier} />{" "}
        {/* Use Font Awesome magnifying glass */}
      </div>
      <div>
        {results.map((result) => (
          <SearchResult
            key={result.id}
            name={result.name}
            image={result.image} // Pass the imported image
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Inter, sans-serif",
    width: "100%", // Ensure the container stretches to full width
  },
  h1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    fontSize: "26px",
    color: "#000", // Black color for the title
    marginBottom: "10px", // Slight margin to give some space between title and search bar
    textAlign: "left" as "left", // Left-align the title
    padding: "0 15px", // Add padding to the title for better spacing
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #006184",
    borderRadius: "20px",
    padding: "5px",
    marginBottom: "20px",
    width: "100%", // Ensure the search bar stretches to full width
    maxWidth: "100%", // Prevent any max-width restrictions
  },
  input: {
    width: "100%", // Ensure the input takes full width within the search bar
    border: "none",
    outline: "none",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "20px",
  },
  magnifier: {
    marginLeft: "10px",
    fontSize: "20px",
    color: "#6a6a6a",
  },
};

export default DirectorySearch;
