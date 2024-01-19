import "@/global.css";
import { ScreenLayout } from "others/components/dom/screen-layout";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "UMRT | UIU Mars Rover Team",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased dark">
      <head />
      <body>
        <ScreenLayout>
          <Toaster position="bottom-center" />
          {children}
        </ScreenLayout>
      </body>
    </html>
  );
}
