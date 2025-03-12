"use client";
import React from "react";
import MobileHeader from "./MobileHeader";
import CheckboxField from "./CheckboxField";
import InputField from "./InputField";
import DateField from "./DateField";
import SubmitButton from "./SubmitButton";

const ServiceRequestForm: React.FC = () => {
  return (
    <div className="w-full bg-white max-w-[393px] max-sm:w-full font-['Inter']">
      <MobileHeader />
      <section className="p-5 text-2xl font-medium text-black">
        Service Request
      </section>
      <section className="px-5 py-0 max-sm:px-4 max-sm:py-0">
        <CheckboxField
          label="Coordination (materials, access to location) required?"
          className="mb-14 max-sm:mb-10"
        />

        <InputField
          label="First name of receiver"
          placeholder="Name"
          className="mb-14 max-sm:mb-10"
        />

        <InputField
          label="Last name of receiver"
          placeholder="Name"
          className="mb-14 max-sm:mb-10"
        />

        <InputField
          label="Phone number of receiver"
          placeholder="Phone"
          description="Include if receiver should be contacted"
          className="mb-14 max-sm:mb-10"
        />

        <DateField label="Suggested date" className="mb-14 max-sm:mb-10" />

        <div className="flex justify-center">
          <SubmitButton label="Submit" />
        </div>
      </section>
    </div>
  );
};

export default ServiceRequestForm;
