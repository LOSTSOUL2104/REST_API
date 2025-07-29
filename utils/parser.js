const parseData = (data) => {
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

  return {
    even_numbers,
    odd_numbers,
    alphabets,
    special_characters,
    sum,
    concat_string,
  };
};

module.exports = parseData;
