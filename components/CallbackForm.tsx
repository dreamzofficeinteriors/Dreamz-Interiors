"use client";

import React, { useState } from "react";
import { callbackFormSchema, CallbackFormData } from "@/lib/validation";
import { contactContent } from "@/content/contact";
import { trackEvent } from "@/lib/analytics";
import Button from "@/components/Button";

interface CallbackFormProps {
  defaultProjectType?: "commercial-furniture" | "modular" | "turnkey" | "not-sure";
  className?: string;
  onSuccess?: () => void;
}

export default function CallbackForm({
  defaultProjectType = "not-sure",
  className = "",
  onSuccess,
}: CallbackFormProps) {
  const [formData, setFormData] = useState<Partial<CallbackFormData>>({
    fullName: "",
    phone: "",
    company: "",
    projectType: defaultProjectType,
    city: "",
    brief: "",
    consent: false as any,
    website_trap: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    const validationResult = callbackFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        const path = err.path[0] as string;
        if (path) {
          fieldErrors[path] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit callback request.");
      }

      setStatus("success");
      trackEvent("callback_form_submit", {
        projectType: formData.projectType,
        city: formData.city,
      });
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "An unexpected error occurred. Please try calling or messaging on WhatsApp directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-stone/50 border border-charcoal/20 p-8 rounded-[2px] text-center space-y-4 ${className}`}>
        <div className="w-12 h-12 bg-charcoal text-paper rounded-full flex items-center justify-center mx-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-charcoal">
          Request Received
        </h3>
        <p className="text-sm text-charcoal/80 max-w-md mx-auto">
          An accountable Dreamz project lead will review your requirements and reach out within 1 business day.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                phone: "",
                company: "",
                projectType: defaultProjectType,
                city: "",
                brief: "",
                consent: false as any,
                website_trap: "",
              });
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="callback"
      onSubmit={handleSubmit}
      noValidate
      className={`bg-stone/40 border border-charcoal/15 p-6 sm:p-8 rounded-[2px] space-y-5 ${className}`}
      aria-label="Callback and project inquiry form"
    >
      <div className="space-y-1">
        <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
          {contactContent.form.title}
        </h3>
        <p className="text-xs sm:text-sm text-charcoal/70">
          {contactContent.form.subline}
        </p>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm p-3.5 rounded-[2px]"
        >
          {errorMessage}
        </div>
      )}

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_trap">Leave this blank</label>
        <input
          id="website_trap"
          name="website_trap"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website_trap || ""}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.fullName}
            value={formData.fullName || ""}
            onChange={handleChange}
            placeholder="e.g. Vikram Mehta"
            className="w-full bg-paper border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            value={formData.phone || ""}
            onChange={handleChange}
            placeholder="+91 98000 00000"
            className="w-full bg-paper border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange font-mono"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 font-medium">{errors.phone}</p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-1">
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
            Company / Organization *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.company}
            value={formData.company || ""}
            onChange={handleChange}
            placeholder="e.g. Horizon Developers"
            className="w-full bg-paper border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {errors.company && (
            <p className="text-xs text-red-600 font-medium">{errors.company}</p>
          )}
        </div>

        {/* City */}
        <div className="space-y-1">
          <label htmlFor="city" className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
            City / Project Location *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.city}
            value={formData.city || ""}
            onChange={handleChange}
            placeholder="e.g. Bengaluru / Mumbai / Gurugram"
            className="w-full bg-paper border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange"
          />
          {errors.city && (
            <p className="text-xs text-red-600 font-medium">{errors.city}</p>
          )}
        </div>
      </div>

      {/* Project Type */}
      <div className="space-y-1">
        <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
          Project Scope *
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType || "not-sure"}
          onChange={handleChange}
          className="w-full bg-paper border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange"
        >
          {contactContent.form.projectTypes.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="text-xs text-red-600 font-medium">{errors.projectType}</p>
        )}
      </div>

      {/* Brief */}
      <div className="space-y-1">
        <label htmlFor="brief" className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
          Short Project Brief (Optional)
        </label>
        <textarea
          id="brief"
          name="brief"
          rows={3}
          value={formData.brief || ""}
          onChange={handleChange}
          placeholder="Approximate floor area, seat count, target handover date, or any specific requirements..."
          className="w-full bg-paper border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 rounded-[2px] focus:outline-none focus:ring-2 focus:ring-orange resize-none"
        />
        {errors.brief && (
          <p className="text-xs text-red-600 font-medium">{errors.brief}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-1 pt-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={!!formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded-[2px] border-charcoal/30 text-orange focus:ring-orange"
          />
          <span className="text-xs text-charcoal/80 leading-relaxed select-none">
            I agree that Dreamz or an AI voice coordinator may call me to discuss this workspace requirement. *
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600 font-medium">{errors.consent}</p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
          className="w-full"
        >
          {status === "submitting" ? "Submitting Request..." : "Request Callback"}
        </Button>
      </div>

      <p className="text-[11px] text-charcoal/60 leading-normal pt-1">
        {contactContent.form.privacyNotice}
      </p>
    </form>
  );
}

