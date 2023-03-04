"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider enableSystem attribute='class'>
      <SessionProvider>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <div className='bg-white text-neutral transition-all duration-300 dark:bg-neutral dark:text-white'>
            <Toaster />
            {children}
          </div>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
