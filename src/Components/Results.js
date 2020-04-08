import React from "react";

export default ({ gifs }) => (
  <>
    <h2>Your perfect GIF match</h2>

    {gifs.map(gif => (
      <img src={gif.media[0].gif.url} alt="gif" />
    ))}
  </>
);
