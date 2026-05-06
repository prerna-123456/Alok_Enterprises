import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function ContactUs() {

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  // ✅ SUBMIT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Message sent successfully ✅");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.error || "Failed to send ❌");
      }

    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

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

  {/* CTA */ }
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
            <a href="/projects"><li>Projects</li></a>
          </ul>
          <a href="/contact-us">
            <button className="font-bold border border-[#182B48] bg-[#E6E8EE] hover:bg-[#1D2C60] hover:text-[#E6E8EE] px-5 py-2 rounded-[10px] font-poppins text-[#182B48] text-[18px]">
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
            <a href="/projects" className="text-[#182B48] text-[18px] font-poppins" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
              <button className="font-bold border border-[#182B48] bg-[#E6E8EE] px-5 py-2 rounded-[10px] font-poppins text-[#182B48] text-[18px]">
                Contact Us
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative w-full h-[450px] max-sm:h-[300px] flex items-center"
        style={{
          backgroundImage: `
                linear-gradient(
                  270deg,
                  rgba(0,0,0,0) 0%,
                  rgba(51,51,51,0.45) 50%,
                  rgba(0,0,0,1) 100%
                ),
                url('/contact-bg.png')
                `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* 🔹 Extra Overlay (40%) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 🔹 Content */}
        <div className="relative px-[123px] max-lg:px-8 max-sm:px-4 mt-28 max-sm:mt-20 animate-fadeLeft">

          <h1 className="text-white text-[50px] max-sm:text-[36px] max-lg:text-[40px] font-semibold font-poppins">
            Contact Us
          </h1>

          <p className="text-white text-[18px] max-sm:text-[14px] mt-3 font-poppins font-medium">
            Home <span className="mx-1 md:mx-2">›</span> Contact Us
          </p>
        </div>
      </section>

      {/* Form */}
      <section ref={sectionRef1} className="w-full min-h-screen bg-white flex items-center justify-center py-20 max-sm:py-12">
  <div className="max-w-6xl w-full px-6 max-sm:px-6">
    <div className={`text-center mb-12 max-sm:mb-8 ${visible1 ? "animate-slideInTogether" : "opacity-0"}`}>
      <h1 className="font-bold font-poppins text-[50px] max-sm:text-[28px] max-lg:text-[38px] text-[#1D2C60]">Get in Touch With Us</h1>
      <p className="text-[#535C76] text-[18px] max-sm:text-[14px] font-poppins mt-4">
       We're here to answer your questions and guide you <br className="max-sm:hidden" />about Alok Enterprise.
      </p> 
    </div>

    <div className="grid md:grid-cols-2 max-sm:grid-cols-1 gap-10 items-start">
      {/* Form */}
      <form 
      onSubmit={handleSubmit}
      className={`border border-[#1D2C60] rounded-xl p-6 max-sm:p-4 bg-white shadow-sm ${visible1 ? "animate-fadeLeft" : "opacity-0"}`}>

        <h2 className="text-[24px] max-sm:text-[20px] font-poppins font-semibold text-[#1D2C60] mb-6">Send us a message</h2>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[31px] max-sm:gap-4 mb-[28px] max-sm:mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="border border-[#1D2C60]/30 rounded-[8px] p-3 w-full outline-none text-[14px] font-poppins text-[#1D2C60]"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-[#1D2C60]/30 rounded-[8px] p-3 w-full outline-none text-[14px] font-poppins text-[#1D2C60]"
          />
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[31px] max-sm:gap-4 mb-[28px] max-sm:mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="John@example.com"
            className="border border-[#1D2C60]/30 rounded-[8px] p-3 w-full outline-none text-[14px] font-poppins text-[#1D2C60]"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 8362353676"
            className="border border-[#1D2C60]/30 rounded-[8px] p-3 w-full outline-none text-[14px] font-poppins text-[#1D2C60]"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please provide details about your requirements..."
          className="border border-[#1D2C60]/30 rounded-[8px] p-3 w-full h-32 mb-6 outline-none text-[14px] font-poppins text-[#1D2C60]"
        />

        <button 
        type="submit"
        className="bg-[#1D2C60] text-white px-6 py-3 rounded-[8px] font-poppins font-medium w-full max-sm:w-full">
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className={`space-y-12 max-sm:space-y-8 ml-10 max-sm:ml-0 max-lg:ml-0 mt-10 max-sm:mt-2 ${visible1 ? "animate-fadeRight" : "opacity-0"}`}>
        <div className="flex items-start gap-7">
          <div className="bg-[#1D2C60] text-white text-[24px] p-3.5 rounded-[10px] shrink-0"><LuPhone /></div>
          <div>
            <h3 className="font-poppins font-semibold text-[18px] text-[#1D2C60]">Phone</h3>
            <p className="text-[#535C76] font-poppins max-sm:text-[14px]">
              +91 8362353676 <span className="mx-1">|</span> +91 9886676791
            </p>
          </div>
        </div>

        <div className="flex items-start gap-7">
          <div className="bg-[#1D2C60] text-white text-[24px] p-3.5 rounded-[10px] shrink-0"><MdOutlineEmail /></div>
          <div>
            <h3 className="font-poppins font-semibold text-[18px] text-[#1D2C60]">Email</h3>
            <p className="text-[#535C76] font-poppins max-sm:text-[14px]">ankalikaraa@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-7">
          <div className="bg-[#1D2C60] text-white text-[24px] p-3.5 rounded-[10px] shrink-0"><HiOutlineLocationMarker /></div>
          <div>
            <h3 className="font-poppins font-semibold text-[18px] text-[#1D2C60]">Office Address</h3>
            <p className="text-[#535C76] font-poppins max-sm:text-[14px]">
              12, Madiman Complex, <br />
              Neeligin Road, Hubli 580029
            </p>
          </div>
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
  )
}
