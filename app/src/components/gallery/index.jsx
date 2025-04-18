import "./style.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import GalleryItems from "../gallery-items";

const Gallery = ({ search }) => {
  const loadAlllPins = async ({ pageParam, search }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${
          pageParam || ""
        }&search=${search || ""}`
      );
      const res = await response.json();
      console.log(res);
      if (
        res &&
        res.success === true &&
        res.statusCode === 200 &&
        Array.isArray(res?.data)
      ) {
        return res?.data;
      } else {
        console.error("Issue fetching data:", res);
        return [];
      }
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      throw error;
    }
  };

  const query = useInfiniteQuery({
    queryKey: ["pinsData", "search"],
    queryFn: (pageParam = 0) => loadAlllPins({ pageParam, search }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage?.nextCursor,
  });

  const { data, fetchNextPage, hasNextPage, status, error } = query;

  if (status === "pending") return "Loading...";

  if (status === "error") return `An error has occurred: ${error.message}`;

  const getAllPins = data?.pages?.flatMap((page) => page);
  console.log("pins", getAllPins);
  console.log("hasNextPage", hasNextPage);

  return (
    <InfiniteScroll
      dataLength={getAllPins?.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more pins...</h4>}
      endMessage={<h5>All Pins are loaded!</h5>}
    >
      <div className="gallery">
        {getAllPins.map((item) => (
          <GalleryItems item={item} key={item._id} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
