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

function NavItem({ label, link}) {
  return (
    <a href={link}>
      <li className="p-1 font-reguler text-md">
        {label}
      </li>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2  flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5">
      <NavItem label="About" link={'/about'} />
      <NavItem label="Service" link={'/service'} />
      <NavItem label="Project" link={'/project'} />
      <NavItem label="Team" link={'/team'} />
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
    <Navbar color="transparent" fullWidth>
      <div className="container mx-auto flex items-center p-2 justify-between text-gray-300">
        <Link href="/">
          <Image src="/Logo.png" width={100} height={100} alt="Logo Royal Cemerlang Technology"/>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button color="gray" className="hidden lg:inline-block">
          Get a quote
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
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Button className="mb-2" fullWidth>
            Get a quote
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
