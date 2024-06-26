import Marquee from "react-fast-marquee";
export default function CardProject() {
  return (
    <>
      <div className="h-96 rounded-2xl bg-violet-900">
        <Marquee direction="right">
          <div className="mt-28">
            <h1>Dendy</h1>
          </div>
        </Marquee>
      </div>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Project Temp</h1>
        <p>Github</p>
      </div>
      <p className="text-justify text-violet-200 opacity-70">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati illo
        blanditiis amet delectus nisi tempore, pariatur autem iusto distinctio
        esse placeat inventore repudiandae maiores, non reiciendis magni
        eligendi ipsa beatae.
      </p>
    </>
  );
}
