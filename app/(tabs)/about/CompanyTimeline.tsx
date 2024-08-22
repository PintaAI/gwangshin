// app/(tabs)/about/CompanyTimeline.tsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  { year: 1991, month: 6, event: "광신철재 설립" },
  { year: 1991, month: 8, event: "공장(옥동동) 가공생산 및 철이스트 설치" },
  { year: 1993, month: 2, event: "자동절단 절곡 LINE 설치 (TOYO 1SET)" },
  { year: 1993, month: 10, event: "광신철강 설립" },
  { year: 1995, month: 10, event: "자동절단 절곡기 추가 설치 (TOYO 1SET외)" },
  { year: 1998, month: 9, event: "광신철강 공장등록" },
  { year: 1999, month: 7, event: "광신철강산업 신규설립 및 신재동 공장 이전" },
  { year: 2001, month: 2, event: "광신철강산업(주) 공장이전 (충북진천군 광혜원면)" },
  { year: 2001, month: 2, event: "광신철강산업(주) 법인전환" },
  { year: 2001, month: 7, event: "자동 선단, 절곡기 추가 설치 (TFC-LL TOYO)" },
  { year: 2001, month: 7, event: "반자동 절곡기 설치 (B-52 TOYO)" },
  { year: 2004, month: 10, event: "자동 선단, 절곡기 추가 설치 (KBS-25-2, KBS-42TW전)" },
  { year: 2005, month: 10, event: "D52mm 자동선단 라인 추가 설치 (JEZ-510)" },
  { year: 2007, month: 1, event: "가동판 설치 자동라인 설치" },
  { year: 2007, month: 2, event: "자동 선단, 절곡기 추가 설치 (TFC-M 외 3대 TOYO)" },
  { year: 2009, month: 12, event: "공장이전 충주시 서운면 천남로 692" },
];

const CompanyTimeline: React.FC = () => {
  return (
    <Card>
      <CardContent className="relative pt-6">
        <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12"></div>
            <div className="z-20 flex items-center justify-center w-auto h-8 px-2 rounded-full bg-primary text-white text-sm">
              {event.year}.{event.month.toString().padStart(2, '0')}
            </div>
            <div className="w-5/12 p-4 rounded shadow bg-white">
              {event.event}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CompanyTimeline;