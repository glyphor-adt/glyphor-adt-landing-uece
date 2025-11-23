// Example component showcasing Tailwind semantic tokens and shadcn/ui components
// This is a basic example and can be customized further.

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  title: string;
  description?: string;
}

const ExampleComponent: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-2xl mx-auto shadow-md rounded-lg border border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight text-primary">{title}</CardTitle>
          {description && (
            <CardDescription className="text-muted-foreground">{description}</CardDescription>
          )}
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" className="bg-background border-input text-foreground focus:ring-ring focus:border-ring" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="bg-background border-input text-foreground focus:ring-ring focus:border-ring"/>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="primary">Submit</Button>
        </CardFooter>
      </Card>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-primary">Semantic Tokens Example</h2>
        <p className="text-muted-foreground">
          This text uses the <code>text-muted-foreground</code> semantic token for color.
        </p>
        <Button variant="secondary" className="mt-2">
          Secondary Button
        </Button>
      </div>
    </div>
  );
};

export default ExampleComponent;