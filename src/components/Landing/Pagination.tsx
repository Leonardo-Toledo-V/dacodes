"use client"
import React, { useContext } from 'react'
import { PageContext } from '@/hooks/PageProvider';

export default function Pagination() {
    const { page, setPage, lastPage } = useContext(PageContext);

    const handleNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (page < lastPage) {
            setPage(page + 1)
        }

    }
    const handlePrevious = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (page >= 2) {
            setPage(page - 1)
        }
    }

    return (
        <div className="w-full p-16">
            <div className="flex items-center mt-12 justify-center text-white"
                aria-label="Pagination">
                <a
                    onClick={handlePrevious}
                    className={`py-4 px-6 text-xl font-semibold rounded-full ${page === 1 ? "bg-[#2924aa] cursor-not-allowed" : "bg-[#5141EA] cursor-pointer"}`}>
                    {"<"}
                </a>
                <p
                    className="line-clamp-1 px-4 cursor-text items-center text-2xl font-semibold ">
                    {`${page}/ ${lastPage}`}
                </p>
                <a
                    onClick={handleNext}
                    className={`py-4 px-6 text-xl font-semibold rounded-full ${page === lastPage ? "bg-[#2924aa] cursor-not-allowed" : "bg-[#5141EA] cursor-pointer"}`}>
                    {">"}
                </a>
            </div>
        </div>
    )
}
