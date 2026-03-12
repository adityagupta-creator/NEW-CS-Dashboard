import { useState } from "react";
import { mockSellTransactions } from "@/data/mockData";
import { TransactionDetailPopup } from "@/components/TransactionDetailPopup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
export function SellSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = selected !== null ? mockSellTransactions[selected] : null;
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Sell Transactions</h2>
      <div className="section-card p-0 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-xs w-10">Sr.</TableHead>
              <TableHead className="text-xs">Transaction ID</TableHead>
              <TableHead className="text-xs">Partner</TableHead>
              <TableHead className="text-xs">Sell Amount</TableHead>
              <TableHead className="text-xs">Gold (gm)</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs">Date</TableHead>
              <TableHead className="text-xs w-16">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSellTransactions.map((tx, i) => (
              <TableRow key={i} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(i)}>
                <TableCell className="text-xs font-medium">{i + 1}</TableCell>
                <TableCell className="text-xs font-mono">{tx.transactionId}</TableCell>
                <TableCell className="text-xs">{tx.partnerPlatform}</TableCell>
                <TableCell className="text-xs font-mono">{tx.sellAmount}</TableCell>
                <TableCell className="text-xs font-mono">{tx.goldInGrams}</TableCell>
                <TableCell><span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${tx.transactionStatus === "Success" ? "status-badge-success" : "status-badge-fail"}`}>{tx.transactionStatus}</span></TableCell>
                <TableCell className="text-xs">{tx.dateTime.split(" ")[0]}</TableCell>
                <TableCell><button className="p-1 rounded hover:bg-accent/10"><Eye className="h-3.5 w-3.5 gold-accent" /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {t && <TransactionDetailPopup open={selected !== null} onOpenChange={(o) => !o && setSelected(null)} title={`Sell — ${t.transactionId}`} fields={[
        { label: "Date & Time", value: t.dateTime }, { label: "Settlement Timestamp", value: t.settlementTimestamp },
        { label: "Partner Platform", value: t.partnerPlatform }, { label: "Partner Ref ID", value: t.partnerRefId, mono: true },
        { label: "Holding Period", value: t.holdingPeriod }, { label: "Sell Amount", value: t.sellAmount, mono: true },
        { label: "Gold in Grams", value: t.goldInGrams, mono: true }, { label: "Wallet Before", value: t.walletBefore, mono: true },
        { label: "Wallet After", value: t.walletAfter, mono: true }, { label: "Live Sell Price", value: t.liveSellPrice, mono: true },
        { label: "Transaction Status", value: t.transactionStatus, status: t.transactionStatus === "Success" ? "success" : "fail" },
        { label: "Settlement Status", value: t.settlementStatus, status: t.settlementStatus === "Completed" ? "success" : "pending" },
        { label: "Settlement Initiated", value: t.settlementInitiated }, { label: "Settlement Completed", value: t.settlementCompleted },
        { label: "Settlement Mode", value: t.settlementMode }, { label: "Bank Account", value: t.bankAccount, mono: true },
        { label: "IFSC", value: t.ifsc, mono: true }, { label: "Bank Name", value: t.bankName },
        { label: "VPA", value: t.vpa, mono: true }, { label: "UTR Number", value: t.utrNumber, mono: true },
        { label: "Bank Mismatch", value: t.bankMismatchReason }, { label: "Penny Drop", value: t.pennyDropStatus, status: t.pennyDropStatus === "Success" ? "success" : "fail" },
        { label: "Sell Dropoff", value: t.sellDropoff }, { label: "Payment Mode", value: t.paymentMode },
        { label: "Name as per Bank", value: t.nameAsPerBank }, { label: "Name as per PAN", value: t.nameAsPerPan },
      ]} />}
    </div>
  );
}
