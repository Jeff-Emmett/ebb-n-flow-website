"use client"

import { useEffect, useState } from "react"

export default function AnimatedHero() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const steps = [
      { delay: 1000, step: 1 }, // "Welcome to Ebb'nFlow Therapeutics"
      { delay: 2000, step: 2 }, // "Take a deep breath"
      { delay: 1500, step: 3 }, // "Unwind"
      { delay: 1500, step: 4 }, // "Heal"
      { delay: 2000, step: 5 }, // "Leave feeling..."
    ]

    let totalDelay = 0
    steps.forEach(({ delay, step }) => {
      totalDelay += delay
      setTimeout(() => {
        setCurrentStep(step)
      }, totalDelay)
    })
  }, [])

  return (
    <div className="space-y-6 min-h-[400px] flex flex-col justify-center items-center lg:items-start">
      {/* Welcome to Ebb'nFlow Therapeutics */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          currentStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="space-y-2">
          <p className="text-lg text-gray-600 text-center lg:text-left">Welcome to</p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 text-center lg:text-left">
            Ebb'nFlow <span className="font-normal text-nature-green">Therapeutics</span>
          </h2>
        </div>
      </div>

      {/* Take a deep breath */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          currentStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-4xl lg:text-5xl font-light text-gray-700 text-center lg:text-left">Take a deep breath</p>
      </div>

      {/* Unwind */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          currentStep >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-4xl lg:text-5xl font-light text-gray-800 text-center lg:text-left">Unwind</h1>
      </div>

      {/* Heal */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          currentStep >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-4xl lg:text-5xl font-light text-nature-green text-center lg:text-left">Heal</h1>
      </div>

      {/* Leave feeling... */}
      <div
        className={`transition-all duration-1000 ease-in-out ${
          currentStep >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-xl lg:text-2xl font-light text-gray-700 leading-relaxed text-center lg:text-left max-w-lg">
          Leave feeling relaxed, renewed and able to move with more freedom and ease.
        </p>
      </div>
    </div>
  )
}
