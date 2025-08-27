"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const usersCollection = dbConnect(collectionNames.usersCollection);
  // validation
  const { name, email, password } = payload;

  if (!email || !password || !name) {
    return null;
  }

  const user = await usersCollection.findOne({ email: payload.email });

  if (!user) {
    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await usersCollection.insertOne(payload);
    result.insertedId = result.insertedId.toString();
    return result;
  }
  return null;
};
