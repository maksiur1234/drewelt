"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import React, { useState } from "react";

import { sendContactForm } from "../lib/api";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";

export default function Page() {
  const [action, setAction] = useState<string | null>(null);

  const initValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    attachment: [],
  };
  const initState = { values: initValues };

  const [state, setState] = useState(initState);
  const [isRodoOpen, setIsRodoOpen] = useState(false);

  const { values } = state;

  const handleChange = (e: any) => {
  const { name, value, files } = e.target;

  setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: files
           ? [...((prev.values as any)[name] || []), ...Array.from(files)]
          : value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAction("✅ Formularz wysłano poprawnie!");
    await sendContactForm(values);
  };

  return (
    <div className="flex flex-col items-start space-y-6">
      <div className="flex flex-col justify-center items-center w-full text-center border-b-1 pb-6">
        <p className="mb-2 sm:mb-4 font-semibold">Dane do przelewu</p>
        <p className="mb-2 sm:mb-4 font-semibold">Drewelt Piotr Wisniewski 62-095 Rakownia ul.Pliszki 18</p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <span className="font-semibold">Numer konta:&nbsp;</span>
          <span className="text-gray-600">81 1140 2004 0000 3402 7666 2109</span>
        </div>
      </div>
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
        <Card fullWidth className="w-full max-w-3xl shadow-lg">
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

              <input
                // label="Załącznik"
                // labelPlacement="outside"
                name="attachment"
                placeholder="Załącznik"
                type="file"
                multiple
                onChange={handleChange}
              />

              <div className="mt-4">
                <label className="flex items-start gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    name="rodo"
                    required
                    className="mt-1"
                    onChange={handleChange}
                  />
                  <span className="text-sm">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
                    <button
                      type="button"
                      className="text-blue-600 underline hover:text-blue-800"
                      onClick={() => setIsRodoOpen(true)}
                    >
                      klauzulą RODO
                    </button>
                    .
                  </span>
                </label>
              </div>

              
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

        {values.attachment && values.attachment.length > 0 && (
          <div className="mt-2 text-gray-700">
            <p>Wybrane załączniki:</p>
            <ul className="list-disc list-inside">
              {values.attachment.map((file: File, index: number) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
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
      <div className="flex flex-col justify-center items-center w-full text-center">
        <p className="mb-2 sm:mb-4 font-semibold border-t-1 w-full pt-6">Dane do przelewu</p>
        <p className="mb-2 sm:mb-4 font-semibold">Drewelt Piotr Wisniewski 62-095 Rakownia ul.Pliszki 18</p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <span className="font-semibold">Numer konta:&nbsp;</span>
          <span className="text-gray-600">81 1140 2004 0000 3402 7666 2109</span>
        </div>
      </div>
      <Modal backdrop="opaque" isOpen={isRodoOpen} onClose={() => setIsRodoOpen(false)}>
        <ModalContent>
          {(onClose: () => void) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Polityka prywatności i RODO
              </ModalHeader>
              <ModalBody>
              <div className="max-h-[60vh] overflow-y-auto pr-2">
                <p>
                  Wypełniając obowiązek informacyjny, o którym mowa w art. 13 Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE, podaję, iż:
                </p>

                <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-gray-700">
                  <li>
                    Administratorem danych osobowych przekazywanych nam zarówno w treści wiadomości e-mail, w formie papierowej, bądź ustnej jest Firma Drewet Piotr Wiśniewski.
                  </li>
                  <li>
                    Dane osobowe będą przetwarzane zgodnie z RODO wyłącznie w celu, w jakim zostały nam przesłane (np. realizacja umowy, przygotowanie oferty, złożenia zamówienia itp. - podstawa prawna: art. 6 ust. 1 pkt b RODO), w celu wypełnienia obowiązku prawnego ciążącego na Administratorze (np. realizacja obowiązku wynikającego z przepisów prawa podatkowego - podstawa prawna: art. 6 ust. 1 pkt c RODO) i innych uzasadnionych interesów Administratora (tj. dochodzenie i obrona przed roszczeniami - podstawa prawna: art. 6 ust. 1 pkt f RODO), jak i w celu udzielenia odpowiedzi na przesłaną wiadomość oraz archiwizacji korespondencji, przez okres niezbędny do realizacji celu, jak i okres przedawnienia ewentualnych roszczeń związanych z realizacją celu.
                  </li>
                  <li>
                    Podanie danych osobowych ma charakter dobrowolny jednak ich brak może uniemożliwić realizację celu, w jakim zostały nam przekazane.
                  </li>
                  <li>
                    Przysługuje Państwu prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.
                  </li>
                  <li>
                    Przysługuje Państwu prawo wniesienia skargi do organu nadzorczego gdy uznają Państwo, iż przetwarzanie Państwa danych osobowych narusza obowiązujące przepisy.
                  </li>
                  <li>
                    Podane dane osobowe mogą być udostępniane innym odbiorcom, tj. agencjom marketingowym, biurom rachunkowym, dostawcom usług logistycznych i IT, podwykonawcom naszych usług, którzy przetwarzać będą Państwa dane osobowe na zlecenie Administratora i wyłącznie zgodnie z jego zaleceniami we wskazanym celu i zakresie (powierzenie danych osobowych do przetwarzania na podstawie art. 28 ust. 3 RODO).
                  </li>
                  <li>
                    Podane przez Państwa dane osobowe nie będą przekazywane do państwa trzeciego, ani nie będą przetwarzane w sposób zautomatyzowany w tym również w formie profilowania.
                  </li>
                </ul>
              </div>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Zamknij
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}