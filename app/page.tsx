// app/page.tsx
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PerformanceChart from '@/components/PerformanceChart';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>
            광신철강산업(주) 창업이념 고객감동 서비스 최고의 노력으로 보답하는 기업!
          </CardTitle>
          <CardDescription>
            고객만족을 사명으로 생각하는 기업, 고객의 성공이 우리의 성공이라는 가치 아래 오늘 이 순간도 그 노력을 멈추지 않고 있습니다.
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
            광신에서는 철근 가공 및 기계식 철근 커플링 분야를 전문으로 하며, 모든 규모의 건설 프로젝트에 최고 수준의 솔루션을 제공합니다.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/about">
                <Button className="w-full">Learn About Us</Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="w-full">View Our Products</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="w-full">Explore Projects</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full">Contact Us</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <PerformanceChart />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}