import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="w-full sticky top-0 px-2 pt-4 bg-background">
      <div className="container mx-auto  flex justify-between h-6 lg:h-10">
        <Link href="/">
          <Image
            src={"/images/Logo_dark_white.png"}
            width={200}
            height={50}
            className="  w-auto h-full "
          />
        </Link>

        <div className="h-full bg-main px-6 py-2 grid place-content-center  text-black  font-heading text-sm lg:text-base">
          <div className="flex items-base gap-2">
            <Image
              src="/images/default-user-profile.png"
              width={30}
              height={30}
              className="h-4 lg:h-5 w-auto"
            />
            <span>Aryan</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
