import { spotifyApi } from "../../../config";

export const searchArtist = (artistName: string) => {
  artistName = artistName.replace(" ", "%20");

  return new Promise((resolve) => {
    const query = `${spotifyApi}?q=${artistName}&type=artist&limit=10`;

    const headers = {
      Accept: "application/json",
      Authorization:
        "Bearer BQCj11-Vy2FYPGjFfjLnFL9UXYS1JXurCgoKZR6ko-W6r89bIpeooOEK2zRMD_nRlOg0oR3ctvNS71qB4w8-faAg7FCgxi4U_HjNBWkEBw7YRv19wS-w7yCgJ81yQp54BhyBFKY9-M04of95c0hvNVMKEpJu9TdfNXk",
      "Content-Type": "application/json",
    };

    return fetch(query, { headers })
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
};
