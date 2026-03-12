import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

interface PdfDialogProps {
  url: string;
  label?: string;
  title?: string;
  className?: string;
}

export function PdfDialog({ url, label = "View PDF", title = "PDF Preview", className }: PdfDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={cn("text-xs gold-accent flex items-center gap-1 hover:underline font-medium", className)}>
          <FileText className="h-3 w-3" />
          {label}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="px-4 pt-4 pb-2 border-b">
          <DialogTitle className="text-sm font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4">
          <div className="h-[70vh] w-full overflow-hidden rounded-md border bg-muted">
            <iframe className="h-full w-full" src={url} title={title} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
