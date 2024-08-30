import React from 'react';
import Image from 'next/image';

export default function QualityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">품질</h1>
      <p className="mb-4">
        광신철강산업(주)은 최고 수준의 품질 관리 시스템을 통해 고객에게 신뢰할 수 있는 제품을 제공합니다. 우리의 품질 관리 프로세스와 인증에 대해 알아보세요.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">품질보증 기준</h2>
      <p className="mb-4">
        기계식 이음방식은 KSD3504(철근콘크리트 봉강)에 규정하는 봉강(이하 &quot;철근&quot;으로 한다)을 기계적인 방법으로 연결하여 사용하는데 적용한다. 구조물 철근 콘크리트 공사에 사용하는 철근 및 부속자재 연결이음 또는 연결하고자 하는 철근의 단부를 UP SET(단부성형장치) 및 압연으로 정업한 후, 철조 ROLLING 또는 체이서에 의한 나사가공(KS B 0201 적용)을 하여, TAPPING(암나사가공) 가공된 COUPLER(소켓)를 이용하여 연결하는 기계식 이음방법이다.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">시험의 종류 및 기준</h3>

      <h4 className="text-lg font-medium mt-4 mb-2">굽모양 검사</h4>
      <p className="mb-4">
        나사이음 커플러의 굽모양 시험은 아름에 사용될 커플러의 철근의 나사가공 부위에 콘크리트 부착성을 떨어뜨리는 유해물질이 없어야 하며, 철근나사 가공부의 단면은 원상성 유지를 위해 별면을 유지하는 것이 좋다.
      </p>

      <h4 className="text-lg font-medium mt-4 mb-2">육안검사</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>커플러 : 커플러의 외부(둘기형태)에 기름, 때 등의 유해물질 유 • 무를 육안으로 확인 반입물량 전수를 검사한다.</li>
        <li>나사이음철근 : 철근 나사부의 청정도, 단면의 평면도, 직진도, 성은 가공여부를 육안으로 확인 반입물량 전수를 검사한다.</li>
        <li>커플러의 재질시험 : 커플러의 재질은 KSD3752(기계구조용 탄소강재)에서 규정한 S35C, S40C, S45C 또는 KSD3517 기계구조용 탄소강관재에서 규정하는 STKM 14종 또는 13종 이상으로 현면에 물기가 형성되도록 압입가공하여 사용하며, 인장시험을 한다.</li>
      </ul>

      <h4 className="text-lg font-medium mt-4 mb-2">기계적 성질시험</h4>
      <p className="mb-4">
        인장시험 (일방향 인장시험) : 나사이음의 인장시험은 KSB0802에 의하여 항복강도와 인장강도를 시험한다. 이 경우 단면적은 KSD3504를 기준으로 한다.
      </p>

      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">시험항목</th>
            <th className="border border-gray-300 p-2">SD300</th>
            <th className="border border-gray-300 p-2">SD350</th>
            <th className="border border-gray-300 p-2">SD400</th>
            <th className="border border-gray-300 p-2">SD500</th>
            <th className="border border-gray-300 p-2">SD600</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">항복강도(N/m²)</td>
            <td className="border border-gray-300 p-2">300이상</td>
            <td className="border border-gray-300 p-2">350이상</td>
            <td className="border border-gray-300 p-2">400이상</td>
            <td className="border border-gray-300 p-2">500이상</td>
            <td className="border border-gray-300 p-2">600이상</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">인장강도(N/m²)</td>
            <td className="border border-gray-300 p-2">4400이상</td>
            <td className="border border-gray-300 p-2">4900이상</td>
            <td className="border border-gray-300 p-2">5600이상</td>
            <td className="border border-gray-300 p-2">6200이상</td>
            <td className="border border-gray-300 p-2">7200이상</td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-lg font-medium mt-4 mb-2">정적내력시험</h4>
      <p className="mb-4">
        상온에서의 정적인장시험을 통하여 발생하는 하중에서 부재의 건전성을 평가함. 철근 모재에 95% 항복점까지 하중을 가한 뒤 2%까지 제하한 후 육안항강성 및 전류변형률을 측정한 후 철근 모재가 파단될 때까지 인장시험을 한다.
      </p>

      <div className="mt-6">
        <Image src="/images/quality_test_setup.png" alt="Quality Test Setup" width={800} height={600} />
        <p className="text-sm text-gray-600 mt-2">품질 테스트 설정 이미지</p>
      </div>
    </div>
  );
}