"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import { Shield, Trophy, Zap, Users, Handshake } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "Find Teammates", id: "teammates" },
        { name: "Pricing", id: "pricing" },
        { name: "Reviews", id: "testimonials" },
      ]}
      brandName="BrawlPro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "gradient-bars" }}
      title="Elevate Your Brawl Stars Account"
      description="Professional ranking boosts, trophy gains, and mastery grind services. Secure, fast, and 100% reliable."
      kpis={[
        { value: "5k+", label: "Accounts Boosted" },
        { value: "24/7", label: "Active Support" },
        { value: "99%", label: "Success Rate" },
      ]}
      enableKpiAnimation={true}
      buttons={[{ text: "Start Boosting", href: "#pricing" }]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-bokeh-background-with-star-shaped-lights_23-2147815137.jpg"
      imageAlt="Brawl Stars Gaming"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { icon: Shield, title: "Account Safety", description: "We use advanced VPN protocols for every login." },
        { icon: Zap, title: "Rapid Delivery", description: "Our professional boosters operate with extreme speed." },
        { icon: Handshake, title: "Account Lending", description: "Securely lend your account to vetted, top-tier professionals." },
      ]}
      title="Professional Services"
      description="Tailored solutions for every Brawl Stars player."
    />
  </div>

  <div id="teammates" data-section="teammates">
    <TeamCardTwo
      title="Find Your Pro Teammates"
      description="Connect with elite players to dominate the ladder."
      gridVariant="three-columns-all-equal-width"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      members={[
        { id: "t1", name: "DragonSlayer", role: "Pro Carry", description: "Master of Shelly and Colt." },
        { id: "t2", name: "BrawlGod", role: "Support Expert", description: "Proactive healer and control player." },
        { id: "t3", name: "ArenaKing", role: "Tank Specialist", description: "Incredible pressure and damage absorption." }
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "p1", badge: "Entry", price: "$15", subtitle: "Trophy Boost", features: ["+500 Trophies", "Express Service", "Secure VPN"] },
        { id: "p2", badge: "Pro", price: "$45", subtitle: "Mastery Grind", features: ["Rank 30 Guaranteed", "Mastery Badge", "24/7 Support"] },
        { id: "p3", badge: "Elite", price: "$99", subtitle: "Account Overhaul", features: ["Legendary Rank", "Custom Build", "VIP Status"] },
      ]}
      title="Choose Your Package"
      description="Transparent pricing for all your gaming needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Alex K.", handle: "@brawler1", testimonial: "Reached Rank 30 in just two days.", rating: 5 },
        { id: "2", name: "Jordan P.", handle: "@starplayer", testimonial: "Mastery grind was effortless!", rating: 5 },
      ]}
      showRating={true}
      title="Community Voices"
      description="See why top players trust us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "Is my account safe?", content: "Yes, we use private VPNs." },
        { id: "f2", title: "How do I lend my account?", content: "Fill out our onboarding form and our safety team will match you with a verified pro." },
      ]}
      title="Common Questions"
      description="Everything you need to know."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      tag="Get Started"
      title="Ready to Climb?"
      description="Contact us to boost your rank or request a teammate."
      buttons={[{ text: "Contact Support", href: "mailto:support@brawlpro.gg" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Services", items: [{ label: "Boosting", href: "#pricing" }, { label: "Find Teammates", href: "#teammates" }] },
        { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
      logoText="BrawlPro"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}