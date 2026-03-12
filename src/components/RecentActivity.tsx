import { useState } from "react";
import { mockRecentActivity } from "@/data/recentActivity";
import { Activity, ShoppingCart, TrendingDown, Truck, Gift, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const typeIcons: Record<string, typeof ShoppingCart> = { Buy: ShoppingCart, Sell: TrendingDown, Delivery: Truck, Gifting: Gift };
function statusClass(status: string) {
  if (["Success", "Captured", "Completed", "Delivered"].includes(status)) return "status-badge-success";
  if (["Failed"].includes(status)) return "status-badge-fail";
  return "status-badge-pending";
}

export function RecentActivity() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-border bg-card hover:bg-accent/10 transition-colors">
          <Activity className="h-3.5 w-3.5 gold-accent" />Recent Activity
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 p-0 max-h-[70vh] flex flex-col overflow-hidden" sideOffset={8}>
        <div className="px-3 py-2 border-b flex items-center justify-between shrink-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Last 5 Activities</span>
          <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground"><X className="h-3.5 w-3.5" /></button>
        </div>
        <div className="divide-y overflow-y-auto flex-1 min-h-0">
          {mockRecentActivity.map((a, i) => {
            const Icon = typeIcons[a.type] || ShoppingCart;
            return <ActivityItem key={i} activity={a} Icon={Icon} />;
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function ActivityItem({ activity: a, Icon }: { activity: typeof mockRecentActivity[0]; Icon: typeof ShoppingCart }) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <button onClick={() => setShowDetail(!showDetail)} className="w-full px-3 py-2.5 flex items-center gap-2.5 hover:bg-muted/50 transition-colors text-left">
        <div className="shrink-0 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon className="h-3.5 w-3.5 gold-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold">{a.type}</span>
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${statusClass(a.status)}`}>{a.status}</span>
          </div>
          <div className="text-[11px] text-muted-foreground font-mono truncate">{a.id}</div>
        </div>
      </button>
      {showDetail && (
        <div className="px-3 pb-2.5 ml-9 space-y-1.5">
          {[["Amount", a.amount], ["Gold", a.gold], ["Payment", a.paymentStatus], ["Date", a.date]].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-mono font-medium">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
