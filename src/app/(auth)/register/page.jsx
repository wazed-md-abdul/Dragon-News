"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button,toast, Toast , Description, FieldError, Form, Input, Label, TextField, Checkbox } from "@heroui/react";

import Link from "next/link";

export default  function Login () {
    const onSubmit  = async (e) => {
        e.preventDefault();
        const formDataObj = Object.fromEntries(new FormData(e.currentTarget));
        console.log(formDataObj);
        const {data,error} = await authClient.signUp.email(formDataObj);
        if(error){
            toast.warning(`${error.message}`, {
              actionProps: {
                children: "Error",
                className: "bg-warning text-warning-foreground",
                
              },
              description: "Go to login page",
            })
        }
        if(data){
            toast.success("You have Successfully signed up", {
              actionProps: {
                children: "Success",
                className: "bg-success text-success-foreground",
              },
              description: "No Go to login page",
            })
        }
        

    };

    return (
        <div className="container mx-auto my-50">
            <h1 className=" text-lg font-bold text-center my-10 ">Register Your Account</h1>
            <Form
                className="flex w-96 flex-col gap-4 mx-auto my-auto"
                render={(props) => <form {...props} data-custom="foo" />}
                onSubmit={onSubmit}
            >
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="John Doe" />
                    <FieldError />
                </TextField>
                <TextField isRequired
                    name="image"
                    type="text"
                    validate={(value) => {
                        if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(value)) {
                            return "Please enter a valid URL";
                        }
                        return null;
                    }}
                    >
                    <Label>Image URL</Label>
                    <Input placeholder="https://example.com/image.jpg" />
                    <FieldError />


                </TextField>
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
                    <Checkbox id="basic-terms" className={"my-3"}>
                        <Checkbox.Control>
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                        <Checkbox.Content>
                            <Label htmlFor="basic-terms">Accept terms and conditions</Label>
                        </Checkbox.Content>
                    </Checkbox>

                </TextField>

                <div className="flex gap-2 items-center justify-center">
                    <Button type="submit " className={"bg-green-500"}>
                        <Check />
                        Register
                    </Button>
                    <Button type="reset" variant="danger">
                        Reset
                    </Button>

                </div>

            </Form>
              <Toast.Provider />
        </div>
    );
}