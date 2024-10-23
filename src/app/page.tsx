import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Country List</h1>
      <Link
        href="/country/pakistan"
        style={{
          margin: "10px",
          borderRadius: "10px",
          border: "2px solid black",
          padding: "10px",
        }}
      >
        Pakistan
      </Link>
      <Link
        href="/country/india"
        style={{
          margin: "10px",
          borderRadius: "10px",
          border: "2px solid black",
          padding: "10px",
        }}
      >
        India
      </Link>
      <Link
        href="/country/japan"
        style={{
          margin: "10px",
          borderRadius: "10px",
          border: "2px solid black",
          padding: "10px",
        }}
      >
        Japan
      </Link>
      <Link
        href="/country/turkey"
        style={{
          margin: "10px",
          borderRadius: "10px",
          border: "2px solid black",
          padding: "10px",
        }}      >
        Turkey
      </Link>
      <Link
        href="/country/iran"
        style={{
          margin: "10px",
          borderRadius: "10px",
          border: "2px solid black",
          padding: "10px",
        }}      >
        Iran
      </Link>

    </div>
  );
}
