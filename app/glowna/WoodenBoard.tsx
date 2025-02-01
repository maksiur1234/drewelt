import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const WoodenBoard = () => {
    return (
        <div className="flex items-center gap-8 mt-12">
            <img 
                src="https://faktypilskie.pl/news_foto/2022/0907/157732.jpg"
                alt="Drewniane deski"
                className="w-1/2 h-auto object-cover rounded-lg shadow-md"
            />
            <div className="w-1/2 flex flex-col justify-center items-center text-center">
                <p className="text-xl font-bold mb-4">Wybierz kolor desek</p>
                <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nihil. Quod debitis eaque soluta repellat expedita quaerat iusto repudiandae quia cumque, autem, harum fuga maiores animi dolores molestiae. Repellat, quae.</p>

                <Button color="success" className="px-6 py-2" as={Link} href="/tarasy">Zobacz więcej</Button>
            </div>
        </div>
    );
}

export default WoodenBoard;
