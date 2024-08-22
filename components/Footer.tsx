// app/components/Footer.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Projects", path: "/projects" },
  { name: "Quality", path: "/quality" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your API
    console.log('Subscribed with email:', email);
    setEmail('');
    // You might want to show a success message to the user
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-current hover:text-primary"
                    >
                      {item.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p>본사: 대전광역시 동구 대전로 1020번길 10</p>
            <p>TEL: (042)636-9922</p>
            <p>1공장: 충북 청주시 서원구 현도면 청남로 692</p>
            <p>TEL: (043)265-9921~4</p>
            <p>FAX: (043)265-9923</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost">LinkedIn</Button>
              <Button variant="ghost">Twitter</Button>
              <Button variant="ghost">Facebook</Button>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 광신철강산업(주). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;