"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Phone,
  Code2,
  Cloud,
  ShoppingCart,
  Users,
  Smartphone,
  Cpu,
  ShieldCheck,
  Laptop,
  Star,
  HeartPulse,
  House,
  Layers,
  Rocket,
  FileText,
  Lightbulb,
  Check,
  Menu,
  X,
  Quote,
} from "lucide-react";

import { sendUsaContact, TestimonialContent } from '@/helpers/data_utils';
import Head from "next/head";

const services = [
  { id: "custom-software", title: "Custom Software Development", desc: "Tailored solutions for your unique business needs.", icon: Code2 },
  { id: "saas", title: "SaaS Development", desc: "Scalable and secure cloud-based platforms.", icon: Cloud },
  { id: "ecommerce", title: "E-commerce Development", desc: "High-performance online stores and marketplaces.", icon: ShoppingCart },
  { id: "crm", title: "CRM Development", desc: "Automate sales, marketing and customer management.", icon: Users },
  { id: "mobile", title: "Mobile App Development", desc: "iOS and Android apps for your business or product.", icon: Smartphone },
  { id: "ai", title: "AI Solutions", desc: "AI integrations and custom AI-powered applications.", icon: Cpu },
];

const industries = [
  { name: "Healthcare", icon: HeartPulse, bg: "#fff0f2", color: "#e64b69" },
  { name: "Real Estate", icon: House, bg: "#eaf5f6", color: "#008f82" },
  { name: "E-commerce", icon: ShoppingCart, bg: "#fff6e8", color: "#f2a000" },
  { name: "SaaS Platforms", icon: Layers, bg: "#f1edff", color: "#6951c8" },
];

const navServices = [
  "Custom Software Development",
  "SaaS Development",
  "E-commerce Development",
  "CRM Development",
  "Mobile App Development",
  "AI Solutions",
];
const navIndustries = ["Healthcare", "Real Estate", "E-commerce", "SaaS Platforms"];
const portfolioSlides = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg", "/slider4.jpg"];
const defaultReview = {
  description: "Aqualeaf delivered a high-quality, scalable solution for our business. Their communication, technical expertise and commitment to the project were outstanding.",
  clientName: "Michael R.",
  clientDesignation: "Business Owner, USA",
};

