// app/(tabs)/about/TestimonialSlider.tsx
"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, text: "광신철강산업의 제품 품질은 항상 최고입니다. 우리 프로젝트의 성공에 큰 도움이 되었습니다.", author: "김철수, 건설사 대표" },
  { id: 2, text: "고객 서비스가 탁월하며, 납기를 항상 준수합니다. 믿을 수 있는 파트너입니다.", author: "이영희, 프로젝트 매니저" },
  { id: 3, text: "혁신적인 솔루션으로 우리의 건설 과정을 크게 개선했습니다. 강력 추천합니다!", author: "박상철, 건축가" },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
          <p className="font-semibold">- {testimonials[currentIndex].author}</p>
        </CardContent>
      </Card>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
        <Button variant="ghost" size="icon" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
        <Button variant="ghost" size="icon" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialSlider;