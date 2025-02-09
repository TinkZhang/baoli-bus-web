import type React from "react"

interface BusLineTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  busLines: string[]
}

const BusLineTabs: React.FC<BusLineTabsProps> = ({ activeTab, onTabChange, busLines }) => {
  return (
    <div className="flex flex-wrap rounded-md shadow-sm mb-6 w-full" role="group">
      {busLines.map((line, index) => (
        <button
          key={line}
          type="button"
          className={`flex-1 px-6 py-4 text-xl font-medium transition-colors duration-200 ${
            index === 0 ? "rounded-l-lg" : ""
          } ${index === busLines.length - 1 ? "rounded-r-lg" : ""} ${
            activeTab === line ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-100"
          } border border-gray-300`}
          onClick={() => onTabChange(line)}
        >
          {line}
        </button>
      ))}
    </div>
  )
}

export default BusLineTabs

