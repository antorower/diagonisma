import StudentOrTeacher from "@/components/StudentOrTeacher";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const clerkUser = await currentUser();
  return (
    <main className="flex flex-col bg-blue-100 h-dvh">
      <div className="flex bg-blue-500 items-center justify-between px-8 py-3">
        <Image src="/logo.svg" width={30} height={30} />
        {clerkUser && <UserButton />}
        {!clerkUser && (
          <div className="flex gap-8">
            <Link href="/sign-in" className="text-white font-geologica text-end hover:text-gray-100">
              Σύνδεση
            </Link>
            <Link href="/sign-up" className="text-white font-geologica text-end hover:text-gray-100">
              Εγγραφή
            </Link>
          </div>
        )}
      </div>
      <div className="flex-grow flex flex-col">
        <StudentOrTeacher />
      </div>
    </main>
  );
}
