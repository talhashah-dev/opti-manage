
import { useState } from "react";

const faqData = [
  {
    question: "Who is behind this project?",
    answer: "The project is led by Syed Talha, a passionate developer and technology enthusiast with experience in web development and software engineering.",
  },
  {
    question: "What inspired you to start this project?",
    answer: "I wanted to create a platform that would help users [mention your specific goals, e.g., simplify web development, provide unique tech solutions, etc.]. My aim is to make technology more accessible and powerful for everyone.",
  },
  {
    question: "What is your background and experience in tech?",
    answer: "I have a background in [mention your field, e.g., computer science, web development], with hands-on experience in technologies like JavaScript, React, Next.js, and more. Over the years, I've worked on various projects ranging from simple websites to complex web applications.",
  },
  {
    question: "What technologies are you most passionate about?",
    answer: "I'm particularly passionate about frontend development with tools like React and Next.js, as well as building intuitive user interfaces with Tailwind CSS. I love staying updated with the latest trends and best practices in the tech industry.",
  },
  {
    question: "How can I reach out to you for questions or collaboration?",
    answer: "Feel free to reach out via [mention preferred contact method, e.g., email or social media]. I'm always open to discussing new ideas and potential collaborations!",
  },
  {
    question: "Do you offer mentorship or tutorials?",
    answer: "Yes! I enjoy sharing my knowledge through [mention platform, e.g., blog posts, tutorials, online courses]. I also provide one-on-one mentorship for those interested in learning more about web development and software engineering.",
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
