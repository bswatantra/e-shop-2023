'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from 'react'

import { NextUIProvider } from '@nextui-org/react'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient());
    return (
        <NextUIProvider>
            <QueryClientProvider client={client}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </ThemeProvider>
            </QueryClientProvider>
        </NextUIProvider>
    )
}