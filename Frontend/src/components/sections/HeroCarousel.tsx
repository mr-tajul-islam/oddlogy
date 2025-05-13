"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarouselItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    imageUrl: "/assets/img/i1.PNG",
    title: "Learn With Expert Instructors",
    description: "Gain valuable skills from industry professionals",
    buttonText: "Browse Courses",
    buttonLink: "/courses",
  },
  {
    id: 2,
    imageUrl: "/assets/img/i3.PNG",
    title: "Flexible Learning Options",
    description: "Study at your own pace and on your own schedule",
    buttonText: "Start Learning",
    buttonLink: "/register",
  },
  {
    id: 3,
    imageUrl: "/assets/img/i2.PNG",
    title: "Interactive Learning Experience",
    description: "Engage with hands-on projects and collaborative activities",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    // Auto-scroll
    const timer = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="relative overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="relative">
              <div className="relative h-[500px] md:h-[600px]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-700 ease-in-out ${
                      item.id === 2 ? "object-[center_25%]" : "object-center"
                    }`}
                    sizes="100vw"
                    quality={90}
                    priority={item.id === 1}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                  <div className="container mx-auto px-4 text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
                      {item.title}
                    </h2>
                    <p className="text-xl md:text-2xl max-w-2xl mb-8 animate-fade-up animation-delay-200">
                      {item.description}
                    </p>
                    {item.buttonText && (
                      <Button
                        asChild
                        className="bg-[#D2DD27] text-gray-800 hover:text-white hover:bg-opacity-90 animate-fade-up animation-delay-300"
                        size="lg"
                      >
                        <a href={item.buttonLink}>{item.buttonText}</a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/50 text-white hover:bg-black/70" />
        <CarouselNext className="right-4 bg-black/50 text-white hover:bg-black/70" />
      </Carousel>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              i === current ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}