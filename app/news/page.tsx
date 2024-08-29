import React from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "광신철강산업(주), 신규 생산 라인 도입",
    date: "2023-05-15",
    summary: "당사는 최신 기술을 적용한 신규 생산 라인을 도입하여 생산 효율성을 30% 향상시켰습니다."
  },
  {
    id: 2,
    title: "국제 품질 인증 획득",
    date: "2023-04-22",
    summary: "광신철강산업(주)이 국제 품질 관리 시스템 인증을 획득하여 글로벌 시장 진출을 가속화합니다."
  },
  {
    id: 3,
    title: "2023 철강 산업 박람회 참가 예정",
    date: "2023-06-01",
    summary: "오는 7월 서울에서 열리는 2023 철강 산업 박람회에 참가하여 최신 제품을 선보일 예정입니다."
  }
];

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">뉴스</h1>
      <p className="mb-8">
        광신철강산업(주)의 최신 소식과 업계 동향을 확인하세요. 우리 회사의 성장과 혁신에 대한 뉴스를 제공합니다.
      </p>
      <div className="space-y-6">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{item.date}</p>
            <p className="text-gray-700">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}