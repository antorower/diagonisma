import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center p-8 gap-2">
      <div className="flex justify-center text-sm font-bold text-gray-800">Η γνη</div>
      <div className="flex justify-center">context</div>
    </div>
  );
};

export default Hero;
