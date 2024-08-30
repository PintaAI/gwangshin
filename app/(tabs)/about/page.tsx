// app/(tabs)/about/page.tsx
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompanyTimeline from './CompanyTimeline';
import CompanyStats from './CompanyStats';
import TestimonialSlider from './TestimonialSlider';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">회사 소개</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              오늘날 건설공사는 수요자 중심의 친환경 정책으로 변모해 가고 있으며, 
              이로 인하여 철근공사 또한 독창적이고 다양한 설계에 따라 복잡 다양해지
              고 있습니다. 또한 외적으로는 수입원자재 가격의 상승이 지속되고 있으
              며, 내적으로는 인건비 상승 등의 요인으로 공사현장의 원가가 지속적으로 
              상승해 가고 있습니다. 이로 인하여 기존의 현장에서 시행하던 철근가공조
              립은 새로운 시스템에 의한 철근자동화공장 가공으로 변화해 가고 
              있습니다.
            </p>
            <p>
              현장에서의 가공은 협소한 장소로 인하여 철근가공 작업 시 많은 문제가 
              발생하고, 소음과 진동으로 인한 민원의 발생소지가 다분하며, 특히 좁은한 
              시공도의 미비로 자재의 낭비, 원자재 관리 불량 등으로 공사에 많은 
              어려움이 되고 있습니다.
            </p>
            <p>
              당사는 상기와 같은 공사현장의 빠른 변화들에 대응하고 공사현장에서
              의 문제를 해결하기 위하여 1991년부터 철근가공 공장을 운영하고 있으
              며, 이제는 20년 이상의 경험과 Know-how를 축적하여 보다 좋은 품
              질과 정성으로 각 현장에 보답 하고자 합니다.
            </p>
            <p>
              또한 현장에서 요구하는 고품질과 원가절감을 위하여 자동화 설비 및 
              선진화된 생산 공정 개선에 최선을 다하고 있습니다.
            </p>
            <p>
              부디 폐사의 정성이 귀사의 일익번창에 미력이나마 보탬이 되길 
              희망하오며 귀사의 무궁한 발전을 기원 합니다.
            </p>
            <p className="text-right font-bold">
              광신철강산업(주)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">회사 개요</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <ul className="list-none pl-0">
              <li><strong>회사 명:</strong> 광신철강산업(주)</li>
              <li><strong>위치:</strong> 본사 : 대전광역시 | 동구 대전로 1020번길 10</li>
              <li><strong>공장 주소:</strong> 충북 충주시 서운면 천남로 692</li>
              <li><strong>설립 년월일:</strong> 1991년 10월</li>
              <li><strong>사업 내용:</strong>
                <ul>
                  <li>철근 공장일괄 철근 도수비</li>
                  <li>기계식 철근 쿠프라 생산 판매</li>
                </ul>
              </li>
              <li><strong>연간 생산량:</strong> 월 7,000TON / 연간 70,000TON</li>
              <li><strong>공시 좌우원 수:</strong> 60명(관리직 포함)</li>
              <li><strong>주소지:</strong>
                <ul>
                  <li>본사 : 대전광역시 | 동구 대전로 1020번길 10</li>
                  <li>TEL : (042)636-9922</li>
                  <li>1공장 : 충북 충주시 서운면 천남로 692</li>
                  <li>TEL : (043)265-9921~4</li>
                  <li>FAX : (043)265-9923</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">대표이사 인사말</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="clearfix">
            <Image 
              src="/image/sajang.png" 
              alt="대표이사 김용산" 
              width={128}
              height={128}
              className="rounded-lg float-left mr-4 mb-2 sm:mr-6"
              style={{ shapeOutside: 'margin-box' }}
            />
            <div>
              <p>안녕하십니까?</p>
              <p>
                믿음과 신뢰를 바탕으로 고객만족을 창업이념으로 설립된(주)광신철강은 20여 년간 축적된 연구개발과 끊임없는 노력으로 이제 명실상부한 중부권 최대의 철근가공공장으로 자리매김 하였습니다. 귀사의 번창하는 성원에 저희 임직원 일동은 깊은 감사를 드립니다.
              </p>
              <p>
                최근 철근가공 자동화 설비를 추가 도입하여 국내 유일의 1350mm 대량 절단, 가공이 가능해졌으며, 5000평 규모의 가공공장을 더욱 최적화 하여, 원가절감과 생산관리 시스템 구축을 통한 생산성 향상과 데이터 전산화를 통한 엄격한 품질관리 시스템을 개발하여 더욱 새롭게 최근 가공의 공장가공 정착화에 앞장설 수 있는 기틀을 마련하게 되었습니다.
              </p>
              <p>
                향후 공장집중과 가공공장을 하나의 패캐로 하는 프로젝트 개발을 추진하고 있으며, 이를 토대로 현장 시공솔에서도 실시간으로 온라인 정산망을 활용하여 철근 가공 상황을 수시로 검토할 수 있는 시스템을 계획하고 있습니다.
              </p>
              <p>
                광신철강산업(주)의 전 직원은 그 동안의 기술 축적과 현장 경험을 바탕으로 철근 가공업계에서 추구하는 체계적이고 표준화된 가공 산업의 선진화와 품질 향상에 최선의 노력을 다 할 것입니다.
              </p>
              <p>
                철근가공 = 광신의 등식이 성립할 수 있도록 이 분야 최고가 되는 날까지 모든 정성을 다하겠습니다. 이런 페사의 정성이 귀사와 귀 현장에 미력이나 큰 보탬이 될 수 있기를 희망하오며 귀사의 무궁한 발전을 기원합니다.
              </p>
              <p className="text-right font-bold mt-4">
                대표이사 김 용 산
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="history">연혁</TabsTrigger>
          <TabsTrigger value="vision">비전 및 미션</TabsTrigger>
          <TabsTrigger value="stats">회사 통계</TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <CompanyTimeline />
        </TabsContent>
        <TabsContent value="vision">
          <Card>
            <CardHeader>
              <CardTitle>비전 및 미션</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">비전</h3>
              <p className="mb-4">글로벌 리더로서 혁신적인 철강 솔루션을 제공하여 지속 가능한 미래를 건설합니다.</p>
              <h3 className="text-xl font-semibold mb-2">미션</h3>
              <ul className="list-disc pl-5">
                <li>최고 품질의 제품과 서비스 제공</li>
                <li>지속적인 기술 혁신</li>
                <li>환경 친화적인 생산 프로세스 구축</li>
                <li>고객, 직원, 지역 사회와의 상생</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats">
          <CompanyStats />
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>고객 후기</CardTitle>
        </CardHeader>
        <CardContent>
          <TestimonialSlider />
        </CardContent>
      </Card>
    </div>
  );
}