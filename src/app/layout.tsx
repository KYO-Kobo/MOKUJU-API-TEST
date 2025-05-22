export const metadata = {
  title: 'MOKUJU API テスト',
  description: 'MOKUJU APIのテスト環境',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
} 