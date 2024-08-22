import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">연락처</h1>
      <p className="mb-8">
        광신철강산업(주)에 문의하실 내용이 있으신가요? 언제든지 연락 주시기 바랍니다. 귀하의 요구사항을 경청하고 최선을 다해 도와드리겠습니다.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>연락처 정보</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">본사</h3>
            <p>주소: 대전광역시 동구 대전로 1020번길 10</p>
            <p>전화: (042)636-9922</p>
            
            <h3 className="font-semibold mt-4 mb-2">1공장</h3>
            <p>주소: 충북 청주시 서원구 현도면 청남로 692</p>
            <p>전화: (043)265-9921~4</p>
            <p>팩스: (043)265-9923</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>문의하기</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  이름
                </label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  이메일
                </label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  메시지
                </label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit">보내기</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}