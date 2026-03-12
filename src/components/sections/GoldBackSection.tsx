import { useState } from "react";
import { mockGoldBack } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function GoldBackSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockGoldBack[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Gold Back</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">Order ID</TableHead>
              <TableHead className="text-xs">Distributor</TableHead>
              <TableHead className="text-xs">Amount</TableHead>
              <TableHead className="text-xs">Gold (gm)</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs">Date</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockGoldBack.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.orderId}</TableCell>
                <TableCell className="text-xs">{tx.distributorName}</TableCell>
                <TableCell className="text-xs font-mono">{tx.totalPurchaseAmount}</TableCell>
                <TableCell className="text-xs font-mono">{tx.goldAmount}</TableCell>
                <TableCell><span className="text-[10px] font-semibold px-1.5 py-0.5 rounded status-badge-success">{tx.paymentStatus}</span></TableCell>
                <TableCell className="text-xs">{tx.orderDate}</TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10"><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`Gold Back — ${t.orderId}`} fields={[
        { label: "Distributor", value: t.distributorName }, { label: "Retailer", value: t.retailerName },
        { label: "Order ID", value: t.orderId, mono: true }, { label: "Invoice ID", value: t.invoiceId, mono: true },
        { label: "Invoice PDF", value: t.invoicePdf, isPdfLink: true }, { label: "Total Amount", value: t.totalPurchaseAmount, mono: true },
        { label: "Gold Rate", value: t.goldRate, mono: true }, { label: "Gold Amount", value: t.goldAmount, mono: true },
        { label: "Payment Method", value: t.paymentMethod }, { label: "Payment ID", value: t.paymentId, mono: true },
        { label: "Order Date", value: t.orderDate }, { label: "Payment Status", value: t.paymentStatus, status: "success" },
      ]} />}
    </div>
  );
}
