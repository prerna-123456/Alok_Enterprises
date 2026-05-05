import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import APFCPannel from "./pages/APFCPannel";
import MotorControls from "./pages/MotorControls";
import PowerDistribution from "./pages/PowerDistribution";
import AutomatedPanels from "./pages/AutomatedPanels";
import Projects from "./pages/Projects";
import IndustrialAutomation from "./pages/IndustrialAutomation"; 
import RenewableEnergy from "./pages/RenewableEnergy";
import SmartCity from "./pages/SmartCity";
import DataCenter from "./pages/DataCenter";
import ContactUs from "./pages/ContactUs";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="products" element={<Products />} />
          <Route path="APFC-Pannel" element={<APFCPannel />} />
          <Route path="motor-controls" element={<MotorControls />} />
          <Route path="power-distribution" element={<PowerDistribution />} />
          <Route path="automated-panels" element={<AutomatedPanels />} />
          <Route path="projects" element={<Projects />} />
          <Route path="industrial-automation" element={<IndustrialAutomation />} />
          <Route path="renewable-energy" element={<RenewableEnergy />} />
          <Route path="smart-city" element={<SmartCity />} />
          <Route path="data-center" element={<DataCenter />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter> 
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
