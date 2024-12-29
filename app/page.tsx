"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileText, GitPullRequest, MessageSquare, RefreshCw, Users, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: FileText,
    title: "Project Templates",
    description: "Ready-to-use templates for different types of project updates",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with your team members",
  },
  {
    icon: MessageSquare,
    title: "Async Communication",
    description: "Perfect for remote teams across different time zones",
  },
  {
    icon: RefreshCw,
    title: "Auto Sync",
    description: "Changes sync automatically across all devices",
  },
  {
    icon: Zap,
    title: "Quick Updates",
    description: "Share project updates in seconds, not minutes",
  },
  {
    icon: GitPullRequest,
    title: "Version History",
    description: "Track all changes with detailed version history",
  },
];

export default function HomePage() {
  return (
    <><main className="mx-auto max-w-[1300px]">
      {/* Hero Section */}
      <section className="space-y-6 py-32 px-4">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Simplify Your Project Updates with{" "}
            <span className="text-green-600">UpdateFlow</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A modern project management tool that helps you track and share project updates effortlessly.
            Perfect for remote teams and async communication.
          </p>
          <div className="grid grid-col-2 gap-4 sm:flex">
            <Button size="lg" asChild>
              <Link href="/changelog">
                View a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/mywildancloud/updateflow" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-20 px-4"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Key Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to manage your project updates effectively
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="flex flex-col justify-between p-6">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
      </main>
    </>
  );
}
