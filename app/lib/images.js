export const getImages = async () => {
    try {
      const res = await fetch("/api/images", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
  
      if (!res.ok) {
        throw new Error(`Błąd podczas pobierania obrazów: ${res.status}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error("Błąd pobierania obrazów:", error);
      return [];
    }
  };
  