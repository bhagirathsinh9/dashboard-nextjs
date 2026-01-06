import LogoutButton from "@/componets/LogoutButton";

export default function DashboardLayout({ children }) {
  return (
    <div className="">
      <div className="w-full flex justify-between items-center p-4 border-b gap-5">
        <h2 className="font-bold text-lg">Dashboard</h2>
        <LogoutButton />
      </div>
      <main className="p-6">{children}</main>
    </div>
  );
}

