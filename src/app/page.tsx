"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

export default function Home() {
  return (
    <div className="main-container">
      <div className="main-box">
        <Input type="text" placeholder="검색어를 입력해 주세요." />
      </div>
      <div className="main-box rounded-md border border-solid border-default px-5 py-0">
        <Accordion type="multiple">
          <AccordionItem value="First item 1">
            <AccordionTrigger>Accessible</AccordionTrigger>
            <AccordionContent>First item 1</AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-white" value="First item 2">
            <AccordionTrigger>Accessible</AccordionTrigger>
            <AccordionContent>First item 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="main-box">
        <Button bgcolor="white" fontcolor="black" bordercolor="black">
          Shadcn Button
        </Button>
      </div>
    </div>
  );
}
