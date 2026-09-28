import { useState } from "react";
import { Pie, PieChart, Sector, Tooltip, Cell } from "recharts";

// 1. Data kustom baru sesuai permintaan Anda beserta palet warna modern
const data = [
  { name: "Website", value: 400, color: "#06b6d4" }, // Cyan / Teal
  { name: "Mobile App", value: 300, color: "#8b5cf6" }, // Violet / Ungu
  { name: "Marketplace", value: 200, color: "#f59e0b" }, // Amber / Orange
];

// 2. Fungsi perender bentuk aktif (tanpa anotasi tipe data TypeScript)
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      {/* Teks di tengah-tengah diagram donat */}
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="#94a3b8"
        className="font-semibold text-4xl"
      >
        {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      {/* Label jumlah data (Total Penjualan/Kunjungan) */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#cbd5e1"
        className="text-xs"
      >
        {`Total: ${value}`}
      </text>
      {/* Label Persentase */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#64748b"
        className="text-xs"
      >
        {`(${((percent ?? 1) * 100).toFixed(1)}%)`}
      </text>
    </g>
  );
};

export default function CustomActiveShapePieChart({
  isAnimationActive = true,
}) {
  // State untuk melacak bagian mana yang sedang disorot kursor (hover)
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <PieChart
        width={400}
        height={300}
        style={{ width: "100%", maxWidth: "400px", maxHeight: "300px" }}
      >
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          dataKey="value"
          isAnimationActive={isAnimationActive}
          onMouseEnter={onPieEnter}
        >
          {/* Mapping warna kustom ke tiap potongan pie/donat */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={() => null} />
      </PieChart>
    </div>
  );
}
