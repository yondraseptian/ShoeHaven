import HeaderNav from "@/components/ui/HeaderNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <HeaderNav />
      {children}
    </>
  );
}
