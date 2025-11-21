import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  img: string;
  description: string;
  gitlink: string;
  link: string;
  tags: string[];
  images: string[];
};

type ProjectsProps = {
  projects: Project[];
};
export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center px-4 print:hidden">
        Projects
      </h1>
      <span className="text-center mb-6 md:mb-10 px-4 block print:hidden">
        <p className="text-sm md:text-base">
          If you want to check out Private repositories, feel free to contact
          me.
        </p>
      </span>
      <section
        id="projects"
        className="w-full py-4 px-4 md:px-6 bg-transparent print:hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
