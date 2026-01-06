import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
      <h1 className="text-2xl mb-3 font-bold">Welcome To Home Page</h1>

    <button className="bg-blue-400 rounded-2xl p-3"><Link href={'/dashboard'}>Go To Dashboard</Link></button>
  
      </div>
    </div>
  );
}
