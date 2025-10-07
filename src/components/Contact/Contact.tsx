import { FiMail, FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";

type ContactProps = {
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
};

export default function Contact({ contact }: ContactProps) {
  return (
    <section className="light:text-stone-900 text-purple-400 py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-8">
          Feel free to reach out via any of the platforms below.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center space-x-3 hover:text-[#977be3] transition"
          >
            <FiMail className="w-5 h-5" />
            <span>{contact.email}</span>
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-[#977be3] transition"
          >
            <FiGithub className="w-5 h-5" />
            <span>{contact.github.replace("https://", "")}</span>
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-[#977be3] transition"
          >
            <PiLinkedinLogo className="w-5 h-5" />
            <span>{contact.linkedin.replace("https://", "")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
