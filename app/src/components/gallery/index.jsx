import "./style.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import GalleryItems from "../gallery-items";

const Gallery = () => {
  const loadAlllPins = async ({ pageParam }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}`
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
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const query = useInfiniteQuery({
    queryKey: ["pinsData"],
    queryFn: loadAlllPins,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage?.nextCursor,
  });

  const { data, fetchNextPage, hasNextPage, status } = query;

  if (status === "pending") return "Loading...";

  if (status === "error") return `An error has occurred: ${error.message}`;

  const getAllPins = data?.pages?.flatMap((page) => page);
  console.log("pins", getAllPins  );
  console.log("hasNextPage", hasNextPage);

  return (
    <div className="gallery">
      {getAllPins.map((item) => (
        <GalleryItems item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Gallery;
