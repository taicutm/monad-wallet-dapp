import '../app/bootstrap-import'
import { Providers } from '../../provider' // Đường dẫn từ src/app/layout.tsx tới src/provider.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
