const handleBFHL = (req, res) => {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, message: "Invalid data format" });
  }

  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let concatRaw = "";

  data.forEach((item) => {
    if (/^\d+$/.test(item)) {
      const num = parseInt(item);
      (num % 2 === 0 ? even_numbers : odd_numbers).push(item);
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      concatRaw += item;
    } else {
      special_characters.push(item);
    }
  });

  const reversed = concatRaw.split("").reverse();
  const concat_string = reversed
    .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join("");

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
