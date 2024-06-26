import CardProject from "../component/CardProject";
export default function ProjectSection() {
  return (
    <>
      <div className="mt-32 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:mx-52">
        <div className="md:col-span-1">
          <CardProject />
        </div>
        <div className="md:col-span-1">
          <CardProject />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:mx-52">
        <div className="md:col-span-1">
          <CardProject />
        </div>
        <div className="md:col-span-1">
          <CardProject />
        </div>
      </div>
    </>
  );
}
