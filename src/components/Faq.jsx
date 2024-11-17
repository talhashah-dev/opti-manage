
import { useState } from "react";

const faqData = [
  // {
  //   question: "Who is behind this project?",
  //   answer: "The project is led by Syed Talha, a passionate developer and technology enthusiast with experience in web development and software engineering.",
  // },
  {
    question: "What inspired the creation of this product?",
    answer: "The idea came from a desire to solve Simplifying Complex Workflows Our goal is to offer a solution that truly helps users in meaningful ways.",
  },
  {
    question: "What makes this product unique?",
    answer: "This product is designed with a focus on User-friendly interface, High performance, Innovative features Unlike other solutions, we prioritize Customization & Accessibility.",
  },
  {
    question: "What technologies power this product?",
    answer: "The product is built using a robust tech stack, including Next.js, Tailwind CSS and Google Firebase. These technologies help us deliver a fast, responsive, and scalable experience for all users.",
  },
  {
    question: "How can I get support or report an issue?",
    answer: "We’re here to help! You can reach out to us via syedtalhadev@gmail.com. We strive to address all inquiries as quickly as possible.",
  },
  {
    question: "Are there any upcoming features or updates?",
    answer: "Yes! We’re constantly working to improve the product. Upcoming features include additional integrations & new functionalities. Stay tuned for updates on our roadmap!",
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
