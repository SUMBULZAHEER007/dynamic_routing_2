import Image from "next/image";
import styles from "./page.module.css";

export default function CountryName({ params }: any) {
  const countries: {
    name: string;
    population: number;
    capital: string;
  }[] = [
    { name: "pakistan", population: 241000000, capital: "Islamabad" },
    { name: "india", population: 1384830000, capital: "Delhi" },
    { name: "japan", population: 124285000, capital: "Tokyo" },
    { name: "turkey", population: 87473805, capital: "Ankara" },
    { name: "iran", population: 91567738, capital: "Tehran" },
  ];

  function findCountry(country_url: string) {
    return countries.find(
      (country) => country.name.toLowerCase() == country_url.toLowerCase()
    );
  }

  let result = findCountry(params.country_name);

  return (
    <div>
      {result ? (
        <>
          <h1> Country Name :{result.name} </h1>
          <h1> Country Capital :{result.capital} </h1>
          <h1> Country Population :{result.population} </h1>
        </>
      ) : (
        <h1> {params.country_name} Not Found</h1>
      )}
    </div>
  );
}
