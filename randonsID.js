const randomHash = () => {
  const hash = [];

  for (let i = 0; i < 4; i++) {
    const value = Math.random()
      .toString(36)
      .replace(/[^a-zA-Z0-9]+/g, "")
      .substr(1, 4);

    hash.push(value.toUpperCase());
  }
  const nova = hash.toString().replace(/[,]+/g, "-");

  return nova;
};

const id = randomHash();

console.log(id);
