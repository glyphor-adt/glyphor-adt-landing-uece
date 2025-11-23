import React from 'react';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider'; // Assuming you have a ThemeProvider
import Hero from '@/components/Hero'; // Import your Hero component
import Features from '@/components/Features'; // Import your Features component
import Footer from '@/components/Footer'; // Import your Footer component
// ... Import other components as needed

interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          {/* Navigation component could go here */}
          <nav className="container py-4 px-6">
            {/* Example navigation links (replace with your actual navigation) */}
            <div className="flex justify-between items-center">
              <a href="/" className="font-bold text-lg">
                My App
              </a>
              <div>
                <a href="/about" className="mr-4 hover:underline">
                  About
                </a>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
            <Hero /> {/* Render the Hero section */}
            <Features /> {/* Render the Features section */}
            {children} {/* Render any children passed to this component */}
        </main>

        <Footer />

      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
// src/components/Hero.tsx
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="py-24 bg-primary/10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
          Welcome to Our Awesome App
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your go-to solution for amazing things.
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;

// src/components/Features.tsx
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-card rounded-md shadow-md">
            <h3 className="text-xl font-medium mb-2">Feature 1 Title</h3>
            <p className="text-sm text-muted-foreground">
              Description of Feature 1.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-card rounded-md shadow-md">
            <h3 className="text-xl font-medium mb-2">Feature 2 Title</h3>
            <p className="text-sm text-muted-foreground">
              Description of Feature 2.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-card rounded-md shadow-md">
            <h3 className="text-xl font-medium mb-2">Feature 3 Title</h3>
            <p className="text-sm text-muted-foreground">
              Description of Feature 3.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-secondary/5 border-t border-t-border">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
// src/lib/utils.tsx
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// src/components/ThemeProvider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

interface Props extends ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}