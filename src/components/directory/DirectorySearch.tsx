import React, { useState } from "react"; // Add React useState hook
import { FaSearch } from "react-icons/fa";
import stockPhoto1 from "../../images/stockPhoto1.jpg";
import lauraCutler from "../../images/lauraCutler.jpg";
import stockPhoto2 from "../../images/stockPhoto2.jpg";
import SearchResult from "./SearchResult";
import "./DirectorySearch.css";

const DirectorySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: Create state for the search query

  const results = [
    {
      id: 5,
      name: "Keith Carney",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    { id: 3, name: "Laura Cutler", image: lauraCutler },
    {
      id: 7,
      name: "Richard Ellis",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 10,
      name: "Raymond Flores",
      image:
        "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 16,
      name: "Michael Gillespie",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 21,
      name: "James Harris",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 1,
      name: "Steve Harvey",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ce54a8856bbbe4d549c740b9edc8038d8ca364b",
    },
    {
      id: 13,
      name: "Valerie Ingram",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 18,
      name: "Seth King",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 15,
      name: "Micahel Martin",
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 11,
      name: "Jonathan McCoy",
      image:
        "https://plus.unsplash.com/premium_photo-1722859288966-b00ef70df64b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 9,
      name: "Roberto Morrow",
      image:
        "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },

    {
      id: 19,
      name: "Jennifer Rodriguez",
      image:
        "https://images.unsplash.com/photo-1519895609939-d2a6491c1196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Allen Rogers",
      image:
        "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 20,
      name: "Christopher Scott",
      image:
        "https://plus.unsplash.com/premium_photo-1722859288966-b00ef70df64b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 17,
      name: "Thomas Shannon",
      image:
        "https://images.unsplash.com/photo-1535643302794-19c3804b874b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Andrea Smith",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    { id: 2, name: "Larry Smith", image: stockPhoto2 },

    {
      id: 12,
      name: "Robert Stewart",
      image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },

    { id: 4, name: "Layla Summerhays", image: stockPhoto1 },

    {
      id: 14,
      name: "Mikayla Williams",
      image:
        "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
  ];

  // Step 2: Filter results based on the search query
  const filteredResults = results.filter(
    (result) => result.name.toLowerCase().startsWith(searchQuery.toLowerCase()) // Check if the name starts with search query
  );

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1>Directory</h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          className="input"
          value={searchQuery} // Step 3: Bind searchQuery to input
          onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Update the searchQuery when input changes
        />
        <FaSearch className="magnifier" />
      </div>

      {/* Display filtered results */}
      <div className="resultsContainer">
        {filteredResults.map((result) => (
          <a key={result.id} href="/Home" className="no-link-style">
            <SearchResult name={result.name} image={result.image} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default DirectorySearch;
