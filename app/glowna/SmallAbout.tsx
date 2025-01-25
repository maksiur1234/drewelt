import { Button } from "@heroui/button"

const SmallAbout = () => {
    return (
        <div className="flex items-center gap-8 bg-yellow-100 mt-12">
            <div className="w-1/2 flex flex-col justify-center items-center text-center">
                <p className="text-xl font-bold mb-4">O nas</p>
                <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nihil. Quod debitis eaque soluta repellat expedita quaerat iusto repudiandae quia cumque, autem, harum fuga maiores animi dolores molestiae. Repellat, quae.</p>

                <Button color="success" className="px-6 py-2">Zobacz więcej</Button>
            </div>
            <div className="w-1/2 flex justify-end">
                <img 
                    src="https://maszyny-stolarskie.com.pl/wp-content/uploads/2019/07/gfghhhhg.jpg"
                    alt="Drewniane deski"
                    className="h-92 object-cover rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}

export default SmallAbout