import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Info() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>How do i utilize this ?</AccordionTrigger>
        <AccordionContent>hello pp</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How do i utilize this ?</AccordionTrigger>
        <AccordionContent>Hello pp</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>How do i utilize this ?</AccordionTrigger>
        <AccordionContent>Hello pp.</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>How do i utilize this ?</AccordionTrigger>
        <AccordionContent>Hello pp.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
