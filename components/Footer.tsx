import Image from "next/image";

export default function Footer() {
  return (
    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 lg:bottom-3 flex">
      {/* GitHub */}
      <div className="hover:cursor-pointer px-3">
        <a href="https://github.com/calebsmith00" target="_blank">
          <Image
            className="fill-white"
            src="/github-logo.svg"
            width={50}
            height={50}
            alt="GitHub Logo"
          />
        </a>
      </div>

      <div className="hover:cursor-pointer px-3">
        <a
          href="https://www.linkedin.com/in/caleb-smith-813413221/"
          target="_blank"
        >
          <Image
            className="fill-white"
            src="/linkedin-logo.svg"
            width={50}
            height={50}
            alt="GitHub Logo"
          />
        </a>
      </div>
    </div>
  );
}
