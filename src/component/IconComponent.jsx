export default function IconComponent({ icon, title }) {
  return (
    <>
      <div className="flex h-16 items-center justify-center rounded-full border-2 border-violet-500/60 px-4 opacity-80 lg:h-24">
        {/* <img
          src={icon}
          alt={title}
          className="h-10 w-10 rounded-full border-2 border-violet-400/60 object-fill p-2 lg:h-16 lg:w-16"
        /> */}
        <h1 className="px-4 text-lg font-medium lg:text-3xl">{title}</h1>
      </div>
    </>
  );
}
