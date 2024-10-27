"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { db } from "@/utils/db";
import { Question } from "@/utils/schema";
import { eq } from "drizzle-orm";

const Page = ({ params }) => {
  const [questionData, setQuestionData] = useState();

  useEffect(() => {
    if (params && params.pyqId) {
      console.log(params.pyqId);
      getQuestionDetails();
    } else {
      console.error("pyqId is undefined");
    }
  }, [params]);

  const getQuestionDetails = async () => {
    const result = await db
      .select()
      .from(Question)
      .where(eq(Question.mockId, params.pyqId));

    if (result.length > 0) {
      const questionData = JSON.parse(result[0].MockQuestionJsonResp);
      setQuestionData(questionData);
    } else {
      console.error("No results found for the given pyqId");
    }
  };

  return (
    questionData && (
      <div className="p-10 my-5">
        <Accordion type="single" collapsible>
          {questionData.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index} className="mb-5">
              <AccordionTrigger>{item?.Question}?</AccordionTrigger>
              <AccordionContent>{item?.Answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  );
};

export default Page;
