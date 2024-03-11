"use client"
import React from "react";
import Image from "next/image";

export function AMSparkle() {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md border-b">
        <Image src="/logo.png" alt="alt" width={200} height={200} />
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-900 to-blue-200 hover:bg-gradient-to-r  text-black text-center">
        Artificial Minds
      </h1>
      <div className="w-full h-2 flex">
        {/* Gradients */}
        <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      </div>
      <p className="text-neutral-700 md:text-3xl m-2 p-3 text-center">
        Creating a better world with a better mind.
      </p>
    </div>
  );
}
