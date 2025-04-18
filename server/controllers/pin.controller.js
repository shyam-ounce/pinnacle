import Pins from "../models/pin.model.js";

const getPins = async (req, res) => {
  const pageNumber = Number(req.query.cursor) || 0;
  const search = req.query.search;

  const LIMIT = 21;

  const pins = await Pins.find({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { tags: { $in: [search] } },
    ],
  })
    .limit(LIMIT)
    .skip(pageNumber * LIMIT);

  const hasNextPage = pins.length === LIMIT;

  new Promise((resolve) => setTimeout(resolve, 2000));

  res.status(200).json({
    success: true,
    statusCode: 200,
    error: [],
    nextCursor: hasNextPage ? pageNumber + 1 : null,
    data: pins,
  });
};

export { getPins };
