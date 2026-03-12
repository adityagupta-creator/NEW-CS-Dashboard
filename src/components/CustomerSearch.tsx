import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface CustomerSearchProps { onSearch: (phone: string) => void; }
export function CustomerSearch({ onSearch }: CustomerSearchProps) {
  const [phone, setPhone] = useState("");
  const handleSearch = () => { if (phone.trim()) onSearch(phone.trim()); };
  return (
    <div className="flex items-center gap-2 w-full max-w-md">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search by phone number..." value={phone} onChange={(e) => setPhone(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch()} className="pl-9 font-mono" />
      </div>
      <Button onClick={handleSearch} className="gold-bg font-semibold border-0">Search</Button>
    </div>
  );
}
