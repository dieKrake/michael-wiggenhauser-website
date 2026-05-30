"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      className={cn(
        "w-full divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white",
        className
      )}
    >
      {items.map((item, index) => (
        <RadixAccordion.Item
          key={item.question}
          value={String(index)}
          className="group"
        >
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50 data-[state=open]:bg-gray-50">
              <span className="pr-4 text-base font-semibold text-gray-900">
                {item.question}
              </span>
              <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-gray-700" />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
            <p className="px-6 pt-1 pb-5 text-sm leading-relaxed whitespace-pre-line text-gray-600">
              {item.answer}
            </p>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
