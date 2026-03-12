import { useState } from "react";
import { mockBuyTransactions } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function BuySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockBuyTransactions[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Buy Transactions</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">Transaction ID</TableHead>
              <TableHead className="text-xs">Partner</TableHead>
              <TableHead className="text-xs">Amount (incl GST)</TableHead>
              <TableHead className="text-xs">Gold (gm)</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs">Date</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockBuyTransactions.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.transactionId}</TableCell>
                <TableCell className="text-xs">{tx.partnerPlatform}</TableCell>
                <TableCell className="text-xs font-mono">{tx.buyAmountWithGst}</TableCell>
                <TableCell className="text-xs font-mono">{tx.goldInGrams}</TableCell>
                <TableCell><span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${tx.transactionStatus === "Success" ? "status-badge-success" : "status-badge-fail"}`}>{tx.transactionStatus}</span></TableCell>
                <TableCell className="text-xs">{tx.dateTime.split(" ")[0]}</TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10" onClick={(e) => { e.stopPropagation(); setSelected(i); }}><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`Buy — ${t.transactionId}`} fields={[
        { label: "Date & Time", value: t.dateTime }, { label: "Partner Platform", value: t.partnerPlatform },
        { label: "Partner Ref ID", value: t.partnerRefId, mono: true }, { label: "Buy Amount (excl GST)", value: t.buyAmountWithoutGst, mono: true },
        { label: "Buy Amount (incl GST)", value: t.buyAmountWithGst, mono: true }, { label: "Gold in Grams", value: t.goldInGrams, mono: true },
        { label: "GST Amount", value: t.gstAmount, mono: true }, { label: "Live Buy Price", value: t.liveBuyPrice, mono: true },
        { label: "Transaction Status", value: t.transactionStatus, status: t.transactionStatus === "Success" ? "success" : "fail" },
        { label: "Initiated Status", value: t.transactionInitiatedStatus },
        { label: "Payment Status", value: t.paymentStatus, status: t.paymentStatus === "Captured" ? "success" : "fail" },
        { label: "Invoice ID", value: t.invoiceId, mono: true }, { label: "Invoice PDF", value: t.invoicePdf, isPdfLink: true },
        { label: "Bank Account", value: t.bankAccount, mono: true }, { label: "IFSC", value: t.ifsc, mono: true },
        { label: "Bank Name", value: t.bankName }, { label: "Dropoff Point", value: t.buyDropoff },
        { label: "Payment Failure Reason", value: t.paymentFailureReason }, { label: "Refund Initiated", value: t.refundInitiatedDate },
        { label: "Refund Completed", value: t.refundCompletionDate },
        { label: "Refund Status", value: t.refundStatus, status: t.refundStatus === "Completed" ? "success" : t.refundStatus === "N/A" ? "info" : "pending" },
        { label: "Refund Ref ID", value: t.refundRefId, mono: true }, { label: "Payment Method", value: t.paymentMethod },
        { label: "Payment Gateway", value: t.paymentGateway }, { label: "Payment ID", value: t.paymentId, mono: true },
      ]} />}
    </div>
  );
}