export default function UsaPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [portfolioSlide, setPortfolioSlide] = useState(0);
  const [reviews, setReviews] = useState([defaultReview]);
  const [reviewSlide, setReviewSlide] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  useEffect(() => {
    let active = true;

    async function loadReviews() {
      try {
        const result = await TestimonialContent(1);
        const records = result?.data?.records;
        if (active && Array.isArray(records) && records.length > 0) {
          setReviews(records);
          setReviewSlide(0);
        }
      } catch (error) {
        console.error("Unable to load USA page reviews:", error);
      }
    }

    loadReviews();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPortfolioSlide((current) => (current + 1) % portfolioSlides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (reviews.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setReviewSlide((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [reviews.length]);

  async function submitLead(data) {
    setStatus("");
    setSuccessMessage("");

    try {
      const result = await sendUsaContact(data);
      if (result?.status === 200) {
        reset();
        setSuccessMessage(result.message || "Thank you for contacting us!");
      } else {
        setStatus(
          result?.error?.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("USA contact submission error:", error);
      setStatus("Unable to submit your request. Please try again.");
    }
  }

  return (
    <>
        <Head>
          <title>Web Design & Development, Mobile Apps, & eCommerce Development | Aqualeaf IT Solutions</title>
          <meta name='description' content='Aqualeaf IT Solutions offers innovative web design & development, mobile apps, & eCommerce development to businesses for increase brand awareness & generate revenue.' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
      
      <main id="home" className="usa-page min-h-screen overflow-x-clip bg-white">
        {successMessage && (
          <div className="usa-success-backdrop" onClick={() => setSuccessMessage("")}>
            <section
              className="usa-success-popup"
              role="dialog"
              aria-modal="true"
              aria-labelledby="usa-success-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="usa-success-close"
                aria-label="Close success message"
                onClick={() => setSuccessMessage("")}
              >
                <X size={20} />
              </button>
              <div className="usa-success-icon"><Check size={30} strokeWidth={3} /></div>
              <h2 id="usa-success-title">Thank you!</h2>
              <p>{successMessage}</p>
              <button
                type="button"
                className="usa-success-button"
                onClick={() => setSuccessMessage("")}
              >
                Done
              </button>
            </section>
          </div>
        )}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="u-container flex min-h-[58px] items-center justify-between gap-5">
            <a href="#home" className="flex shrink-0 items-center gap-2 logo-size" aria-label="Aqualeaf home">
              <Image src="/logo3.png" alt="Aqualeaf IT Solutions Pvt Ltd" width={100} height={100} className="w-full h-full" priority />
              {/* <span className="leading-tight">
                <strong className="block text-[23px] font-black tracking-tight text-[#20313a]">Aqualeaf</strong>
                <small className="block text-[12px] font-bold text-[#26343a]">IT Solutions Pvt Ltd</small>
              </span> */}
            </a>

            <nav className="hidden items-center gap-8 text-[15px] font-bold text-slate-900 lg:flex" aria-label="Main navigation">
              <details className="u-nav-drop">
                <summary>Services <ChevronDown size={13} className="ml-1 inline" /></summary>
                <div className="u-nav-menu">{navServices.map((item, i) => <a key={item} href={`#${services[i].id}`}>{item}</a>)}</div>
              </details>
              <details className="u-nav-drop">
                <summary>Industries <ChevronDown size={13} className="ml-1 inline" /></summary>
                <div className="u-nav-menu">{navIndustries.map((item) => <a key={item} href="#industries">{item}</a>)}</div>
              </details>
              <a href="#portfolio" className="hover:text-[#008e79]">Portfolio</a>
              <a href="#reviews" className="hover:text-[#008e79]">Reviews</a>
              <a href="#about" className="hover:text-[#008e79]">About</a>
            </nav>

            <div className="hidden items-center gap-7 xl:flex">
              <a href="tel:+16469808462" className="flex items-center gap-2 text-[19px] font-extrabold">
                <Phone size={19} className="text-[#008c79]" /> +91 9804070412
              </a>
              <a href="#contact" className="u-btn-primary !rounded-lg !px-5 !py-3 text-sm">
                Get a Free Estimate <ArrowRight size={17} />
              </a>
            </div>

            <button className="lg:hidden rounded-lg border p-2" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileOpen && (
            <div className="u-container grid gap-3 border-t py-4 text-sm font-semibold lg:hidden">
              {[
                ["Services", "#services"],
                ["Industries", "#industries"],
                ["Portfolio", "#portfolio"],
                ["Reviews", "#reviews"],
                ["About", "#about"],
                ["Get a Free Estimate", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMobileOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          )}
        </header>

        <section className="u-hero">
          <div className="u-container u-hero-grid">
            <div className="py-3">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00d1b0] px-4 py-2 text-sm font-bold shadow-[0_0_18px_#00b99c22] tag-border">
                <span className="text-xl" aria-hidden="true">🇺🇸</span> Software Development Partner for US Businesses
              </div>
              <h1 className="max-w-[760px] text-[clamp(34px,4.1vw,53px)] font-black leading-[1.04] tracking-[-.035em]">
                Custom Software Development for Growing Businesses in the <span className="text-[#00d6b1]">USA</span>
              </h1>
              <p className="mt-3 max-w-[760px] text-[18px] leading-[1.4] text-white/95">
                We design and build scalable web, mobile and cloud solutions - from SaaS and CRM to e-commerce, real-estate, healthcare and AI applications.
              </p>
              <div className="mt-5 grid max-w-[700px] grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center gap-3"><Users size={34} /><p className="text-sm leading-tight"><b className="text-xl">30+</b><br />Expert Team</p></div>
                <div className="flex items-center gap-3"><Star size={34} /><p className="text-sm leading-tight"><b className="text-xl">17+</b><br />Clutch Reviews</p></div>
                <div className="flex items-center gap-3"><Laptop size={34} /><p className="text-sm leading-tight"><b className="text-xl">700+</b><br />Projects Delivered</p></div>
                <div className="flex items-center gap-3"><ShieldCheck size={34} /><p className="text-sm leading-tight"><b className="text-xl">US Business</b><br />Ready Solutions</p></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="https://aqualeafitsol.com/book-appointment" className="u-btn-primary min-w-[245px]">Discuss Your Project <ArrowRight size={19} /></a>
                <a href="https://portfolios.aqualeafitsol.com/" target="_blank" rel="noreferrer" className="u-btn-outline min-w-[230px]">View Our Portfolio <ArrowUpRight size={18} /></a>
              </div>
            </div>

            <div id="contact" className="u-estimate-card">
              <h2 className="text-[23px] font-black tracking-tight">Get Your Free Project Estimate</h2>
              <p className="mb-4 text-[13px] leading-snug text-slate-700">Tell us about your project. Our team will get back to you within 1 business day.</p>
              <form onSubmit={handleSubmit(submitLead)} className="grid gap-2.5">
                <div>
                  <input
                    className="u-form-control"
                    placeholder="Full Name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "usa-name-error" : undefined}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p id="usa-name-error" role="alert" className="mt-1 text-xs font-semibold text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    className="u-form-control"
                    type="email"
                    placeholder="Business Email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "usa-email-error" : undefined}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && <p id="usa-email-error" role="alert" className="mt-1 text-xs font-semibold text-red-600">{errors.email.message}</p>}
                </div>
                <input className="u-form-control" placeholder="Company (Optional)" {...register("company")} />
                <div>
                  <select
                    className="u-form-control"
                    defaultValue=""
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? "usa-project-type-error" : undefined}
                    {...register("projectType", { required: "Project type is required" })}
                  >
                  <option value="" disabled>Project Type</option>
                  {navServices.map((service) => <option key={service}>{service}</option>)}
                  <option>Other / Not sure yet</option>
                  </select>
                  {errors.projectType && <p id="usa-project-type-error" role="alert" className="mt-1 text-xs font-semibold text-red-600">{errors.projectType.message}</p>}
                </div>
                <div>
                  <textarea
                    className="u-form-control min-h-[76px] resize-y"
                    placeholder="Tell us about your project..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "usa-message-error" : undefined}
                    {...register("message", { required: "Project details are required" })}
                  />
                  {errors.message && <p id="usa-message-error" role="alert" className="mt-1 text-xs font-semibold text-red-600">{errors.message.message}</p>}
                </div>
                <button disabled={isSubmitting} className="u-btn-primary w-full !py-3 disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Get a Free Estimate"} <ArrowRight size={18} />
                </button>
              </form>
              {status && <p role="status" className="mt-2 text-sm font-semibold text-[#007c68]">{status}</p>}
              <p className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-700">
                <ShieldCheck size={16} className="text-green-700" /> No obligation — Confidential enquiry
              </p>
            </div>
          </div>
        </section>

        <section className="u-trust-strip">
          <div className="u-container grid grid-cols-2 md:grid-cols-5">
            <div className="u-trust-item col-span-2 font-extrabold md:col-span-1">Trusted by Global Businesses</div>
            <div className="u-trust-item">
              <a href="https://clutch.co/profile/aqualeaf-it-solutions" target="_blank" rel="noreferrer" className="flex items-center gap-2 clutch-section">
              <strong className="text-[30px] font-black tracking-tight">Clutch</strong><span className="text-xs"><b className="block text-base">4.9 <span className="text-amber-500" aria-label="5 out of 5 stars">★★★★★</span></b>Verified Profile</span>
              </a>
              </div>
            <div className="u-trust-item"><Laptop size={32} /><span><b className="block text-xl">700+</b><small>Projects Delivered</small></span></div>
            <div className="u-trust-item"><Users size={34} /><span><b className="block text-xl">500+</b><small>Happy Clients</small></span></div>
            <div className="u-trust-item"><span className="text-3xl" aria-hidden="true">🇺🇸</span><b className="text-sm">Serving Businesses<br />Across the USA</b></div>
          </div>
        </section>

        <section id="services" className="u-section">
          <div className="u-container grid gap-7 lg:grid-cols-[.9fr_2.5fr]">
            <div>
              <h2 className="u-section-title">Our Services</h2>
              <p className="mt-3 max-w-[310px] text-[15px] leading-6 text-slate-700">End-to-end software development services to help US businesses build, grow and scale their digital products.</p>
            </div>
            <div className="usa-service-grid grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-6">
              {services.map(({ id, title, desc, icon: Icon }) => (
                <article id={id} key={id} className="u-service-card scroll-mt-24">
                  <Icon size={27} strokeWidth={2.4} />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#fbfcfc] py-7">
          <div className="u-container grid gap-8 lg:grid-cols-[1.15fr_1.4fr_1.25fr] lg:items-center">
            <div>
              <h2 className="text-[23px] font-black tracking-tight">Why US Businesses Choose Aqualeaf?</h2>
              <ul className="mt-2 space-y-1 text-[14px] text-slate-800">
                {[
                  "Experienced & dedicated development team",
                  "Transparent communication & agile delivery",
                  "High-quality, secure and scalable solutions",
                  "On-time delivery and long-term support",
                  "Proven track record with global clients",
                ].map((x) => (
                  <li key={x} className="flex gap-2"><Check size={18} className="shrink-0 text-green-700" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-4 border-y py-4 lg:border-y-0 lg:border-x">
              <div className="u-metric"><Users className="mx-auto text-[#00a982]" size={34} /><strong>30+</strong><span>Team Members</span></div>
              <div className="u-metric"><Layers className="mx-auto text-[#00a982]" size={34} /><strong>8+</strong><span>Service Verticals</span></div>
              <div className="u-metric"><Rocket className="mx-auto text-[#00a982]" size={34} /><strong>700+</strong><span>Projects</span></div>
              <div className="u-metric"><Star className="mx-auto text-amber-500" size={34} /><strong>17+</strong><span>Clutch Rating</span></div>
            </div>
            <div id="industries">
              <h2 className="mb-3 text-[23px] font-black tracking-tight">Industries We Serve</h2>
              <div className="grid grid-cols-2 gap-3">
                {industries.map(({ name, icon: Icon, bg, color }) => (
                  <div key={name} className="u-industry-card" style={{ background: bg, color }}>
                    <Icon size={30} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="u-section review-section !py-8">
          <div className="u-container grid items-center gap-8 lg:grid-cols-[1.05fr_1.2fr_.8fr]">
            <div id="reviews" className="u-review-card" aria-roledescription="carousel" aria-label="Client reviews">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
                  style={{ transform: `translateX(-${reviewSlide * 100}%)` }}
                >
                  {reviews.map((review, index) => (
                    <article key={review.id || review.clientName || index} className="min-w-full" aria-label={`Review ${index + 1} of ${reviews.length}`}>
                      <Quote size={30} className="text-[#00a982]" />
                      <p className="mt-1 text-[14px] leading-5">{review.description}</p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div>
                          <b>{review.clientName}</b>
                          <p className="text-xs">{review.clientDesignation}</p>
                        </div>
                        <span className="text-xl tracking-wider text-amber-500" aria-label="5 out of 5 stars">★★★★★</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-center text-[22px] font-black">Our Development Process</h2>
              <div className="relative grid grid-cols-4 gap-2 before:absolute before:left-[12%] before:right-[12%] before:top-7 before:h-[3px] before:bg-[#b7d7d2]">
                {[
                  { icon: FileText, title: "1. Discuss", sub: "Requirements" },
                  { icon: Lightbulb, title: "2. Plan", sub: "& Design" },
                  { icon: Code2, title: "3. Develop", sub: "& Test" },
                  { icon: Rocket, title: "4. Deploy", sub: "& Support" },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="u-process-step">
                    <div className="u-process-icon"><Icon size={27} /></div>
                    <b className="block text-[13px]">{title}</b>
                    <span className="text-[13px] font-bold">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="portfolio" className="rounded-xl bg-gradient-to-br from-[#e9f7f3] to-[#f3f7fa] text-center">
              <div
                className="relative mx-auto aspect-[5/3] max-w-[290px] overflow-hidden rounded-lg border border-[#c5ddd8] bg-white shadow-lg"
                aria-roledescription="carousel"
                aria-label="Portfolio examples"
              >
                <div
                  className="flex h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
                  style={{ transform: `translateX(-${portfolioSlide * 100}%)` }}
                >
                  {portfolioSlides.map((src, index) => (
                    <div key={src} className="relative h-full min-w-full">
                      <Image
                        src={src}
                        alt={`Portfolio example ${index + 1}`}
                        fill
                        sizes="(max-width: 700px) 80vw, 290px"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://portfolios.aqualeafitsol.com/" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#007d70]">
                Explore our portfolio <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="u-footer-cta py-7">
          <div className="u-container relative z-10 flex flex-col items-center justify-between gap-5 md:flex-row">
            <div>
              <h2 className="text-[25px] font-black">Ready to Build Your Next Software Solution?</h2>
              <p className="mt-1 text-sm text-white/90">Partner with Aqualeaf IT Solutions - a reliable, scalable and cost-effective development partner for US businesses.</p>
            </div>
            <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-3 font-extrabold text-slate-900">
              Get a Free Estimate <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-3">
              <Phone size={30} />
              <p className="font-extrabold">
                +91 9804070412
                <small className="block text-xs font-medium">Mon–Fri, 9:30 AM–7:00 PM (EST)</small>
              </p>
            </div>
          </div>
        </section>
        <footer id="usa-copyright">
          © {new Date().getFullYear()} Aqualeaf IT Solutions Pvt Ltd. All rights reserved. · info@aqualeafitsol.com
        </footer>
      </main>
    </>
  );
}

UsaPage.standalone = true;
