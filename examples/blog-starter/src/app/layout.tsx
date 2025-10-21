import './globals.css'

export const metadata = {
  title: 'Ohpal International Ltd',
  description: 'Seamless collaboration of Trade, Care, and Culture.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
