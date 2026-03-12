import { mockCustomer } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Coins, Shield, Calendar, Clock } from "lucide-react";

function StatusDot({ verified }: { verified: boolean }) {
  return <span className={`inline-block w-2 h-2 rounded-full mr-1 ${verified ? "bg-green-500" : "bg-red-500"}`} />;
}

export function CustomerHeader() {
  const c = mockCustomer;
  return (
    <div className="customer-header-bar px-4 py-3 rounded-lg flex-1">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 gold-accent" />
          <span className="font-semibold text-sm">{c.name}</span>
          <Badge variant="outline" className="border-yellow-500 text-yellow-400 text-[10px] font-mono">{c.userId}</Badge>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <Mail className="h-3 w-3 gold-accent" />
          <span className="opacity-80">{c.email}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono">
          <Phone className="h-3 w-3 gold-accent" />
          <span className="opacity-80">{c.phone}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <Coins className="h-3 w-3 gold-accent" />
          <span className="font-semibold gold-accent">{c.goldBalance}</span>
          <span className="opacity-50">Gold</span>
          <span className="opacity-50 mx-1">|</span>
          <span className="font-semibold">{c.silverBalance}</span>
          <span className="opacity-50">Silver</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-2">
        <div className="flex items-center gap-1 text-xs">
          <Shield className="h-3 w-3 gold-accent" />
          <span className="opacity-60">PAN:</span>
          <StatusDot verified={c.panStatus === "Verified"} />
          <span>{c.panStatus}</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <Shield className="h-3 w-3 gold-accent" />
          <span className="opacity-60">Aadhaar:</span>
          <StatusDot verified={c.aadharStatus === "Verified"} />
          <span>{c.aadharStatus}</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${c.userStatus === "Active" ? "status-badge-success" : "status-badge-fail"}`}>{c.userStatus}</span>
        </div>
        <div className="flex items-center gap-1 text-xs opacity-70">
          <Calendar className="h-3 w-3" />
          <span>Reg: {c.dateOfRegistration}</span>
        </div>
        <div className="flex items-center gap-1 text-xs opacity-70">
          <Clock className="h-3 w-3" />
          <span>{c.activityLog}</span>
        </div>
      </div>
    </div>
  );
}
