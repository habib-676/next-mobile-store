"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNames.usersCollection);

  const user = await userCollection.findOne({ email });
  if (!user) return null;

  const isPassOk = await bcrypt.compare(password, user.password);
  if (!isPassOk) return null;

  return user;
};
