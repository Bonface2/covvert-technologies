import Image from "next/image";
import Link from "next/link";

export default function LogoMark({ size = "h-9" }: { size?: string }) {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image
        src="/images/covvert-logo-v2.png"
        alt="Covvert Technologies Ltd"
        width={900}
        height={300}
        priority
        className={`${size} w-auto`}
      />
    </Link>
  );
}
