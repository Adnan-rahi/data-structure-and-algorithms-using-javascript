const phNbrDirectory = require("./index");

test("Building a phone number directory from an array of phone numbers", () => {
  const phoneNumbers = [
    "Adnan:123-456-7890",
    "Nouman:098-765-4321",
    "Zaryab:567-748-0393",
  ];

  const result = phNbrDirectory(phoneNumbers);

  expect(result.get("Adnan")).toBe("123-456-7890");
  expect(result.get("Nouman")).toBe("098-765-4321");
  expect(result.get("Zaryab")).toBe("567-748-0393");
});
