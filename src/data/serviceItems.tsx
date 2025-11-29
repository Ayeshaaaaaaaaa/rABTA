'use client'
import { useState } from "react";
import { Headphones, ShieldCheck, RefreshCcw, Network, Brain, Phone, Router, Cloud, Book, HeartPlus, ToolCase, HousePlus, ChevronLeft, ChevronRight } from "lucide-react";

import { Theme } from "@/lib/theme";
export const services = [
    {
      badgeIcon: <Headphones size={40} className="text-black" />,
      title: "Manage",
      heading: "No more admin headaches",
      description: "We manage your Office 365 and Google Workspace for you – user setups, mailbox management, security settings – so your team can just log in and work, hassle-free",
      linkLabel: "Google Workspace Management",
      linkHref: "#",
      gradient: Theme.backgroundColors.gradientPurpleIndigo
    },
    {
      badgeIcon: <ShieldCheck size={40} className="text-black" />,
      title: "Cybersecurity",
      heading: "No more sleepless nights over security.",
      description: "Our cybersecurity team deploys firewalls, threat monitoring, and employee training to keep hackers out and your data safe",
      linkLabel: "Explore Cybersecurity",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-purple-800 to-purple-500"
    },
    {
      badgeIcon: <RefreshCcw size={40} className="text-black" />,
      title: "Disaster Recovery",
      heading: "No more data loss fears",
      description: "We back up your data securely (both on-site and in the cloud) and create a solid disaster recovery plan, so you can bounce back quickly from any crisis",
      linkLabel: "Disaster Recovery",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-indigo-700 to-purple-600"
    },
    {
      badgeIcon: <ToolCase size={40} className="text-black" />,
      title: "Maintenance",
      heading: "No more surprise outages",
      description: "We continuously monitor and tune up your systems to catch issues early, so your work isn't interrupted by unexpected downtime.",
      linkLabel: "Explore Maintenance",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-indigo-700 to-purple-600"
    },
    {
      badgeIcon: <HousePlus size={40} className="text-black" />,
      title: "IT Resource",
      heading: "No more guessing at IT strategy",
      description: "You get a dedicated IT advisor who plans your technology, manages IT projects, and ensures every tech decision supports your business vision",
      linkLabel: "Explore Resources",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-indigo-700 to-purple-600"
    },
    {
      badgeIcon: <HeartPlus size={40} className="text-black" />,
      title: "Support",
      heading: "No more waiting on hold",
      description: "Our friendly support team is on call 24/7 to fix tech issues fast, keeping your employees happy and productive",
      linkLabel: "Explore Resources",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-purple-900 to-indigo-700"
    },
    {
      badgeIcon: <Book size={40} className="text-black" />,
      title: "Documentation",
      heading: "No more IT surprises",
      description: "We document every device, password, and license in your environment. You'll always know what you have and avoid nasty surprises during audits or troubleshooting",
      linkLabel: "Explore Documentation",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-purple-900 to-indigo-700"
    },
    {
      badgeIcon: <Cloud size={40} className="text-black" />,
      title: "Cloud Backups",
      heading: "No more single points of failure",
      description: "Critical files are automatically backed up to the cloud. If your server crashes or a laptop is lost, your data remains intact and retrievable from our secure cloud storage",
      linkLabel: "Explore Backups",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-indigo-700 to-purple-600"
    },
    {
      badgeIcon: <Router size={40} className="text-black" />,
      title: "Web Hosting & DNS",
      heading: "No more website worries",
      description: "We host your websites on reliable servers and manage all the DNS technicalities. Your sites stay up, load fast, and are protected from threats, without you needing to dive into technical details",
      linkLabel: "Explore Web Hosting",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-purple-900 to-indigo-700"
    },
    {
      badgeIcon: <Phone size={40} className="text-black" />,
      title: "VoIP Systems",
      heading: "No more clunky phone lines",
      description: "Step into modern telephony with our VoIP service. We'll set up internet-based phones with high-quality audio and useful features, and take care of all maintenance while you enjoy lower phone bills.",
      linkLabel: "Explore VoIP",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-indigo-700 to-purple-600"
    },
    {
      badgeIcon: <Brain size={40} className="text-black" />,
      title: "Prompt Engineering",
      heading: "No more missing out on AI innovations",
      description: "We help your team leverage AI tools effectively. Whether it's crafting the perfect prompt for an AI model or integrating AI into your workflows, we make cutting-edge tech easy to use.",
      linkLabel: "Explore GenAI",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-purple-900 to-indigo-700"
    },
    {
      badgeIcon: <Network size={40} className="text-black" />,
      title: "Networking",
      heading: "No more network hiccups",
      description: "We build and manage a robust network backbone using Cisco and Palo Alto solutions. Enjoy enterprise-grade speed and security for your business network, minus the usual networking headaches.",
      linkLabel: "Explore Networking",
      linkHref: "#",
      gradient: "bg-gradient-to-r from-indigo-700 to-purple-600"
    }
];