import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function HeroSection() {

  {/* Testimonials */ }
  const testimonialsData = [
    {
      id: 1,
      image: "/Vector.png",
      text: "\u201cThe panels were delivered on time and performed reliably. Their safety standards gave us complete confidence.\u201d",
      name: "Ramesh Kulkarni",
      role: "Client",
    },
    {
      id: 2,
      image: "/Vector.png",
      text: "\u201cWell-designed MCC panels with smooth performance. The team was professional and dependable throughout.\u201d",
      name: "Suresh Patil",
      role: "Client",
    },
    {
      id: 3,
      image: "/Vector.png",
      text: "\u201cClear communication, safe execution, and reliable automation solutions. We\u2019re satisfied with the overall quality.\u201d",
      name: "Anil Deshpande",
      role: "Client",
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  const indexes = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  {/* About Us */ }
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

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

  const sectionRef3 = useRef(null);
  const [visible3, setVisible3] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible3(true); },
      { threshold: 0.3 }
    );
    if (sectionRef3.current) observer.observe(sectionRef3.current);
    return () => { if (sectionRef3.current) observer.unobserve(sectionRef3.current); };
  }, []);

  const sectionRef4 = useRef(null);
  const [visible4, setVisible4] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible4(true); },
      { threshold: 0.3 }
    );
    if (sectionRef4.current) observer.observe(sectionRef4.current);
    return () => { if (sectionRef4.current) observer.unobserve(sectionRef4.current); };
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

  const sectionRef6 = useRef(null);
  const [visible6, setVisible6] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible6(true); },
      { threshold: 0.3 }
    );
    if (sectionRef6.current) observer.observe(sectionRef6.current);
    return () => { if (sectionRef6.current) observer.unobserve(sectionRef6.current); };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bd-white">
      <section className="w-full h-[600px] md:h-[700px] relative">

        {/* 🔹 Navbar */}
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-[123px] max-lg:px-8 py-4 z-20 bg-white backdrop-blur-md animate-fadeDown">

          {/* Logo Image */}
          <a href="/">
            <img src="/logo.png" alt="logo" className="h-[90px] max-sm:h-[50px] w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="flex items-center gap-10 max-lg:hidden">
            <ul className="flex items-center gap-10 text-[#182B48] text-[18px] font-poppins">
              <a href="/"><li className="font-bold">Home</li></a>
              <a href="/about-us"><li>About Us</li></a>
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

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="hidden max-lg:flex absolute top-full left-0 w-full bg-white shadow-lg flex-col items-center gap-6 py-8 z-50">
              <a href="/" className="text-[#182B48] text-[18px] font-poppins font-bold" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="/about-us" className="text-[#182B48] text-[18px] font-poppins" onClick={() => setMobileMenuOpen(false)}>About Us</a>
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

        {/* 🔹 Background Image */}
        <div
          className="w-full h-[600px] md:h-[700px] bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="w-full h-full flex items-center px-[123px] max-lg:px-8 max-sm:px-6">
            <div className="max-w-7xl text-white mt-36 max-sm:mt-24 animate-fadeLeft">
              <h1 className="text-[40px] max-sm:text-[28px] font-semibold font-poppins leading-tight">
                EMPOWERING INDUSTRIES
              </h1>
              <h2 className="text-[40px] max-sm:text-[24px] mt-4 font-regular font-poppins">
                WITH RELIABLE CONTROL
              </h2>
              <h2 className="text-[40px] max-sm:text-[24px] mt-2 font-semibold font-poppins">
                SOLUTIONS
              </h2>
              <p className="mt-6 text-white text-[18px] max-sm:text-[15px] font-poppins font-regular">
                High-quality Electrical control panels & Automation solutions <br className="max-sm:hidden" />
                designed for performance, safety and global reliability
              </p>
              <div className="flex gap-4 mt-8">
                <button className="bg-[#E6E8EE] border border-[#1D2C60] text-[#1D2C60] hover:bg-[#1D2C60] hover:text-[#E6E8EE] text-[16px] px-6 py-3 rounded-[10px] font-regular font-poppins transition">
                  View Product
                </button>
                <button className="bg-[#E6E8EE] border border-[#1D2C60] text-[#1D2C60] text-[16px] hover:bg-[#1D2C60] hover:text-[#E6E8EE] px-6 py-3 rounded-[10px] font-regular font-poppins transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section ref={sectionRef} id="about" className="py-16 md:py-20">
        <div className="mx-auto px-[123px] max-lg:px-8 max-sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className={`flex-1 ${visible ? "animate-fadeLeft" : "opacity-0"}`}>
            <h2 className="text-[#1D2C60] text-[40px] max-sm:text-[28px] font-semibold font-poppins">ABOUT US</h2>
            <h3 className="text-[#373F68] text-[28px] max-sm:text-[20px] font-semibold font-poppins mt-4">
              Trusted Name In The Field Of Control Panel
            </h3>
            <p className="text-[#535C76] text-[18px] max-sm:text-[15px] font-poppins font-regular mt-4 leading-relaxed">
              Alok Enterprises is one of the leading manufacturers of Electrical Control Panels based
              in Hubli, Karnataka. We manufacture Control Panels for a variety of applications
              Viz… Cotton Ginning Factory, Dal Mills, Oil Mills, Sugar Industries, Steel Plants,
              Conveyor Applications, Motor Control Centers, Industrial Washing Machines, Special
              Purpose Machines, Complexes, Apartments, Malls, Hospitals, Buildings, Custom oriented applications.
            </p>
            <button className="mt-6 bg-[#E6E8EE] border border-[#1D2C60] hover:bg-[#1D2C60] hover:text-[#E6E8EE] px-5 py-2 rounded-[7px] text-[#182B48] font-regular font-poppins">
              Read More
            </button>
          </div>
          <div className={`flex-1 flex justify-center ${visible ? "animate-fadeRight" : "opacity-0"}`}>
            <img
              src="/about-us.png"
              alt="about"
              className="w-[584px] h-[466px] max-lg:w-full max-lg:h-auto max-w-md rounded-xl shadow-md object-cover ml-32 max-lg:-ml-3 md:mt-0 -mt-6"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section
        ref={sectionRef1}
        className="w-full py-28 max-sm:py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/mission.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#696969]/40 to-[#202B62]/95"></div>
        <div className="relative mx-auto px-[123px] max-lg:px-8 max-sm:px-6 grid md:grid-cols-2 gap-52 max-lg:gap-16 max-sm:gap-10 text-white">
          <div className={`${visible1 ? "animate-fadeLeft" : "opacity-0"}`}>
            <h2 className="text-[40px] max-sm:text-[28px] font-semibold font-poppins uppercase">Our Mission</h2>
            <p className="mt-4 text-[18px] max-sm:text-[15px] leading-relaxed font-poppins">
              To empower industries by delivering precise, safe,
              reliable electrical and automation solutions
              that drive progress.
            </p>
          </div>
          <div className={`${visible1 ? "animate-fadeRight" : "opacity-0"}`}>
            <h2 className="text-[40px] max-sm:text-[28px] font-semibold font-poppins uppercase">Our Vision</h2>
            <p className="mt-4 text-[18px] max-sm:text-[15px] leading-relaxed font-poppins">
              We aspire to be the most preferred and reliable solution
              providers for electrical and Automation solutions,
              with an unflinching commitment towards use of
              latest technology.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section ref={sectionRef2} id="products" className="py-16 md:py-20 bg-[#F5F6FA]">
        <div className="mx-auto px-[123px] max-lg:px-8 max-sm:px-6">
          <h2 className={`text-[#1D2C60] text-[40px] max-sm:text-[28px] font-semibold font-poppins ${visible2 ? "animate-fadeLeft" : "opacity-0"}`}>
            PRODUCTS
          </h2>
          <p className={`text-[#535C76] text-[18px] max-sm:text-[15px] mt-3 max-w-3xl font-poppins font-regular ${visible2 ? "animate-fadeLeft delay-200" : "opacity-0"}`}>
            We design and manufacture a complete range of Durable, High-performance
            Electrical Control Panels tailored for Industrial Applications
          </p>

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
              <img
                src="/product5.png"
                alt=""
                className="mx-auto h-[324px] max-sm:h-[200px] object-contain 
             -translate-y-6 max-sm:-translate-y-2 relative z-10"
              />
              <div className="mt-[-120px] max-sm:mt-[-50px] bg-[#1D2C60] rounded-xl shadow-md p-6 max-sm:pt-10 h-[326px] max-sm:h-auto flex flex-col justify-between">
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

      {/* Industries We Serve */}
      <section
        ref={sectionRef3}
        className="w-full py-24 max-sm:py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/industry-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative mx-auto px-[123px] max-lg:px-8 max-sm:px-6 text-white">
          <h2 className={`text-[40px] max-sm:text-[28px] font-semibold font-poppins uppercase ${visible3 ? "animate-fadeLeft" : "opacity-0"}`}>
            Industries We Serve
          </h2>
          <p className={`mt-4 text-[18px] max-sm:text-[15px] max-w-2xl text-[#C9C9C9] font-poppins font-regular ${visible3 ? "animate-fadeLeft" : "opacity-0"}`}>
            Our control solutions are trusted across diverse industrial and
            commercial sectors, designed to handle demanding environments
            and operational needs.
          </p>

          {/* Desktop layout - exact same */}
          <div className={`mt-16 grid grid-cols-6 gap-8 max-lg:hidden ${visible3 ? "animate-fadeUp" : "opacity-0"}`}>
            <div className="col-span-2 flex justify-center ml-40">
              <div className="bg-white/20 border border-white backdrop-blur-sm rounded-xl p-4 w-[199px] h-[194px] text-center">
                <img src="/serve1.png" alt="" className="mx-auto h-[120px] mb-4" />
                <p className="text-[16px] text-white font-poppins font-semibold">Cotton Ginning</p>
              </div>
            </div>
            <div className="col-span-2 flex justify-center">
              <div className="bg-white/20 border border-white backdrop-blur-sm rounded-xl p-4 w-[199px] h-[194px] text-center">
                <img src="/serve2.png" alt="" className="mx-auto h-[120px] mb-4" />
                <p className="text-[16px] text-white font-poppins font-semibold -mt-3">Hospitals and Hotels</p>
              </div>
            </div>
            <div className="col-span-2 flex justify-center mr-40">
              <div className="bg-white/20 border border-white backdrop-blur-sm rounded-xl p-4 w-[199px] h-[194px] text-center">
                <img src="/serve3.png" alt="" className="mx-auto h-[120px] mb-4" />
                <p className="text-[16px] text-white font-poppins font-semibold">Steel Plants</p>
              </div>
            </div>
            <div className="col-span-3 flex justify-end mr-16 mt-4">
              <div className="bg-white/20 border border-white backdrop-blur-sm rounded-xl p-4 w-[199px] h-[194px] text-center">
                <img src="/serve4.png" alt="" className="mx-auto h-[120px] mb-4" />
                <p className="text-[16px] text-white font-poppins font-semibold whitespace-nowrap -ml-1.5">Automobile Industries</p>
              </div>
            </div>
            <div className="col-span-3 flex justify-start ml-16 mt-4">
              <div className="bg-white/20 border border-white backdrop-blur-sm rounded-xl p-4 w-[199px] h-[194px] text-center">
                <img src="/serve5.png" alt="" className="mx-auto h-[95px] mb-4 mt-4" />
                <p className="text-[16px] text-white font-poppins font-semibold whitespace-nowrap -ml-1">Mining Industries</p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet layout - grid */}
          <div className={`mt-16 hidden max-lg:grid grid-cols-2 max-sm:grid-cols-2 gap-6 justify-items-center ${visible3 ? "animate-fadeUp" : "opacity-0"}`}>
            {[
              { src: "/serve1.png", label: "Cotton Ginning" },
              { src: "/serve2.png", label: "Hospitals and Hotels" },
              { src: "/serve3.png", label: "Steel Plants" },
              { src: "/serve4.png", label: "Automobile Industries" },
              { src: "/serve5.png", label: "Mining Industries" },
            ].map((item, i) => (
              <div key={i} className="bg-white/20 border border-white backdrop-blur-sm rounded-xl p-4 w-[159px] h-[154px] text-center">
                <img src={item.src} alt="" className="mx-auto h-[80px] mb-1 object-contain" />
                <p className="text-[16px] text-white font-poppins font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section ref={sectionRef4} className="w-full py-20 bg-white">
        <div className="mx-auto px-[123px] max-lg:px-8 max-sm:px-6 flex flex-col md:flex-row items-center gap-12">
          <div className={`flex-1 ${visible4 ? "animate-fadeLeft" : "opacity-0"}`}>
            <h2 className="text-[#1D2C60] text-[40px] max-sm:text-[28px] font-poppins font-semibold">OUR GLOBAL REACH</h2>
            <p className="text-[#535C76] text-[18px] max-sm:text-[15px] mt-4 max-w-2md font-poppins font-regular">
              We proudly export high-quality electrical control panels to
              multiple countries across Asia and Africa
            </p>
            <div className="mt-10 md:mt-16 flex flex-wrap gap-4">
              {[
                { flag: "/flag1.png", name: "China" },
                { flag: "/flag2.png", name: "Thailand" },
                { flag: "/flag3.png", name: "Indonesia" },
                { flag: "/flag4.png", name: "Taiwan" },
                { flag: "/flag5.png", name: "Congo" },
                { flag: "/flag6.png", name: "Bangladesh" },
                { flag: "/flag7.png", name: "Nigeria" },
                { flag: "/flag8.png", name: "Angola" },
                { flag: "/flag9.png", name: "Rwanda" },
                { flag: "/flag10.png", name: "Mali" },
                { flag: "/flag11.png", name: "Nepal" },
                { flag: "/flag12.png", name: "Sri Lanka" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-2 border border-[#CDCDCD] rounded-full px-4 py-2 bg-white">
                  <img src={c.flag} alt="" className="h-5 w-6 object-cover" />
                  <span className="text-[18px] max-sm:text-[15px] text-black font-poppins font-regular">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`hidden flex-1 md:flex justify-center ${visible4 ? "animate-fadeRight" : "opacity-0"}`}>
            <img src="/global.png" alt="map" className="w-[587px] h-[336px] max-lg:w-full max-lg:h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={sectionRef5} className="w-full min-h-[820px] py-10 md:py-20 px-[123px] max-lg:px-8 max-sm:px-6 bg-[#E6E8EE] text-center">
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

        {/* Mobile/Tablet layout - simple grid */}
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

      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-[80px] xl:px-10 py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-poppins font-semibold text-center text-[#1D2C60]">
            Our Work Showcase
          </h2>

          {/* Subtitle */}
          <p className="text-[#535C76] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] mt-3 mb-10 md:mb-16 max-w-2xl mx-auto text-center font-poppins">
            A glimpse into our expertise, innovation, and real-world project execution.
          </p>

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* Video 1 */}
            <a href="/video1.mp4" target="_blank">
              <video
                src="/video1.mp4"
                className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[450px] object-cover rounded-xl shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </a>

            {/* Video 2 */}
            <a href="/video2.mp4" target="_blank">
              <video
                src="/video2.mp4"
                className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] xl:h-[450px] object-cover rounded-xl shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 bg-[#F5F6FA] text-center overflow-hidden">
        <h2 className="text-[40px] max-sm:text-[28px] font-semibold text-[#1D2C60] font-poppins">Testimonials</h2>
        <p className="text-[#535C76] text-[18px] max-sm:text-[15px] mt-4 max-w-2xl mx-auto font-poppins font-regular px-4">
          What our clients say about our safety standards, reliability, and quality of work.
        </p>

        {/* Desktop: 3 cards */}
        <div className="mt-28 flex justify-center gap-16 items-center max-lg:hidden">
          {indexes.map((dataIdx, position) => {
            const item = testimonialsData[dataIdx];
            const isCenter = position === 1;
            return (
              <div
                key={dataIdx}
                style={{ transition: "transform 0.5s ease, box-shadow 0.5s ease" }}
                className={`bg-white border border-[#74747466]/40 rounded-xl p-6 w-[375px] h-[290px] text-left shadow-sm
                  ${isCenter ? "scale-[1.18] shadow-md" : "scale-100"}`}
              >
                <img src={item.image} alt="" className="h-10 mb-4" />
                <p className="text-[#535C76] text-[14px] font-poppins leading-relaxed">{item.text}</p>
                <div className="flex gap-1 mt-4 text-yellow-400 text-[20px]">★★★★★</div>
                <h3 className="mt-3 text-[#182B48] text-[16px] font-semibold font-poppins">{item.name}</h3>
                <p className="text-[13px] text-[#535C76] font-poppins font-regular">{item.role}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet: single centered card */}
        <div className="hidden max-lg:flex justify-center mt-16 px-5">
          <div className="bg-white border border-[#74747466]/40 rounded-xl p-6 w-full max-w-[375px] text-left shadow-md">
            <img src={testimonialsData[current].image} alt="" className="h-10 mb-4" />
            <p className="text-[#535C76] text-[14px] font-poppins leading-relaxed">{testimonialsData[current].text}</p>
            <div className="flex gap-1 mt-4 text-yellow-400 text-[20px]">★★★★★</div>
            <h3 className="mt-3 text-[#182B48] text-[16px] font-semibold font-poppins">{testimonialsData[current].name}</h3>
            <p className="text-[13px] text-[#535C76] font-poppins font-regular">{testimonialsData[current].role}</p>
          </div>
        </div>

        <div className="flex justify-center mt-16 gap-2 items-center">
          {testimonialsData.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full cursor-pointer transition-all duration-300 ${i === current ? "w-[14px] h-[14px] bg-[#1D2C60] -mt-0.5" : "w-[10px] h-[10px] bg-[#BDBDBD]"
                }`}
            />
          ))}
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
