import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import { UserButton } from "@clerk/nextjs";
import Logo from "@/components/Logo";

const Teacher = () => {
  return (
    <div className="flex flex-col bg-violet-100 bg-[url('/cutted-circle.svg')] bg-repeat bg-center bg-[size:20px]">
      <div className="absolute top-0 w-full flex justify-between items-center bg-violet-500 px-8 py-4">
        <Logo />
        <div className="text-white sm:text-xl font-bold">Είσαι Καθηγητής;</div>
        <UserButton />
      </div>
      <div className="flex h-dvh items-center m-auto">
        <div className="flex flex-grow-0 flex-col gap-4 px-8 max-w-[800px]">
          <div className="font-geologica font-black text-gray-950 text-5xl sm:text-6xl text-center sm:text-left">
            <div className="sm:whitespace-nowrap leading-tight">
              Εύκολη <span className="text-violet-500">Οργάνωση</span>
            </div>
            <div>Χωρίς Άγχος</div>
          </div>
          <div className="max-w-[600px] text-gray-600 text-sm sm:text-base font-semibold text-center sm:text-left">
            Δημιουργήστε, διαχειριστείτε και μοιραστείτε <span className="text-violet-500 font-bold">διαγωνίσματα σε δευτερόλεπτα</span>. Βελτιώστε την εκπαιδευτική εμπειρία για εσάς και τους μαθητές σας.
          </div>
          <div className="flex gap-4 justify-center sm:justify-start flex-wrap sm:flex-nowrap">
            <Link href="/" className="bg-violet-500 px-4 py-3 rounded text-white font-bold hover:bg-violet-600 shadow-lg border hover:border-violet-950">
              Ξεκινήστε Τώρα
            </Link>
            <Link href="/" className="border-2 text-violet-500 hover:text-white hover:bg-violet-500 border-violet-500 px-4 py-3 rounded font-bold shadow-lg">
              Πώς λειτουργεί
            </Link>
          </div>
        </div>
        <div className="hidden lg:block flex-grow">
          <Image src="/boy-with-clock.png" width={380} height={380} />
        </div>
      </div>
      <div className="absolute bottom-1 animate-bounce flex justify-center w-full">
        <Image src="/down-arrow.svg" width={50} height={50} />
      </div>
      <div>context</div>
    </div>
  );
};

export default Teacher;
