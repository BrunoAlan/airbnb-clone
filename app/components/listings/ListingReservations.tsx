"use client";
import { Range } from "react-date-range";
interface ListingReservationsProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservations = () => {
  return <div>ListingReservations</div>;
};

export default ListingReservations;
