import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Products() {

  {/* Products */ }
  const sectionRef2 = useRef(null);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible2(true);
        }
      },
      { threshold: 0.1 }
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">

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
      <section
        className="relative w-full h-[300px] md:h-[380px] lg:h-[450px] flex items-center"
        style={{
          backgroundImage: `
            linear-gradient(
              270deg,
              rgba(0,0,0,0) 0%,
              rgba(51,51,51,0.45) 50%,
              rgba(0,0,0,1) 100%
            ),
            url('/product-bg.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Extra Overlay (40%) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative px-6 md:px-10 lg:px-[123px] mt-16 md:mt-20 lg:mt-28 animate-fadeLeft">
          <h1 className="text-white text-[36px] md:text-[42px] lg:text-[50px] font-semibold font-poppins">
            Our Products
          </h1>
          <p className="text-white text-[15px] md:text-[17px] lg:text-[18px] mt-3 font-poppins font-medium">
            Home <span className="mx-1 md:mx-2">›</span> Our Products
          </p>
        </div>
      </section>

      {/* Products */}
      <section ref={sectionRef2} id="products" className="py-16 md:py-20 bg-[#F5F6FA]">
        <div className="mx-auto px-[123px] max-lg:px-8 max-sm:px-6">
          <h2 className={`text-[#1D2C60] text-[40px] max-sm:text-[28px] font-semibold font-poppins ${visible2 ? "animate-fadeLeft" : "opacity-0"}`}>
            PRODUCTS
          </h2>

          <div className={`grid md:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 mt-16 max-sm:mt-8 ${visible2 ? "animate-fadeUp" : "opacity-0"}`}>

            {/* Card 1 */}
            <div className="text-center relative">
              <img src="/product1.png" alt="" className="mx-auto h-[254px] max-sm:h-[180px] object-contain relative z-10" />
              <div className="mt-[-50px] max-sm:mt-[-50px] bg-[#E6E8EE] rounded-xl shadow-md p-6 max-sm:pt-10 h-[326px] max-sm:h-auto flex flex-col justify-between">
                <div>
                  <h3 className="text-[#1D2C60] text-[22px] font-poppins font-semibold mt-16 max-sm:mt-8">APFC Panels</h3>
                  <p className="text-[14px] text-[#535C76] font-poppins mt-4">
                    APFC Panels automatically correct power factor to improve energy efficiency and reduce electricity costs.
                  </p>
                </div>
                <a href="/APFC-pannel">
                  <button className="mt-6 mb-2 border border-[#1D2C60] hover:bg-[#1D2C60] hover:text-[#E6E8EE] px-5 py-2 rounded-md text-[16px] text-[#1D2C60] font-poppins w-fit mx-auto flex items-center gap-2">
                    <span>View Product</span><FaArrowRight size={16} />
                  </button>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="text-center relative">
              <img src="/product2.png" alt="" className="mx-auto h-[254px] max-sm:h-[180px] object-contain translate-y-10 max-sm:translate-y-0 relative z-10" />
              <div className="mt-[-50px] max-sm:mt-[-60px] bg-[#1D2C60] rounded-xl shadow-md p-6 max-sm:pt-10 h-[326px] max-sm:h-auto flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-[24px] font-poppins font-semibold mt-16 max-sm:mt-8">Motor Control Centers</h3>
                  <p className="text-[14px] text-[#C9C9C9] font-poppins mt-4">
                    Motor Control Centers (MCC) are panels used to control and protect multiple electric motors.
                  </p>
                </div>
                <a href="/motor-controls">
                  <button className="mt-6 mb-2 bg-white border border-[#1D2C60] hover:bg-[#1D2C60] hover:text-[#E6E8EE] hover:border-[#E6E8EE] px-5 py-2 rounded-md text-[16px] text-[#1D2C60] font-poppins w-fit mx-auto flex items-center gap-2">
                    <span>View Product</span><FaArrowRight size={16} />
                  </button>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="text-center relative">
              <img src="/product3.png" alt="" className="mx-auto h-[254px] max-sm:h-[180px] object-contain translate-y-6 max-sm:translate-y-0 relative z-10" />
              <div className="mt-[-50px] max-sm:mt-[-70px] bg-[#E6E8EE] rounded-xl shadow-md p-6 max-sm:pt-10 h-[326px] max-sm:h-auto flex flex-col justify-between">
                <div>
                  <h3 className="text-[#1D2C60] text-[24px] font-poppins font-semibold mt-16 max-sm:mt-8">Power Distribution Panels</h3>
                  <p className="text-[14px] text-[#535C76] font-poppins mt-4">
                    PDP Distribute electrical power safely to different circuits within an installation.
                  </p>
                </div>
                <a href="/power-distribution">
                  <button className="mt-6 mb-2 border border-[#1D2C60] hover:bg-[#1D2C60] hover:text-[#E6E8EE] px-5 py-2 rounded-md text-[16px] text-[#1D2C60] font-poppins w-fit mx-auto flex items-center gap-2">
                    <span>View Product</span><FaArrowRight size={16} />
                  </button>
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="text-center relative">
              <img src="/product4.png" alt="" className="mx-auto h-[254px] max-sm:h-[180px] object-contain translate-y-2 max-sm:translate-y-0 relative z-10" />
              <div className="mt-[-50px] max-sm:mt-[-50px] bg-[#1D2C60] rounded-xl shadow-md p-6 max-sm:pt-10 h-[326px] max-sm:h-auto flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-[24px] font-poppins font-semibold mt-16 max-sm:mt-8">Automated Panels</h3>
                  <p className="text-[14px] text-[#C9C9C9] font-poppins mt-4">
                    Automated Panels are control panels designed to automatically manage and monitor industrial processes and equipment.
                  </p>
                </div>
                <a href="/automated-panels">
                  <button className="mt-6 mb-2 bg-white border border-[#1D2C60] hover:bg-[#1D2C60] hover:text-[#E6E8EE] hover:border-[#E6E8EE] px-5 py-2 rounded-md text-[16px] text-[#1D2C60] font-poppins w-fit mx-auto flex items-center gap-2">
                    <span>View Product</span><FaArrowRight size={16} />
                  </button>
                </a>
              </div>
            </div>
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
  );
}
