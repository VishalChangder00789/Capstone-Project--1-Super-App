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
      id: 28,
    },
    {
      name: "Drama",
      img: drama,
      color: "#D7A4FF",
      id: 18,
    },
    {
      name: "Romance",
      img: romance,
      color: "#11B800",
      id: 10749,
    },
    {
      name: "Thriller",
      img: thriller,
      color: "#84C2FF",
      id: 53,
    },
    {
      name: "Western",
      img: western,
      color: "#902500",
      id: 37,
    },
    {
      name: "Horror",
      img: horror,
      color: "#7358FF",
      id: 27,
    },
    {
      name: "Fantasy",
      img: fantasy,
      color: "#FF4ADE",
      id: 14,
    },
    {
      name: "Music",
      img: music,
      color: "#E61E32",
      id: 10402,
    },
    {
      name: "Fiction",
      img: fiction,
      color: "#6CD061",
      id: 878,
    },
  ],
});

export default CategoriesChoice;
