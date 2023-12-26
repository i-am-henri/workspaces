import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-primary text-pretty flex flex-col justify-center items-center" style={{minHeight: "100dvh"}}>
      <h2 className="text-3xl font-clash-display">This website is under construction.</h2>
      <p>You can join our <Link href="">discord</Link> server, to see new updates.</p>
    </div>
  )
}