import Link from "next/link"

const Page = () => {
  return (
    <div>
      <Link href="mailto:nayyaungchi0ld@gmail.com" className="text-sm text-muted-foreground hover:text-blue-500">
        Email
      </Link>
      {/* rest of code here */}
    </div>
  )
}

export default Page
