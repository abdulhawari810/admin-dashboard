import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { toast } from "sonner";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-20 sticky top-0 bg-background px-1">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                render={
                  <NavLink
                    to={"/"}
                    className={"text-text-secondary"}
                    onClick={() => toast.success("Navigasi ke Dashboard")}
                  >
                    Dashboard
                  </NavLink>
                }
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                render={
                  <NavLink
                    to={"/"}
                    onClick={() => toast.success("Navigasi ke Overview")}
                  >
                    Overview
                  </NavLink>
                }
              />
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="flex items-center gap-2">
          <section className="flex items-center gap-5">
            <NavLink onClick={() => toast.success("Membuka pencarian")}>
              <Search className="text-text-secondary" />
            </NavLink>
            <NavLink
              className={"relative"}
              onClick={() => toast.success("Membuka notifikasi")}
            >
              <Bell className="text-text-secondary" />
              <div className="absolute top-0 right-0 bg-primary w-2 h-2 rounded-full"></div>
            </NavLink>
          </section>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className={"border-none"} />}
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="grayscale"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={"mt-3 ring-border! z-50 bg-sidebar rounded-lg"}
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                <DropdownMenuItem
                  className={"cursor-pointer"}
                  onClick={() => toast.success("Membuka halaman Profile")}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={"cursor-pointer"}
                  onClick={() => toast.success("Membuka pengaturan Bahasa")}
                >
                  Bahasa
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className={"cursor-pointer"}
                  onClick={() => toast.success("Membuka halaman Pengaturan")}
                >
                  Pengaturan
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={"text-red-500 cursor-pointer"}
                  onClick={() => toast.success("Berhasil keluar dari akun")}
                >
                  Keluar Akun
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </nav>
    </>
  );
}
