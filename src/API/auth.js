import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

export const Auth = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (values) => {
    try {
      const { email, password, name } = values;
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      await updateProfile(auth.currentUser, { displayName: name }).catch(
        (err) => console.log(err)
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
};
