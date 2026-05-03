import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupDigest — Turn async updates into standup summaries",
  description: "Collects team updates from Slack/Discord and creates structured standup summaries with blockers highlighted. Built for remote engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="88de50a2-5f7c-4838-8815-fb86f5c0c455"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
