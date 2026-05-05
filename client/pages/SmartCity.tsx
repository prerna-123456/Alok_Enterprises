import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
export default function SmartCity() {

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
      { threshold: 0.5 }
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

  {/* paragraph */ }
  const sectionRef1 = useRef(null);
  const [visible1, setVisible1] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible1(true);
        }
      },
      { threshold: 0.5 }
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

  {/* Purpose */ }
  const sectionRef2 = useRef(null);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible2(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);

  {/* Objectives */ }
  const sectionRef3 = useRef(null);
  const [visible3, setVisible3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible3(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef3.current) {
      observer.observe(sectionRef3.current);
    }

    return () => {
      if (sectionRef3.current) {
        observer.unobserve(sectionRef3.current);
      }
    };
  }, []);

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
            <a href="/products"><li>Our Products</li></a>
            <a href="/projects"><li className="font-bold">Projects</li></a>
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
            <a href="/products" className="text-[#182B48] text-[18px] font-poppins" onClick={() => setMobileMenuOpen(false)}>Our Products</a>
            <a href="/projects" className="text-[#182B48] text-[18px] font-poppins font-bold" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
              <button className="border border-[#182B48] bg-[#E6E8EE] px-5 py-2 rounded-[10px] font-poppins text-[#182B48] text-[18px]">
                Contact Us
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative w-full h-[300px] md:h-[380px] lg:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: `
                linear-gradient(
                  270deg,
                  rgba(0,0,0,0) 0%,
                  rgba(51,51,51,0.45) 50%,
                  rgba(0,0,0,1) 100%
                ),
                url('/project3.png')
                `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* 🔹 Extra Overlay (40%) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 🔹 Content */}
        <div className="relative px-6 md:px-10 lg:px-[123px] mt-16 md:mt-20 lg:mt-28 animate-slideInTogether">

          <h1 className="hidden md:block text-white text-[22px] md:text-[34px] lg:text-[40px] font-semibold font-poppins text-center">
            Smart City Infrastructure
          </h1>

          <h1 className="md:hidden text-white text-[22px] md:text-[34px] lg:text-[40px] font-semibold font-poppins text-center">
            Smart City <br />Infrastructure
          </h1>

          <p className="text-white text-[12px] md:text-[15px] lg:text-[16px] mt-3 font-poppins max-w-[700px] mx-auto text-center">
            Development of intelligent urban infrastructure that integrates advanced
            technologies to improve connectivity, optimize resource management, and
            enhance the overall quality of life in modern cities.
          </p>
        </div>
      </section>

      <section ref={sectionRef1} className="px-6 md:px-10 lg:px-[135px]">
        <p className={`text-[#535C76] text-[14px] lg:text-[16px] mt-10 lg:mt-[67px] font-poppins text-center ${visible1 ? "animate-fadeUp" : "opacity-0"}`}>
          Smart city infrastructure focuses on integrating advanced digital technologies
          with urban systems to create more efficient, connected, and sustainable cities.
          By utilizing IoT devices, data analytics, and intelligent monitoring systems,
          cities can optimize traffic flow, manage resources effectively, and improve
          public services such as transportation, energy, and waste management.
          This approach enhances operational efficiency while reducing environmental
          impact and operational costs.
        </p>

        <p className={`text-[#535C76] text-[14px] lg:text-[16px] mt-6 lg:mt-[37px] font-poppins text-center ${visible1 ? "animate-fadeUp" : "opacity-0"}`}>
          Additionally, smart city solutions aim to improve the quality of life for citizens by
          ensuring better safety, seamless connectivity, and real-time access to essential services.
          From smart lighting and surveillance to automated public utilities and digital governance,
          these systems enable faster decision-making and proactive management. As a result, cities
          become more resilient, scalable, and capable of adapting to future challenges and growing
          population demands.
        </p>
      </section>

      {/* Purpose */}
      <section ref={sectionRef2} className="bg-white py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-[123px]">

        {/* Heading */}
        <div className={`text-center ${visible2 ? "animate-fadeUp" : "opacity-0"}`}>
          <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-semibold text-[#1D2C60] font-poppins">
            Purpose
          </h2>

          <p className="mt-3 text-[#1D2C60] text-[14px] lg:text-[16px] max-w-[600px] mx-auto font-poppins">
            Transforming urban environments through intelligent infrastructure to
            enhance efficiency, sustainability, and quality of life.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full lg:w-[995px] mx-auto">

          {/* Card 1 */}
          <div className={`bg-[#1D2C60] text-white rounded-xl p-6 md:p-8 shadow-lg ${visible2 ? "animate-fadeLeft" : "opacity-0"}`}>
            <p className="text-[14px] lg:text-[16px] leading-relaxed font-poppins text-center">
              The purpose of this project is to develop smart city
              infrastructure that improves urban living through
              advanced technologies and efficient resource management.
              It focuses on enhancing connectivity, sustainability,
              and public services while ensuring a safer and more
              responsive environment for citizens.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`bg-[#1D2C60] text-white rounded-xl p-6 md:p-8 shadow-lg ${visible2 ? "animate-fadeRight" : "opacity-0"}`}>
            <p className="text-[14px] lg:text-[16px] leading-relaxed font-poppins text-center">
              It also aims to create a future-ready urban environment
              by integrating smart technologies that support efficient
              decision-making and resource optimization. By focusing on
              sustainability and innovation, the project ensures long-term
              growth, improved infrastructure performance, and a better
              living experience for communities.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Objectives */}
      <section ref={sectionRef3} className="bg-white py-6 lg:py-12 px-6 md:px-10 lg:px-[123px]">

        {/* Heading */}
        <div className={`text-center ${visible3 ? "animate-fadeUp" : "opacity-0"}`}>
          <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-semibold text-[#1D2C60] font-poppins">
            Objectives
          </h2>

          <p className="mt-3 text-[#1D2C60] text-[14px] lg:text-[16px] max-w-[600px] mx-auto font-poppins">
            Key goals focused on building efficient, sustainable,
            and technology-driven urban ecosystems.
          </p>
        </div>

        <div className={`hidden lg:grid max-w-[1400px] mx-auto grid-cols-3 gap-8 mb-14 ${visible3 ? "animate-fadeUp" : "opacity-0"}`}>

          <img src="/objective1.jpg" alt="" className="w-full h-full object-cover rounded-[10px] mt-[43px]" />
          <img src="/objective2.jpg" alt="" className="w-full h-full object-cover rounded-[10px] mt-[43px]" />
          <img src="/objective3.jpg" alt="" className="w-full h-full object-cover rounded-[10px] mt-[43px]" />

          {/* Column 1 */}
          <ul className="space-y-3 text-[#535C76] font-poppins text-[18px] mt-[62px]">
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Smart traffic management </li>
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Efficient energy utilization  </li>
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Advanced waste management  </li>
          </ul>

          {/* Column 2 */}
          <ul className="space-y-3 text-[#535C76] font-poppins text-[18px] mt-[62px]">
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Real-time data monitoring  </li>
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Improved public safety systems  </li>
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Seamless digital connectivity  </li>
          </ul>

          {/* Column 3 */}
          <ul className="space-y-3 text-[#535C76] font-poppins text-[18px] mt-[62px]">
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Optimized water management  </li>
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Sustainable urban development  </li>
            <li className="flex items-center gap-[22px]"><img src="/arrow-right.png" alt="" className="w-[16px] h-[16px]" />Enhanced citizen services  </li>
          </ul>
        </div>

        {/* Mobile/Tablet layout */}
        <div className={`lg:hidden mt-8 mb-10 ${visible3 ? "animate-fadeUp" : "opacity-0"}`}>

          {/* Images - 1 col mobile, 3 col tablet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/objective1.jpg" alt="" className="w-full h-[180px] md:h-[160px] object-cover rounded-[10px]" />
            <img src="/objective2.jpg" alt="" className="w-full h-[180px] md:h-[160px] object-cover rounded-[10px]" />
            <img src="/objective3.jpg" alt="" className="w-full h-[180px] md:h-[160px] object-cover rounded-[10px]" />
          </div>

          {/* Objectives list - 1 col mobile, 3 col tablet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ul className="space-y-3 text-[#535C76] font-poppins text-[15px]">
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Smart traffic management</li>
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Efficient energy utilization</li>
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Advanced waste management</li>
            </ul>
            <ul className="space-y-3 text-[#535C76] font-poppins text-[15px]">
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Real-time data monitoring</li>
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Improved public safety systems</li>
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Seamless digital connectivity</li>
            </ul>
            <ul className="space-y-3 text-[#535C76] font-poppins text-[15px]">
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Optimized water management</li>
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Sustainable urban development</li>
              <li className="flex items-center gap-3"><img src="/arrow-right.png" alt="" className="w-[14px] h-[14px] shrink-0" />Enhanced citizen services</li>
            </ul>
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
          <button className="mt-8 bg-white text-[#1D2C60] px-6 py-3 rounded-[7px] text-[16px] font-poppins font-medium">
            Get Free Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#6A6A6A] text-white pt-16 pb-16 px-[123px] max-lg:px-8 max-sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
            <a href="/"><img src="/logo.png" alt="logo" className="h-[111px] mb-4" /></a>
            <p className="text-[16px] text-white leading-relaxed font-poppins font-regular">
              The proper Footer on proper time can preserve you protection. We assist you make sure everybody forward.
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
              <a href="mailto:ankalikaraa@gmail.com" className="hover:underline">ankalikaraa@gmail.com</a>
            </p>
            <p className="flex items-start gap-3 text-[16px] text-white mt-4 font-poppins max-sm:justify-center">
              <HiOutlineLocationMarker className="text-[#1F2D61] text-[22px]" />
              <span>12, Madiman Complex, <br />Neeligin Road, Hubli 580029</span>
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
          © 2025 Alok Enterprises. All Rights Reserved. Designed By Spitel
        </p>
      </div>
    </div>
  )
}