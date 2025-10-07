type AboutProps = {
  about: {
    name: string;
    role: string;
    description: string;
  };
};

export default function About({ about }: AboutProps) {
  return (
    <section className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Hi, I am {about.name}.
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
          A {about.role}.
        </h2>
        <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {about.description}
        </p>
      </div>
    </section>
  );
}
