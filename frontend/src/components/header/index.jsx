import Image from "next/image";
import Link from "next/link";
import { ProfileButton } from "./profile-button";
import { TeamButton } from "./team-butotn";

export const Header = () => {
  return (
    <nav className="w-full sticky top-0 px-2 pt-4 bg-background">
      <div className="container mx-auto  flex justify-between h-6 md:h-10">
        <Link href="/"></Link>

        <div className="flex flex-col items-end sm:flex-row sm:items-center gap-2 h-full">
          <div className="h-full aspect-square bg-main grid place-content-center relative">
            <Image
              src={"/images/mail.png"}
              width={30}
              height={30}
              className="h-4 md:h-5 w-auto"
            />

            <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-xs text-white">
              1
            </div>
          </div>
          <ProfileButton />
          <TeamButton />
        </div>
      </div>
    </nav>
  );
};
