import { UserCheck, ShoppingCart, TrendingDown, Truck, Gem, RefreshCw, BarChart3, Tag, Gift, ArrowLeftRight, Coins } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";

const sections = [
  { title: "Onboarding", url: "/", icon: UserCheck },
  { title: "Buy", url: "/buy", icon: ShoppingCart },
  { title: "Sell", url: "/sell", icon: TrendingDown },
  { title: "Delivery", url: "/delivery", icon: Truck },
  { title: "Jewellery", url: "/jewellery", icon: Gem },
  { title: "SIP", url: "/sip", icon: RefreshCw },
  { title: "Lease", url: "/lease", icon: BarChart3 },
  { title: "Promos", url: "/promos", icon: Tag },
  { title: "Gifting", url: "/gifting", icon: Gift },
  { title: "Gold Back", url: "/gold-back", icon: Coins },
  { title: "Gold Transfer", url: "/gold-transfer", icon: ArrowLeftRight },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="px-4 py-4">
          {!collapsed ? (
            <h1 className="text-lg font-bold text-sidebar-primary">CS Dashboard</h1>
          ) : (
            <span className="text-sidebar-primary font-bold text-lg">CS</span>
          )}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50">Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className="hover:bg-sidebar-accent/50" activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
