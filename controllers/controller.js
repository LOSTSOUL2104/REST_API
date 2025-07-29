const parseData = require("../utils/parser");

const handleBFHL = (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, message: "Invalid data format" });
  }

  const {
    even_numbers,
    odd_numbers,
    alphabets,
    special_characters,
    sum,
    concat_string,
  } = parseData(data);

  res.status(200).json({
    is_success: true,
    user_id: "priyansh_29072025",
    email: "priyansh@chitkara.edu.in",
    roll_number: "CSE123456",
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string,
  });
};

module.exports = { handleBFHL };
