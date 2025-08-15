"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { config } from "../config";
import { cn } from "../lib/utils";
import Link from "next/link";

const categories = [{ label: "Latest", tag: "latest" }, ...config.categories];

export interface BlogNavigationBarProps {
  className?: string;
  active: string;
}

export const FilterBar = ({ className, active }: BlogNavigationBarProps) => {
  const param = useSearchParams();
  const [searchText, setSearchText] = useState<string>(
    param.get("query") || ""
  );
  const [isSearchActive, setIsSearchActive] = useState(
    param.get("query") !== null && param.get("query") !== ""
  );
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isSearchActive) {
      searchInputRef.current?.focus();
    }
  }, [isSearchActive]);

  const onHandleKey = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchText === "") {
        router.push("/");
      } else {
        const urlPath = `/?query=${searchText}`;
        router.push(urlPath);
      }
    }
    if (e.key === "Escape") {
      setIsSearchActive(false);
    }
  };

  const onClearSearch = () => {
    setIsSearchActive(false);
    if (
      searchText === "" &&
      !(param.get("query") === "" || param.get("query") === null)
    ) {
      router.push("/");
    }
  };

  return (
    <div className={cn("flex items-center justify-between px-4 bg-white rounded-xl shadow-sm border", className)}>
      {isSearchActive ? (
        <div className="flex w-full items-center justify-between rounded-lg border-2 border-blue-200 bg-blue-50/50 px-3 py-2">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search articles..."
            className="w-full border-none bg-transparent px-2 py-1 focus-visible:outline-none text-gray-700 placeholder-gray-500"
            onKeyUp={(e) => onHandleKey(e)}
            onBlur={onClearSearch}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button 
            onClick={onClearSearch} 
            className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      ) : (
        <div className="flex w-full items-center justify-between py-3">
          <div className="flex gap-1 whitespace-nowrap overflow-x-auto">
            {categories.map((category) => (
              <Link
                href={
                  category.tag === "latest" ? `/` : `/category/${category.tag}`
                }
                key={category.tag}
              >
                <button
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100",
                    active === category.tag
                      ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {category.label}
                </button>
              </Link>
            ))}
          </div>
          <div className="flex-shrink-0 ml-4">
            <button 
              onClick={() => setIsSearchActive(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
