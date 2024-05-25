import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="grid min-h-screen ml-64 bg-gray-200">
      <Sidebar></Sidebar>
      <div className="flex flex-col bg-white m-4 rounded-lg">
        <main className="flex flex-1 flex-col max-w-7xl gap-4 lg:gap-6 lg:p-12 self-center  bg-white">
          <h1 className="text-2xl font-bold md:text-md"> Projects </h1>
          <p className="text-md md:text-md max-w-xl">As a 🦄 I've built and shipped 12+ products (with over 160K users), been 2 times a Product Hunt Maker of The Year finalist, and much more ✌</p>
        </main>
      </div>
    </div>
  );
}
