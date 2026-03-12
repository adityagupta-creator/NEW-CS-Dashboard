export const mockRecentActivity = [
  { type: "Buy" as const, id: "TXN-BUY-001234", amount: "₹5,150.00", gold: "0.8234 gm", status: "Success" as const, paymentStatus: "Captured", date: "2024-01-15 10:30" },
  { type: "Sell" as const, id: "TXN-SELL-002345", amount: "₹8,500.00", gold: "1.4200 gm", status: "Success" as const, paymentStatus: "Completed", date: "2024-01-14 11:45" },
  { type: "Delivery" as const, id: "TXN-DEL-003456", amount: "₹12,360.00", gold: "2.0000 gm", status: "In Transit" as const, paymentStatus: "Captured", date: "2024-01-12 09:15" },
  { type: "Buy" as const, id: "TXN-BUY-001235", amount: "₹10,300.00", gold: "1.6468 gm", status: "Failed" as const, paymentStatus: "Failed", date: "2024-01-10 14:22" },
  { type: "Gifting" as const, id: "GFT-001234", amount: "₹2,000.00", gold: "0.3295 gm", status: "Delivered" as const, paymentStatus: "Success", date: "2024-01-05 12:00" },
];
