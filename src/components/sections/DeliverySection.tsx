import { useState } from "react";
import { mockDeliveryTransactions } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function DeliverySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockDeliveryTransactions[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Delivery Transactions</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">Transaction ID</TableHead>
              <TableHead className="text-xs">Product</TableHead>
              <TableHead className="text-xs">Gold (gm)</TableHead>
              <TableHead className="text-xs">Amount (incl GST)</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs">Date</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDeliveryTransactions.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.transactionId}</TableCell>
                <TableCell className="text-xs">{tx.productTitle}</TableCell>
                <TableCell className="text-xs font-mono">{tx.goldInGrams}</TableCell>
                <TableCell className="text-xs font-mono">{tx.goldPriceWithGst}</TableCell>
                <TableCell><span className="text-[10px] font-semibold px-1.5 py-0.5 rounded status-badge-pending">{tx.deliveryStatus}</span></TableCell>
                <TableCell className="text-xs">{tx.dateTime.split(" ")[0]}</TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10"><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`Delivery — ${t.transactionId}`} fields={[
        { label: "Date & Time", value: t.dateTime }, { label: "Dispatch Date", value: t.dateOfDispatch },
        { label: "Delivery Date", value: t.dateOfDelivery }, { label: "Partner Platform", value: t.partnerPlatform },
        { label: "Gold Price (excl GST)", value: t.goldPriceWithoutGst, mono: true }, { label: "Gold Price (incl GST)", value: t.goldPriceWithGst, mono: true },
        { label: "Gold in Grams", value: t.goldInGrams, mono: true }, { label: "Product Title", value: t.productTitle },
        { label: "Product Sr. No.", value: t.productSrNo, mono: true }, { label: "Making Charges", value: t.makingCharges, mono: true },
        { label: "Delivery Status", value: t.deliveryStatus, status: "pending" }, { label: "Payment ID", value: t.paymentId, mono: true },
        { label: "Payment Mode", value: t.paymentMode }, { label: "Payment Status", value: t.paymentStatus, status: "success" },
        { label: "Serviceable Pincode", value: t.serviceablePincode, mono: true }, { label: "Address (Masked)", value: t.address },
        { label: "Tracking Link", value: t.trackingLink }, { label: "Invoice ID", value: t.invoiceId, mono: true },
        { label: "Invoice PDF", value: t.invoicePdf, isPdfLink: true }, { label: "Airway Number", value: t.airwayNumber, mono: true },
      ]} />}
    </div>
  );
}
