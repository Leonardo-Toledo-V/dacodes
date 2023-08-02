"use client"
import { createContext, useState, ReactNode } from 'react';

interface PageContextData {
    page: number;
    setPage: (page: number) => void;
    lastPage: number;
    setLastPage: (lastPage: number) => void;
}

export const PageContext = createContext<PageContextData>({
    page: 1,
    setPage: () => { },
    lastPage: 1,
    setLastPage: () => { },
});

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
    const [page, setPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<number>(1);

    return (
        <PageContext.Provider value={{ page, setPage, lastPage, setLastPage }}>
            {children}
        </PageContext.Provider>
    );
};
