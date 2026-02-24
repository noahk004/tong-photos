import Link from "next/link";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  from: string;
  subject: string;
  message: string;
  timeSent: Date;
}

export default function EmailTemplate({ firstName, lastName, from, subject, message, timeSent }: EmailTemplateProps) {
  return (
    <div className="mx-4 my-6">
      <div className="mb-3">
        <p className="mb-1">You&apos;re receiving this email because a new contact form submission has been made to your website.</p>
        <p>You may reply directly to this email to send a response.</p>
      </div>
      <hr className="mb-3 text-gray-300" />

      <div className="mb-3">
        <h2 className="mb-1 text-lg font-semibold">Message details</h2>
        <ul className="text-gray-800 list-disc ms-6 mb-3">
          <li>Name: {firstName} {lastName}</li>
          <li>Subject line: {subject}</li>
          <li>Time submitted: {timeSent.toString()}</li>
        </ul>

      </div>


      <div className="mb-6">
        <h2 className="mb-1 text-lg font-semibold">Message:</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}