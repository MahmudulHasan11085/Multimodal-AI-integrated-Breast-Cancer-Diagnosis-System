"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-2xl font-bold text-center">Multimodal AI Breast Cancer Diagnostic System</h1>
      <p className="max-w-xl text-center">
        This demo website showcases our research project that combines imaging and clinical data
        for accurate breast cancer detection using deep learning.
      </p>
      <div className="flex flex-col items-center gap-2">
        <label htmlFor="name" className="font-medium">Enter your name:</label>
        <input
          id="name"
          className="border rounded px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && <p className="mt-2">Hello, {name}! Thanks for visiting.</p>}
      </div>
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-left">
          <li>Integration of mammography images and patient records</li>
          <li>Deep neural network models for tumor classification</li>
          <li>User-friendly interface for medical professionals</li>
        </ul>
      </section>
    </div>
  );
}
