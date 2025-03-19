import React from "react";

interface SearchResultProps {
  name: string;
  image: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ name, image }) => {
  return (
    <div style={styles.result}>
      <div style={styles.imageWrapper}>
        <img src={image} alt={name} style={styles.image as React.CSSProperties} />
      </div>
      <div style={styles.text as React.CSSProperties}>
        <h2 style={styles.h2}>{name}</h2>
      </div>
    </div>
  );
};

const styles = {
  result: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  imageWrapper: {
    width: "40px", // Adjust to your preferred size
    height: "40px", // Keep it square to maintain circular shape
    overflow: "hidden", // Ensure the image is clipped to fit the container
    borderRadius: "50%", // Make it circular
    marginRight: "10px",
  },
  image: {
    width: "100%", // Fill the container
    height: "100%", // Maintain aspect ratio by stretching the image
    objectFit: "cover", // Prevent distortion of the image
  },
  text: {
    display: "flex",
    flexDirection: "column",
  },
  h2: {
    fontSize: "20px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
  },
};

export default SearchResult;
