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
        <AccordionTrigger>What the heck is Kato 😵 ?</AccordionTrigger>
        <AccordionContent>Meet Kato 😳, your math buddy with OpenAI Edge! 🚀 It's like having a super-smart friend who quickly solves all your algebra puzzles. No more math stress – Kato makes it simple, turning tricky problems into easy solutions. 🤖 </AccordionContent>
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
        <AccordionTrigger>RAHHHHHHHH!!!!!!!!!!!!!!!</AccordionTrigger>
        <AccordionContent>Kato mentioned!!!!! Rahhhhhhhh!!!! what the heck is a maths algebra question.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
