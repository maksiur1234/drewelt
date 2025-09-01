"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 52.55690865822228,
  lng: 17.038290817318675,
};

export const GoogleMaps = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8540.899882903635!2d17.027405682734706!3d52.558495117961655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704672d890aa563%3A0xe77143c9245062bb!2sPliszki%2018%2C%2062-095%20Rakownia!5e0!3m2!1spl!2spl!4v1756709237773!5m2!1spl!2spl"
      width="100%"
      height={450}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa: Pliszki 18, Rakownia"
    />
  );
};

export default GoogleMaps;
