import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-4 items-center">
      <Image src="/logo.svg" width={30} height={30} />
      <div className="text-white font-black text-xl hidden md:block">EDUNET</div>
    </Link>
  );
};

export default Logo;
