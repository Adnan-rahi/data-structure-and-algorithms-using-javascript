function phNbrDirectory(phoneNumbers) {
  const numbersDirectory = new Map();

  for (const entry of phoneNumbers) {
    const [name, phoneNumber] = entry.split(":");

    numbersDirectory.set(name, phoneNumber);
  }

  return numbersDirectory;
}

module.exports = phNbrDirectory;
