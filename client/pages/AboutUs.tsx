import { useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function AboutUs() {

  const sectionRef1 = useRef(null);
  const [visible1, setVisible1] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible1(true); },
      { threshold: 0.3 }
    );
    if (sectionRef1.current) observer.observe(sectionRef1.current);
    return () => { if (sectionRef1.current) observer.unobserve(sectionRef1.current); };
  }, []);

  const sectionRef2 = useRef(null);
  const [visible2, setVisible2] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible2(true); },
      { threshold: 0.3 }
    );
    if (sectionRef2.current) observer.observe(sectionRef2.current);
    return () => { if (sectionRef2.current) observer.unobserve(sectionRef2.current); };
  }, []);

  const sectionRef5 = useRef(null);
  const [visible5, setVisible5] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible5(true); },
      { threshold: 0.3 }
    );
    if (sectionRef5.current) observer.observe(sectionRef5.current);
    return () => { if (sectionRef5.current) observer.unobserve(sectionRef5.current); };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-[123px] max-lg:px-8 max-sm:px-6 py-4 z-20 bg-white backdrop-blur-md">

        <a href="/">
          <img src="/logo.png" alt="logo" className="h-[90px] max-sm:h-[50px] w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="flex items-center gap-10 max-lg:hidden">
          <ul className="flex items-center gap-10 text-[#182B48] text-[18px] font-poppins">
            <a href="/"><li>Home</li></a>
            <a href="/about-us"><li className="font-bold">About Us</li></a>
            <a href="/products"><li>Our Products</li></a>
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
            <a href="/about-us" className="text-[#182B48] text-[18px] font-poppins font-bold" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="/products" className="text-[#182B48] text-[18px] font-poppins" onClick={() => setMobileMenuOpen(false)}>Our Products</a>
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
        className="relative w-full h-[450px] max-sm:h-[320px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(51,51,51,0.45) 50%, rgba(0,0,0,1) 100%), url('/about-bg1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative px-[123px] max-lg:px-8 max-sm:px-6 mt-28 max-sm:mt-20 animate-fadeLeft">
          <h1 className="text-white text-[50px] max-sm:text-[36px] font-semibold font-poppins">About Us</h1>
          <p className="text-white text-[18px] max-sm:text-[15px] mt-3 font-poppins font-medium">
            Home <span className="mx-1 md:mx-2">›</span> About Us
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section ref={sectionRef1} className="w-full py-20 bg-white">
        <div className="mx-auto px-[123px] max-lg:px-8 max-sm:px-6 flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1">
            <img
              src="/about-us1.png"
              alt="section"
              className={`w-full h-[464px] max-sm:h-auto object-cover rounded-xl shadow-md ${visible1 ? "animate-fadeLeft" : "opacity-0"}`}
            />
          </div>

          <div className="flex-1 ml-8 max-lg:ml-0">
            <h2 className={`text-[#373F68] text-[30px] max-sm:text-[22px] font-semibold font-poppins ${visible1 ? "animate-fadeRight" : "opacity-0"}`}>
              Engineering Trust Through Innovation
            </h2>
            <p className={`text-[#535C76] text-[16px] mt-4 leading-relaxed font-poppins ${visible1 ? "animate-fadeRight" : "opacity-0"}`}>
              At Alok Enterprises, we are committed to maintaining the highest
              standards of quality and innovation. Our experienced team of engineers
              works closely with clients to understand their specific requirements
              and deliver solutions that are both efficient and cost-effective. From
              design and development to installation and support, we ensure a seamless
              experience at every stage of the project.
            </p>
            <p className={`text-[#535C76] text-[16px] mt-4 leading-relaxed font-poppins ${visible1 ? "animate-fadeRight" : "opacity-0"}`}>
              We take pride in our customer-centric approach and long-standing
              relationships built on trust and reliability. By continuously adopting the
              latest technologies and industry practices, we aim to provide advanced
              automation solutions that meet evolving industrial demands. Our goal
              is to empower businesses with smart, scalable, and future-ready control systems.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section ref={sectionRef2} className="w-full py-0 md:py-20 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 max-sm:px-6 text-center">
          <h2 className={`text-[40px] max-sm:text-[28px] font-semibold text-[#1D2C60] font-poppins ${visible2 ? "animate-slideInTogether" : "opacity-0"}`}>
            Our Journey
          </h2>
          <p className={`text-[#535C76] mt-3 text-[18px] max-sm:text-[15px] max-w-xl mx-auto font-poppins font-regular ${visible2 ? "animate-slideInTogether" : "opacity-0"}`}>
            Driven by innovation and a commitment to excellence, built on a strong foundation of trust.
          </p>

          <div className={`mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 ${visible2 ? "animate-fadeUp" : "opacity-0"}`}>

            <div className="bg-[#1D2C60] text-white rounded-[27px] p-8 shadow-xl hover:scale-105 transition">
              <img src="/journey3.png" alt="Our Beginning" className="w-[50px] h-[50px] md:w-[58px] md:h-[58px] mb-4 mx-auto" />
              <h3 className="text-[24px] font-poppins font-medium mb-3">Our Beginning</h3>
              <p className="text-[14px] md:text-[16px] font-poppins font-regular leading-relaxed text-white">
                Alok Enterprises was founded with a vision to deliver reliable and efficient
                electrical control panel solutions. Starting as a small-scale operation,
                we focused on quality, precision, and building trust through every project,
                addressing the core needs of industrial automation.
              </p>
            </div>

            <div className="bg-[#1D2C60] text-white rounded-[27px] p-8 shadow-xl hover:scale-105 transition">
              <img src="/journey2.png" alt="Our Growth" className="w-[50px] h-[50px] md:w-[58px] md:h-[58px] mb-4 mx-auto" />
              <h3 className="text-[24px] font-poppins font-medium mb-3">Our Growth</h3>
              <p className="text-[14px] md:text-[16px] font-poppins font-regular leading-relaxed text-white">
                Over the years, Alok Enterprises has expanded its expertise in control
                panels and automation systems. By adopting new technologies and
                improving processes, we have delivered solutions across industries,
                becoming a trusted name through innovation and customer satisfaction.
              </p>
            </div>

            <div className="bg-[#1D2C60] text-white rounded-[27px] p-8 shadow-xl hover:scale-105 transition">
              <img src="/journey1.png" alt="Where We Are Today" className="w-[50px] h-[50px] md:w-[58px] md:h-[58px] mb-4 mx-auto" />
              <h3 className="text-[24px] font-poppins font-medium mb-3">Where We Are Today</h3>
              <p className="text-[14px] md:text-[16px] font-poppins font-regular leading-relaxed text-white">
                Today, Alok Enterprises is a leading manufacturer of advanced electrical
                control panels, known for quality, safety, and reliability. With a skilled
                team and modern infrastructure, we deliver customized solutions while
                building long-term client partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={sectionRef5} className="w-full min-h-[850px] py-20 px-[123px] max-lg:px-8 max-sm:px-6 bg-[#E6E8EE] text-center">
        <h2 className={`text-[40px] max-sm:text-[28px] font-semibold text-[#1D2C60] font-poppins ${visible5 ? "animate-fadeUp" : "opacity-0"}`}>
          Why Choose Us
        </h2>
        <p className={`text-[#535C76] text-[18px] max-sm:text-[15px] font-poppins font-regular mt-3 ${visible5 ? "animate-fadeUp" : "opacity-0"}`}>
          Delivering reliable solutions with quality, precision, and trust
        </p>

        {/* Desktop layout - exact same */}
        <div className="relative mx-auto mt-16 flex justify-center items-center max-lg:hidden">
          <img
            src="/choose-center.png"
            alt=""
            className={`w-[365px] h-[287px] object-cover rounded-xl shadow-md z-10 ${visible5 ? "animate-slideInTogether" : "opacity-0"}`}
          />
          <div className={`absolute left-0 -top-16 text-center w-[300px] ${visible5 ? "animate-fadeLeft" : "opacity-0"}`}>
            <img src="/choose1.png" alt="" className="mx-auto h-[58px] mb-3" />
            <h3 className="text-[#1D2C60] text-[24px] font-poppins font-medium">Precision Engineering</h3>
            <p className="text-[16px] text-[#535C76] font-poppins font-regular mt-2">Accurate designs with strong technical expertise.</p>
          </div>
          <div className={`absolute left-0 -bottom-8 text-center w-[300px] ${visible5 ? "animate-fadeLeft" : "opacity-0"}`}>
            <img src="/choose2.png" alt="" className="mx-auto h-[58px] mb-3" />
            <h3 className="text-[#1D2C60] text-[24px] font-poppins font-medium">Custom-Built Solutions</h3>
            <p className="text-[16px] text-[#535C76] font-poppins font-regular mt-2">Flexible and scalable for every project.</p>
          </div>
          <div className={`absolute right-0 -top-16 text-center w-[300px] ${visible5 ? "animate-fadeRight" : "opacity-0"}`}>
            <img src="/choose3.png" alt="" className="mx-auto h-[70px] mb-3" />
            <h3 className="text-[#1D2C60] text-[24px] font-poppins font-medium">High Reliability</h3>
            <p className="text-[16px] text-[#535C76] font-poppins font-regular mt-2">Consistent performance in all conditions.</p>
          </div>
          <div className={`absolute right-0 -bottom-8 text-center w-[300px] ${visible5 ? "animate-fadeRight" : "opacity-0"}`}>
            <img src="/choose4.png" alt="" className="mx-auto h-[85px]" />
            <h3 className="text-[#1D2C60] text-[24px] font-poppins font-medium">Strong Global Exports</h3>
            <p className="text-[16px] text-[#535C76] font-poppins font-regular mt-2">Trusted by clients across multiple regions.</p>
          </div>
          <div className={`absolute bottom-[-230px] text-center w-[320px] ${visible5 ? "animate-fadeUp" : "opacity-0"}`}>
            <img src="/choose5.png" alt="" className="mx-auto h-[78px] mb-3" />
            <h3 className="text-[#1D2C60] text-[24px] font-poppins font-medium">Quality Components</h3>
            <p className="text-[16px] text-[#535C76] font-poppins font-regular mt-2">Ensures durability and long-lasting performance.</p>
          </div>
        </div>

        {/* Mobile/Tablet layout */}
        <div className={`hidden max-lg:grid grid-cols-2 max-sm:grid-cols-1 gap-8 mt-12 ${visible5 ? "animate-fadeUp" : "opacity-0"}`}>
          <img src="/choose-center.png" alt="" className="col-span-2 max-sm:col-span-1 w-full max-w-sm mx-auto rounded-xl shadow-md object-cover" />
          {[
            { img: "/choose1.png", h: "h-[58px]", title: "Precision Engineering", desc: "Accurate designs with strong technical expertise." },
            { img: "/choose2.png", h: "h-[58px]", title: "Custom-Built Solutions", desc: "Flexible and scalable for every project." },
            { img: "/choose3.png", h: "h-[70px]", title: "High Reliability", desc: "Consistent performance in all conditions." },
            { img: "/choose4.png", h: "h-[85px]", title: "Strong Global Exports", desc: "Trusted by clients across multiple regions." },
            { img: "/choose5.png", h: "h-[78px]", title: "Quality Components", desc: "Ensures durability and long-lasting performance." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <img src={item.img} alt="" className={`mx-auto ${item.h} mb-3`} />
              <h3 className="text-[#1D2C60] text-[20px] font-poppins font-medium">{item.title}</h3>
              <p className="text-[15px] text-[#535C76] font-poppins font-regular mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#6A6A6A] text-white pt-16 pb-16 px-[123px] max-lg:px-8 max-sm:px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

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

      {/* Divider */}
      <div className="bg-[#182B48] py-4 text-center">
        <p className="text-[14px] text-white font-poppins">
          © 2025 Alok Enterprises. All Rights Reserved. Designed By Spitel
        </p>
      </div>

    </div>
  );
}
