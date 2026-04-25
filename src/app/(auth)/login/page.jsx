"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formDataObj = Object.fromEntries(new FormData(e.currentTarget));
    console.log(formDataObj);
  };

  return (
    <div className="container mx-auto my-50">
        <h1 className=" text-lg font-bold text-center my-10 ">Login Your Account</h1>
    <Form
      className="flex w-96 flex-col gap-4 mx-auto my-auto"
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
    >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2 items-center justify-center">
        <Button type="submit " className={"bg-blue-500"}>
          <Check />
          Login
        </Button>
        <Button type="reset" variant="danger">
          Reset
        </Button>
          
      </div>
      <div className="text-center">
        <p className="text-sm font-light text-gray-400">Dont have an account?</p><Link href="/register">Register</Link>
            </div>
    </Form>
    </div>
  );
}