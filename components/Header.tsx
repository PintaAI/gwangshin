// app/components/Header.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { MenuIcon } from 'lucide-react';

const navItems = [
  { name: "홈", path: "/" },
  { name: "회사소개", path: "/about" },
  { name: "제품", path: "/products" },
  { name: "프로젝트", path: "/projects" },
  { name: "품질", path: "/quality" },
  { name: "뉴스", path: "/news" },
  { name: "연락처", path: "/contact" },
  // Added a new gallery tab
  { name: "갤러리", path: "/gallery" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-primary text-primary-foreground py-4 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          광신철강산업(주)
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <Button
                variant="ghost"
                className={`hover:text-secondary-foreground ${
                  pathname === item.path ? "bg-primary-foreground text-primary" : ""
                }`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 열기"
        >
          <MenuIcon size={24} />
        </button>
      </div>
      <nav
        className={`md:hidden flex flex-col space-y-2 p-4 bg-primary overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <Button
              variant="ghost"
              className={`w-full hover:text-secondary-foreground ${
                pathname === item.path ? "bg-primary-foreground text-primary" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
