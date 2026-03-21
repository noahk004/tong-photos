// components/NavWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function NavWrapper({ logo }: { logo: string }) {
  const pathname = usePathname();
  const lightTopPages = ["/contact"];
  const darkTop = !lightTopPages.includes(pathname);

  return (
    <>
      <NavDesktop logo={logo} darkTop={darkTop} />
      <NavMobile logo={logo} />
    </>
  );
}