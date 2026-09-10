"use client";

import { useMemo, useState } from "react";

import { quoteFormOptions } from "@/data/site";
import { siteConfig, smsHref } from "@/lib/site";

import { ButtonLink } from "./button-link";

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  projectAddress: string;
  city: string;
  zipCode: string;
  projectType: string;
  dumpsterSize: string;
  preferredDeliveryDate: string;
  rentalTimeframe: string;
  projectDetails: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  projectAddress: "",
  city: "",
  zipCode: "",
  projectType: "",
  dumpsterSize: "Not Sure",
  preferredDeliveryDate: "",
  rentalTimeframe: "",
  projectDetails: "",
};

function validateQuoteForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.phone.trim()) errors.phone = "Phone is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.projectAddress.trim()) errors.projectAddress = "Project address is required.";
  if (!values.city.trim()) errors.city = "City is required.";
  if (!values.zipCode.trim()) errors.zipCode = "ZIP code is required.";
  if (!/^\d{5}$/.test(values.zipCode)) errors.zipCode = "Enter a 5-digit ZIP code.";
  if (!values.projectType) errors.projectType = "Select a project type.";
  if (!values.preferredDeliveryDate) errors.preferredDeliveryDate = "Select a preferred delivery date.";
  if (!values.rentalTimeframe) errors.rentalTimeframe = "Select a rental timeframe.";
  if (!values.projectDetails.trim()) errors.projectDetails = "Share a few project details.";

  return errors;
}

type InputProps = {
  label: string;
  name: keyof FormValues;
  type?: string;
  placeholder?: string;
  values: FormValues;
  errors: FormErrors;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  as?: "input" | "textarea" | "select";
  options?: string[];
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  values,
  errors,
  onChange,
  as = "input",
  options = [],
}: InputProps) {
  const baseClassName =
    "mt-2 min-h-11 w-full rounded-md border border-brand-sand bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30";

  return (
    <label className="block">
      <span className="text-sm font-semibold text-brand-navy">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          value={values[name]}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          className={baseClassName}
        />
      ) : null}
      {as === "select" ? (
        <select name={name} value={values[name]} onChange={onChange} className={baseClassName}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : null}
      {as === "input" ? (
        <input
          type={type}
          name={name}
          value={values[name]}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClassName}
        />
      ) : null}
      {errors[name] ? <span className="mt-2 block text-sm text-red-700">{errors[name]}</span> : null}
    </label>
  );
}

export function QuoteForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    const key = name as keyof FormValues;

    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuoteForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="card-surface p-6 sm:p-8" id="quote-form">
      <div className="max-w-2xl">
        <p className="eyebrow">Quote request</p>
        <h2 className="mt-3 font-heading text-4xl uppercase tracking-[0.05em] text-brand-navy">
          Tell us about your project
        </h2>
        <p className="mt-4 text-base leading-7 text-brand-ink/80">
          Prefer a traditional quote request? Share your project details below and our team will
          follow up.
        </p>
        <div className="mt-6 rounded-md border border-brand-green/30 bg-brand-green/10 p-4">
          <p className="font-semibold text-brand-navy">Want the fastest option?</p>
          <p className="mt-1 text-sm leading-6 text-brand-ink/80">
            Just text us and we&apos;ll get you scheduled.
          </p>
          <ButtonLink href={smsHref()} className="mt-4">
            Text Us
          </ButtonLink>
          <p className="mt-3 hidden text-xs font-semibold text-brand-navy md:block">
            Text {siteConfig.phoneDisplay} from your phone.
          </p>
        </div>
      </div>
      <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        <Field
          label="First name"
          name="firstName"
          values={values}
          errors={errors}
          onChange={handleChange}
          placeholder="First name"
        />
        <Field
          label="Last name"
          name="lastName"
          values={values}
          errors={errors}
          onChange={handleChange}
          placeholder="Last name"
        />
        <Field
          label="Phone"
          name="phone"
          values={values}
          errors={errors}
          onChange={handleChange}
          placeholder="(555) 555-5555"
          type="tel"
        />
        <Field
          label="Email"
          name="email"
          values={values}
          errors={errors}
          onChange={handleChange}
          placeholder="name@example.com"
          type="email"
        />
        <Field
          label="Project address"
          name="projectAddress"
          values={values}
          errors={errors}
          onChange={handleChange}
          placeholder="Street address"
        />
        <Field
          label="City"
          name="city"
          values={values}
          errors={errors}
          onChange={handleChange}
          placeholder="City"
        />
        <Field
          label="ZIP code"
          name="zipCode"
          values={values}
          errors={errors}
          onChange={handleChange}
          placeholder="ZIP code"
          type="text"
        />
        <Field
          label="Project type"
          name="projectType"
          values={values}
          errors={errors}
          onChange={handleChange}
          as="select"
          options={quoteFormOptions.projectTypes}
        />
        <Field
          label="Dumpster size"
          name="dumpsterSize"
          values={values}
          errors={errors}
          onChange={handleChange}
          as="select"
          options={quoteFormOptions.dumpsterSizes}
        />
        <label className="block">
          <span className="text-sm font-semibold text-brand-navy">Preferred delivery date</span>
          <input
            type="date"
            name="preferredDeliveryDate"
            min={minDate}
            value={values.preferredDeliveryDate}
            onChange={handleChange}
            className="mt-2 min-h-11 w-full rounded-md border border-brand-sand bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
          />
          {errors.preferredDeliveryDate ? (
            <span className="mt-2 block text-sm text-red-700">{errors.preferredDeliveryDate}</span>
          ) : null}
        </label>
        <Field
          label="Rental timeframe"
          name="rentalTimeframe"
          values={values}
          errors={errors}
          onChange={handleChange}
          as="select"
          options={quoteFormOptions.timeframes}
        />
        <div className="md:col-span-2">
          <Field
            label="Project details"
            name="projectDetails"
            values={values}
            errors={errors}
            onChange={handleChange}
            as="textarea"
            placeholder="Describe the job, debris type, access notes, and any timing constraints."
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-green px-6 py-3 text-sm font-semibold tracking-wide text-brand-navy hover:bg-brand-green/90 focus-visible:ring-2 focus-visible:ring-brand-green"
          >
            Get My Quote
          </button>
        </div>
        {submitted ? (
          <p className="md:col-span-2 rounded-md border border-brand-green/30 bg-brand-green/10 px-4 py-3 text-sm text-brand-navy">
            Quote request captured in the UI layer. Connect this form to your preferred email or
            CRM workflow when ready.
          </p>
        ) : null}
      </form>
    </div>
  );
}
