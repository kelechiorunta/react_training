import { useCallback, useEffect, useRef, useState } from "react";
import "./Footballer.css";
import AnimateText from "./AnimateText/AnimateText";

export type FootballersType = {
  footballers: { name: string }[];
  handleAddFootballer: () => void;
  footballer?: { name: string };
};

export default function Footballer({
  footballers,
  handleAddFootballer,
  // footballer,
}: FootballersType) {
  const documentRef = useRef<HTMLDivElement | null>(null);

  const words = [
    "Kelechi is a good developer",
    "Hardwork is the key to success",
  ];
  const books = [
    { title: "Genesis" },
    { title: "Exodus" },
    { title: "Leviticus" },
    { title: "Numbers" },
    { title: "Deuteronomy" },
    { title: "Joshua" },
    { title: "Judges" },
    { title: "Ruth" },
    { title: "1 Samuel" },
    { title: "2 Samuel" },
    { title: "1 Kings" },
    { title: "2 Kings" },
    { title: "1 Chronicles" },
    { title: "2 Chronicles" },
    { title: "Ezra" },
    { title: "Nehemiah" },
    { title: "Esther" },
    { title: "Job" },
    { title: "Psalms" },
    { title: "Proverbs" },
    { title: "Ecclesiastes" },
    { title: "Song of Solomon" },
    { title: "Isaiah" },
    { title: "Jeremiah" },
    { title: "Lamentations" },
    { title: "Ezekiel" },
    { title: "Daniel" },
    { title: "Hosea" },
    { title: "Joel" },
    { title: "Amos" },
    { title: "Obadiah" },
    { title: "Jonah" },
    { title: "Micah" },
    { title: "Nahum" },
    { title: "Habakkuk" },
    { title: "Zephaniah" },
    { title: "Haggai" },
    { title: "Zechariah" },
    { title: "Malachi" },
  ];
  useEffect(() => {}, []);

  return (
    <div>
      <ul>
        {footballers?.map((footballer: { name: string }) => (
          <li>{footballer.name}</li>
        ))}
      </ul>
      <button onClick={handleAddFootballer}>Add Footballer</button>
      <div
        style={{
          // maxWidth: 1200,
          width: "100%",
          textAlign: "right",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          fontSize: "clamp(1.5rem, 7vw, 4rem)",
        }}
        ref={documentRef}
      ></div>
      <AnimateText texts={books.map((book) => book.title)} />
    </div>
  );
}
