import Image from "next/image";
import Link from "next/link";
import PersonMobile from "./PersonMobile";

const StudentOrTeacher = () => {
  return (
    <>
      <PersonMobile title="Καθητηγής" subtitle="για γραπτά" hoverText="Ετοίμασε γραπτά στο λεπτό!" image="teacher" hoverImage="teacher2" />
      <PersonMobile title="Μαθητής" subtitle="για γνώση" hoverText="Δοκίμασε τις γνώσεις σου!" image="girl" hoverImage="girl2" />
    </>
  );
};

export default StudentOrTeacher;

/*
<Link href="/" className="flex items-end gap-4">
        <Image src="/teacher.png" width={120} height={120} alt="teacher" className="transform scale-x-[-1] hidden sm:block" />
        <div className="self-center font-semibold flex flex-col text-center sm:text-left">
          <div className="font-bold">Καθηγητής</div>
          <div>που διψά</div>
          <div>για γραπτά;</div>
          <div className="bg-blue-500 rounded text-white px-3 py-1 hover:bg-blue-600 mt-2 mr-auto">Ναι, είμαι!</div>
        </div>
      </Link>
      <Link href="/" className="flex items-end gap-4">
        <div className="self-center font-semibold flex flex-col text-center sm:text-right">
          <div className="font-bold">Μαθητής</div>
          <div>που διψά</div>
          <div>για μάθηση;</div>
          <div href="/" className="bg-blue-500 rounded text-white px-3 py-1 hover:bg-blue-600 mt-2 ml-auto">
            Ναι, είμαι!
          </div>
        </div>
        <Image src="/girl.png" width={120} height={120} alt="student" className="hidden sm:block" />
      </Link>
      */
