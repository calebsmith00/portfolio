import Image from "next/image";

export default function SelfPortrait() {
  return (
    <div className="pb-10 lg:pb-0 lg:pl-10">
      <Image
        className="rounded-full"
        src="/resume-pic.png"
        width={256}
        height={256}
        alt="Photo of the developer"
      />
    </div>
  );
}
