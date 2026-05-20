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
import { Shield, Trophy, Zap } from "lucide-react";

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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
      ]}
      brandName="BrawlPro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Elevate Your Brawl Stars Account"
      description="Professional ranking boosts, trophy gains, and mastery grind services. Secure, fast, and 100% reliable."
      kpis={[
        {
          value: "5k+",
          label: "Accounts Boosted",
        },
        {
          value: "24/7",
          label: "Active Support",
        },
        {
          value: "99%",
          label: "Success Rate",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Start Boosting",
          href: "#pricing",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-bokeh-background-with-star-shaped-lights_23-2147815137.jpg"
      imageAlt="Brawl Stars Gaming"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/futuristic-robot-listening-music-headphones_23-2151073024.jpg",
          alt: "Gamer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cartoon-man-wearing-glasses_23-2151136887.jpg",
          alt: "Gamer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cartoon-man-wearing-vr-glasses_23-2151136773.jpg",
          alt: "Gamer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cartoon-man-wearing-vr-glasses_23-2151136830.jpg",
          alt: "Gamer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cartoon-man-wearing-glasses_23-2151136786.jpg",
          alt: "Gamer 5",
        },
      ]}
      avatarText="Trusted by 5,000+ top-tier players"
      marqueeItems={[
        {
          type: "text",
          text: "Rank 30 Guaranteed",
        },
        {
          type: "text",
          text: "Private VPN Secured",
        },
        {
          type: "text",
          text: "Fast Mastery Grind",
        },
        {
          type: "text",
          text: "24/7 Live Support",
        },
        {
          type: "text",
          text: "Top-Ranked Boosters",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Shield,
          title: "Account Safety",
          description: "We use advanced VPN protocols for every login.",
        },
        {
          icon: Zap,
          title: "Rapid Delivery",
          description: "Our professional boosters operate with extreme speed.",
        },
        {
          icon: Trophy,
          title: "Mastery Grind",
          description: "Achieve high ranks and mastery levels efficiently.",
        },
      ]}
      title="Why Choose BrawlPro?"
      description="We offer premium services designed to keep your account safe and your ranking climbing."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Entry",
          price: "$15",
          subtitle: "Trophy Boost",
          features: [
            "+500 Trophies",
            "Express Service",
            "Secure VPN",
          ],
        },
        {
          id: "p2",
          badge: "Pro",
          price: "$45",
          subtitle: "Mastery Grind",
          features: [
            "Rank 30 Guaranteed",
            "Mastery Badge",
            "24/7 Support",
          ],
        },
        {
          id: "p3",
          badge: "Elite",
          price: "$99",
          subtitle: "Account Overhaul",
          features: [
            "Legendary Rank",
            "Custom Build",
            "VIP Status",
          ],
        },
      ]}
      title="Choose Your Package"
      description="Transparent pricing for all your gaming needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "12k",
          title: "Matches Won",
          description: "Competitive win rate",
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-concept-digital-art_23-2151637783.jpg",
        },
        {
          id: "m2",
          value: "500",
          title: "Pro Players",
          description: "Active in rotation",
          imageSrc: "http://img.b2bpic.net/free-photo/young-professional-game-player-screaming-with-hands-raised-after-his-victory_482257-29597.jpg",
        },
        {
          id: "m3",
          value: "9.8",
          title: "Avg Rating",
          description: "Customer satisfaction",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-playing-video-game-together_53876-15393.jpg",
        },
      ]}
      title="Proven Performance"
      description="Numbers that define our professional gaming legacy."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alex K.",
          handle: "@brawler1",
          testimonial: "Reached Rank 30 in just two days. Amazing service!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/shoot-fantastic-alien_23-2151648312.jpg",
        },
        {
          id: "2",
          name: "Jordan P.",
          handle: "@starplayer",
          testimonial: "The mastery grind was effortless. Thanks guys.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-holding-controller_23-2149005238.jpg",
        },
        {
          id: "3",
          name: "Sam R.",
          handle: "@proscouter",
          testimonial: "Super secure and lightning fast delivery.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-controller-close-up_23-2149005239.jpg",
        },
        {
          id: "4",
          name: "Taylor B.",
          handle: "@rankedking",
          testimonial: "Best service in the community for account security.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hacker-secret-hideout-bypassing-firewalls-launching-ddos-attacks-websites-rogue_482257-135963.jpg",
        },
        {
          id: "5",
          name: "Morgan D.",
          handle: "@casualgamer",
          testimonial: "Really helped me get those difficult mastery levels.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-model-listening-music_23-2151884522.jpg",
        },
      ]}
      showRating={true}
      title="Community Voices"
      description="See why top players trust us with their accounts."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Is my account safe?",
          content: "Yes, we use private VPNs to ensure your account security.",
        },
        {
          id: "f2",
          title: "How fast is service?",
          content: "Most orders are completed within 24-48 hours.",
        },
        {
          id: "f3",
          title: "Can I check progress?",
          content: "Yes, our support team provides real-time updates.",
        },
      ]}
      title="Common Questions"
      description="Find everything you need to know about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get Started"
      title="Ready to Climb the Ranks?"
      description="Send us a message today to start your account boost."
      buttons={[
        {
          text: "Contact Support",
          href: "mailto:support@brawlpro.gg",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="BrawlPro"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
