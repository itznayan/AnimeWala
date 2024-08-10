import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
  { id: 4, name: "Comedy" },
  { id: 10, name: "Fantasy" },
  { id: 14, name: "Horror" },
  { id: 22, name: "Romance" },
  { id: 24, name: "Sci-Fi" },
];

const GenreMenuWithCheckbox = ({ selectedGenres, onChange }) => {
  const handleCheckboxChange = (id) => {
    onChange(id);
  };

  return (
    <Menu dismiss={{ itemPress: false }}>
      <MenuHandler>
        <Button>Genres</Button>
      </MenuHandler>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem key={genre.id} className="p-0">
            <label
              htmlFor={`genre-${genre.id}`}
              className="flex cursor-pointer items-center gap-2 p-2"
            >
              <Checkbox
                ripple={false}
                id={`genre-${genre.id}`}
                containerProps={{ className: "p-0" }}
                className="hover:before:content-none"
                checked={selectedGenres.includes(genre.id)}
                onChange={() => handleCheckboxChange(genre.id)}
              />
              {genre.name}
            </label>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreMenuWithCheckbox;
