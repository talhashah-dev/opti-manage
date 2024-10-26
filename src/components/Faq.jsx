
import { useState } from "react";

const faqData = [
  {
    question: "What's the best thing about Switzerland?",
    answer: "I'm not sure, but the flag is a big plus!",
  },
  {
    question: "How do you make holy water?",
    answer: "You boil the hell out of it.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer: "Because they’re so good at it.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer: "Because the P is silent.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer: "He couldn’t see himself doing it.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto my-8 p-4 text-black" id="faq">
      <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between w-full text-left font-medium text-lg py-2"
            >
              {faq.question}
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
