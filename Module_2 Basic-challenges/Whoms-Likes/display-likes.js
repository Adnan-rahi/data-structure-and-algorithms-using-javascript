function displayLikes(names) {
  const arrLength = names.length;

  if (arrLength === 0) {
    return "No one Likes This item.";
  } else if (arrLength === 1) {
    return `${names[0]} like this.`;
  } else if (arrLength === 2) {
    return `${names[0]} and ${names[1]} likes this.`;
  } else if (arrLength === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} likes this.`;
  } else {
    return `${names[0]}, ${names[1]} and ${arrLength - 2} others likes this.`;
  }
}

module.exports = displayLikes;
