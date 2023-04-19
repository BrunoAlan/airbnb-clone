"use client";

import { useRouter } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionId?: string;
  actionLabel?: string;
  currentUser?: SafeUser | null;
}

const ListingCard = (props: ListingCardProps) => {
  const {
    data,
    reservation,
    onAction,
    disabled,
    actionId = "",
    actionLabel,
    currentUser,
  } = props;

  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) return reservation.totalPrice;

    return data.price;
  }, [reservation, data]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="group col-span-1 cursor-pointer"
    >
      <div className="flex w-full flex-col gap-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            fill
            alt="Listing"
            src={data.imageSrc}
            className="h-full w-full object-cover transition group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
