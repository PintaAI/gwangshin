"use client"
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { MenuIcon } from 'lucide-react';

const GwangshinWebsite = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const performanceData = [
    { year: "2010", sales: 2800 },
    { year: "2011", sales: 2900 },
    { year: "2012", sales: 3100 },
    { year: "2013", sales: 3200 },
    { year: "2014", sales: 3400 },
    { year: "2015", sales: 3300 },
    { year: "2016", sales: 3500 },
    { year: "2017", sales: 3600 },
    { year: "2018", sales: 3800 },
    { year: "2019", sales: 4000 },
    { year: "2020", sales: 3000 },
    { year: "2021", sales: 5000 },
    { year: "2022", sales: 5500 },
    { year: "2023", sales: 7000 },
  ];


  const handleTabChange = (tabValue: React.SetStateAction<string>) => {
    setActiveTab(tabValue);
  };
  const navItems = [
    "home",
    "about",
    "products",
    "projects",
    "quality",
    "news",
    "contact",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 bg-primary text-primary-foreground py-4 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">광신철강산업(주)</h1>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className={`hover:text-secondary-foreground ${
                  activeTab === item.toLowerCase()
                    ? "bg-primary-foreground text-primary"
                    : ""
                }`}
                onClick={() => handleTabChange(item)}
              >
                {item}
              </Button>
            ))}
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
        <nav
          className={`sm:hidden flex flex-col space-y-2 p-4 bg-primary overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className={`hover:text-secondary-foreground ${
                activeTab === item.toLowerCase()
                  ? "bg-primary-foreground text-primary"
                  : ""
              }`}
              onClick={() => {
                handleTabChange(item);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </Button>
          ))}
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="hidden md:grid w-full grid-cols-7">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="quality">Quality</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <Card>
              <CardHeader>
                <CardTitle>
                  광신철강산업(주) 창업이념 고객감동 서비스 최고의 노력으로
                  보답하는 기업!
                </CardTitle>
                <CardDescription>
                  고객만족을 사명으로 생각하는 기업, 고객의 성공이 우리의
                  성공이라는 가치 아래 오늘 이 순간도 그 노력을 멈추지 않고
                  있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 bg-gray-200 h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src="/image/banner.png"
                    alt="Main Project Banner"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mb-4">
                  광신에서는 철근 가공 및 기계식 철근 커플링 분야를 전문으로
                  하며, 모든 규모의 건설 프로젝트에 최고 수준의 솔루션을
                  제공합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Button onClick={() => handleTabChange("about")}>
                        Learn About Us
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleTabChange("products")}
                      >
                        View Our Products
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleTabChange("projects")}
                      >
                        Explore Projects
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleTabChange("contact")}
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Company Performance
                    </h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="sales" fill="hsl(var(--primary))" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>회사 소개</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">광신철강산업</h3>
                  <p className="mb-4">
                    오늘날 건설공사는 수요자 중심의 친환경 정책으로 변모해 가고
                    있으며, 이로 인하여 철근공사 또한 독창적이고 다양한 설계에
                    따라 복잡 다양해지고 있습니다. 또한 외적요인으로는
                    수입원자재 가격의 상승이 지속되고 있으며, 내적요인은 인건비
                    상승 등의 요인으로 공사현장의 원가가 지속적으로 상승해 가고
                    있습니다. 이로 인하여 기존의 현장에서 시행하던
                    철근가공조립은 새로운 시스템에 의한철근자동화공장 가공으로
                    변화해 가고 있습니다.
                  </p>
                  <p className="mb-4">
                    철공사에서의 가공은 협소한 장소로 인하여 철근가공 적정 시
                    많은 문제가 발생하고, 소음발생 등으로 민원의 발생소지가
                    다분하며, 공기 단축을 시공되의 미비로 자재의 낭비, 원자재
                    관리 불량 등으로 공사에 많은 어려움이 되고 있습니다.
                  </p>
                  <p className="mb-4">
                    당사는 상기와 같은 공사현장의 빠른 변화들에 대응하고
                    공사현장에서의 문제를 해결하기 위하여 1991년부터 철근가공
                    공장을 운영하고 있으며, 이제는 20년 이상의 경험과 Know-how를
                    축적하여 보다 좋은 품질과 정성으로 각 현장에 보답 하고자
                    합니다.
                  </p>
                  <p className="mb-4">
                    또한 현장에서 요구하는 고품질의 원가절감을 위하여 자동화
                    설비 및 선진화된 생산 공정 개선에 최선을 다하고 있습니다.
                  </p>
                  <p>
                    부디 폐사의 정성이 귀사의 일익번창에 미력이나마 보탬이 되길
                    희망하며 귀사의 무궁한 발전을 기원 합니다.
                  </p>
                  <p>광신철강산업(주)</p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>인증서 및 수상 내역</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>ISO 9001:2015 인증</li>
                      <li>한국 산업 표준 (KS) 인증</li>
                      <li>2022년 최우수 공급업체 상 - 한국건설협회</li>
                      <li>2021년 철근가공 혁신상</li>
                      <li>2020년 녹색 기술 인증</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Our Products</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>HS-BAR</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      HS-BAR is our flagship product for mechanical rebar
                      coupling. It offers superior strength, easy installation,
                      and cost-effectiveness.
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>High tensile strength</li>
                      <li>Seismic resistance</li>
                      <li>Quick and easy installation</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Couplers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our couplers are designed for various applications,
                      ensuring secure and efficient rebar connections.
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Standard couplers</li>
                      <li>Position couplers</li>
                      <li>Transition couplers</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Technology & Equipment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We use state-of-the-art technology and equipment in our
                      production process:
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Automated rebar processing lines</li>
                      <li>CNC threading machines</li>
                      <li>Advanced quality control equipment</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Our Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>Project {i}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-200 h-32 flex items-center justify-center mb-2">
                          <p>Project Image</p>
                        </div>
                        <p>Brief description of Project {i}...</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Separator className="my-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Case Study: Lotte World Tower
                </h3>
                <p className="mb-4">
                  Detailed case study of our involvement in the construction of
                  Lotte World Tower, showcasing our products and expertise in
                  action.
                </p>
                <Button>Read Full Case Study</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quality">
            <Card>
              <CardHeader>
                <CardTitle>Quality Management</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Quality Management System
                  </h3>
                  <p className="mb-4">
                    Our quality management system ensures that every product
                    meets the highest standards of performance and reliability.
                    We follow strict protocols at every stage of production.
                  </p>
                  <h3 className="text-xl font-semibold mb-2">
                    Testing Processes
                  </h3>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Tensile strength testing</li>
                    <li>Fatigue resistance testing</li>
                    <li>Corrosion resistance testing</li>
                    <li>Dimensional accuracy checks</li>
                  </ul>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>ISO 9001:2015 Quality Management System</li>
                      <li>Korean Industrial Standard (KS) Certification</li>
                      <li>American Concrete Institute (ACI) Compliance</li>
                      <li>European Technical Assessment (ETA)</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news">
            <Card>
              <CardHeader>
                <CardTitle>News & Updates</CardTitle>
              </CardHeader>
              <CardContent>
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="mb-4">
                    <CardHeader>
                      <CardTitle>News Title {i}</CardTitle>
                      <CardDescription>Date: July {i}, 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Brief excerpt of news article {i}...</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  We're here to answer any questions you may have about our
                  services.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                  <p>123 Steel Street, Seoul, South Korea</p>
                  <p>Phone: +82-2-1234-5678</p>
                  <p>Email: info@gwangshin.com</p>

                  <h3 className="text-xl font-semibold mt-4 mb-2">Factory</h3>
                  <p>456 Industrial Road, Busan, South Korea</p>
                  <p>Phone: +82-51-9876-5432</p>

                  <div className="mt-4 bg-gray-200 h-48 flex items-center justify-center">
                    <p>Interactive Map Placeholder</p>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message" />
                      </div>
                      <Button type="submit">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                {[
                  "Home",
                  "About",
                  "Products",
                  "Projects",
                  "Quality",
                  "News",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-current hover:text-primary"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Contact Information
              </h3>
              <p>Email: info@gwangshin.com</p>
              <p>Phone: +82-2-1234-5678</p>
              <p>Address: 123 Steel Street, Seoul, South Korea</p>
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
            <h3 className="text-lg font-semibold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>
              &copy; 2024 Gwangshin Steel Industry Co., Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GwangshinWebsite;
