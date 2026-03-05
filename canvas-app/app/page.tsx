import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Link
        href="/canvas"
        className="rounded-md bg-black px-4 py-2 text-white transition-opacity hover:opacity-80"
      >
        Open infinite canvas
      </Link>
    </main>
  );
}
