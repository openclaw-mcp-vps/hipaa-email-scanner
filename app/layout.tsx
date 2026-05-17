import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIPAA Email Scanner — Stop Accidental PHI Leaks",
  description: "Real-time email monitoring that detects and blocks accidental HIPAA violations before they leave your organization."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="140303a2-e921-425f-8baa-04935093c868"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
