import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const Auth = () => {
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

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) => {
          register(values);
        }}
      >
        {() => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <label htmlFor="email">email</label>
            <Field type="email" name="email" />
            <label htmlFor="password">password</label>
            <Field type="password" name="password" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <>User loged in: {user?.displayName}</>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Auth;
