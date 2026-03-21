interface EmailTemplateProps {
	firstName: string;
	lastName: string;
	from: string;
	subject: string;
	message: string;
	timeSent: Date;
}

export default function EmailTemplate({
	firstName,
	lastName,
	from,
	subject,
	message,
	timeSent,
}: EmailTemplateProps) {
	const formattedTime = timeSent.toLocaleString("en-US", {
		timeZone: "UTC",
		dateStyle: "long",
		timeStyle: "short",
	});

	return (
		<div style={{ fontFamily: "Georgia, 'Times New Roman', serif", backgroundColor: "#f8f8f8", padding: "40px 16px" }}>
			<div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "4px", overflow: "hidden", border: "1px solid #e8e8e8" }}>

				{/* Header */}
				<div style={{ backgroundColor: "#000000", padding: "28px 36px" }}>
					<p style={{ margin: 0, color: "#ffedd2", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>
						New Contact Submission
					</p>
				</div>

				{/* Accent bar */}
				<div style={{ height: "3px", backgroundColor: "#cd7400" }} />

				{/* Body */}
				<div style={{ padding: "32px 36px" }}>
					<p style={{ margin: "0 0 6px", fontSize: "15px", color: "#353535", lineHeight: "1.6" }}>
						A new contact form submission has been made to your website.
					</p>
					<p style={{ margin: "0 0 28px", fontSize: "13px", color: "#888888" }}>
						You can reply directly to this email to respond to {firstName}.
					</p>

					{/* Details block */}
					<div style={{ backgroundColor: "#f8f8f8", borderLeft: "3px solid #cd7400", padding: "20px 24px", marginBottom: "28px" }}>
						<p style={{ margin: "0 0 14px", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#cd7400", fontFamily: "Arial, sans-serif" }}>
							Message Details
						</p>
						<table style={{ borderCollapse: "collapse", width: "100%" }}>
							<tbody>
								{[
									["Name", `${firstName} ${lastName}`],
									["Email", from],
									["Subject", subject],
									["Submitted", formattedTime],
								].map(([label, value]) => (
									<tr key={label}>
										<td style={{ padding: "5px 20px 5px 0", fontSize: "12px", fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: "0.5px", textTransform: "uppercase", color: "#888888", whiteSpace: "nowrap", verticalAlign: "top", width: "90px" }}>
											{label}
										</td>
										<td style={{ padding: "5px 0", fontSize: "14px", color: "#353535", verticalAlign: "top" }}>
											{value}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Message block */}
					<div>
						<p style={{ margin: "0 0 10px", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "#cd7400", fontFamily: "Arial, sans-serif" }}>
							Message
						</p>
						<p style={{ margin: 0, fontSize: "15px", lineHeight: "1.8", color: "#353535", whiteSpace: "pre-wrap" }}>
							{message}
						</p>
					</div>
				</div>

				{/* Footer */}
				<div style={{ borderTop: "1px solid #e8e8e8", padding: "18px 36px", backgroundColor: "#f8f8f8" }}>
					<p style={{ margin: 0, fontSize: "11px", color: "#aaaaaa", fontFamily: "Arial, sans-serif", letterSpacing: "0.5px" }}>
						This is an automated notification. Do not forward this email.
					</p>
				</div>

			</div>
		</div>
	);
}