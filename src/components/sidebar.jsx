import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleQuestionMark,
  Ellipsis,
  FileChartColumnIncreasing,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

export default function SideMenuBar() {
  return (
    <Sidebar className="group-data-[side=left]:border-r-border! bg-sidebar w-70">
      <SidebarHeader className={"p-5"}>
        <section className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-2xl bg-primary  shadow-primary/50 shadow-lg p-2 w-10 h-10 font-black text-xl">
            N
          </div>
          <h1 className="text-3xl font-bold">
            Nova<span className="text-primary">.</span>
          </h1>
        </section>
      </SidebarHeader>
      <SidebarContent className={"px-3"}>
        <SidebarGroup>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className={"border-border hover:bg-sidebar-accent"} />}
              className="w-full h-17 rounded-lg"
            >
              <section className="flex items-center gap-4">
                <div className="bg-primary/50 p-2 rounded-lg text-xs font-bold">AC</div>
                <div className="flex flex-col items-start gap-0.5 flex-1">
                  <h1 className="text-sm font-medium">Acme Corporation</h1>
                  <span className="text-xs text-text-secondary">
                    Admin workspace
                  </span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={"mt-3 ring-border! z-50 bg-sidebar rounded-lg min-w-64"}
            >
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="flex items-center gap-3 p-3 cursor-pointer"
                  onClick={() => toast.success("Berpindah ke workspace Acme Corporation")}
                >
                  <div className="bg-primary/50 p-2 rounded-lg text-xs font-bold">AC</div>
                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <span className="text-sm font-medium">Acme Corporation</span>
                    <span className="text-xs text-text-secondary">Workspace aktif</span>
                  </div>
                  <Check className="w-4 h-4 text-primary" />
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="flex items-center gap-3 p-3 cursor-pointer"
                  onClick={() => toast.success("Membuka pengaturan workspace")}
                >
                  <div className="p-2 rounded-lg">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-medium">Pengaturan workspace</span>
                    <span className="text-xs text-text-secondary">Kelola akses dan preferensi</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarGroup>
        <SidebarGroup className={"pt-5 "}>
          <h1 className="uppercase text-sm text-text-secondary">Menu utama</h1>
          <section className="flex flex-col gap-2 my-5">
            <Button
              variant="outline"
              className={
                "flex items-center justify-start gap-5 rounded-xl bg-primary/40! border-l-primary border-l-4 py-6"
              }
              onClick={() => toast.success("Membuka halaman Overview")}
            >
              <LayoutDashboard className="w-5! h-5!" />
              <span>Overview</span>
            </Button>
            <Button
              variant="outline"
              className={
                "flex items-center justify-between hover:bg-text-secondary/10 hover:text-text-primary rounded-xl border-none cursor-pointer py-6"
              }
              onClick={() => toast.success("Membuka halaman Pesanan")}
            >
              <div className="flex items-center gap-5">
                <ShoppingCart className="w-5! h-5!" />
                <span>Pesanan</span>
              </div>
              <div className="p-2 bg-primary/50 text-text-primary rounded-lg text-xs">
                50
              </div>
            </Button>
            <Button
              variant="outline"
              className={
                "flex items-center justify-between hover:bg-text-secondary/10 hover:text-text-primary rounded-xl border-none cursor-pointer py-6"
              }
              onClick={() => toast.success("Membuka halaman Pelanggan")}
            >
              <div className="flex items-center gap-5">
                <Users className="w-5! h-5!" />
                <span>Pelanggan</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className={
                "flex items-center justify-between hover:bg-text-secondary/10 hover:text-text-primary rounded-xl border-none cursor-pointer py-6"
              }
              onClick={() => toast.success("Membuka halaman Produk")}
            >
              <div className="flex items-center gap-5">
                <Package className="w-5! h-5!" />
                <span>Produk</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className={
                "flex items-center w-full justify-between hover:bg-text-secondary/10 hover:text-text-primary rounded-xl border-none cursor-pointer py-6"
              }
              onClick={() => toast.success("Membuka halaman Laporan")}
            >
              <div className="flex items-center gap-5">
                <FileChartColumnIncreasing className="w-5! h-5!" />
                <span>Laporan</span>
              </div>
            </Button>
          </section>
        </SidebarGroup>
        <SidebarGroup className={"pt-5"}>
          <h1 className="uppercase text-sm text-text-secondary">Lainnya</h1>
          <section className="flex flex-col gap-2 my-5">
            <Button
              variant="outline"
              className={
                "flex items-center justify-between hover:bg-text-secondary/10 hover:text-text-primary rounded-xl border-none cursor-pointer py-6"
              }
              onClick={() => toast.success("Membuka halaman Pengaturan")}
            >
              <div className="flex items-center gap-5">
                <Settings className="w-5! h-5!" />
                <span>Pengaturan</span>
              </div>
            </Button>
          </section>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={"px-5 pr-7"}>
        <Button
          variant="outline"
          className={
            "rounded-lg w-full bg-linear-to-l p-0 h-20 from-sidebar/10 to-primary/30"
          }
          onClick={() => toast.success("Membuka halaman bantuan")}
        >
          <section className="flex items-center gap-2 w-full px-5 justify-between">
            <div className="flex p-2 rounded-lg items-center justify-center bg-primary/80">
              <CircleQuestionMark className="w-5! h-5!" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-xs">Butuh Bantuan?</h1>
              <span className="text-[11px] text-text-secondary">
                Hubungi tim support kami
              </span>
            </div>
            <ArrowUpRight />
          </section>
        </Button>
        <Button
          variant="outline"
          className={"w-full h-20 p-5 rounded-lg border-none"}
          onClick={() => toast.success("Membuka profil Abdul Hawari")}
        >
          <section className="flex items-center justify-between w-full gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/50 p-2 rounded-full text-sm">AB</div>
              <div className="flex flex-col items-start gap-2">
                <h1 className="text-md">Abdul Hawari</h1>
                <span className="text-xs text-text-secondary">Super Admin</span>
              </div>
            </div>
            <Ellipsis />
          </section>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
