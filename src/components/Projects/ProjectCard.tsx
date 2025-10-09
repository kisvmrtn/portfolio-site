import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

type Project = {
  title: string;
  img: string;
  description: string;
  gitlink: string;
  link: string;
  tags: string[];
};

type ProjectCardProps = {
  project: Project;
};
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full max-w-[400px] rounded-xl shadow-2xl hover:shadow-indigo-500/30 light:hover:shadow-blue-500/30 overflow-hidden transition-transform hover:scale-[1.02] duration-200">
      <div className="h-48 bg-gray-200 dark:bg-zinc-500 flex items-center justify-center">
        {project.img && (
          <img
            src={project.img}
            alt={`${project.title} preview`}
            className="w-full h-48 object-cover"
          />
        )}
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p>{project.description}</p>

        <div className="flex justify-center flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-200 light:bg-blue-500 text-indigo-800 light:text-purple-100 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={project.gitlink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white bg-zinc-700 hover:bg-zinc-600 px-3 py-2 rounded transition"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white bg-indigo-600 light:bg-black hover:bg-indigo-500 light:hover:bg-zinc-600 px-3 py-2 rounded transition"
            >
              <BiLinkExternal className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
