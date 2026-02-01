import React from "react";

/**
 * Generic Card component used throughout the application to wrap content.
 * Provides optional header and footer sections and fills available height.
 * Extracted from App.jsx to allow reuse and improve project structure.
 *
 * Props:
 * - title: optional string to display in the card header
 * - children: main content of the card
 * - footer: optional footer element displayed at the bottom
 */
const Card = ({ title, children, footer }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col">
    {title && (
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
    )}
    <div className="p-6 flex-grow">{children}</div>
    {footer && (
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">{footer}</div>
    )}
  </div>
);

export default Card;