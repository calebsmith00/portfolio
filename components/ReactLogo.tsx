import Image from "next/image";

export default function ReactLogo() {
  return (
    <span className="text-blue-400/75 whitespace-nowrap">
      <span className="pr-2">React</span>
      <Image
        className="inline"
        src="/react-logo.svg"
        alt="React Logo"
        width={32}
        height={32}
      />
    </span>
  );
}
