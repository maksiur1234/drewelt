import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const Realizations = () => {
    return (
        <div className="flex items-center gap-8">
            <img 
                src="https://drewelt.pl/images/galerie/38/11BIOCLIMATIC.webp"
                alt="Nasze realziacje"
                className="h-auto object-cover rounded-lg shadow-md"
            />
            <div className="w-1/2 flex flex-col justify-center items-center text-center">
                <p className="text-xl font-bold mb-4">Potrzebujesz inspiracji?</p>
                <p className="text-gray-700 mb-6">Zobacz nasze realizacje kliknij w przycisk, aby przenieść się do galerii naszych prac</p>

                <Button color="success" className="px-6 py-2" as={Link} href="/galeria">Zobacz więcej</Button>
            </div>
        </div>
    );
}

export default Realizations