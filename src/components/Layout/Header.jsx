'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";


const links = [
  { href: "/#about", text: "About" },
  { href: "/#project", text: "Project" },
  { href: "/#team", text: "Team" },
];

function NavItem({ label, link}) {
  const path = usePathname();
  return (
    <a href={link}>
      <li className={`${link === path ? "font-bold" : "font-normal"} font-primary uppercase p-1 text-md text-gray-900 lg:text-white`}>
        {label}
      </li>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 px-4 py-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5">
      <NavItem label="About" link={'/#about'} />
      <NavItem label="Solution" link={'/#solution'} />
      <NavItem label="Team" link={'/#team'} />
    </ul>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="transparent" fullWidth >
      <div className="container mx-auto flex items-center p-2 justify-between text-gray-300">
        <Link href="/">
          <Image src="/Logo-RD.png" width={120} height={100} alt="Logo Royal Defense" priority />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button color="gray" className="hidden lg:inline-block">
          <Link href="/#contact" >Contact Us</Link>
        </Button>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white p-2">
          <NavList />
          <Button className="mb-2" fullWidth>
            Get a quote
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
