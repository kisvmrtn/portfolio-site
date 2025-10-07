type AboutProps = {
  about: {
    name: string;
    role: string;
    description: string;
  };
};

export default function About({ about }: AboutProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I am {about.name}.</h1>
        <h2 className="text-2xl font-semibold mb-6">A {about.role}.</h2>
        <p className=" leading-relaxed">{about.description}</p>
      </div>
    </section>
  );
}
