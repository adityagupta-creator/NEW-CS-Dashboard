import { PdfDialog } from "@/components/PdfDialog";
interface DataFieldProps { label: string; value: string; mono?: boolean; status?: "success" | "fail" | "pending" | "info"; isPdfLink?: boolean; }
export function DataField({ label, value, mono, status, isPdfLink }: DataFieldProps) {
  return (
    <div className="space-y-0.5">
      <div className="data-label">{label}</div>
      {isPdfLink ? (
        <PdfDialog url={value} label="View PDF" title={label} className="data-value text-xs font-medium" />
      ) : status ? (
        <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold status-badge-${status}`}>{value}</span>
      ) : (
        <div className={`data-value ${mono ? "font-mono" : ""}`}>{value}</div>
      )}
    </div>
  );
}
