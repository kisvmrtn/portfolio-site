import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  img: string;
  description: string;
  gitlink: string;
  link: string;
  tags: string[];
};

type ProjectsProps = {
  projects: Project[];
};
export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
      <span className="text-center mb-10 m-20">
        <p>
          If you want to check out Private repositories, feel free to contact
          me.
        </p>
      </span>
      <section
        id="projects"
        className="w-full py-4 px-6 flex justify-between items-center bg-transparent"
      >
        <div className=" mx-auto flex gap-10 text-center">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
