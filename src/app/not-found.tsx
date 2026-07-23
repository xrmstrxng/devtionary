import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found container">
      <span>404</span>
      <h1>Lost in the stack?</h1>
      <p>This page could not be found.</p>
      <Link className="button" href="/en">
        Return home
      </Link>
    </main>
  );
}
