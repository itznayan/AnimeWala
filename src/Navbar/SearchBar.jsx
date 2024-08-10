import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="space-x-4 w-fit flex">
      <Input
        label="Anime Name"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;
