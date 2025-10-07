type SkillsProps = {
  skills: string[];
};
export default function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="w-full py-4 px-6 flex justify-between items-center bg-transparent py-16 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <ul className="flex gap-5">
          {skills.map((skill) => (
            <li
              key={skill}
              className="border rounded-lg p-2 transform transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
