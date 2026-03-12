import { useState } from "react";
import { mockGoldTransfer } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function GoldTransferSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockGoldTransfer[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Gold Transfer</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">Order ID</TableHead>
              <TableHead className="text-xs">Source</TableHead>
              <TableHead className="text-xs">Destination</TableHead>
              <TableHead className="text-xs">Gold (gm)</TableHead>
              <TableHead className="text-xs">Type</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockGoldTransfer.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.orderId}</TableCell>
                <TableCell className="text-xs">{tx.sourceName}</TableCell>
                <TableCell className="text-xs">{tx.destinationName}</TableCell>
                <TableCell className="text-xs font-mono">{tx.goldAmount}</TableCell>
                <TableCell className="text-xs">{tx.type}</TableCell>
                <TableCell><span className="text-[10px] font-semibold px-1.5 py-0.5 rounded status-badge-success">{tx.status}</span></TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10"><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`Gold Transfer — ${t.orderId}`} fields={[
        { label: "Source Name", value: t.sourceName }, { label: "Destination Name", value: t.destinationName },
        { label: "Source Purity", value: t.sourcePurity }, { label: "Source Gold Amount", value: t.sourceGoldAmount, mono: true },
        { label: "Order ID", value: t.orderId, mono: true }, { label: "Purity", value: t.purity },
        { label: "Gold Amount", value: t.goldAmount, mono: true }, { label: "Order Date", value: t.orderDate },
        { label: "Type", value: t.type }, { label: "Status", value: t.status, status: "success" },
      ]} />}
    </div>
  );
}
