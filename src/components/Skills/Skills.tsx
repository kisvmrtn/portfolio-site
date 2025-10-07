type SkillsProps = {
  skills: string[];
};
export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="w-full py-8 md:py-16 px-4 md:px-6 flex justify-between items-center bg-transparent"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Skills</h1>
        <ul className="flex flex-wrap justify-center gap-3 md:gap-5">
          {skills.map((skill) => (
            <li
              key={skill}
              className="border rounded-lg p-2 text-sm md:text-base transform transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
