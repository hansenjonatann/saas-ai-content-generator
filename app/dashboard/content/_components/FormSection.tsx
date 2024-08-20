"use client";
import Image from "next/image";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
}

export default function FormSection({
  selectedTemplate,
  userFormInput,
}: PROPS) {
  const [formData, setFormData] = useState<any>();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };
  return (
    <>
      <div className="p-5 shadow-md border rounded-lg bg-white ">
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
        <h2 className="font-bold mb-2 text-2xl text-primary">
          {selectedTemplate?.name}
        </h2>
        <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

        <form className="mt-6" onSubmit={onSubmit}>
          {selectedTemplate?.form?.map((item, index) => (
            <div key={index} className="my-2 flex flex-col gap-2 mb-7">
              <label className="font-bold">{item.label}</label>
              {item.field == "input" ? (
                <Input
                  name={item.name}
                  required={item?.required}
                  onChange={handleInputChange}
                />
              ) : item.field == "textarea" ? (
                <Textarea
                  name={item.name}
                  required={item?.required}
                  onChange={handleInputChange}
                />
              ) : null}
            </div>
          ))}
          <Button type="submit" className="w-full py-6">
            Generate Content
          </Button>
        </form>
      </div>
    </>
  );
}
