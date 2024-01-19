import { GlobalNavbar } from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <GlobalNavbar />
      {children}
    </>
  );
}
