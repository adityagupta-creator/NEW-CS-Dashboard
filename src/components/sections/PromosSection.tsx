import { useState } from "react";
import { mockPromos } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function PromosSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockPromos[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Promos / Rewards</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">Promo Code</TableHead>
              <TableHead className="text-xs">Promo Name</TableHead>
              <TableHead className="text-xs">Partner</TableHead>
              <TableHead className="text-xs">Goldback</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPromos.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.promoCode}</TableCell>
                <TableCell className="text-xs">{tx.promoName}</TableCell>
                <TableCell className="text-xs">{tx.partnerName}</TableCell>
                <TableCell className="text-xs font-mono">{tx.goldbackAmount}</TableCell>
                <TableCell><span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${tx.promoStatus === "Redeemed" ? "status-badge-success" : "status-badge-pending"}`}>{tx.promoStatus}</span></TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10"><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`Promo — ${t.promoCode}`} fields={[
        { label: "Promo Name", value: t.promoName }, { label: "Promo Code", value: t.promoCode, mono: true },
        { label: "Validity", value: t.promoValidity }, { label: "Partner Name", value: t.partnerName },
        { label: "Goldback Amount", value: t.goldbackAmount, mono: true }, { label: "Eligibility", value: t.promoEligibility, status: "success" },
        { label: "Promo Status", value: t.promoStatus, status: t.promoStatus === "Redeemed" ? "success" : "pending" },
        { label: "Campaign Name", value: t.campaignName }, { label: "Campaign ID", value: t.campaignId, mono: true },
        { label: "Failure Reason", value: t.promoFailureReason },
      ]} />}
    </div>
  );
}
