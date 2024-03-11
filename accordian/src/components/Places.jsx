import { useRef, useState } from "react";
import Place from "./Place";
export default function Places({ places }) {
  const [searchkeyword, setSearchKeyword] = useState("");
  const tempref = useRef();
  const handleChange = (e) => {
    if (tempref.current) {
      clearTimeout(tempref.current);
    }
    tempref.current = setTimeout(() => {
      tempref.current = null;
      setSearchKeyword(e.target.value);
    }, 500);
  };
  const Places = places.filter((places) =>
    JSON.stringify(places).toLowerCase().includes(searchkeyword.toLowerCase())
  );
  return (
    <>
      <div className="searchable-list">
        <input type="search" onChange={handleChange} />
        <ul>
          {Places.map((place) => {
            return <Place item={place} />;
          })}
        </ul>
      </div>
    </>
  );
}
