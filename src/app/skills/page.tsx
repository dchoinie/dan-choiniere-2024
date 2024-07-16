"use client";
import MainNavigation from "../_components/MainNavigation";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import Footer from "../_components/Footer";

const yearsExperienceCalculator = (startingYear: number): number => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startingYear;
  return yearsOfExperience;
};

const chartData = [
  { skill: "React.js", years: yearsExperienceCalculator(2020) },
  { skill: "Next.js", years: yearsExperienceCalculator(2022) },
  { skill: "TypeScript", years: yearsExperienceCalculator(2020) },
  { skill: "JavaScript", years: yearsExperienceCalculator(2020) },
  { skill: "HTML", years: yearsExperienceCalculator(2016) },
  { skill: "CSS", years: yearsExperienceCalculator(2016) },
  { skill: "SASS/SCSS", years: yearsExperienceCalculator(2020) },
  { skill: "Node.js", years: yearsExperienceCalculator(2020) },
  { skill: "Redux", years: yearsExperienceCalculator(2020) },
  { skill: "Java", years: yearsExperienceCalculator(2022) },
  { skill: "PostgreSQL", years: yearsExperienceCalculator(2022) },
  { skill: "Docker", years: yearsExperienceCalculator(2020) },
  { skill: "Git", years: yearsExperienceCalculator(2020) },
  { skill: "GraphQL", years: yearsExperienceCalculator(2022) },
  { skill: "RESTful APIs", years: yearsExperienceCalculator(2020) },
];

const chartConfig = {
  years: {
    label: "Years Of Experience",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Page() {
  return (
    <>
      <MainNavigation />
      <div className="mx-8">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Years of Experience</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData} layout="vertical">
                <XAxis type="number" dataKey="years" hide />
                <YAxis
                  dataKey="skill"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value: string) => value}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="years" fill="var(--color-years)" radius={5} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}
