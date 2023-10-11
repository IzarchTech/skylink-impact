"use client";
import VStack from "@/app/components/VStack";
import {ChangeEvent, FormEvent, useState} from "react";

type ContactUsDTO = {
    name: string;
    email: string;
    subject?: string;
    serviceRequest: string;
}

const services = ["Business Consultancy", "Mentoring"];

export default function ContactUsForm() {
    const [form, setForm] = useState<ContactUsDTO>({
        name: "",
        serviceRequest: "",
        email: "",
        subject: "",
    });

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {id, value} = e.target;

        setForm((cv) => {
            return {
                ...cv,
                [id]: value
            }
        })
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.info(form);
    }

    return (
        <form onSubmit={handleSubmit} className="bg-slate-50 shadow-md p-4 rounded-md lg:col-span-2">
            <VStack className="pt-3.5 gap-4">
                <h2 className="font-bold text-2xl text-slate-900">Keep in touch with us</h2>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-light">Name</label>
                    <input placeholder="Name" id="name"
                           className="ring-1 rounded ring-slate-950 bg-transparent p-2" onChange={handleInput}
                           value={form.name} required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-light">Email Address</label>
                    <input placeholder="j.doe@example.com" id="email" type="email"
                           className="ring-1 rounded ring-slate-950 bg-transparent p-2" value={form.email}
                           onChange={handleInput} required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-light">Subject</label>
                    <input placeholder="Subject" id="subject"
                           className="ring-1 rounded ring-slate-950 bg-transparent p-2" value={form.subject}
                           onChange={handleInput}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="serviceRequest" className="font-light">Service Request</label>
                    <select id="serviceRequest"
                            className="p-2 bg-transparent ring-1 rounded ring-slate-950" value={form.serviceRequest}
                            onChange={handleInput}
                            required>
                        <option value="">Select an option</option>
                        {services.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-light">Message</label>
                    <textarea rows={6} placeholder="Message" id="message"
                              className="ring-1 rounded ring-slate-950 bg-transparent p-2"/>
                </div>
                <button
                    type="submit"
                    className="pointer-events-auto rounded-md bg-slate-600 px-3 py-4 font-semibold leading-5 text-white hover:bg-slate-900">Send
                    Message
                </button>
            </VStack>
        </form>
    );
}