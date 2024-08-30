import React from 'react';
import Image from 'next/image';

const DeliveryPerformanceTable = () => {
  const performanceData = [
    { project: '행정도시-대덕테크로밸리도로1공구', constructor: '대우건설', cooperator: '다울이엔씨', client: '행정도시건설청' },
    { project: '행정도시-대덕테크로밸리도로2공구', constructor: '현대건설', cooperator: '성보이엔씨', client: '행정도시건설청' },
    { project: '이천-오산고속도로공사3공구', constructor: '포스코건설', cooperator: '삼호, 서진', client: '한국도로공사' },
    { project: '이천-오산고속도로공사4공구', constructor: '지에스건설', cooperator: '한유건설', client: '한국도로공사' },
    { project: '인양광양우회도로공사', constructor: '(주)홍화', cooperator: '(주)홍화', client: '한국도로공사' },
    { project: '부여-보령도로공사2공구', constructor: '진흥기업', cooperator: '영인산업', client: '대전지방국토관리청' },
    { project: '인포-보은도로공사2공구', constructor: '계룡건설', cooperator: '정일개발', client: '대전지방국토관리청' },
    { project: '새만금-전주고속도로5공구', constructor: '디엘이앤씨', cooperator: '성봉, 대아', client: '한국도로공사' },
    { project: '새만금-전주고속도로8공구', constructor: '두산건설', cooperator: '천지개발', client: '한국도로공사' },
    { project: '수원별KTX노반신설공사', constructor: '한화건설', cooperator: '범석건설', client: '한국철도시설공단' },
    { project: '신안산선 복선전철 5공구', constructor: '포스코건설', cooperator: '도양기업', client: '한국철도시설공단' },
    { project: '파주-포천고속도로공사1공구', constructor: '디엠이앤씨', cooperator: '광혁건설', client: '한국도로공사' },
    { project: '김포-파주고속도로공사1공구', constructor: '포스코건설', cooperator: '대흥에이스', client: '한국도로공사' },
    { project: '대전산단서측도로건설공사', constructor: '계룡건설', cooperator: '이인건설', client: '대전종합건설본부' },
    // Second page of data
    { project: '신안산선복선전철3공구', constructor: '삼성물산', cooperator: '대화건설', client: '한국철도시설공단' },
    { project: '동해선포항-삼척철도건설12공구', constructor: '극동건설', cooperator: '세진건설', client: '한국철도시설공단' },
    { project: '천안-청주공항복선전철4공구', constructor: '한화건설', cooperator: '금강E&C', client: '한국철도시설공단' },
    { project: '동해선포항-삼척철도건설10공구', constructor: '쌍용건설', cooperator: '대화건설', client: '한국철도시설공단' },
    { project: '도담-영천복선전철5공구', constructor: '포스코건설', cooperator: '대화건설', client: '한국철도시설공단' },
    { project: '익산-대야복선전철건설2공구', constructor: '금호건설', cooperator: '국제철강', client: '한국철도시설공단' },
    { project: '세종-안성고속도로2공구', constructor: '포스코건설', cooperator: '대화건설', client: '한국도로공사' },
    { project: '이천-충주철도건설4공구', constructor: '포스코건설', cooperator: '대화건설', client: '한국철도시설공단' },
    { project: '신분당선철도1공구', constructor: '포스코건설', cooperator: '대화건설', client: '한국철도시설공단' },
    { project: '서부내륙고속도로2공구', constructor: '대림산업', cooperator: '세종건설', client: '서부내륙고속도로(주)' },
    { project: '세종-안성고속도로6공구', constructor: '한화건설', cooperator: '금강E&C', client: '한국도로공사' },
    { project: '도담-영천복선전철3공구', constructor: '삼성물산', cooperator: '극동건설', client: '한국철도시설공단' },
    { project: '새만금추포선1공구', constructor: '극동건설', cooperator: '대화건설', client: '전북개발공사' },
    { project: '함양-울산8공구', constructor: '대림산업', cooperator: '대화건설', client: '한국도로공사' },
    // Third page of data
    { project: '성남-안성고속도로9공구', constructor: '디엘이앤씨', cooperator: '광혁건설', client: '한국도로공사' },
    { project: '세종-안성고속도로8공구', constructor: '현대엔지니어링', cooperator: '도양기업', client: '한국도로공사' },
    { project: '세종-안성고속도로2공구', constructor: '대우건설', cooperator: '대우건설', client: '한국도로공사' },
    { project: '세종-안성고속도로4공구', constructor: '대우건설', cooperator: '광혁건설', client: '한국도로공사' },
    { project: '세종-안성고속도로2공구', constructor: '한화건설', cooperator: '도양기업', client: '한국도로공사' },
    { project: '성남-안성고속도로8공구', constructor: '계룡건설', cooperator: '서천, 대양', client: '한국도로공사' },
    { project: '평택-부여고속도로6공구', constructor: '대우건설', cooperator: '동림', client: '서부내륙고속도로' },
    { project: '평택-부여고속도로8공구', constructor: '코오롱글로벌', cooperator: '광남토건', client: '서부내륙고속도로' },
    { project: '평택-부여고속도로5공구', constructor: '롯데건설', cooperator: '대보실업', client: '서부내륙고속도로' },
    { project: '성남-안성고속도로6공구', constructor: '두산건설', cooperator: '도영, 한국교량', client: '한국도로공사' },
    { project: '성남-안성고속도로5공구', constructor: 'KR산업', cooperator: '청명토건', client: '한국도로공사' },
    { project: '성남-안성고속도로3공구', constructor: '동부건설', cooperator: '성보, 한국교량', client: '한국도로공사' },
    { project: '성남-안성고속도로2공구', constructor: 'SK건설', cooperator: '광혁건설', client: '한국도로공사' },
    // Fifth page of data
    { project: '정부청사 세종시 속공사', constructor: '디엘이앤씨', cooperator: '디엘이앤씨', client: '한국도로공사' },
    { project: '세종시KTG신축공사', constructor: '쌍용건설', cooperator: '안현건설', client: 'KT&G' },
    { project: '세종시 북합면의사옥공사', constructor: '동우개발', cooperator: '한수건설', client: '행정중심복합도시건설청' },
    { project: '청주우체국신축공사', constructor: '삼인건설', cooperator: '삼인건설', client: '우정사업본부' },
    { project: '청주기아자구마트건설공사', constructor: '원건설', cooperator: '봉성건설', client: '원건설' },
    { project: '세종시 생활주택(오피스텔)신축', constructor: '나성건설', cooperator: '나성건설', client: '나성건설' },
    { project: '세종정부청사 신축공사', constructor: '(주)한라', cooperator: '안현건설', client: '행정부' },
    { project: '대전한국전력연구원신축공사', constructor: '쌍용건설', cooperator: '안현건설', client: '한국전력공사' },
    { project: '대전대허종지식산업센터신축공사', constructor: '쌍용건설', cooperator: '안현건설', client: '쌍용건설' },
    { project: '대전둔산동청년임대주택신축', constructor: '이랜드건설', cooperator: '지현건설', client: '대전도시공사' },
    { project: '대전도안원신스테이0신축공사', constructor: '현대엔지니어링', cooperator: '태민건설', client: '현대엔지니어링' },
    { project: '대전감성7E리플신축공사', constructor: '현대건설', cooperator: '보은건설', client: '대전도시공사' },
    { project: '대전다스카이신축공사', constructor: '현대건설', cooperator: '태민건설', client: '현대건설' },
    { project: '중앙보훈병원 차광병원신축공사', constructor: '장위건설', cooperator: '수인건설', client: '보훈청' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">현장명</th>
            <th className="px-4 py-2 border-b">원도급사</th>
            <th className="px-4 py-2 border-b">협력사</th>
            <th className="px-4 py-2 border-b">발주처</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="px-4 py-2 border-b">{item.project}</td>
              <td className="px-4 py-2 border-b">{item.constructor}</td>
              <td className="px-4 py-2 border-b">{item.cooperator}</td>
              <td className="px-4 py-2 border-b">{item.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">프로젝트</h1>
      <p className="mb-4">
        광신철강산업(주)이 참여한 주요 프로젝트들을 소개합니다. 우리의 기술력과 경험이 다양한 건설 및 인프라 프로젝트에 기여하고 있습니다.
      </p>
      <h2 className="text-2xl font-semibold mb-4">납품 실적</h2>
      <DeliveryPerformanceTable />

      <h2 className="text-2xl font-semibold mb-4 mt-8">시공사례</h2>
      <p className="mb-4">
        나사식 철근이음의 현장생산 과정과 공장생산 과정을 보여주는 시공 사례입니다.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <Image src="/images/construction.png" alt="현장생산과정" width={500} height={300} />
        <Image src="/images/factory.png" alt="공장생산과정" width={500} height={300} />
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">생산 공정</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-bold">A: 압연기</span> - 로울에 의한 압연 방식으로 Ø51까지 생산 가능하며, 자동 방식입니다.
        </li>
        <li>
          <span className="font-bold">B: 단면 면취기</span> - 절단 면이 발생한 단면의 균열을 적산하여 절곡 강이 용이하도록 하는 자동 면취 방식입니다.
        </li>
        <li>
          <span className="font-bold">C: 나사 가공기</span> - 전조다이스에 의한 누름 나사 가공방식입니다.
        </li>
        <li>
          <span className="font-bold">D: 철근가공라인</span> - 철근을 각 공정별 생산과 이송을 용이하게 하도록 작업과 자동화를 이루었습니다.
        </li>
      </ul>
    </div>
  );
}
