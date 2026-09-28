import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import SideMenuBar from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/components/navbar";

export default function App() {
  return (
    <>
      <SidebarProvider>
        <SideMenuBar />

        <section className="md:pl-7 w-full">
          <div className="flex items-center w-full pl-4 md:pl-0">
            <SidebarTrigger />
            <Navbar />
          </div>
          <main className="w-full px-5 md:px-11">
            <Outlet />
          </main>
        </section>
      </SidebarProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "bg-sidebar! border-border! text-text-primary!",
        }}
      />
    </>
  );
}
