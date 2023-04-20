import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import { SafeListing } from "./types";

interface HomeProps {
  searchParams: IListingsParams;
}

export default async function Home(props: HomeProps) {
  const { searchParams } = props;
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  const isEmpty = listings.length === 0;

  if (isEmpty)
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  return (
    <div>
      <ClientOnly>
        <Container>
          <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {listings.map((listing: SafeListing) => {
              return (
                <ListingCard
                  key={listing.id}
                  currentUser={currentUser}
                  data={listing}
                />
              );
            })}
          </div>
        </Container>
      </ClientOnly>
    </div>
  );
}

export const dynamic = "force-dynamic";
