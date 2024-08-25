import Image from "next/image";
import Link from "next/link";
import PersonMobile from "./PersonMobile";

const StudentOrTeacher = () => {
  return (
    <>
      <PersonMobile title="Καθητηγής" subtitle="για γραπτά" hoverText="Ετοίμασε γραπτά στο λεπτό!" image="teacher" hoverImage="teacher2" bgColor="bg-violet-500" />
      <PersonMobile title="Μαθητής" subtitle="για γνώση" hoverText="Δοκίμασε τις γνώσεις σου!" image="girl" hoverImage="girl2" bgColor="bg-orange-500" />
    </>
  );
};

export default StudentOrTeacher;
