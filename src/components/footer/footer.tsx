
"use client";

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Theme } from "@/lib/theme";

const footerLinks = {
  Products: [
    {
      heading: "Remote Monitoring & Management",
      links: ["N-central RMM", "N-sight RMM"],
    },
    {
      heading: "Cloud Management",
      links: ["Cloud Commander"],
    },
    {
      heading: "Cove Data Protection",
      links: ["Backup", "Disaster Recovery", "Data Retention", "Microsoft 365 Backup"],
    },
  ],
  Security: [
    "EDR",
    "Adlumin MDR",
    "Threat Hunting",
    "Managed EDR",
    "DNS Filtering",
    "Mail Assure",
    "Passportal",
  ],
  ToolsServices: [
    "MSP Manager",
    "Take Control",
    "N-advanced Services",
    "Integrations",
    "Features",
    "Glossary",
  ],
  Solutions: ["Solutions for MSPs", "Solutions for IT Departments", "Solutions for Resellers"],
  Resources: ["Resource Library", "Events", "Blog"],
  Company: [
    "Partnerships",
    "Careers",
    "Investors",
    "Partner Success",
    "Security & Privacy",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer className={`${Theme.backgroundColors.brandDark} ${Theme.textColors.light} px-6 md:px-12 lg:px-24 py-16 ${Theme.typography.fontFamily.sans}`}>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

        <div className="flex items-start justify-center lg:justify-start">
          <div className="w-100">
            <img 
              src="/rabta_logo.png" 
              alt="Company Logo" 
              className="w-full h-auto"
            />
           
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <h3 className={`${Theme.typography.fontSize.lg} ${Theme.typography.fontWeight.semibold} mb-3`}>Products</h3>
            <div className="h-[1px] w-full bg-white/20 mb-4"></div>

            {footerLinks.Products.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h4 className={`${Theme.typography.fontSize.sm} ${Theme.typography.fontWeight.medium} opacity-80`}>{section.heading}</h4>
                <ul className="mt-2 space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a className={`${Theme.typography.fontSize.sm} opacity-70 hover:opacity-100 ${Theme.transitions.all}`} href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className={`${Theme.typography.fontSize.lg} ${Theme.typography.fontWeight.semibold} mb-3`}>Security</h3>
            <div className="h-[1px] bg-white/20 mb-4"></div>

            <ul className="space-y-1">
              {footerLinks.Security.map((item, idx) => (
                <li key={idx}>
                  <a className={`${Theme.typography.fontSize.sm} opacity-70 hover:opacity-100 ${Theme.transitions.all}`} href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`${Theme.typography.fontSize.lg} ${Theme.typography.fontWeight.semibold} mb-3`}>Tools & Services</h3>
            <div className="h-[1px] bg-white/20 mb-4"></div>

            <ul className="space-y-1">
              {footerLinks.ToolsServices.map((item, idx) => (
                <li key={idx}>
                  <a className={`${Theme.typography.fontSize.sm} opacity-70 hover:opacity-100 ${Theme.transitions.all}`} href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
       
          <div>
            <h3 className={`${Theme.typography.fontSize.lg} ${Theme.typography.fontWeight.semibold} mb-3`}>Solutions</h3>
            <div className="h-[1px] bg-white/20 mb-4"></div>
            <ul className="space-y-1">
              {footerLinks.Solutions.map((item, idx) => (
                <li key={idx}>
                  <a className={`${Theme.typography.fontSize.sm} opacity-70 hover:opacity-100 ${Theme.transitions.all}`} href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`${Theme.typography.fontSize.lg} ${Theme.typography.fontWeight.semibold} mb-3`}>Resources</h3>
            <div className="h-[1px] bg-white/20 mb-4"></div>
            <ul className="space-y-1">
              {footerLinks.Resources.map((item, idx) => (
                <li key={idx}>
                  <a className={`${Theme.typography.fontSize.sm} opacity-70 hover:opacity-100 ${Theme.transitions.all}`} href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          <div>
            <h3 className={`${Theme.typography.fontSize.lg} ${Theme.typography.fontWeight.semibold} mb-3`}>Company</h3>
            <div className="h-[1px] bg-white/20 mb-4"></div>
            <ul className="space-y-1">
              {footerLinks.Company.map((item, idx) => (
                <li key={idx}>
                  <a className={`${Theme.typography.fontSize.sm} opacity-70 hover:opacity-100 ${Theme.transitions.all}`} href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-14">
        <FaFacebookF className={`${Theme.typography.fontSize['xl']} opacity-70 hover:opacity-100 cursor-pointer`} />
        <FaLinkedinIn className={`${Theme.typography.fontSize['xl']} opacity-70 hover:opacity-100 cursor-pointer`} />
        <FaTwitter className={`${Theme.typography.fontSize['xl']} opacity-70 hover:opacity-100 cursor-pointer`} />
        <FaYoutube className={`${Theme.typography.fontSize['xl']} opacity-70 hover:opacity-100 cursor-pointer`} />
      </div>

      <div className={`flex flex-wrap items-center gap-4 ${Theme.typography.fontSize.sm} opacity-70 mt-12`}>
        <span>English</span>
        <span>|</span>
        <span>Legal</span>
        <span>|</span>
        <span>Terms of Use</span>
        <span>|</span>
        <span>Privacy Notice</span>
        <span>|</span>
        <span>Sitemap</span>
        <span>|</span>
        <span>Cookies Settings</span>
      </div>
      <p className={`${Theme.typography.fontSize.sm} opacity-70 mt-4`}>
        © 2025 Rabta Solutions ULC and Rabta Technologies Ltd. All rights reserved.
      </p>
    </footer>
  );
}