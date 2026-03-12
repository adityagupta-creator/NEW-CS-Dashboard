import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PdfDialog } from "@/components/PdfDialog";
interface DetailField { label: string; value: string; mono?: boolean; status?: "success" | "fail" | "pending" | "info"; isPdfLink?: boolean; }
interface TransactionDetailPopupProps { open: boolean; onOpenChange: (open: boolean) => void; title: string; fields: DetailField[]; }
export function TransactionDetailPopup({ open, onOpenChange, title, fields }: TransactionDetailPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0">
        <DialogHeader className="px-4 pt-4 pb-2 border-b">
          <DialogTitle className="text-sm font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh]">
          <div className="divide-y">
            {fields.map((f, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5">
                <span className="text-xs text-muted-foreground">{f.label}</span>
                {f.isPdfLink ? (
                  <PdfDialog url={f.value} label="View PDF" title={f.label} className="text-xs font-medium" />
                ) : f.status ? (
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded status-badge-${f.status}`}>{f.value}</span>
                ) : (
                  <span className={`text-xs font-medium ${f.mono ? "font-mono" : ""}`}>{f.value}</span>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
