const displayLikes = require("./display-likes");

test("Check how many people`s Like this item", () => {
    expect(displayLikes([])).toEqual("No one Likes This item.");
    expect(displayLikes(["Peter"])).toEqual("Peter like this.");
    expect(displayLikes(["Jacob", "Alex"])).toEqual("Jacob and Alex likes this.");
    expect(displayLikes(["Max", "John", "Mark"])).toEqual(
      "Max, John and Mark likes this."
    );
    expect(displayLikes(["Alex", "Jacob", "Mark", "Max"])).toEqual(
      "Alex, Jacob and 2 others likes this."
    );
    expect(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"])).toEqual(
      "Alex, Jacob and 3 others likes this."
    );
});
