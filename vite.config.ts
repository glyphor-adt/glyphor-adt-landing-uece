// File: src/components/MyComponent.tsx

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MyComponentProps {
  onAction?: (data: any) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ onAction }) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onAction) {
      onAction({ value: inputValue });
    }
    setInputValue(""); // Clear the input after submit
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight">
          My Component
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter some text and submit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
              Input
            </Label>
            <Input
              id="input"
              placeholder="Enter text here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="h-10"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        {/* Additional content here */}
      </CardFooter>
    </Card>
  );
};

export default MyComponent;

// File: tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

// File: vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
// File: src/app/page.tsx (example usage in a Next.js app)

import MyComponent from "@/components/MyComponent";

export default function Home() {
  const handleAction = (data: any) => {
    console.log("Received data:", data);
    alert(`You entered: ${data.value}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <MyComponent onAction={handleAction} />
    </main>
  );
}