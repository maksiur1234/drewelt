interface FaqProps {
    title: string,
    items: {
        question: string;
        answer: string;
    }[];
}

const Faq = ({title, items}: FaqProps) => {


  return (
    <div className="max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl mx-auto bg-white border-4 border-solid border-[#1e7a1f40]">
        <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-3">
                <span className="text-sm font-bold uppercase tracking-wider text-[#2e7d32]">
                FAQ
                </span>
            </div>
            <h3 className="text-3xl md:text-3xl font-bold mb-4 leading-tight text-[#1a1a1a]">
                {title}
            </h3>

            <div className="flex gap-2 flex-col mb-8" itemscope="" itemtype="https://schema.org/FAQPage">
                {items.map((item, index) => (
                    <div key={index} itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <p className="border-b border-[#262420] pb-4 flex flex-col gap-1 text-[#4a4a4a;]">
                        <span itemprop="name"><strong>{item.question}</strong></span>
                        <span itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">{item.answer}</span></span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Faq
