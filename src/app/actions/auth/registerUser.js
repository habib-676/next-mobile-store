"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const usersCollection = dbConnect(collectionNames.usersCollection);
  // validation
  const { name, email, password } = payload;

  if (!email || !password || !name) {
    return { success: false };
  }

  const user = await usersCollection.findOne({ email: payload.email });

  if (!user) {
    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const { acknowledged, insertedId } = usersCollection.insertOne(payload);
    return { acknowledged, insertedId };
  }
  return { success: false };
};
