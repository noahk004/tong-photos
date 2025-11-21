"use client";

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

export default function Navigation({ logo, inverted_colors, clear_len }: { logo: string, inverted_colors?: boolean, clear_len?: number }) {
  return (
    <>
      <NavMobile logo={logo} inverted_colors={inverted_colors} />
      <NavDesktop logo={logo} inverted_colors={inverted_colors} clear_len={clear_len} />
    </>
  )
}
