import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];
    if (!model) {
      throw new Error(`Model "${modelName}" does not exist.`);
    }

    // Ensure model.db and model.db.db are defined
    if (!model.db || !model.db.db) {
      throw new Error(`Database connection is not properly initialized for model "${modelName}".`);
    }

    const modelExists = await model.db.db.listCollections({
      name: collectionName,
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error cleaning database: ${err.message}`);
    } else {
      console.error('Unknown error occurred while cleaning the database.');
    }
    throw err;
  }
};
