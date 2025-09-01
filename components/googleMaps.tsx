"use client";

export const GoogleMaps = () => {
  return (
    <iframe
      src="https://www.google.com/maps?q=52.558495117961655,17.027405682734706&z=13&output=embed"
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
