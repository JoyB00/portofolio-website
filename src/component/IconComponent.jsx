export default function IconComponent({ icon, title }) {
  return (
    <>
      <div className="flex h-12 items-center justify-center rounded-full border-2 border-violet-500/60 p-2 opacity-80 lg:h-16">
        {/* <img
          src={icon}
          alt={title}
          className="h-10 w-10 rounded-full border-2 border-violet-400/60 object-fill p-2 lg:h-16 lg:w-16"
        /> */}
        <h1 className="px-4 text-lg font-semibold lg:text-2xl">{title}</h1>
      </div>
    </>
  );
}
