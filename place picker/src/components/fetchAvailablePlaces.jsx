import axios from "axios";
export default async function fetchAvailablePlaces() {
  const res = await axios.get("http://localhost:3000/places").catch((error) => {
    let errorMessage;

    if (error.response) {
      errorMessage = JSON.stringify({
        title: error.response.statusText,
        message:
          error.response.status === 404
            ? "failed to load places,check your URL or problem in backend"
            : error.response.data,
      });
    } else if (error.request) {
      errorMessage = JSON.stringify({
        title: "Network Error:",
        message: "turn on backend,turn on network or your network is poor.",
      });
    } else {
      errorMessage = JSON.stringify({
        title: "Anonymous Error:",
        message: error,
      });
    }
    throw new Error(errorMessage);
  });

  return res.data.places;
}
export async function updateUserPlaces(places) {
  const res = await axios
    .put("http://localhost:3000/user-places", { places })
    .catch((error) => {
      let errorMessage;
      console.log(error);
      if (error.response) {
        errorMessage = JSON.stringify({
          title: error.response.statusText,
          message:
            error.response.status === 500
              ? error.response.data
              : "failed to update User places,check your URL or problem in backend",
        });
      } else if (error.request) {
        errorMessage = JSON.stringify({
          title: "Network Error:",
          message: `turn on backend,turn on network or your network is poor.`,
        });
      } else {
        errorMessage = JSON.stringify({
          title: "Anonymous Error:",
          message: error,
        });
      }
      console.log(errorMessage);
      throw new Error(errorMessage);
    });
}
export async function getUserPlaces() {
  const res = await axios
    .get("http://localhost:3000/user-places")
    .catch((error) => {
      let errorMessage;

      if (error.response) {
        errorMessage = JSON.stringify({
          title: error.response.statusText,
          message:
            error.response.status === 404
              ? "failed toload User places,check your URL or problem in backend"
              : error.response.data,
        });
      } else if (error.request) {
        errorMessage = JSON.stringify({
          title: "Network Error:",
          message: "turn on backend,turn on network or your network is poor.",
        });
      } else {
        errorMessage = JSON.stringify({
          title: "Anonymous Error:",
          message: error,
        });
      }
      throw new Error(errorMessage);
    });
  console.log(res.data.places);
  return res.data.places;
}
