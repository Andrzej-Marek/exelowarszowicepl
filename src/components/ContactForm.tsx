"use client";

import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from "react";
import Alert from "./Alert";
import { Pixel } from "@/lib/pixel";

type FormModel = {
  phoneNumber?: string;
  vinNo?: string;
  email?: string;
  message: string;
};

type ContactFormSectionProps = {};

const ContactForm = ({}: ContactFormSectionProps) => {
  const [message, setMessage] = useState<{
    type: "success" | "error";
    message: string;
  }>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormModel>();

  const onSubmit: SubmitHandler<FormModel> = async (data) => {
    try {
      const response = await fetch(
        "https://exelo-warszowice.pl/api/contact-request",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setMessage({
          type: "success",
          message:
            "Wiadomość wysłana pomyślnie! Skontaktujemy się tak szybko jak to możliwe",
        });
        Pixel.sendMessageSuccess();
      } else {
        setMessage({
          type: "error",
          message: "Błąd podczas wysyłania. Spróbuj ponownie",
        });
        Pixel.sendMessageError();
      }
    } catch (error) {
      setMessage({
        type: "error",
        message: "Błąd podczas wysyłania. Spróbuj ponownie",
      });
      Pixel.sendMessageError();
    } finally {
      reset();
      if (message?.type === "success") {
        setTimeout(() => setMessage(undefined), 4000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form_wrap row">
        {message && (
          <div className="col-md-12">
            <Alert variant={message.type}>{message.message}</Alert>
          </div>
        )}

        <div className="col-md-6">
          <TextField
            name="email"
            label="Adres e-mial"
            placeholder="email@gmail.com"
            type="email"
            register={register}
          />
        </div>
        <div className="col-md-6">
          <TextField
            name="phoneNumber"
            label="Numer telefonu"
            placeholder="Wprowadź numer telefonu"
            type="tel"
            register={register}
          />
        </div>

        <div className="col-12">
          <TextField
            name="vinNo"
            label="Numer VIN"
            placeholder="VIN Samochodu"
            register={register}
          />
        </div>

        <div className="col-12">
          <TextAreaField
            name="message"
            label="Wiadomość"
            register={register}
            required
            placeholder="Jakie masz pytanie?"
          />

          <button type="submit" className="btn btn-primary">
            <span className="btn_text">Wyślij</span>
          </button>
        </div>
      </div>
    </form>
  );
};

const TextAreaField = ({
  label,
  name,
  register,
  ...inputProps
}: {
  label: string;
  name: string;
  register: UseFormRegister<any>;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) => {
  return (
    <div className="form-group">
      <label htmlFor="input_textarea">{label}</label>
      <textarea
        className="form-control"
        {...inputProps}
        {...register(name, { required: inputProps.required })}
      ></textarea>
    </div>
  );
};

const TextField = ({
  label,
  register,
  name,
  ...inputProps
}: {
  label: string;
  name: string;
  register: UseFormRegister<any>;
} & DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <div className="form-group mb-0">
      <label htmlFor="input_name">{label}</label>

      <input
        type="text"
        className="form-control"
        {...inputProps}
        {...register(name, { required: inputProps.required })}
      />
    </div>
  );
};

export default ContactForm;
