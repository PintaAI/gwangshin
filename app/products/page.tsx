"use client"

import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">제품</h1>
      <p className="mb-4">
        광신철강산업(주)의 제품 라인업을 소개합니다. 고품질의 철강 제품을 제공하여 다양한 산업 분야의 요구를 충족시키고 있습니다.
      </p>
      
      <Tabs defaultValue="equipment" className="w-full">
        <TabsList>
          <TabsTrigger value="equipment">장비보유 현황</TabsTrigger>
          <TabsTrigger value="hsbar">HS-BAR (기계식 철근이음)</TabsTrigger>
          <TabsTrigger value="coupler">압연 나사식 철근이음 커플러 치수</TabsTrigger>
          <TabsTrigger value="cip">CIP 공법</TabsTrigger>
        </TabsList>
        <TabsContent value="equipment">
          <h2 className="text-2xl font-bold mb-4">장비보유 현황</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">장비명/제조사</th>
                  <th className="py-2 px-4 border-b">규격</th>
                  <th className="py-2 px-4 border-b">수량</th>
                  <th className="py-2 px-4 border-b">1일/생산량</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="py-2 px-4 border-b">자동절단기 / TOYO</td><td className="py-2 px-4 border-b">TFC-LL-A</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b">50TON</td></tr>
                <tr><td className="py-2 px-4 border-b">자동절단기 / TOYO</td><td className="py-2 px-4 border-b">TFC-M-A</td><td className="py-2 px-4 border-b">5SET</td><td className="py-2 px-4 border-b">40TON/200TON</td></tr>
                <tr><td className="py-2 px-4 border-b">자동절단기 / 有本鐵工</td><td className="py-2 px-4 border-b">47cm 대형 절단나이프</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b">100TON</td></tr>
                <tr><td className="py-2 px-4 border-b">절단기 / TOYO</td><td className="py-2 px-4 border-b">C-43</td><td className="py-2 px-4 border-b">2SET</td><td className="py-2 px-4 border-b">6TON/12TON</td></tr>
                <tr><td className="py-2 px-4 border-b">1일/절단 총 생산량</td><td className="py-2 px-4 border-b"></td><td className="py-2 px-4 border-b"></td><td className="py-2 px-4 border-b">362TON</td></tr>
                <tr><td className="py-2 px-4 border-b">자동절곡기 / TOYO</td><td className="py-2 px-4 border-b">TBS25-1</td><td className="py-2 px-4 border-b">3SET</td><td className="py-2 px-4 border-b">15TON/45TON</td></tr>
                <tr><td className="py-2 px-4 border-b">자동절곡기 / TOYO</td><td className="py-2 px-4 border-b">TBS13-5</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b">7TON</td></tr>
                <tr><td className="py-2 px-4 border-b">자동절곡기 / 건우기계</td><td className="py-2 px-4 border-b">KBS-25-2</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b">5TON</td></tr>
                <tr><td className="py-2 px-4 border-b">하비도메기 / 태연기계</td><td className="py-2 px-4 border-b">TAB-HD13A</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b">4TON</td></tr>
                <tr><td className="py-2 px-4 border-b">자동절곡기 / 건우기계</td><td className="py-2 px-4 border-b">KBS-42TW(2헤드)</td><td className="py-2 px-4 border-b">3SET</td><td className="py-2 px-4 border-b">15TON</td></tr>
                <tr><td className="py-2 px-4 border-b">양방향절곡기 / 태연기계</td><td className="py-2 px-4 border-b">TYH-HD32</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b">25TON</td></tr>
                <tr><td className="py-2 px-4 border-b">양방향절곡기 / TOYO</td><td className="py-2 px-4 border-b">B33 × 2</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b">25TON</td></tr>
                <tr><td className="py-2 px-4 border-b">절곡기 / TOYO</td><td className="py-2 px-4 border-b">B-52</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b">30TON</td></tr>
                <tr><td className="py-2 px-4 border-b">절곡기 / TOYO</td><td className="py-2 px-4 border-b">B-40</td><td className="py-2 px-4 border-b">2SET</td><td className="py-2 px-4 border-b">15TON/30TON</td></tr>
                <tr><td className="py-2 px-4 border-b">절곡기 / TOYO</td><td className="py-2 px-4 border-b">B-25</td><td className="py-2 px-4 border-b">2SET</td><td className="py-2 px-4 border-b">3TON/6TON</td></tr>
                <tr><td className="py-2 px-4 border-b">절곡기 / TOYO</td><td className="py-2 px-4 border-b">B-16</td><td className="py-2 px-4 border-b">2SET</td><td className="py-2 px-4 border-b">3TON/6TON</td></tr>
                <tr><td className="py-2 px-4 border-b">절곡기 / 태연기계</td><td className="py-2 px-4 border-b">TYB-D35</td><td className="py-2 px-4 border-b">4SET</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">1일/절곡 총 생산량</td><td className="py-2 px-4 border-b"></td><td className="py-2 px-4 border-b"></td><td className="py-2 px-4 border-b">333TON</td></tr>
                <tr><td className="py-2 px-4 border-b">원곡기 / TOYO</td><td className="py-2 px-4 border-b">R-32/R-22/R-19</td><td className="py-2 px-4 border-b">3SET</td><td className="py-2 px-4 border-b">15TON</td></tr>
                <tr><td className="py-2 px-4 border-b">원곡기 / 태연기계</td><td className="py-2 px-4 border-b">TYR-HD32A</td><td className="py-2 px-4 border-b">1SET</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">유곡기 / 건우기계</td><td className="py-2 px-4 border-b">KMU-32</td><td className="py-2 px-4 border-b">2SET</td><td className="py-2 px-4 border-b">50TON</td></tr>
                <tr><td className="py-2 px-4 border-b">10전전유압컨넥스프링기</td><td className="py-2 px-4 border-b">자체제작</td><td className="py-2 px-4 border-b">2SET</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">운반차량</td><td className="py-2 px-4 border-b">카고/25TON</td><td className="py-2 px-4 border-b">3대</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b"></td><td className="py-2 px-4 border-b">복사트럭/5TON</td><td className="py-2 px-4 border-b">1대</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">지게차</td><td className="py-2 px-4 border-b">7TON</td><td className="py-2 px-4 border-b">3대</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">천정 크레인</td><td className="py-2 px-4 border-b">5TON/25M</td><td className="py-2 px-4 border-b">12대</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">자동용상밴딩기</td><td className="py-2 px-4 border-b">CS460</td><td className="py-2 px-4 border-b">1대</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">장비절단 및 밴딩기</td><td className="py-2 px-4 border-b">Format Line 16</td><td className="py-2 px-4 border-b">1대</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">커플러자동라인</td><td className="py-2 px-4 border-b"></td><td className="py-2 px-4 border-b">3SET</td><td className="py-2 px-4 border-b">1일 생산량 1~6,000개</td></tr>
                <tr><td className="py-2 px-4 border-b">코일철근자동가공기</td><td className="py-2 px-4 border-b"></td><td className="py-2 px-4 border-b">3대</td><td className="py-2 px-4 border-b"></td></tr>
                <tr><td className="py-2 px-4 border-b">CIP철근밴딩기계</td><td className="py-2 px-4 border-b">12M</td><td className="py-2 px-4 border-b">4대</td><td className="py-2 px-4 border-b"></td></tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="hsbar">
    <h2 className="text-2xl font-bold mb-4">HS-BAR (기계식 철근이음)</h2>
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">HS-BAR란?</h3>
      <p className="mb-4">
        이음 하고자 하는 철근의 단부를 부풀림 및 압착공정을 거친 후 Rolling(전조) 방식으로 나사산을 형성하여, Coupler와 체결하는 기계식 철근이음 방법입니다.
      </p>

      <h3 className="text-xl font-semibold mb-2">기계식 철근이음 이란?</h3>
      <p className="mb-4">
        철근 코크리트 구조물이 대형화 및 내진설계의 필요요건을 충족 시키기 위하여, 오랫동안 연구되어 탄생하게 된 철근의 이음방식으로 현재 토목 및 건축현장에 널리 사용되고 있다.
      </p>

      <h3 className="text-xl font-semibold mb-2">HS-BAR의 특징</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>안전성
          <ul className="list-disc pl-6">
            <li>결합 이음과 비교하여 배근 간격의 확보가 우수하여, CONC 타설 시 공간 활용이 용이하다.</li>
            <li>철근 모재의 항복강도 보다 125% 이상의 인장 또는 압축강도를 발휘한다.</li>
            <li>철근의 Stress(응력) 중심이 동일 선상에 위치함으로 구조적으로 매우 안전하다.</li>
          </ul>
        </li>
        <li>경제성
          <ul className="list-disc pl-6">
            <li>결합 이음으로 인한 철근의 Loss를 줄일 수 있다.(철근 원자재 가격의 인상)</li>
            <li>현장운송에 의한 1차 가공이 이루어져 본 사용이 빠르게 이루어질 수 있다.</li>
            <li>철근조립 용이하여 인건비 및 공사기간을 단축할 수 있다.</li>
          </ul>
        </li>
        <li>시공성
          <ul className="list-disc pl-6">
            <li>초고층 건물이나 사공편(Top Down, ILM, Pre-Fab)이 적용되는 현장에 유리하다.</li>
            <li>2, 3차 단설 등의 난공사에 적합하다.</li>
            <li>철근조립 시 육안검사가 가능하여, 정밀시공 및 검사가 용이하다.</li>
            <li>철근의 연속성을 유지시켜주는 정밀시공으로 안정력을 발휘할 수 있는 투수에 적합하다.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">HS-BAR의 장점</h3>
      <p className="mb-4">
        HS-BAR의 가장 큰 장점은 나사산을 형성하기전에 소성가공(부풀림 및 압입)을 한 후 전조나사를 형성하기 때문에 철근의 특성에 미치는 영향이 없다.
      </p>

      <h3 className="text-xl font-semibold mb-2">참고</h3>
      <p className="mb-4">
        철근은 압연공정을 거쳐 제조 된 제품을 압착 및 부풀림 작업을 하고 있으며, 이를 단류선(grain flow)이라 한다. 이러 한다. 이런 단류선은 이곳한 철근 인자 간에 결속에 있에 중요한 요소이므로 결재들의 특성에 상당한 영향을 미치게 된다. 전조나사는 이때 그대과 갈이 단류신이 끊어지지않고 매우 자연스럽게 흘러가게 된다.
      </p>

      <h3 className="text-xl font-semibold mb-2">HS-BAR의 특수이음방법</h3>
      <div className="mb-8">
        <h4 className="text-lg font-semibold">A TYPE</h4>
        <div className="flex justify-between items-center">
          <p>철근을 회전하여 체결하는 방식이다.</p>
          
        </div>
        <p>예) ILM, FCM, MSS, 교량상판의 PSC-BOX, Slip-form, 기둥, 슬라브, 벽체 등</p>
        <Image src="/hsbar/type-a.png" alt="Type A Illustration" width={500} height={100} className="ml-4" />
        
        <h4 className="text-lg font-semibold mt-3">B TYPE</h4>
        <div className="flex justify-between items-center">
          <p>한쪽 철근의 나사부를 Coupler 깊이 만큼 가공하고, Coupler를 회전하여 조립하는 방식이다.</p>
          
        </div>
        <Image src="/hsbar/type-b.png" alt="Type B Illustration" width={500} height={100} className="ml-4" />
        <p>예) 장대철근, 중량철근</p>
        
        <h4 className="text-lg font-semibold mt-3">C TYPE</h4>
        <div className="flex justify-between items-center">
          <p>Pre-Fab 공법을 활용한 철근망 선조립 시공시 적용하는 이음 방식이며, 시공시 가공 오차를 감안하여 커플러의 길이를 길게 제작한다.</p>
          
        </div>
        <Image src="/hsbar/type-c.png" alt="Type C Illustration" width={500} height={100} className="ml-4" />
        <p>예) Pre-Fab 공법</p>
      </div>
      
      <p className="italic text-sm">참고: 각 TYPE별 상세 도식 및 현장 적용 사진은 별도의 이미지 자료를 참조하세요.</p>
    </div>
  </TabsContent>
  <TabsContent value="coupler">
          <h2 className="text-2xl font-bold mb-4">압연 나사식 철근이음 커플러 치수</h2>
          <div className="mb-8">
            <div className="flex flex-col md:flex-row mb-6">
              <div className="md:w-1/2 pr-4">
                <Image
                  src="/images/rebar_splice_coupler.png"
                  alt="압연 나사식 철근이음 커플러 치수"
                  width={500}
                  height={375}
                  layout="responsive"
                />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">압연 나사식 철근이음 이란?</h3>
                <p className="mb-4">
                  철근의 이음에 있어 이음부의 강도를 높일 목적으로 철근의 단부를 눌러 굵게한 후 원나사 커플러를 이용하여 철근의 단부를 연결하는 이음방법입니다.
                </p>
                <h3 className="text-xl font-semibold mb-2">특징</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>제작방법
                    <p>철근의 이음에 있어 이음부의 강도를 높일 목적으로 철근의 단부를 눌러 굵게한 후 원나사를 가공한 후 원나사 커플러를 이용하여 철근의 단부를 연결하는 이음방법</p>
                  </li>
                  <li>특징
                    <p>철근의 생산방식과 동일한 롤링(전조) 공정을 통해 철근의 단면적 손실없이 철근을 성형한다.</p>
                  </li>
                  <li>연구개발 배경 및 필요성
                    <ul className="list-disc pl-6">
                      <li>기계설비 비용 및 생산 공정의 단순화를 위하여 개발하게 되었다.</li>
                      <li>기계식 철근이음을 건설현장에 적용하여, 건설비용을 절감하면서 우수한 품질을 확보하기 위하여 개발되었다.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">호칭</th>
                    <th className="py-2 px-4 border-b">나사규격</th>
                    <th className="py-2 px-4 border-b">피치(P)</th>
                    <th colSpan={2} className="py-2 px-4 border-b">나사길이</th>
                    <th colSpan={2} className="py-2 px-4 border-b">Coupler(원형 또는 특수형)</th>
                  </tr>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b"></th>
                    <th className="py-2 px-4 border-b"></th>
                    <th className="py-2 px-4 border-b"></th>
                    <th className="py-2 px-4 border-b">유효나사(S1)</th>
                    <th className="py-2 px-4 border-b">전체나사(S2)</th>
                    <th className="py-2 px-4 border-b">외경</th>
                    <th className="py-2 px-4 border-b">길이</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-4 border-b">D13</td><td className="py-2 px-4 border-b">M18</td><td className="py-2 px-4 border-b">2.0P</td><td className="py-2 px-4 border-b">15</td><td className="py-2 px-4 border-b">30</td><td className="py-2 px-4 border-b">19</td><td className="py-2 px-4 border-b">30</td></tr>
                  <tr><td className="py-2 px-4 border-b">D16</td><td className="py-2 px-4 border-b">M16</td><td className="py-2 px-4 border-b">2.0P</td><td className="py-2 px-4 border-b">19</td><td className="py-2 px-4 border-b">38</td><td className="py-2 px-4 border-b">23</td><td className="py-2 px-4 border-b">38</td></tr>
                  <tr><td className="py-2 px-4 border-b">D19</td><td className="py-2 px-4 border-b">M20</td><td className="py-2 px-4 border-b">2.5P</td><td className="py-2 px-4 border-b">22.5</td><td className="py-2 px-4 border-b">45</td><td className="py-2 px-4 border-b">28</td><td className="py-2 px-4 border-b">45</td></tr>
                  <tr><td className="py-2 px-4 border-b">D22</td><td className="py-2 px-4 border-b">M23</td><td className="py-2 px-4 border-b">2.5P</td><td className="py-2 px-4 border-b">25</td><td className="py-2 px-4 border-b">50</td><td className="py-2 px-4 border-b">33</td><td className="py-2 px-4 border-b">50</td></tr>
                  <tr><td className="py-2 px-4 border-b">D25</td><td className="py-2 px-4 border-b">2NM26</td><td className="py-2 px-4 border-b">3.0P</td><td className="py-2 px-4 border-b">29</td><td className="py-2 px-4 border-b">58</td><td className="py-2 px-4 border-b">38</td><td className="py-2 px-4 border-b">58</td></tr>
                  <tr><td className="py-2 px-4 border-b">D29</td><td className="py-2 px-4 border-b">2NM29.5</td><td className="py-2 px-4 border-b">3.5P</td><td className="py-2 px-4 border-b">32.5</td><td className="py-2 px-4 border-b">65</td><td className="py-2 px-4 border-b">43</td><td className="py-2 px-4 border-b">65</td></tr>
                  <tr><td className="py-2 px-4 border-b">D32</td><td className="py-2 px-4 border-b">2NM32.5</td><td className="py-2 px-4 border-b">3.5P</td><td className="py-2 px-4 border-b">35</td><td className="py-2 px-4 border-b">70</td><td className="py-2 px-4 border-b">48</td><td className="py-2 px-4 border-b">70</td></tr>
                  <tr><td className="py-2 px-4 border-b">D35</td><td className="py-2 px-4 border-b">2NM36</td><td className="py-2 px-4 border-b">4.0P</td><td className="py-2 px-4 border-b">37.5</td><td className="py-2 px-4 border-b">75</td><td className="py-2 px-4 border-b">53</td><td className="py-2 px-4 border-b">75</td></tr>
                  <tr><td className="py-2 px-4 border-b">D38</td><td className="py-2 px-4 border-b">2NM39</td><td className="py-2 px-4 border-b">4.0P</td><td className="py-2 px-4 border-b">40</td><td className="py-2 px-4 border-b">80</td><td className="py-2 px-4 border-b">57</td><td className="py-2 px-4 border-b">80</td></tr>
                  <tr><td className="py-2 px-4 border-b">D41</td><td className="py-2 px-4 border-b">2NM42</td><td className="py-2 px-4 border-b">4.5P</td><td className="py-2 px-4 border-b">43</td><td className="py-2 px-4 border-b">86</td><td className="py-2 px-4 border-b">60</td><td className="py-2 px-4 border-b">86</td></tr>
                  <tr><td className="py-2 px-4 border-b">D51</td><td className="py-2 px-4 border-b">2NM52</td><td className="py-2 px-4 border-b">4.5P</td><td className="py-2 px-4 border-b">55</td><td className="py-2 px-4 border-b">110</td><td className="py-2 px-4 border-b">75</td><td className="py-2 px-4 border-b">110</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm">※ 품질관리를 위하여 상기규격은 변경될 수 있음.</p>
          </div>
        </TabsContent>
        <TabsContent value="cip">
          <h2 className="text-2xl font-bold mb-4">CIP 공법이란</h2>
          <p className="mb-4">
            CIP 공법은 (Cast.In.Place Pile)의 약자로 주형식 현장타설 말뚝 중의 하나다. 지반 천공 장비를 사용하여
            일정 심도까지 천공해 토사를 배출시킨 후에 공내 H-Pile 또는 철근망을 삽입하고 콘크리트 또는 모르타르
            (Mortar)를 타설하는 공법이다. CIP공법은 가설흙막이, 몰막이, 연속벽체 등으로 사용된다.
          </p>

          <h3 className="text-xl font-semibold mb-4">CIP 공법순서</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>측량 및 가이드빔 설치</li>
            <li>철근망 가공 및 조립</li>
            <li>강관말임 및 굴착</li>
            <li>철근망 삽입</li>
            <li>콘크리트타설</li>
            <li>케이싱 인발 및 인접공</li>
            <li>장비 해체 및 철수</li>
          </ol>

          <div className="grid grid-cols-4 gap-4 mt-8">
            <ReactPlayer url="/videos/IMG_1886.mp4" controls width="100%" />
            <ReactPlayer url="/videos/IMG_1887.mp4" controls width="100%" />
            <ReactPlayer url="/videos/IMG_3864.mp4" controls width="100%" />
            <ReactPlayer url="/videos/IMG_3865.mp4" controls width="100%" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}