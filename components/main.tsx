"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { Toaster, toast } from "react-hot-toast"

import Info from "@/components/globals/info"

import DropDown, { EquationType } from "../components/DropDown"
import User from "./globals/User"

export function Main() {
  const [equation, userEquation] = useState("");
  const [type, setEquationType] = useState<EquationType>("Quadratic Equations");
  const {
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    messages,
  } = useChat({ body: { type, equation } });

  const onSubmit = (e: any) => {
    e.preventDefault();
    userEquation(input);
    handleSubmit(e);
  };

  const lastMessage = messages[messages.length - 1];
  const generatedArticles = lastMessage?.role === "assistant" ? lastMessage.content : null;
  return (
    <section className="py-2">
      <div className="flex justify-center border border-gray-200 mt-8 p-6  rounded-md gap-6 my-4">
        <div className="flex flex-col space-x-4 space-y-12">
          <form className="max-w-xl w-full" onSubmit={onSubmit}>
            <div className="flex mt-10 items-center space-x-3">
              <p className="text-left font-medium">
                Paste your equation below{" "}
                <span className="text-slate-500">
                  (or just write ur own equation)
                </span>
                .
              </p>
            </div>
            <textarea
              value={input}
              onChange={handleInputChange}
              rows={2}
              className="w-full resize-none max-w rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 my-5"
              placeholder={"solve an equation for me."}
            />
            <div className="flex mb-5 items-center space-x-3">
              <p className="text-left font-medium">
                Select the type of equation.
              </p>
            </div>
            {!isLoading && (
              <button
                className="bg-gray-800 hover:bg-gray-900 text-gray-50 px-4 py-2 rounded-md mt-8 duration-200 font-medium sm:mt-10 hover:shadow-inner w-full"
                type="submit"
              >
                Fix your Article &rarr;
              </button>
            )}
            {isLoading && (
              <button
                className="bg-gray-800 hover:bg-gray-900 text-gray-50 px-4 py-2 rounded-md mt-8 duration-200 font-medium sm:mt-10 w-full"
                disabled
              >
                <span className="loading">
                  <span style={{ backgroundColor: "white" }} />
                  <span style={{ backgroundColor: "white" }} />
                  <span style={{ backgroundColor: "white" }} />
                </span>
              </button>
            )}
          </form>

          <span>
            <User />
          </span>
          <div className="max-w-lg -mt-1">
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 2000 }}
            />
            <output>
              {generatedArticles && (
                <div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                    {generatedArticles
                      .substring(generatedArticles.indexOf("1") + 1)
                      .split("1.")
                      .map((generatedArticle) => {
                        return (
                          <div>
                            <div className="flex items-start space-x-4">
                              <div
                                className="bg-zinc-50 border mr-16 max-w-[500px] block py-2 px-2 cursor-copy rounded-lg"
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    generatedArticle
                                  )
                                  toast(
                                    "Generated Article copied to clipboard",
                                    {
                                      icon: "✂️",
                                    }
                                  )
                                }}
                                key={generatedArticle}
                              >
                                <p>{generatedArticle}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              )}
            </output>
          </div>
        </div>
      </div>
      <Info />
    </section>
  )
}
