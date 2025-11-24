import { NextRequest } from 'next/server';

// Your actual Google Apps Script URL
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwxWDfESz8MLC7T3rtFnjNZFamqpI187SdYxsxFjZ-MsWkr4jw4Fgxe1WzVJ69IkErLsA/exec";

// Submit JSON to Google Sheets via Apps Script
async function submitToGoogleSheet(data: any) {
  try {
    if (!GOOGLE_APPS_SCRIPT_URL) {
      console.error("Google Apps Script URL missing");
      return false;
    }

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return response.ok;
  } catch (err) {
    console.error("Error submitting to Google Sheets:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let parsed: any = {};
    let paymentProof: any = null;

    // -----------------------
    // Handle multipart/form-data
    // -----------------------
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();

      parsed.teamName = String(formData.get("teamName") || "");
      parsed.institution = String(formData.get("institution") || "");

      // captain fields (DEPARTMENT ADDED)
      parsed.captain = {
        name: String(formData.get("captainName") || ""),
        email: String(formData.get("captainEmail") || ""),
        phone: String(formData.get("captainPhone") || ""),
        year: String(formData.get("captainYear") || ""),
        department: String(formData.get("captainDepartment") || ""),
      };

      // Members array — now includes institution + department
      try {
        parsed.members = JSON.parse(String(formData.get("members") || "[]"));
      } catch {
        parsed.members = [];
      }

      // File handling
      const file = formData.get("paymentProof") as File | null;

      if (!file) {
        return new Response(
          JSON.stringify({ error: "Payment proof is required" }),
          { status: 400 }
        );
      }

      const arrayBuffer = await file.arrayBuffer();
      const base64String = Buffer.from(arrayBuffer).toString("base64");

      paymentProof = {
        filename: file.name,
        size: file.size,
        type: file.type,
        base64: base64String,
      };
    }

    // -----------------------
    // Validation
    // -----------------------
    if (!parsed.teamName || !parsed.institution)
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );

    if (!parsed.captain?.name || !parsed.captain?.email)
      return new Response(
        JSON.stringify({ error: "Captain details incomplete" }),
        { status: 400 }
      );

    if (!Array.isArray(parsed.members) || parsed.members.length !== 4)
      return new Response(
        JSON.stringify({ error: "Exactly 4 members required" }),
        { status: 400 }
      );

    // member validation (now includes institution + department)
    parsed.members.forEach((m: any, i: number) => {
      if (!m.name || !m.email || !m.phone || !m.year || !m.institution || !m.department) {
        throw new Error(`Member ${i + 1} missing fields`);
      }
    });

    if (!paymentProof) {
      return new Response(
        JSON.stringify({ error: "Payment proof required" }),
        { status: 400 }
      );
    }

    // -----------------------
    // Final record (matches Apps Script)
    // -----------------------
    const record = {
      id: Date.now(), // unique ID
      teamName: parsed.teamName,
      institution: parsed.institution,
      captain: parsed.captain, // includes "department"
      members: parsed.members, // each includes "institution" + "department"
      paymentProof: paymentProof,
    };

    // -----------------------
    // Submit to Google Sheets
    // -----------------------
    await submitToGoogleSheet(record);

    return new Response(JSON.stringify({ ok: true, record }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Unknown error" }),
      { status: 500 }
    );
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "AARVAM API Working" }), {
    status: 200,
  });
}
