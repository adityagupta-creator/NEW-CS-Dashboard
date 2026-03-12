import { useState } from "react";
import { mockSipData } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function SipSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockSipData[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">SIP Details</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">SIP ID</TableHead>
              <TableHead className="text-xs">Partner</TableHead>
              <TableHead className="text-xs">Frequency</TableHead>
              <TableHead className="text-xs">Amount (incl GST)</TableHead>
              <TableHead className="text-xs">Mandate</TableHead>
              <TableHead className="text-xs">Last Deduction</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSipData.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.sipId}</TableCell>
                <TableCell className="text-xs">{tx.partnerPlatform}</TableCell>
                <TableCell className="text-xs">{tx.sipFrequency}</TableCell>
                <TableCell className="text-xs font-mono">{tx.buyAmountWithGst}</TableCell>
                <TableCell><span className="text-[10px] font-semibold px-1.5 py-0.5 rounded status-badge-success">{tx.mandateStatus}</span></TableCell>
                <TableCell><span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${tx.lastDeductionStatus === "Success" ? "status-badge-success" : "status-badge-fail"}`}>{tx.lastDeductionStatus}</span></TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10"><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`SIP — ${t.sipId}`} fields={[
        { label: "SIP ID", value: t.sipId, mono: true }, { label: "Setup Date", value: t.setupDateTime },
        { label: "Start Date", value: t.startDate }, { label: "End Date", value: t.endDate },
        { label: "Partner", value: t.partnerPlatform }, { label: "Frequency", value: t.sipFrequency },
        { label: "Mandate Status", value: t.mandateStatus, status: "success" }, { label: "Mandate Expiry", value: t.mandateExpiryDate },
        { label: "Next Deduction", value: t.nextDeductionDate }, { label: "Last Deduction", value: t.lastDeductionStatus, status: t.lastDeductionStatus === "Success" ? "success" : "fail" },
        { label: "Total Transactions", value: String(t.totalTransactions) }, { label: "Amount (incl GST)", value: t.buyAmountWithGst, mono: true },
        { label: "Gold in Grams", value: t.goldInGrams, mono: true }, { label: "Payment Method", value: t.paymentMethod },
        { label: "Bank Account", value: t.bankAccount, mono: true }, { label: "IFSC", value: t.ifsc, mono: true },
        { label: "Bank Name", value: t.bankName }, { label: "Penny Drop", value: t.pennyDropStatus, status: "success" },
      ]} />}
    </div>
  );
}
