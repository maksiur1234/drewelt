"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import React, { useState } from "react";

import { sendContactForm } from "../lib/api";

export default function ContactPage() {
  const [action, setAction] = useState<string | null>(null);

  const initValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    attachment: null,
  };
  const initState = { values: initValues };

  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: files ? files[0] : value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAction("✅ Formularz wysłano poprawnie!");
    await sendContactForm(values);
  };

  return (
    <div className="flex flex-col items-start space-y-6 p-6">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="pr-0 md:pr-12 mb-4 md:mb-0">
          <p className="text-xl font-bold">Skontaktuj się z nami,</p>
          <p>pomożemy Ci wybrać najlepszą opcję!</p>
        </div>
        <div className="max-w-lg text-gray-700">
          <p className="mb-2 text-xl font-bold text-red-600">WAŻNE!!!</p>

          <p className="mb-4 text-lg">
            W celu wyceny proszę wysłać{" "}
            <span className="font-semibold text-red-600">zdjęcia miejsca</span>,{" "}
            <span className="font-semibold text-red-600">lokalizację</span>,{" "}
            <span className="font-semibold text-red-600">wymiary zadaszenia</span> (ile cm wzdłuż ściany i jaka szerokość/głębokość),{" "}
            <span className="font-semibold">dane kontaktowe</span>, oraz informację czy zadaszenie ma być{" "}
            <span className="font-semibold">przyścienne, wolnostojące, na łuku</span> czy{" "}
            <span className="font-semibold">z prostym spadkiem</span>.
          </p>

          <p className="mb-2 text-lg font-medium">
            W ciągu <span className="text-red-600 font-bold">kilku dni</span> przygotujemy wycenę.
          </p>

          <p className="text-xl font-bold text-red-600">Zadzwoń lub napisz!</p>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center w-full max-w-4xl px-4">
        <Card fullWidth className="w-full max-w-3xl shadow-lg p-6">
          <CardBody>
            <Form
              validationBehavior="native"
              onReset={() => setAction("✔️ Zresetowano formularz")}
              onSubmit={handleSubmit}
            >
              <Input
                isRequired
                errorMessage="Podaj imię i nazwisko"
                label="Imię i nazwisko"
                labelPlacement="outside"
                name="name"
                placeholder="Imię i nazwisko"
                type="text"
                value={values.name}
                onChange={handleChange}
              />

              <Input
                isRequired
                errorMessage="Podaj email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />

              <Input
                isRequired
                errorMessage="Podaj numer telefonu"
                label="Numer telefonu"
                labelPlacement="outside"
                name="phone"
                placeholder="Numer telefonu"
                type="text"
                value={values.phone}
                onChange={handleChange}
              />

              <Textarea
                disableAnimation
                disableAutosize
                isRequired
                classNames={{
                  base: "max-w-full",
                  input: "resize-y min-h-[40px]",
                }}
                errorMessage="Podaj treść wiadomości"
                label="Wiadomość"
                labelPlacement="outside"
                name="message"
                placeholder="Treść wiadomości"
                type="text"
                value={values.message}
                onChange={handleChange}
              />

              <Input
                label="Załącznik"
                labelPlacement="outside"
                name="attachment"
                placeholder="Załącznik"
                type="file"
                onChange={handleChange}
              />

              <div className="flex gap-2 mt-4">
                <Button color="success" type="submit">
                  Wyślij
                </Button>
                <Button type="reset" variant="flat">
                  Zresetuj formularz
                </Button>
              </div>
              {action && (
                <div className="text-small text-default-500 mt-4">
                  <code>{action}</code>
                </div>
              )}
            </Form>
          </CardBody>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between items-center border-t pt-4 text-center">
        <div className="flex-1 mb-4 md:mb-0">
          <p className="font-semibold">Siedziba</p>
          <p className="text-gray-600">62-095 Rakownia ul.Pliszki 18</p>
        </div>

        <div className="h-0.5 md:h-10 bg-gray-300 md:bg-transparent md:border-l mx-0 md:mx-6 mb-4 md:mb-0" />

        <div className="flex-1 mb-4 md:mb-0">
          <p className="font-semibold">Telefon</p>
          <a href="tel:+48887400824" className="text-gray-600 hover:underline">
            +48 887 400 824
          </a>
        </div>

        <div className="h-0.5 md:h-10 bg-gray-300 md:bg-transparent md:border-l mx-0 md:mx-6 mb-4 md:mb-0" />

        <div className="flex-1">
          <p className="font-semibold">Email</p>
          <a href="mailto:drewelt@drewelt.com" className="text-gray-600 hover:underline" target="_blank">
            drewelt@drewelt.com
          </a>
        </div>
      </div>
    </div>
  );
}
