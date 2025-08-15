"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import React, { FunctionComponent } from "react";

interface BreadcrumbProps {
  label: string;
  href: string;
}

export const FullWidthHeader: FunctionComponent<{
  title: string;
  description: string;
  breadcrumb?: BreadcrumbProps[];
  className?: string;
}> = ({ title, description, breadcrumb, className }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-blue-50 via-white to-purple-50 pb-12 lg:pb-20 pt-8",
        className
      )}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {breadcrumb && (
          <Breadcrumb className="mt-8 text-inherit">
            <BreadcrumbList className="text-inherit">
              {breadcrumb?.map((crumb, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem className="text-inherit">
                    {index === breadcrumb.length - 1 ? (
                      <BreadcrumbPage className="text-inherit line-clamp-1">
                        {crumb.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        className="text-inherit opacity-60 line-clamp-1 hover:opacity-80 transition-opacity"
                        href={crumb.href}
                      >
                        {crumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <div
          className={cn(
            "text-center mx-auto px-4",
            breadcrumb ? "pt-16 lg:pt-18" : "pt-16 lg:pt-24"
          )}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
