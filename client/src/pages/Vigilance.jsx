import React from 'react'

import { AlertTriangle, Mail, Phone, Shield } from "lucide-react";
import { ser1 } from '../assets/api/image';
import Faq from '../components/Faq';
import VigilanceReportForm from '../components/VigilantUserForm';

const Vigilance = () => {
  return (
    <div className="sm:px-[10%] px-6 pt-28 pb-20">
    <div className="">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Vigilance Guidelines
        </h1>
        <img 
          src={ser1}
          alt="Vigilance Awareness" 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            Overview of the Vigilance Department’s Role
          </h2>
          <p className="text-gray-700">
            The Vigilance Department ensures transparency, accountability, and
            ethical conduct within the shipyard. It prevents fraud and
            corruption while promoting a culture of honesty and compliance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            Guidelines on Preventing Fraud, Corruption, and Unethical Behavior
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><span className="text-orange-600 font-medium">Integrity & Ethical Conduct:</span> Uphold honesty and professionalism in all dealings.</li>
            <li><span className="text-orange-600 font-medium">Prevention of Fraud & Corruption:</span> Avoid bribery and report suspicious activities immediately.</li>
            <li><span className="text-orange-600 font-medium">Confidentiality & Whistleblower Protection:</span> Report unethical practices without fear of retaliation.</li>
            <li><span className="text-orange-600 font-medium">Compliance with Policies & Regulations:</span> Follow all legal guidelines and company policies.</li>
            <li><span className="text-orange-600 font-medium">Monitoring & Corrective Actions:</span> Regular audits will be conducted to detect irregularities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">
            Contact Details of Vigilance Officers
          </h2>
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-orange-700 flex items-center">
                <Shield className="w-5 h-5 text-orange-500 mr-2" /> Chief Vigilance Officer (CVO)
              </h3>
              <p className="text-gray-700">Name: [CVO Name]</p>
              <p className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 text-orange-500 mr-2" /> [CVO Email]
              </p>
              <p className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 text-orange-500 mr-2" /> [CVO Contact Number]
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-orange-700 flex items-center">
                <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" /> Assistant Vigilance Officer
              </h3>
              <p className="text-gray-700">Name: [Assistant Officer Name]</p>
              <p className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 text-orange-500 mr-2" /> [Assistant Officer Email]
              </p>
              <p className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 text-orange-500 mr-2" /> [Assistant Officer Contact Number]
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Faq></Faq>
    <VigilanceReportForm></VigilanceReportForm>
  </div>
  )
}

export default Vigilance