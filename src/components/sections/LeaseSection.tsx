import { useState } from "react";
import { mockLeaseData } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function LeaseSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockLeaseData[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Lease Details</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">Lease ID</TableHead>
              <TableHead className="text-xs">Lease Name</TableHead>
              <TableHead className="text-xs">Gold Leased</TableHead>
              <TableHead className="text-xs">Yield</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs">Tenure</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLeaseData.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.leaseId}</TableCell>
                <TableCell className="text-xs">{tx.leaseName}</TableCell>
                <TableCell className="text-xs font-mono">{tx.totalGoldLeased}</TableCell>
                <TableCell className="text-xs font-mono">{tx.annualYield}</TableCell>
                <TableCell><span className="text-[10px] font-semibold px-1.5 py-0.5 rounded status-badge-success">{tx.status}</span></TableCell>
                <TableCell className="text-xs">{tx.tenure}</TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10"><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`Lease — ${t.leaseId}`} fields={[
        { label: "Lease ID", value: t.leaseId, mono: true }, { label: "Pledge Out ID", value: t.pledgeOutId, mono: true },
        { label: "Lease Name", value: t.leaseName }, { label: "Start Date", value: t.startDate },
        { label: "End Date", value: t.endDate }, { label: "Tenure", value: t.tenure },
        { label: "Total Gold Leased", value: t.totalGoldLeased, mono: true }, { label: "Annual Yield", value: t.annualYield },
        { label: "Allocation Status", value: t.allocationStatus, status: "success" }, { label: "Yield Credit Status", value: t.yieldCreditStatus, status: "success" },
        { label: "Yield Last Month", value: t.yieldLastMonth, mono: true }, { label: "Total Yield Credited", value: t.totalYieldCredited, mono: true },
        { label: "Potential Earnings", value: t.potentialEarnings, mono: true }, { label: "Order Date", value: t.orderDate },
        { label: "Status", value: t.status, status: "success" }, { label: "Lease Agreement", value: t.leaseAgreement, isPdfLink: true },
        { label: "Payout Dates", value: t.payoutDates },
      ]} />}
    </div>
  );
}
