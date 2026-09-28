import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  DollarSign,
  Ellipsis,
  Eye,
  Plus,
  RefreshCw,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import AreaChartExample from "@/components/chart-line";
import CustomActiveShapePieChart from "@/components/chart-shape";
import TablePesanan from "@/components/table";

const frameworks = ["7 Hari", "30 Hari", "90 Hari"];

export default function Dashboard() {
  return (
    <>
      {/* header */}

      <header className="flex flex-row items-end justify-between">
        <section className="flex flex-col gap-2">
          <span className="text-secondary-2 fontfont-semibold text-sm uppercase">
            selamat pagi, abdul
          </span>
          <h1 className="text-2xl">Overview</h1>
          <p className="text-sm text-text-secondary">
            Pantau performa bisnis kamu hari ini.
          </p>
        </section>
        <TambahTransaksiButton />
      </header>

      {/* card */}

      <section className="grid grid-cols-4 gap-5 mb-5 mt-10">
        <div className="flex flex-col bg-sidebar border border-border rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-primary/40 text-secondary-2 rounded-lg">
              <DollarSign />
            </div>
            <div className="flex flex-col">
              <ArrowUpRight className="w-5! text-success h-5!" />
              <span className="text-xs text-success">12.8%</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <span className="text-sm text-text-secondary">
              Total Pendapatan
            </span>
            <h1 className="font-bold text-2xl">Rp 46,2 jt</h1>
            <span className="text-xs text-text-secondary">vs bulan lalu</span>
          </div>
        </div>
        <div className="flex flex-col bg-sidebar border border-border rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-primary/40 text-secondary-2 rounded-lg">
              <Users />
            </div>
            <div className="flex flex-col">
              <ArrowUpRight className="w-5! text-success h-5!" />
              <span className="text-xs text-success">8.2%</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <span className="text-sm text-text-secondary">Total Pelanggan</span>
            <h1 className="font-bold text-2xl">12.567</h1>
            <span className="text-xs text-text-secondary">vs bulan lalu</span>
          </div>
        </div>
        <div className="flex flex-col bg-sidebar border border-border rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-primary/40 text-secondary-2 rounded-lg">
              <ShoppingCart />
            </div>
            <div className="flex flex-col">
              <ArrowUpRight className="w-5! text-success h-5!" />
              <span className="text-xs text-success">3.1%</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <span className="text-sm text-text-secondary">Total Pesanan</span>
            <h1 className="font-bold text-2xl">450</h1>
            <span className="text-xs text-text-secondary">vs bulan lalu</span>
          </div>
        </div>
        <div className="flex flex-col bg-sidebar border border-border rounded-lg p-5">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-primary/40 text-secondary-2 rounded-lg">
              <Wallet />
            </div>
            <div className="flex flex-col">
              <ArrowDownRight className="w-5! text-error h-5!" />
              <span className="text-xs text-error">2.8%</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <span className="text-sm text-text-secondary">Rata-rata Nilai</span>
            <h1 className="font-bold text-2xl">Rp 1,2 jt</h1>
            <span className="text-xs text-text-secondary">vs bulan lalu</span>
          </div>
        </div>
      </section>

      {/* statistik */}

      <section className="grid grid-cols-2 gap-5">
        <section className="flex flex-col bg-sidebar rounded-lg border-border border p-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-xl mb-2">Pendapatan</h1>
              <span className="text-sm text-text-secondary">
                Performa pendapatan dalam 7 hari terakhir
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="outline"
                    className="rounded-lg border-border bg-sidebar px-4 h-9"
                  />
                }
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{frameworks[0]}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-sidebar rounded-lg ring-border! min-w-32"
                align="end"
              >
                {frameworks.map((item) => (
                  <DropdownMenuItem
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() =>
                      toast.success(`Data diperbarui ke periode ${item}`)
                    }
                  >
                    <span>{item}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-col mt-5">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">Rp 12.840.000</h2>
              <div className="flex items-center">
                <ArrowUpRight className="w-4! h-4! text-success" />
                <span className="text-xs text-success">12.8%</span>
              </div>
            </div>
            <div className="mt-5">
              <AreaChartExample />
            </div>
          </div>
        </section>
        <section className="flex flex-col bg-sidebar rounded-lg border-border border p-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-xl mb-2">Sumber Penjualan</h1>
              <span className="text-sm text-text-secondary">
                Distribusi channel penjualan
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 rounded-lg border-border"
                  />
                }
              >
                <Ellipsis className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-sidebar rounded-lg ring-border! min-w-48"
                align="end"
              >
                <DropdownMenuItem
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() =>
                    toast.success("Data sumber penjualan diperbarui")
                  }
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Segarkan data</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() =>
                    toast.success("Membuka laporan sumber penjualan")
                  }
                >
                  <Eye className="w-4 h-4" />
                  <span>Lihat laporan</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-5 grid grid-cols-2">
            <CustomActiveShapePieChart />
            <div className="flex flex-col justify-center gap-1">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#06b6d4]"></div>
                <span className="text-sm text-text-secondary">Website</span>
                <span className="text-sm font-semibold">48%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
                <span className="text-sm text-text-secondary">Mobile App</span>
                <span className="text-sm font-semibold">32%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                <span className="text-sm text-text-secondary">Marketplace</span>
                <span className="text-sm font-semibold">20%</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* tabel */}

      <TablePesanan />
    </>
  );
}

function TambahTransaksiButton() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className={
              "bg-primary! shadow-primary/40 shadow-lg h-12 rounded-lg"
            }
          >
            <Plus className="w-5! h-5!" />
            <span className="tracking-[0.5px]">Tambah Transaksi</span>
          </Button>
        }
      />
      <DialogContent className="bg-sidebar ring-border! p-0 max-w-md! overflow-hidden">
        <div className="flex flex-col gap-6 p-6">
          <DialogHeader className="flex flex-row items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Transaksi Baru
              </span>
              <DialogTitle className="text-xl font-semibold">
                Tambah transaksi
              </DialogTitle>
            </div>
          </DialogHeader>
          <TransaksiForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TransaksiForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Berhasil menyimpan transaksi");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Nama pelanggan</label>
        <Input
          placeholder="Masukkan nama pelanggan"
          className="bg-sidebar border-border focus-visible:border-primary!"
          {...register("nama", { required: true })}
        />
        {errors.nama && (
          <span className="text-xs text-error">Nama pelanggan wajib diisi</span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Produk</label>
          <Select>
            <SelectTrigger className="bg-sidebar border-border focus-visible:border-primary!">
              <SelectValue placeholder="Pilih produk" />
            </SelectTrigger>
            <SelectContent className="bg-sidebar ring-border!">
              <SelectItem value="paket-pro">Paket Pro Annual</SelectItem>
              <SelectItem value="paket-basic">Paket Basic Monthly</SelectItem>
              <SelectItem value="paket-starter">Paket Starter</SelectItem>
              <SelectItem value="template">Template Dashboard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Nilai transaksi</label>
          <Input
            placeholder="Rp 0"
            className="bg-sidebar border-border focus-visible:border-primary!"
            {...register("nilai", { required: true })}
          />
          {errors.nilai && (
            <span className="text-xs text-error">
              Nilai transaksi wajib diisi
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
        <DialogClose
          render={
            <Button variant="outline" className="rounded-lg border-border" />
          }
        >
          Batal
        </DialogClose>
        <DialogClose
          render={
            <Button
              onClick={() => toast.success("Berhasil menyimpan transaksi")}
              className="bg-primary! rounded-lg"
            />
          }
        >
          Simpan transaksi
        </DialogClose>
      </div>
    </form>
  );
}
