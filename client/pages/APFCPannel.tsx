import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function APFCPannel() {

  {/* CTA */ }
  const sectionRef6 = useRef(null);
  const [visible6, setVisible6] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible6(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef6.current) {
      observer.observe(sectionRef6.current);
    }

    return () => {
      if (sectionRef6.current) {
        observer.unobserve(sectionRef6.current);
      }
    };
  }, []);

  {/* Feature */ }
  const sectionRef1 = useRef(null);
  const [visible1, setVisible1] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible1(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current);
    }

    return () => {
      if (sectionRef1.current) {
        observer.unobserve(sectionRef1.current);
      }
    };
  }, []);

  const row1 = [
    { title: "Power Optimization", desc: "Automatic power factor correction" },
    { title: "Smart Switching", desc: "Intelligent capacitor bank switching" },
    { title: "Live Monitoring", desc: "Real-time power factor monitoring" },
    { title: "Energy Efficiency", desc: "Energy-efficient operation" },
    { title: "Reactive Control", desc: "Reduces reactive power losses" },
  ];

  const row2 = [
    { title: "System Efficiency", desc: "Improves overall system performance" },
    { title: "Smart Design", desc: "Compact and modular design" },
    { title: "Durable Design", desc: "Low maintenance and long service life" },
    { title: "Balance Control", desc: "Automatic load balancing for stability" },
  ];

  const FeatureItem = ({ item, showArrow }) => (
    <div className="flex items-start gap-4">
      <div>
        <h3 className="font-semibold font-poppins text-[#1D2C60] text-[18px] lg:text-[22px]">
          {item.title}
        </h3>
        <p className="text-[#535C76] text-[14px] lg:text-[16px] font-poppins font-regular mt-1 max-w-[180px]">
          {item.desc}
        </p>
      </div>

      {showArrow && (
        <ChevronRight className="text-[#1D2C60] mt-10 hidden lg:block" size={48} />
      )}
    </div>
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* 🔹 Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-[123px] max-lg:px-8 max-sm:px-6 py-4 z-20 bg-white backdrop-blur-md">

        <a href="/">
          <img src="/logo.png" alt="logo" className="h-[90px] max-sm:h-[50px] w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="flex items-center gap-10 max-lg:hidden">
          <ul className="flex items-center gap-10 text-[#182B48] text-[18px] font-poppins">
            <a href="/"><li>Home</li></a>
            <a href="/about-us"><li>About Us</li></a>
            <a href="/products"><li className="font-bold">Our Products</li></a>
            <a href="/projects"><li>Projects</li></a>
          </ul>
          <a href="/contact-us">
            <button className="border border-[#182B48] bg-[#E6E8EE] hover:bg-[#1D2C60] hover:text-[#E6E8EE] px-5 py-2 rounded-[10px] font-poppins text-[#182B48] text-[18px]">
              Contact Us
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="hidden max-lg:flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-[#182B48] transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-[#182B48] transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-[#182B48] transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="hidden max-lg:flex absolute top-full left-0 w-full bg-white shadow-lg flex-col items-center gap-6 py-8 z-50">
            <a href="/" className="text-[#182B48] text-[18px] font-poppins" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="/about-us" className="text-[#182B48] text-[18px] font-poppins" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="/products" className="text-[#182B48] text-[18px] font-poppins font-bold" onClick={() => setMobileMenuOpen(false)}>Our Products</a>
            <a href="/projects" className="text-[#182B48] text-[18px] font-poppins" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
              <button className="border border-[#182B48] bg-[#E6E8EE] px-5 py-2 rounded-[10px] font-poppins text-[#182B48] text-[18px]">
                Contact Us
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-28 pb-16 md:pt-36 md:pb-20 lg:py-52 px-4 md:px-10 lg:px-[123px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0">

          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/product1.png"
              alt="APFC Panel"
              className="w-full h-[260px] md:h-[320px] lg:h-[400px] object-contain lg:-ml-10 animate-fadeLeft"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left lg:mr-12 animate-fadeRight">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-semibold font-poppins text-[#1D2C60] mb-4 lg:mb-6">
              APFC Panels
            </h2>

            <p className="text-[#535C76] mb-4 leading-relaxed text-[14px] font-poppins font-regular">
              APFC (Automatic Power Factor Correction) Panels are designed to continuously
              monitor and maintain the power factor of an electrical system at an optimal level. By
              automatically switching capacitor banks based on load conditions, these panels help
              in reducing reactive power losses and improving overall system efficiency. This results
              in better utilization of electrical power and minimizes unnecessary energy wastage.
            </p>

            <p className="text-[#535C76] leading-relaxed text-[14px] font-poppins font-regular">
              In addition to improving efficiency, APFC panels play a crucial role in lowering
              electricity bills by avoiding power factor penalties imposed by utility providers. They
              also enhance the lifespan of electrical equipment by ensuring stable voltage levels
              and reducing stress on the system. With advanced controllers and reliable
              components, APFC panels provide a smart and cost-effective solution for modern
              industrial power management.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={sectionRef1} className="bg-white mb-16 md:mb-20 lg:mb-28 -mt-4 lg:-mt-10 px-5 md:px-10 lg:px-[123px]">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <h2 className={`text-[28px] md:text-[34px] lg:text-[40px] font-semibold font-poppins text-[#1D2C60] mb-4 lg:mb-6 ${visible1 ? "animate-slideInTogether" : "opacity-0"}`}>
            Features
          </h2>

          <p className={`text-[#535C76] max-w-2xl mx-auto mb-10 lg:mb-20 text-[15px] lg:text-[18px] font-poppins font-regular ${visible1 ? "animate-slideInTogether" : "opacity-0"}`}>
            Designed for enhanced efficiency and intelligent power management to
            ensure reliable and optimized performance.
          </p>

          {/* ROW 1 - desktop: flex row, mobile/tablet: 2-col grid */}
          <div className={`hidden lg:flex justify-between items-start mb-28 ${visible1 ? "animate-fadeUp" : "opacity-0"}`}>
            {row1.map((item, index) => (
              <FeatureItem key={index} item={item} showArrow={index !== row1.length - 1} />
            ))}
          </div>

          {/* ROW 1 + ROW 2 combined - mobile/tablet: single 2-col grid */}
          <div className={`grid grid-cols-2 gap-x-8 gap-y-8 lg:hidden ${visible1 ? "animate-fadeUp" : "opacity-0"}`}>
            {[...row1, ...row2].map((item, index) => (
              <div key={index} className="text-left">
                <h3 className="font-semibold font-poppins text-[#1D2C60] text-[16px] md:text-[18px]">
                  {item.title}
                </h3>
                <p className="text-[#535C76] text-[13px] md:text-[14px] font-poppins mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ROW 2 - desktop only */}
          <div className={`hidden lg:flex justify-center items-start gap-10 flex-wrap ${visible1 ? "animate-fadeUp" : "opacity-0"}`}>
            {row2.map((item, index) => (
              <FeatureItem key={index} item={item} showArrow={index !== row2.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={sectionRef6}
        className="w-full h-[460px] max-sm:h-auto max-sm:py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/cta-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-sm:px-5 ${visible6 ? "animate-slideInTogether" : "opacity-0"}`}>
          <h2 className="text-[40px] max-sm:text-[26px] font-poppins font-semibold text-white leading-[1.5]">
            Ready For High-Performance <br />
            Control Solutions?
          </h2>
          <p className="text-white text-[18px] max-sm:text-[15px] font-poppins mt-5 max-w-2xl">
            Contact us today to discuss your requirements. We provide tailored
            Electrical Control Panels designed for your Industry.
          </p>
          <a href="/contact-us">
            <button className="mt-8 bg-white text-[#1D2C60] px-6 py-3 rounded-[7px] text-[16px] font-poppins font-medium">
              Get Free Quote
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#6A6A6A] text-white pt-16 pb-16 px-[123px] max-lg:px-8 max-sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <a href="/"><img src="/logo.png" alt="logo" className="h-[111px] mb-4" /></a>
            <p className="text-[16px] text-white leading-relaxed font-poppins font-regular">
              Alok Enterprises offers quality mobiles, accessories, and tech solutions with trusted service and expert guidance.
            </p>
            <div className="flex items-center gap-4 mt-6 max-sm:justify-center">
              <a href="https://wa.me/918362353676" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-[#1D2C60] p-2 rounded-full cursor-pointer hover:scale-110 transition inline-block">
                <IoLogoWhatsapp size={30} />
              </a>
              <a href=""><div className="text-white hover:text-[#1D2C60] p-2 rounded-full cursor-pointer hover:scale-110 transition"><RiInstagramFill size={30} /></div></a>
              <a href=""><div className="text-white hover:text-[#1D2C60] p-2 rounded-full cursor-pointer hover:scale-110 transition"><FaFacebook size={30} /></div></a>
              <a href=""><div className="text-white hover:text-[#1D2C60] p-2 rounded-full cursor-pointer hover:scale-110 transition mt-1"><IoLogoYoutube size={30} /></div></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-8 max-lg:ml-0 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <h3 className="text-[18px] font-medium mb-4 font-poppins mr-4">Quick Links</h3>
            <ul className="space-y-3 text-[16px] text-white font-poppins font-regular">
              <a href="/"><li className="flex items-center gap-2 max-sm:justify-left"><IoIosArrowForward className="text-[#1D2C60] text-[20px]" /><span>Home</span></li></a>
              <a href="/about-us"><li className="flex items-center gap-2 mt-3 max-sm:justify-left"><IoIosArrowForward className="text-[#1D2C60] text-[20px]" /><span>About Us</span></li></a>
              <a href="/products"><li className="flex items-center gap-2 mt-3 max-sm:justify-left"><IoIosArrowForward className="text-[#1D2C60] text-[20px]" /><span>Our Products</span></li></a>
              <a href="/projects"><li className="flex items-center gap-2 mt-3 max-sm:justify-left"><IoIosArrowForward className="text-[#1D2C60] text-[20px]" /><span>Projects</span></li></a>
              <a href="/contact-us"><li className="flex items-center gap-2 mt-3 max-sm:justify-left"><IoIosArrowForward className="text-[#1D2C60] text-[20px]" /><span>Contact Us</span></li></a>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <h3 className="text-[18px] font-medium mb-4 font-poppins">Contact Us</h3>
            <p className="flex items-center gap-3 text-[16px] text-white font-poppins max-sm:justify-center">
              <IoCallOutline className="text-[#1F2D61] text-[22px]" />
              <a href="tel:8362353676" className="hover:underline">+91 8362353676</a>
            </p>
            <p className="flex items-center gap-3 text-[16px] text-white mt-4 font-poppins max-sm:justify-center">
              <IoCallOutline className="text-[#1F2D61] text-[22px]" />
              <a href="tel:9886676791" className="hover:underline">+91 9886676791</a>
            </p>
            <p className="flex items-center gap-3 text-[16px] text-white mt-4 font-poppins max-sm:justify-center">
              <MdOutlineMail className="text-[#1F2D61] text-[22px]" />
              <a href="mailto:info@alokenterprises.com" className="hover:underline">info@alokenterprises.com</a>
            </p>
            <p className="flex items-start gap-3 text-[16px] text-white mt-4 font-poppins max-sm:justify-center">
              <HiOutlineLocationMarker className="text-[#1F2D61] text-[22px]" />
              <span>12, Madiman Complex, <br />Neeligin Road, Hubli, Karnataka, India 580029</span>
            </p>
          </div>

          {/* Location */}
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <h3 className="text-[18px] font-medium mb-4 font-poppins">Location</h3>
            <div className="w-[280px] h-[198px] border-[4px] border-white rounded-[10px] overflow-hidden mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.4405104358157!2d75.13506477490137!3d15.352611185227733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd70176844d5%3A0x47622276d5e9826c!2sAlok%20Enterprises!5e0!3m2!1sen!2sin!4v1775041321992!5m2!1sen!2sin"
                width="280" height="198" loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </footer>

      <div className="bg-[#182B48] py-4 text-center">
        <p className="text-[14px] text-white font-poppins">
          © 2025 Alok Enterprises. All Rights Reserved. Designed By{" "}
          <a
            href="https://spitel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Spitel
          </a>
        </p>
      </div>
    </div>
  );
}
