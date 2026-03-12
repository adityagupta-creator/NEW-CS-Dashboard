import { FileText } from "lucide-react";
interface DataFieldProps { label: string; value: string; mono?: boolean; status?: "success" | "fail" | "pending" | "info"; isPdfLink?: boolean; }
export function DataField({ label, value, mono, status, isPdfLink }: DataFieldProps) {
  return (
    <div className="space-y-0.5">
      <div className="data-label">{label}</div>
      {isPdfLink ? (
        <a href={value} className="data-value gold-accent flex items-center gap-1 hover:underline text-xs"><FileText className="h-3 w-3" /> View PDF</a>
      ) : status ? (
        <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold status-badge-${status}`}>{value}</span>
      ) : (
        <div className={`data-value ${mono ? "font-mono" : ""}`}>{value}</div>
      )}
    </div>
  );
}
