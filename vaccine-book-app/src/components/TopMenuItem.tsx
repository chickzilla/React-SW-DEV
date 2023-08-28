import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <Link
      href={pageRef}
      className="w-28 
      text-center 
      my-auto 
      text-white 
      font-semibold 
      mr-2.5"
    >
      {title}
    </Link>
  );
}
