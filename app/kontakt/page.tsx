"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import React from "react";

export default function ContactPage() {
  const [action, setAction] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col items-start space-y-6 p-6">
      <div className="flex w-full justify-between">
        <div className="pr-12">
          <p className="text-xl font-bold">Skontaktuj się z nami, </p>pomożemy
          Ci dobrać najlepszą opcję!
        </div>
        <div className="max-w-lg text-gray-700">
          <span>
            Cześć, jesteśmy tu, żeby pomóc Tobie w doborze najlepszego tarasu
            lub zadaszenia. Jeśli masz jakieś pytania lub wątpliwości dotyczące
            naszych produktów, chętnie Ci pomożemy.
          </span>
          <br />
          <span> Zadzwoń lub napisz!</span>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center w-full max-w-4xl px-4">
        <Card fullWidth className="w-full max-w-3xl shadow-lg p-6">
          <CardBody>
            <Form
              validationBehavior="native"
              onReset={() => setAction("✔️ Zresetowano formularz")}
              onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));

                setAction("✅ Formularz wysłano poprawnie!");
              }}
            >
              <Input
                isRequired
                errorMessage="Podaj imię i nazwisko"
                label="Imię i nazwisko"
                labelPlacement="outside"
                name="username"
                placeholder="Imię i nazwisko"
                type="text"
              />

              <Input
                isRequired
                errorMessage="Podaj email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Email"
                type="email"
              />

              <Input
                isRequired
                errorMessage="Podaj numer telefonu"
                label="Numer telefonu"
                labelPlacement="outside"
                name="phone"
                placeholder="Numer telefonu"
                type="text"
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
              />

              <Input
                label="Załącznik"
                labelPlacement="outside"
                name="attachment"
                placeholder="Załącznik"
                type="file"
              />

              <div className="flex gap-2">
                <Button color="success" type="submit">
                  Wyślij
                </Button>
                <Button type="reset" variant="flat">
                  Zresetuj formularz
                </Button>
              </div>
              {action && (
                <div className="text-small text-default-500">
                  <code>{action}</code>
                </div>
              )}
            </Form>
          </CardBody>
        </Card>
      </div>

      <div className="flex w-full justify-between items-center border-t pt-4 text-center">
        <div className="flex-1">
          <p className="font-semibold">Siedziba</p>
          <p className="text-gray-600">Ul. Długa 7, 62-095 Murowana Goślina</p>
        </div>

        <div className="h-10 border-l mx-6" />

        <div className="flex-1">
          <p className="font-semibold">Telefon</p>
          <p className="text-gray-600">+48 123 456 789</p>
        </div>

        <div className="h-10 border-l mx-6" />

        <div className="flex-1">
          <p className="font-semibold">Email</p>
          <p className="text-gray-600">drewelt@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
