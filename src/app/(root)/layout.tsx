import { Container } from "@/components/common";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main suppressHydrationWarning={true}>
      <Container>{children}</Container>
    </main>
  );
}
