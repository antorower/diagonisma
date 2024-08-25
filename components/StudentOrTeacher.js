import Image from "next/image";
import Link from "next/link";
import PersonMobile from "./PersonMobile";

const StudentOrTeacher = () => {
  return (
    <>
      <PersonMobile title="καθητηγής" subtitle="για γραπτά" hoverText="Ετοίμασε γραπτά στο λεπτό!" image="teacher" hoverImage="teacher2" bgColor="bg-indigo-500" link="/teacher" />
      <PersonMobile title="μαθητής" subtitle="για γνώση" hoverText="Δοκίμασε τις γνώσεις σου!" image="girl" hoverImage="girl2" bgColor="bg-orange-500" link="/student" />
    </>
  );
};

export default StudentOrTeacher;
