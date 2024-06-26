import Avatar from "../assets/avatar.png";
export default function IconComponent() {
  return (
    <>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-200">
        <img src={Avatar} alt="Avatar" className="h-20 w-20" />
      </div>
    </>
  );
}
