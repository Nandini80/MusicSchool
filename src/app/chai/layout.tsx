
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
   <h2>inner layout icon</h2>
   {children}
   </>
  );
}
