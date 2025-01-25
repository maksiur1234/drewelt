import { Button } from "@heroui/button";

const SmallOffer = () => {
    const items = [
        {
          title: "Tarasy z drewna",
          imgSrc: "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-8.webp",
        },
        {
          title: "Pergole Aluminiowe",
          imgSrc: "https://drewelt.pl/images/galerie/38/1BIOCLIMATIC.webp",
        },
        {
          title: "Zadaszenia Aluminum",
          imgSrc: "https://drewelt.pl/images/galerie/21/najnowsze-realizacje8.webp",
        },
        {
          title: "Zadaszenia Poliwęglan",
          imgSrc: "https://drewelt.pl/images/galerie/21/najnowsze-realizacje7.webp",
        },
      ];
    
      return (
        <div className="pt-20">
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden bg-white rounded-lg shadow-md"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-68 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300">
                  
                  <Button color="warning" variant="bordered">
                    {item.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default SmallOffer