// components/Footer.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Projects", path: "/projects" },
  { name: "Quality", path: "/quality" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const certificates = [
  { id: 1, src: "/image/certificate1.png", title: "Certificate 1" },
  { id: 2, src: "/image/certificate2.png", title: "Certificate 2" },
  { id: 3, src: "/image/certificate3.png", title: "Certificate 3" },
];

const CertificateModal: React.FC<{ certificate: { id: number; src: string; title: string } }> = ({ certificate }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={certificate.src}
          alt={certificate.title}
          width={100}
          height={100}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{certificate.title}</DialogTitle>
          <DialogDescription>Click the image to view in full size</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <a href={certificate.src} target="_blank" rel="noopener noreferrer">
            <Image
              src={certificate.src}
              alt={certificate.title}
              width={375}
              height={500}
              className="w-full h-auto"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

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
            <h3 className="text-lg font-semibold mb-2">Certificates</h3>
            <div className="flex space-x-4">
              {certificates.map((cert) => (
                <CertificateModal key={cert.id} certificate={cert} />
              ))}
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