import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import axios from "axios";
import { sortPlacesByDistance } from "../loc.js";
import fetchAvailablePlaces from "./fetchAvailablePlaces.jsx";
export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setIsLoading(true);

    async function fetchPlaces() {
      try {
        const res = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            res,
            position.coords.latitude,
            position.coords.longitude
          );
          setPlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        setError(JSON.parse(error.message));
      }
    }
    fetchPlaces();
  }, []);
  return (
    <Places
      title="Available Places"
      places={places}
      isLoading={isLoading}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      error={error}
    />
  );
}
