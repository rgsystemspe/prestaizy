import React from "react";

/**
 * Badge component to display small status or date labels with configurable colors.
 * Extracted from the monolithic App.jsx for reuse across pages.
 *
 * Props:
 * - children: content to display inside the badge.
 * - color: one of 'green', 'red', 'orange', 'blue', or 'gray' (defaults to 'blue').
 */
const Badge = ({ children, color = "blue" }) => {
  // Tailwind color classes for each supported color variant
  const colors = {
    green: "bg-green-100 text-green-700 border-green-200",
    red: "bg-red-100 text-red-700 border-red-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${colors[color]}`}
    >
      {children}
    </span>
  );
};

export default Badge;