import Link from "next/link"

export default function Nav () {
    return (
        <>
        <Link href="/">Home</Link>
        <Link href="/about/">About</Link>
        <Link href="/merch/">Merch</Link>
        <Link href="/archive/">Archive</Link>
        </>
    )
}