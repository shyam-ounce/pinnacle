import Pins from "../models/pin.model.js";

const getPins = async (req, res) => {
  const pageNumber = Number(req.query.page) || 0;

  const LIMIT = 21

  const pins = await Pins.find().limit(LIMIT).skip(pageNumber * LIMIT);

  const hasNextPage = pins.length === LIMIT;

  res.status(200).json({
    success: true,
    statusCode: 200,
    error: [],
    nextCursor: hasNextPage ? pageNumber + 1 : null,
    data: pins,
  });
};

export { getPins };
