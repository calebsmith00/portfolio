import Image from "next/image";

export default function NodeLogo() {
  return (
    <span className="text-green-400/75 whitespace-nowrap">
      <span className="pr-2">NodeJS</span>
      <Image
        className="inline"
        src="/nodejs-logo.svg"
        alt="NodeJS Logo"
        width={32}
        height={32}
      />
    </span>
  );
}
