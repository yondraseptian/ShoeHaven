import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row-reverse">
        <Image src="/images/loginImg.svg" className="hidden xl:flex h-screen py-10 right-0" alt="login image" width={700} height={400}/>
      {children}
    </div>
  );
}
