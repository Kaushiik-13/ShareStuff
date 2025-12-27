"use client";

import { useState } from "react";
import DateRangePicker from "@/app/components/DateRangePicker";

export default function Home() {
  const [destination, setDestination] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedRange, setSelectedRange] = useState<{
    startDate: Date;
    endDate: Date;
  } | null>(null);

  const handleRangeChange = (range: any) => {
    setSelectedRange({
      startDate: range.startDate,
      endDate: range.endDate,
    });
    setShowCalendar(false);
  };

  const handleSearch = () => {
    if (!destination) {
      alert("Please enter a destination!");
      return;
    }
    console.log("Searching for:", {
      destination,
      startDate: selectedRange?.startDate?.toLocaleDateString(),
      endDate: selectedRange?.endDate?.toLocaleDateString(),
    });
  };

  return (
    <main className="bg-[#f7f7f7] text-gray-800 font-sans min-h-screen relative">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between flex-wrap gap-3">
          {/* LOGO */}
          <div className="flex items-center space-x-2 select-none">
            <h1 className="text-[24px] md:text-[26px] font-semibold tracking-tight text-gray-900 transition-transform duration-200 hover:scale-[1.03]">
              Share<span className="text-black">Stuff</span>
            </h1>
          </div>

          {/* SEARCH BAR */}
          <div
            className="hidden sm:flex items-center justify-between 
            w-full sm:w-[90%] md:w-[600px] lg:w-[700px] 
            bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] 
            hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] 
            transition-all duration-300 ring-1 ring-[#ebebeb] overflow-hidden 
            px-4 md:px-6 py-2.5 md:py-3 mx-auto cursor-pointer relative"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            {/* Destination */}
            <div className="flex-1 px-2 md:px-4">
              <p className="text-[11px] md:text-[12px] font-semibold text-gray-700 uppercase tracking-wide">
                Where
              </p>
              <input
                type="text"
                placeholder="Search destinations"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full text-xs md:text-sm text-gray-600 outline-none placeholder-gray-400"
                onClick={(e) => e.stopPropagation()} // prevent closing calendar
              />
            </div>

            <div className="border-l h-6 md:h-8 border-gray-200"></div>

            {/* Check in */}
            <div className="flex-1 px-2 md:px-4">
              <p className="text-[11px] md:text-[12px] font-semibold text-gray-700 uppercase tracking-wide">
                Check in
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                {selectedRange?.startDate
                  ? selectedRange.startDate.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                    })
                  : "Add date"}
              </p>
            </div>

            <div className="border-l h-6 md:h-8 border-gray-200"></div>

            {/* Check out */}
            <div className="flex-1 px-2 md:px-4">
              <p className="text-[11px] md:text-[12px] font-semibold text-gray-700 uppercase tracking-wide">
                Check out
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                {selectedRange?.endDate
                  ? selectedRange.endDate.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                    })
                  : "Add date"}
              </p>
            </div>

            {/* Search Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSearch();
              }}
              className="flex items-center justify-center bg-[#0a0909] text-white 
              h-8 w-8 md:h-10 md:w-10 rounded-full 
              shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:bg-[#363234] 
              transition duration-200 ml-2 md:ml-3"
            >
              <span className="material-symbols-outlined text-[18px] md:text-[22px] leading-none">
                search
              </span>
            </button>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <button className="bg-black text-white text-xs md:text-sm font-semibold py-1.5 md:py-2 px-3 md:px-4 rounded-full hover:opacity-80 transition">
              Share your stuff
            </button>
            <button className="p-1.5 md:p-2 rounded-full hover:bg-gray-100">
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
            <button className="p-1.5 md:p-2 rounded-full hover:bg-gray-100">
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* CALENDAR POPUP */}
      {showCalendar && (
        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 z-40">
          <DateRangePicker onChange={handleRangeChange} />
        </div>
      )}

      {/* MAIN CONTENT */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-10">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
          Popular items in Bengaluru
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <ListingCard
              key={i}
              title="Modern Apartment"
              location="Bangalore Urban"
              price="₹3,200 for 2 nights"
              rating="4.97"
              img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
            />
          ))}
        </div>

        <h2 className="text-lg md:text-xl font-semibold mt-10 mb-4 text-gray-800">
          Available in Chennai this weekend
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <ListingCard
              key={i}
              title="Cozy Room"
              location="Anna Nagar"
              price="₹2,800 for 2 nights"
              rating="4.92"
              img="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

/* ─────────────── LISTING CARD ─────────────── */
interface ListingCardProps {
  title: string;
  location: string;
  price: string;
  rating: string;
  img: string;
}

function ListingCard({ title, location, price, rating, img }: ListingCardProps) {
  return (
    <div className="group cursor-pointer bg-white rounded-2xl shadow-[0_1px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-200 overflow-hidden">
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          className="absolute top-3 right-3 flex items-center justify-center h-8 w-8 md:h-9 md:w-9 bg-white rounded-full 
          shadow-[0_1px_3px_rgba(0,0,0,0.15)] hover:scale-105 hover:shadow-[0_2px_6px_rgba(0,0,0,0.2)] 
          transition-all duration-200"
        >
          <span className="material-symbols-outlined text-gray-700 text-[18px] md:text-[20px] leading-none">
            favorite_border
          </span>
        </button>
        <span className="absolute top-3 left-3 bg-white text-[10px] md:text-[11px] font-semibold px-2 py-1 rounded-full shadow-sm text-gray-800">
          Guest favourite
        </span>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-sm md:text-base text-gray-900">{title}</h3>
        <p className="text-xs md:text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-1 text-xs md:text-sm">
          <span className="font-medium text-gray-800">{price}</span>
          <span className="flex items-center text-gray-600">
            <span className="material-symbols-outlined text-[14px] md:text-[16px] mr-1">star</span>
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}
