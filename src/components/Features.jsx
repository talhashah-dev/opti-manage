import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const featuresArr = [
  {
    name: "Seamless Task Management",
    description:
      "Organize, prioritize, and track your tasks effortlessly. Manage projects with intuitive tools that keep your team aligned.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Data Security",
    description:
      "Our platform ensures your data is protected with SSL encryption and advanced security protocols, giving you peace of mind.",
    icon: LockClosedIcon,
  },
  {
    name: "Automated Workflows",
    description:
      "Simplify and automate repetitive processes, allowing your team to focus on what matters most.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced Permissions",
    description:
      "Customize access levels to maintain control over your project while fostering collaboration in a secure environment.",
    icon: FingerPrintIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 text-center">
            Empower Your Workflow
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl max-sm:text-center lg:text-balance">
            Key Features to Enhance Your Productivity
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            OptiManage provides a streamlined, secure, and flexible environment
            to help you manage tasks and projects efficiently. Collaborate,
            organize, and succeed with ease.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featuresArr.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
