import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { CustomerSearch } from "@/components/CustomerSearch";
import { CustomerHeader } from "@/components/CustomerHeader";
import { RecentActivity } from "@/components/RecentActivity";
import { OnboardingSection } from "@/components/sections/OnboardingSection";
import { BuySection } from "@/components/sections/BuySection";
import { SellSection } from "@/components/sections/SellSection";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { JewellerySection } from "@/components/sections/JewellerySection";
import { SipSection } from "@/components/sections/SipSection";
import { LeaseSection } from "@/components/sections/LeaseSection";
import { PromosSection } from "@/components/sections/PromosSection";
import { GiftingSection } from "@/components/sections/GiftingSection";
import { GoldBackSection } from "@/components/sections/GoldBackSection";
import { GoldTransferSection } from "@/components/sections/GoldTransferSection";

const Index = () => {
  const [customerLoaded, setCustomerLoaded] = useState(false);
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center gap-4 border-b px-4 bg-card shrink-0">
            <SidebarTrigger />
            <CustomerSearch onSearch={() => setCustomerLoaded(true)} />
          </header>
          {customerLoaded && (
            <div className="sticky top-0 z-10 px-4 py-2 border-b bg-card">
              <div className="flex items-start justify-between gap-4">
                <CustomerHeader />
                <div className="shrink-0 pt-1">
                  <RecentActivity />
                </div>
              </div>
            </div>
          )}
          <main className="flex-1 p-6 overflow-y-auto">
            {!customerLoaded ? (
              <div className="flex items-center justify-center h-full min-h-[60vh]">
                <div className="text-center space-y-3">
                  <div className="text-5xl">🔍</div>
                  <h2 className="text-xl font-semibold text-muted-foreground">Search for a customer</h2>
                  <p className="text-sm text-muted-foreground">Enter a phone number above to load customer details</p>
                </div>
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<OnboardingSection />} />
                <Route path="/buy" element={<BuySection />} />
                <Route path="/sell" element={<SellSection />} />
                <Route path="/delivery" element={<DeliverySection />} />
                <Route path="/jewellery" element={<JewellerySection />} />
                <Route path="/sip" element={<SipSection />} />
                <Route path="/lease" element={<LeaseSection />} />
                <Route path="/promos" element={<PromosSection />} />
                <Route path="/gifting" element={<GiftingSection />} />
                <Route path="/gold-back" element={<GoldBackSection />} />
                <Route path="/gold-transfer" element={<GoldTransferSection />} />
              </Routes>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default Index;
