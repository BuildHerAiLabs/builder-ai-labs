"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Sparkles,
  ArrowRight,
  Lightbulb,
  Users,
  Rocket,
  Brain,
  Heart,
  Zap,
  Calendar,
  Mail,
  Linkedin,
  Instagram,
  Globe,
  ChevronRight,
  MessageSquare,
  GraduationCap,
  Code,
  Palette,
  Briefcase,
  Building2,
  MapPin,
  BookOpen,
  Pencil,
  Box,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


// Logo Component
function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
        <Sparkles className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-semibold text-foreground">
        Build<span className="text-primary">Her</span>AI Labs
      </span>
    </div>
  )
}

// Navigation
function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mission</a>
            <a href="#pillars" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community</a>
            <a href="#events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</a>
            <a href="#founders" className="text-sm text-muted-foreground hover:text-primary transition-colors">Founders</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button asChild className="gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
            <a href="#contact">
              Join Community
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-secondary mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Build • Learn • Launch</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Build<span className="text-primary">Her</span>AI Labs
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed">
            A community where women learn, experiment, and build AI-powered products together.
          </p>
          
          <p className="text-lg text-primary font-medium mb-10">
            From idea to prototype. From curiosity to creation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gradient-primary text-white border-0 hover:opacity-90 transition-opacity px-8 py-6 text-lg">
              <a href="#contact">
                Join The Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-lg">
              Attend Next Build Session
            </Button>
          </div>
        </div>
        
        {/* Floating icons */}
        <div className="hidden lg:block absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center">
            <Brain className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="hidden lg:block absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
            <Rocket className="w-7 h-7 text-accent" />
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-10 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Heart className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Mission Section
function MissionSection() {
  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">From idea to product — we help curious women turn ideas into reality.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Mission Card */}
          <Card className="bg-white border-border/30 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
            {/* Decorative curved line */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path d="M 150 0 Q 200 50 200 150" stroke="#6C63FF" strokeWidth="2" fill="none" />
                <path d="M 120 0 Q 180 60 200 180" stroke="#6C63FF" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <CardContent className="p-8 relative">
              <div className="w-14 h-14 rounded-full bg-[#6C63FF]/15 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#6C63FF]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building a community where women can experiment with AI, create real products, 
                and grow together through collaborative learning.
              </p>
            </CardContent>
          </Card>
          
          {/* Our Purpose Card */}
          <Card className="bg-white border-border/30 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
            {/* Decorative curved line */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path d="M 150 0 Q 200 50 200 150" stroke="#6C63FF" strokeWidth="2" fill="none" />
                <path d="M 120 0 Q 180 60 200 180" stroke="#6C63FF" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <CardContent className="p-8 relative">
              <div className="w-14 h-14 rounded-full bg-[#6C63FF]/15 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-[#6C63FF]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
              
BuildHer AI Labs creates opportunities for women to learn emerging AI tools and technologies, collaborate on projects, participate in hackathons, and transform ideas into real products through practical, community-driven experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Community Pillars
const pillars = [
  {
    icon: Brain,
    title: "Curious Minds",
    description: "We ask questions, explore new ideas, and stay open to learning.",
    color: "primary"
  },
  {
    icon: Globe,
    title: "Build in Public",
    description: "We share our progress, lessons, wins, and failures as we grow.",
    color: "accent"
  },
  {
    icon: Lightbulb,
    title: "Think Bold",
    description: "Every great product starts with a simple idea.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Experiment Fearlessly",
    description: "Test, learn, iterate, and keep moving forward.",
    color: "accent"
  },
  {
    icon: Users,
    title: "Grow Together",
    description: "Community accelerates learning and opportunity.",
    color: "primary"
  }
]

function PillarsSection() {
  return (
    <section id="pillars" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0E8FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-secondary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">What We Stand For</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Community Pillars</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The values that shape how we build and learn together.</p>
        </div>
        
        {/* 3 cards on top row, 2 cards on bottom row centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {pillars.slice(0, 3).map((pillar, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B80FF] flex items-center justify-center mb-4">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {pillars.slice(3, 5).map((pillar, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/50 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B80FF] flex items-center justify-center mb-4">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works
function HowItWorksSection() {
  const steps = [
    { 
      icon: BookOpen, 
      title: "Learn", 
      description: "Build  AI foundations through workshops and guided learning.",
      number: "1",
      gradient: "from-[#6C63FF] to-[#8B80FF]"
    },
    { 
      icon: Pencil, 
      title: "Build", 
      description: "Turn knowledge into real AI products in build sessions.",
      number: "2",
      gradient: "from-[#7B73FF] to-[#9B91FF]"
    },
    { 
      icon: Rocket, 
      title: "Launch", 
      description: "Ship, share, and grow your product with the community.",
      number: "3",
      gradient: "from-[#8A82FF] to-[#ABA3FF]"
    }
  ]
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A simple path from curiosity to a launched product.</p>
        </div>
        
        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border shadow-sm hover:shadow-md transition-all relative overflow-hidden">
              <CardContent className="p-8">
                {/* Large faded number */}
                <div className="absolute top-4 right-6 text-8xl font-bold text-secondary/40 select-none">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed relative z-10">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Journey Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#6C63FF] to-[#EC4899] p-8 sm:p-12">
          <div className="text-center">
            <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-8">The Journey</p>
            
            <div className="flex items-center justify-center gap-4 sm:gap-8">
              {/* Idea */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <span className="text-white font-medium">Idea</span>
              </div>
              
              {/* Arrow */}
              <ArrowRight className="w-6 h-6 text-white/60 flex-shrink-0" />
              
              {/* Prototype */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <Box className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <span className="text-white font-medium">Prototype</span>
              </div>
              
              {/* Arrow */}
              <ArrowRight className="w-6 h-6 text-white/60 flex-shrink-0" />
              
              {/* Product */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <span className="text-white font-medium">Product</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Who We Are For
const audiences = [
  { icon: GraduationCap, title: "Students" },
  { icon: Code, title: "Developers" },
  { icon: Palette, title: "Designers" },
  { icon: Briefcase, title: "Founders" },
  { icon: Building2, title: "Career Switchers" },
  { icon: Sparkles, title: "Curious Builders" }
]

function AudienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0E4FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Who We Are For</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curious women with ideas who want to build and turn ideas into real working products
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-card border border-border shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:border-primary transition-all">
                <audience.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium text-foreground">{audience.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Events Section
const upcomingEvents = [
  {
    title: "Intro to Building with AI",
    type: "Workshop",
    description: "A beginner-friendly session on prototyping your first AI-powered idea.",
    dateStatus: "Coming Soon",
    location: "Online • Live"
  },
  {
    title: "Weekend AI Build Sprint",
    type: "Build Session",
    description: "Build alongside the community and ship a working prototype in a weekend.",
    dateStatus: "Coming Soon",
    location: "Hybrid"
  },
  {
    title: "BuildHer AI Hackathon",
    type: "Hackathon",
    description: "Team up, experiment fearlessly, and launch bold new product ideas.",
    dateStatus: "Future Event",
    location: "TBA"
  }
]

const pastEvents = [
  {
    title: "Prompt Engineering 101: Build Your Portfolio Website with AI",
    image: "/prompt-engineering-101-event.png",
    date: "24 June, 2026",
    speaker: "Valentine Rutto",
    description: "A hands-on session where we learned how to use AI tools to design, build, and launch a personal portfolio website, even as a beginner.",
  },
]

function EventsSection() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Upcoming Community Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Workshops, AI build sessions, and future hackathons.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="bg-card border-border shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Workshop'
                      ? 'bg-accent/15 text-accent'
                      : event.type === 'Build Session'
                      ? 'bg-secondary/60 text-primary'
                      : 'bg-accent/15 text-accent'
                  }`}>
                    {event.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{event.description}</p>

                {/* Date and Location */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-muted-foreground/70" />
                    <span>{event.dateStatus}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-muted-foreground/70" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Notify Me Button */}
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/5 hover:text-primary"
                >
                  Notify Me
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Events */}
        <div className="text-center mt-20 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Past Events</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">A look back at events we&apos;ve hosted for the community.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <Card key={index} className="bg-card border-border shadow-md hover:shadow-lg transition-all overflow-hidden">
              <div className="relative w-full aspect-square">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-muted-foreground/70" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-muted-foreground/70" />
                    <span>Speaker: {event.speaker}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Future Projects
const futureProjects = [
  { title: "AI Career Assistant", description: "Help users find their perfect career path with AI-powered guidance." },
  { title: "Education AI", description: "Personalized learning experiences powered by artificial intelligence." },
  { title: "Local Language AI", description: "AI tools that understand and speak African languages." },
  { title: "Community Innovation Projects", description: "Collaborative projects built by and for the community." }
]

function ProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Future Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Projects the community may build together</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureProjects.map((project, index) => (
            <Card key={index} className="bg-card border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Sparkles className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <button className="mt-4 text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Founders Section
const founders = [
  {
    name: "Beth Mwangi",
    role: "Co-Founder",
    bio: "Passionate about empowering women in technology and AI innovation.",
    image: "/beth-mwangi.jpg",
    linkedin: "https://www.linkedin.com/in/beth-mwangi/",
    instagram: "https://www.instagram.com/buildherailabs/",
    x: "https://x.com/BuildHerAILabs"
  },
  {
    name: "Valentine Rutto",
    role: "Co-Founder",
    bio: "Building communities that inspire women to create with technology.",  
    image: "/valentine-rutto.jpeg",
    linkedin: "https://www.linkedin.com/in/valentine-rutto/",
    instagram: "https://www.instagram.com/buildherailabs/",
    x: "https://x.com/BuildHerAILabs"
  }
]

function FoundersSection() {
  return (
    <section id="founders" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet The Founders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The visionaries behind BuildHer AI Labs</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <Card key={index} className="bg-card border-border shadow-lg overflow-hidden rounded-3xl">
              <CardContent className="p-10 text-center">
                <div className="w-40 h-40 mx-auto rounded-3xl overflow-hidden bg-secondary/40 mb-8 shadow-md">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{founder.name}</h3>
                <p className="text-base text-primary font-medium mb-5">{founder.role}</p>
                <p className="text-muted-foreground text-base leading-relaxed">{founder.bio}</p>
               <div className="flex items-center justify-center gap-4 mt-8">
  <a
    href={founder.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
  >
    <Linkedin className="w-5 h-5" />
  </a>

  <a
    href={founder.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
  >
    <Instagram className="w-5 h-5" />
  </a>

  <a
    href={founder.x}
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
  >
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Gallery Section (Placeholder)
// function GallerySection() {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Community Gallery</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">Highlights from our events and projects</p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[1, 2, 3, 4].map((_, index) => (
//             <div key={index} className="aspect-square rounded-2xl bg-secondary/30 flex items-center justify-center border border-border">
//               <div className="text-center">
//                 <Sparkles className="w-8 h-8 text-primary/50 mx-auto mb-2" />
//                 <span className="text-sm text-muted-foreground">Coming Soon</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// Announcements Section
function AnnouncementsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Announcements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Latest news and updates from the community</p>
        </div>
        
        <Card className="bg-card border-border shadow-lg max-w-2xl mx-auto overflow-hidden">
          <div className="h-2 gradient-hero" />
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">June 2026</span>
                <h3 className="text-lg font-semibold text-foreground mb-2">Welcome to BuildHer AI Labs!</h3>
                <p className="text-muted-foreground text-sm">
                  We&apos;re excited to launch our community platform. Join us as we build, learn, and grow together. 
                  Stay tuned for upcoming workshops and our first hackathon!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Contact Form Section
const emptyFieldErrors = {
  name: "",
  email: "",
  occupation: "",
  aiInterest: "",
  message: "",
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    aiInterest: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [errors, setErrors] = useState(emptyFieldErrors)

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: "" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: !formData.name.trim() ? "Name is required" : "",
      email: !formData.email.trim() ? "Email is required" : "",
      occupation: !formData.occupation.trim() ? "Occupation is required" : "",
      aiInterest: !formData.aiInterest.trim() ? "AI Interest is required" : "",
      message: !formData.message.trim() ? "Message is required" : "",
    }

    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((fieldError) => fieldError !== "")

    if (hasErrors) {
      return
    }

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/join-community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setFormData({
          name: '',
          email: '',
          occupation: '',
          aiInterest: '',
          message: ''
        })
        setErrors(emptyFieldErrors)
      } else {
        setError(data.error || "Failed to submit form")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0E4FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join The Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Ready to turn your ideas into reality? Get in touch!</p>
        </div>
        
        <Card className="bg-card border-border shadow-lg max-w-2xl mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <Input 
                    type="text" 
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={`bg-background ${errors.name ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input 
                    type="email" 
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`bg-background ${errors.email ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              
           <div>
  <label className="block text-sm font-medium text-foreground mb-2">
    Occupation
  </label>
  <Input
    type="text"
    required
    placeholder="e.g. Student, Developer, Designer, Founder"
    value={formData.occupation}
    onChange={(e) => updateField("occupation", e.target.value)}
    className={`bg-background ${errors.occupation ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"}`}
  />
  {errors.occupation && (
    <p className="mt-1 text-sm text-red-500">{errors.occupation}</p>
  )}
</div>

<div>
  <label className="block text-sm font-medium text-foreground mb-2">
    AI Interest
  </label>
  <textarea
    rows={4}
    required
    placeholder="Tell us what interests you about AI and what you'd like to build..."
    value={formData.aiInterest}
    onChange={(e) => updateField("aiInterest", e.target.value)}
    className={`w-full px-4 py-3 rounded-lg bg-background border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none ${errors.aiInterest ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"}`}
  />
  {errors.aiInterest && (
    <p className="mt-1 text-sm text-red-500">{errors.aiInterest}</p>
  )}
</div>

<div>
  <label className="block text-sm font-medium text-foreground mb-2">
    Message
  </label>
  <textarea
    rows={5}
    required
    placeholder="Tell us about yourself and what you'd like to build..."
    value={formData.message}
    onChange={(e) => updateField("message", e.target.value)}
    className={`w-full px-4 py-3 rounded-lg bg-background border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none ${errors.message ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"}`}
  />
  {errors.message && (
    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
  )}
</div>

              {success && (
                <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-4">
                  <p className="font-medium text-green-700">
                    Thank you for joining BuildHer AI Labs!
                  </p>
                  <p className="text-sm text-green-600">
                    Your information has been submitted successfully. We will be in touch soon.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity"
              >
                {loading ? "Submitting..." : "Join Community"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">
                Build<span className="text-primary">Her</span>AI Labs
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Empowering girls to build AI products and shape the future.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/buildherailabs/" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/buildherailabs/" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/BuildHerAILabs" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="www.tiktok.com/@builderherailabs" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">AI Tools</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a href="https://buildherai-labs.com" className="hover:text-primary transition-colors">buildherai-labs.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@buildherai-labs.com" className="hover:text-primary transition-colors">hello@buildherai-labs.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} BuildHer AI Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <PillarsSection />
      <HowItWorksSection />
      <AudienceSection />
      <EventsSection />
      <ProjectsSection />
      <FoundersSection />
      {/* <GallerySection /> */}
      <AnnouncementsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
