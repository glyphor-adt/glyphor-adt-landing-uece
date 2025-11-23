import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const HeroSection: React.FC = () => {
  return (
    <div className="bg-primary-background text-primary-foreground py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Unlock the Power of Glyphor ADT
              </CardTitle>
              <CardDescription className="mt-4 text-lg md:text-xl text-muted-foreground">
                Glyphor ADT is a revolutionary data transformation tool that simplifies complex data workflows, enabling you to extract valuable insights faster than ever before.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button size="lg" className="w-full sm:w-auto">Learn More</Button>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">Get Started</Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Join thousands of users already transforming their data with Glyphor ADT.
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Glyphor ADT Visual"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;