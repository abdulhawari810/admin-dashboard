import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowUpRight, Ellipsis } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "#ORD-1082",
    customer: "Sarah Wijaya",
    produk: "Paket Pro Annual",
    totalAmount: "Rp 2,450.000",
    status: "Selesai",
  },
  {
    id: "#ORD-1081",
    customer: "Bima Pratama",
    produk: "Template Dashboard",
    totalAmount: "Rp 850.000",
    status: "Diproses",
  },
  {
    id: "#ORD-1080",
    customer: "Siti Rahayu",
    produk: "Paket Basic Monthly",
    totalAmount: "Rp 150.000",
    status: "Tertunda",
  },
  {
    id: "#ORD-1079",
    customer: "Ahmad Rizki",
    produk: "Paket Pro Annual",
    totalAmount: "Rp 2,450.000",
    status: "Selesai",
  },
  {
    id: "#ORD-1078",
    customer: "Dewi Lestari",
    produk: "Template Dashboard",
    totalAmount: "Rp 850.000",
    status: "Selesai",
  },
];

export default function TablePesanan() {
  return (
    <section className="flex flex-col bg-sidebar border border-border p-5 rounded-lg mt-10">
      <section className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Pesanan Terbaru</h1>
          <p className="text-sm text-text-secondary">
            Transaksi terakhir yang masuk
          </p>
        </div>
        <NavLink className={"flex items-center text-sm text-primary gap-2"}>
          <span>Lihat Semua</span>
          <ArrowUpRight className="w-4! h-4!" />
        </NavLink>
      </section>
      <section className="mt-5">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className={"border-b-border!"}>
              <TableHead className="w-25 uppercase text-xs text-text-secondary">
                id pesanan
              </TableHead>
              <TableHead className={"uppercase text-xs text-text-secondary"}>
                pelanggan
              </TableHead>
              <TableHead className={"uppercase text-xs text-text-secondary"}>
                produk
              </TableHead>
              <TableHead className="uppercase text-xs text-text-secondary">
                nilai
              </TableHead>
              <TableHead className="uppercase text-xs text-text-secondary">
                status
              </TableHead>
              <TableHead className="uppercase text-xs text-text-secondary"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} className={"border-b-border!"}>
                <TableCell className="font-medium text-secondary-2">
                  {invoice.id}
                </TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell className={"text-text-secondary"}>
                  {invoice.produk}
                </TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
                <TableCell>
                  <span
                    className={`text-xs rounded-lg ${invoice.status === "Selesai" ? "bg-success/10 text-success" : invoice.status === "Tertunda" ? "bg-warning/10 text-warning" : invoice.status === "Diproses" ? "bg-primary/10 text-secondary-2" : "bg-erotext-error/10 text-error"} p-2`}
                  >
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className={"border-none cursor-pointer"}
                    onClick={() =>
                      toast.success(`Berhasil mengklik ${invoice.id}`)
                    }
                  >
                    <Ellipsis className="w-5! h-5!" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className={"border-t-border!"}>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell>$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </section>
  );
}
