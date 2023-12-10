// import { useState } from "react";
import Info from "@/components/globals/info"
// import { useChat } from "ai/react";
import User from "./globals/User";
// import { Toaster, toast } from "react-hot-toast";


export function Main() {
  // const [expression, setExpression] = useState("");
  // const {
  //   input,
  //   handleInputChange,
  //   handleSubmit,
  //   isLoading,
  //   messages,
  // } = useChat({ body: { expression } });

  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   setExpression(input);
  //   handleSubmit(e);
  // };

  // const lastMessage = messages[messages.length - 1];
  // const result = lastMessage?.role === "assistant" ? lastMessage.content : null;

  return (
    <section className="py-2">
      <div className="flex justify-center border border-gray-200 mt-8 p-6  rounded-md gap-6 my-4">
        <User />
      </div>
      <Info />
    </section>
  )
}
