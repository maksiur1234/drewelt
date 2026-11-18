interface FaqProps {
    title: string,
    items: {
        question: string;
        answer: string;
    }[];
}

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

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

            <div className="flex gap-2 flex-col mb-8">
                {items.map((item, index) => (
                    <div key={index}>
                        <p className="border-b border-[#262420] pb-4 flex flex-col gap-1 text-[#4a4a4a;]">
                        <span><strong dangerouslySetInnerHTML={{ __html: item.question }} /></span>
                        <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </p>
                    </div>
                ))}
            </div>

            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": items.map((item) => ({
                    "@type": "Question",
                    "name": stripHtml(item.question),
                    "acceptedAnswer": {
                    "@type": "Answer",
                    "text": stripHtml(item.answer)
                    }
                }))
                })
            }}
            />
        </div>
    </div>
  )
}

export default Faq
