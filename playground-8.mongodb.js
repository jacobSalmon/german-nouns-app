/* global use, db */
// MongoDB Playground

// The current database to use.
use('German');

// Search for documents in the current collection where noun is "Herbst"
db.getCollection('german_nouns')
  .find(
    {
      noun: "Herbst" // The field and the value you are searching for
    },
    {
      projection: {
        _id: 0, // Exclude the _id field
        // Include other fields if needed
      }
    }
  )
  .sort({
    noun: 1 // Sort by the 'noun' field in ascending order
  });
