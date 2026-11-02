import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MenuModal from "./MenuModal";
import FloatingWidgets from "../interactive/FloatingWidgets";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="flex-1 relative">{children}</main>

      <Footer />
      <FloatingWidgets />
    </div>
  );
}
