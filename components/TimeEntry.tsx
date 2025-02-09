import type React from "react"
import { Home, Train, ArrowLeftRight } from "lucide-react"

interface TimeEntryProps {
  departureTime: string
  returnTime: string
  isReturnTimeAccurate: boolean
  driverName: string
  vehiclePlate: string
  color: string
  busColor: string
  currentTime: Date
  isNextAvailable: boolean
}

const TimeEntry: React.FC<TimeEntryProps> = ({
  departureTime,
  returnTime,
  isReturnTimeAccurate,
  driverName,
  vehiclePlate,
  color,
  busColor,
  currentTime,
  isNextAvailable,
}) => {
  const [departureHours, departureMinutes] = departureTime.split(":").map(Number)
  const [returnHours, returnMinutes] = returnTime.split(":").map(Number)
  const departureDate = new Date(currentTime)
  departureDate.setHours(departureHours, departureMinutes, 0, 0)
  const returnDate = new Date(currentTime)
  returnDate.setHours(returnHours, returnMinutes, 0, 0)

  const isPastTime = returnDate < currentTime && currentTime.getHours() < 19
  const opacity = isPastTime ? "opacity-50" : ""
  const highlightClass = isNextAvailable ? "bg-yellow-100 border-2 border-yellow-300 rounded-lg" : ""

  return (
    <li className={`px-4 py-6 sm:px-6 ${opacity} ${highlightClass}`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-between w-full space-x-4">
          <div className="flex flex-col items-center">
            <Home className="h-8 w-8 mb-2" style={{ color }} />
            <span className="text-2xl font-medium text-gray-900">{departureTime}</span>
            <span className="text-lg text-green-600">准时</span>
          </div>
          <ArrowLeftRight className="h-8 w-8 text-gray-400" />
          <div className="flex flex-col items-center">
            <Train className="h-8 w-8 mb-2" style={{ color }} />
            <span className="text-2xl font-medium text-gray-900">{returnTime}</span>
            {isReturnTimeAccurate ? (
              <span className="text-lg text-green-600">准时</span>
            ) : (
              <span className="text-lg text-yellow-600">左右</span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="flex items-center text-xl text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 mr-2 h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {driverName}
        </p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 mr-2 h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
          <span className="text-xl text-gray-700">{vehiclePlate}</span>
          <div
            className="w-5 h-5 rounded-full ml-3"
            style={{ backgroundColor: busColor }}
            title={`Bus Color: ${busColor}`}
          ></div>
        </div>
      </div>
    </li>
  )
}

export default TimeEntry

