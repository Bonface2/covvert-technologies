"use client";

import { useState } from "react";

const inputClasses =
  "rounded-[3px] border border-line bg-white px-3 py-2.5 text-[13.5px] text-ink outline-none focus:border-accent";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded border border-line-soft bg-white p-6 text-center">
        <h3 className="text-lg font-extrabold text-ink">Thanks — we&apos;ve got your message</h3>
        <p className="mt-2 text-sm text-ink-soft">
          A member of the Covvert Technologies team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded border border-line-soft bg-white p-5.5">
      <h3 className="mb-4 text-[15px] font-bold text-ink">Send an enquiry</h3>

      <div className="mb-4 flex flex-col gap-1.5">
        <label className="text-[12.5px] font-bold text-ink" htmlFor="name">
          Full name
        </label>
        <input id="name" name="name" type="text" required placeholder="Jane Mwangi" className={inputClasses} />
      </div>

      <div className="mb-4 flex flex-col gap-1.5">
        <label className="text-[12.5px] font-bold text-ink" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          className={inputClasses}
        />
      </div>

      <div className="mb-4 flex flex-col gap-1.5">
        <label className="text-[12.5px] font-bold text-ink" htmlFor="topic">
          What are you enquiring about?
        </label>
        <select id="topic" name="topic" className={inputClasses}>
          <option>Request a consultation</option>
          <option>Product / service information</option>
          <option>General enquiry</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col gap-1.5">
        <label className="text-[12.5px] font-bold text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project..."
          className={`${inputClasses} min-h-[90px] resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-[3px] bg-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
      >
        Send Enquiry
      </button>
    </form>
  );
}
