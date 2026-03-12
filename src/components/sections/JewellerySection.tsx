import { useState } from "react";
import { mockJewelleryRedemption } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function JewellerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockJewelleryRedemption[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Jewellery Redemption</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">Transaction ID</TableHead>
              <TableHead className="text-xs">Jeweller</TableHead>
              <TableHead className="text-xs">Gold (gm)</TableHead>
              <TableHead className="text-xs">Date</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockJewelleryRedemption.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.transactionId}</TableCell>
                <TableCell className="text-xs">{tx.jewellerName}</TableCell>
                <TableCell className="text-xs font-mono">{tx.goldInGrams}</TableCell>
                <TableCell className="text-xs">{tx.dateTime.split(" ")[0]}</TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10"><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`Jewellery — ${t.transactionId}`} fields={[
        { label: "Jeweller Name", value: t.jewellerName }, { label: "Partner ID", value: t.partnerId, mono: true },
        { label: "Gold in Grams", value: t.goldInGrams, mono: true }, { label: "Gold Before", value: t.goldBefore, mono: true },
        { label: "Gold After", value: t.goldAfter, mono: true }, { label: "24K → 22K Conversion", value: t.conversion24kTo22k, mono: true },
        { label: "Transaction ID", value: t.transactionId, mono: true }, { label: "Date & Time", value: t.dateTime },
      ]} />}
    </div>
  );
}
