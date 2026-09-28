import {
  Area,
  AreaChart,
  CartesianGrid,
  createHorizontalChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// 1. Membuat nama hari otomatis untuk label sumbu X
const getPastDays = () => {
  const formatter = new Intl.DateTimeFormat("id-ID", { weekday: "short" });
  return Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (5 - i));
    return formatter.format(date);
  });
};

const daftarHari = getPastDays(); // ['Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'] (contoh)

// 2. Data kustom mandiri tanpa perlu library external devtools
const data = [
  { label: daftarHari[0], x: 4000 },
  { label: daftarHari[1], x: 3000 },
  { label: daftarHari[2], x: 2000 },
  { label: daftarHari[3], x: 2780 },
  { label: daftarHari[4], x: 1890 },
  { label: daftarHari[5], x: 2390 },
];

// Inisialisasi komponen pembantu Recharts
const Typed = createHorizontalChart()({
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
});

const AreaChartExample = ({ isAnimationActive = true }) => (
  <Typed.AreaChart
    style={{
      width: "100%",
      maxWidth: "700px",
      maxHeight: "70vh",
      aspectRatio: 1.618,
    }}
    responsive
    data={data}
    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
  >
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop
          offset="5%"
          stopColor="rgba(40, 104, 220, .4)"
          stopOpacity={0.8}
        />
        <stop offset="95%" stopColor="rgba(40, 104, 220, .1)" stopOpacity={0} />
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" />
    <Typed.XAxis dataKey="label" />
    <Typed.YAxis width="auto" />
    <Tooltip
      labelClassName="text-secondary-2"
      wrapperClassName="bg-sidebar! border-border! rounded-lg"
    />
    <Typed.Area
      type="monotone"
      dataKey="x"
      stroke="#2868dc"
      activeDot={{ stroke: "#2868dc" }}
      fillOpacity={1}
      fill="url(#colorUv)"
      isAnimationActive={isAnimationActive}
      animationBegin={200}
      animationDuration={1300}
    />
  </Typed.AreaChart>
);

export default AreaChartExample;
