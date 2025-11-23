import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Grid, GridItem } from '@/components/ui/grid';
import { IconBrush, IconCode, IconComponents, IconLayout, IconSettings } from '@tabler/icons-react'; // Example icons.  Install @tabler/icons-react

const features = [
  {
    title: 'Type Safety',
    description: 'Glyphor ADT ensures type safety, preventing runtime errors and improving code reliability.',
    icon: IconCode,
  },
  {
    title: 'Composable Components',
    description: 'Build complex data structures by composing simpler ones, promoting code reuse and maintainability.',
    icon: IconComponents,
  },
  {
    title: 'Enhanced Readability',
    description: 'ADT structures improve code readability by clearly defining the possible states of your data.',
    icon: IconLayout,
  },
  {
    title: 'Improved Maintainability',
    description: 'Easily modify and extend your data structures without introducing unintended side effects.',
    icon: IconSettings,
  },
  {
    title: 'Declarative Style',
    description: 'Define your data structures in a declarative manner, focusing on what you want rather than how to achieve it.',
    icon: IconBrush,
  },
  {
    title: 'Performance Optimization',
    description: 'Glyphor ADT enables potential performance optimizations by providing the compiler with more information about your data.',
    icon: IconLayout, // Placeholder icon - adjust based on what "performance" evokes
  },
];



const FeaturesSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold text-foreground mb-4">Key Features & Benefits</h2>
        <p className="text-muted-foreground leading-relaxed">
          Explore the powerful features and benefits of using Glyphor ADT in your projects.
        </p>
      </div>

      <Grid className="container mx-auto gap-6">
        {features.map((feature, index) => (
          <GridItem key={index} className="sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <feature.icon className="h-5 w-5" />
                  <span>{feature.title}</span>
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Additional content can be added here if needed */}
              </CardContent>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
};

export default FeaturesSection;