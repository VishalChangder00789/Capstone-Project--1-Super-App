import { createSlice } from "@reduxjs/toolkit";
import action from "../assets/Action.png";
import drama from "../assets/Drama.png";
import romance from "../assets/Romance.png";
import thriller from "../assets/Thriller.png";
import western from "../assets/Western.png";
import horror from "../assets/Horror.png";
import fantasy from "../assets/Fantasy.png";
import music from "../assets/Music.png";
import fiction from "../assets/Fiction.png";

const CategoriesChoice = createSlice({
  name: "categoriesChoice",
  initialState: [
    {
      name: "Action",
      img: action,
      color: "#FF5209",
    },
    {
      name: "Drama",
      img: drama,
      color: "#D7A4FF",
    },
    {
      name: "Romance",
      img: romance,
      color: "#11B800",
    },
    {
      name: "Thriller",
      img: thriller,
      color: "#84C2FF",
    },
    {
      name: "Western",
      img: western,
      color: "#902500",
    },
    {
      name: "Horror",
      img: horror,
      color: "#7358FF",
    },
    {
      name: "Fantasy",
      img: fantasy,
      color: "#FF4ADE",
    },
    {
      name: "Music",
      img: music,
      color: "#E61E32",
    },
    {
      name: "Fiction",
      img: fiction,
      color: "#6CD061",
    },
  ],
});

export default CategoriesChoice;
