export default function Features() {
  const items = [
    "Integration of mammography images and patient records",
    "Deep neural network models for tumor classification",
    "User-friendly interface for medical professionals",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-8 gap-4">
      <h1 className="text-2xl font-bold">Project Features</h1>
      <ul className="list-disc pl-5 text-left">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
