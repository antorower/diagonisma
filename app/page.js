import Menu from "@/components/Menu";
import Hero from "@/components/Hero";
import StudentOrTeacher from "@/components/StudentOrTeacher";

export default function Home() {
  return (
    <main className="flex flex-col bg-blue-100 h-dvh">
      <Menu />
      <div className="flex-grow flex flex-col">
        <StudentOrTeacher />
      </div>
    </main>
  );
}
