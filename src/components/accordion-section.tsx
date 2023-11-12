import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface AccordionSectionProps {
  name: string;
  content: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ name, content }) => (
  <AccordionItem value={name}>
    <AccordionTrigger className="justify-center">{name}</AccordionTrigger>
    <AccordionContent className="text-lg">{content}</AccordionContent>
  </AccordionItem>
);

export default AccordionSection;