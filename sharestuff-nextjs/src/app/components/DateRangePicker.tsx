"use client";

import { useState } from "react";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateRangePicker({ onChange }: { onChange: (range: Range) => void }) {
  const [selection, setSelection] = useState<Range>({
    startDate: undefined,
    endDate: undefined,
    key: "selection",
  });

  const handleSelect = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;

    // ✅ Fix: React-date-range keeps marking all dates black when endDate is undefined.
    // So, if user picks startDate again, we treat it as new selection.
    if (!selection.startDate || (selection.startDate && selection.endDate)) {
      setSelection({
        startDate,
        endDate: undefined,
        key: "selection",
      });
      return;
    }

    // ✅ Second click (end date)
    if (selection.startDate && !selection.endDate) {
      // If user picks earlier than start, reverse range
      if (endDate && endDate < selection.startDate) {
        setSelection({
          startDate: endDate,
          endDate: selection.startDate,
          key: "selection",
        });
        onChange({
          startDate: endDate,
          endDate: selection.startDate,
          key: "selection",
        });
      } else {
        setSelection({
          startDate: selection.startDate,
          endDate,
          key: "selection",
        });
        if (startDate && endDate) {
          onChange({
            startDate: selection.startDate,
            endDate,
            key: "selection",
          });
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 w-full max-w-3xl mx-auto border border-gray-100">
      <DateRange
        editableDateInputs
        moveRangeOnFirstSelection={false}
        onChange={handleSelect}
        ranges={[selection]}
        months={2}
        direction="horizontal"
        rangeColors={["#000"]}
        minDate={new Date()}
      />
    </div>
  );
}
