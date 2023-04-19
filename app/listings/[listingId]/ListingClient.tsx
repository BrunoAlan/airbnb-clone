"use client";

import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import ListingHead from "@/app/components/listings/ListingHead";
import { categories } from "@/app/components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser?: SafeUser | null;
}
const ListingClient = ({
  reservations,
  listing,
  currentUser,
}: ListingClientProps) => {
  const category = useMemo(
    () => categories.find((item) => item.label === listing.category),
    [listing]
  );

  return (
    <Container>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex-flex-col gap-6">
          <ListingHead
            title={listing.title}
            imgSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
};
export default ListingClient;
