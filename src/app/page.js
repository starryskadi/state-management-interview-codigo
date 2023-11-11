"use client";

import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("@src/components/Dashboard"), {
  ssr: false,
});

export default function Home() {
  return <Dashboard />;
}
