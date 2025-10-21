import './globals.css'

export const metadata = {
  title: 'Ohpal International Ltd',
  description: 'Where trade, care, and culture unite.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
