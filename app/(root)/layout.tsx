import HeaderNav from "@/components/ui/HeaderNav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
