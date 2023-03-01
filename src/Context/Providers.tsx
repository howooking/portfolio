"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider enableSystem attribute='class'>
      <SessionProvider>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <div className='min-h-screen bg-white text-quaternary transition-all duration-300 dark:bg-gray-600 dark:text-white'>
            <Toaster />
            {children}
          </div>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
