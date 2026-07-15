import { ThemeProvider } from "@/components/theme-provider";
import { Home } from "@/pages/Home";
import { ChatButton } from "@/components/globals/ChatButton";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="mercapecas-theme">
      <Home />
      <ChatButton />
    </ThemeProvider>
  );
}

export default App;
