"use client";
import { useState } from "react";
import Image from "next/image";

interface MemberFieldProps {
  index: number;
  member: {
    name: string;
    email: string;
    phone: string;
    year: string;
    institution: string;
    department: string;
  };
  onChange: (field: string, value: string) => void;
}

function MemberField({ index, member, onChange }: MemberFieldProps) {
  return (
    <div className="rounded-lg border border-orange-400/30 bg-white/10 p-4 space-y-3">
      <h3 className="font-semibold text-sm text-white">Member {index + 1}</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-300">Name</label>
          <input
            type="text"
            value={member.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder={`Member ${index + 1}`}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-300">Email</label>
          <input
            type="email"
            value={member.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="email@example.com"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-300">Phone</label>
          <input
            type="tel"
            value={member.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            pattern="[0-9]{10}"
            className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="10-digit number"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-300">Year</label>
          <select
            value={member.year}
            onChange={(e) => onChange("year", e.target.value)}
            className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="" className="bg-slate-900">
              Select Year
            </option>
            <option value="1st" className="bg-slate-900">
              1st Year
            </option>
            <option value="2nd" className="bg-slate-900">
              2nd Year
            </option>
            <option value="3rd" className="bg-slate-900">
              3rd Year
            </option>
            <option value="4th" className="bg-slate-900">
              4th Year
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs font-medium text-slate-300">
            Institution
          </label>
          <input
            type="text"
            value={member.institution}
            onChange={(e) => onChange("institution", e.target.value)}
            className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="College/University name"
            required
          />
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs font-medium text-slate-300">
            Department
          </label>
          <input
            type="text"
            value={member.department}
            onChange={(e) => onChange("department", e.target.value)}
            className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="e.g., CSE, ECE, Mechanical"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default function RegistrationForm() {
  const [teamName, setTeamName] = useState("");
  const [institution, setInstitution] = useState("");
  const [captainName, setCaptainName] = useState("");
  const [captainPhone, setCaptainPhone] = useState("");
  const [captainEmail, setCaptainEmail] = useState("");
  const [captainYear, setCaptainYear] = useState("");
  const [captainDepartment, setCaptainDepartment] = useState("");

  const [members, setMembers] = useState(
    Array(4)
      .fill(null)
      .map(() => ({
        name: "",
        email: "",
        phone: "",
        year: "",
        institution: "",
        department: "",
      }))
  );

  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok?: boolean; error?: string } | null>(
    null
  );

  const updateMember = (i: number, field: string, value: string) => {
    setMembers((prev) =>
      prev.map((m, idx) =>
        idx === i ? { ...m, [field]: value } : m
      )
    );
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);

    if (!paymentProof) {
      setResult({ error: "Please upload payment proof to proceed" });
      return;
    }

    setLoading(true);

    try {
      const form = new FormData();
      form.append("teamName", teamName);
      form.append("institution", institution);
      form.append("captainName", captainName);
      form.append("captainPhone", captainPhone);
      form.append("captainEmail", captainEmail);
      form.append("captainYear", captainYear);
      form.append("captainDepartment", captainDepartment);
      form.append("members", JSON.stringify(members));
      form.append("paymentProof", paymentProof);

      const res = await fetch("/api/hackathons/aarvam25/register", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed");

      setResult({ ok: true });

      // Reset form
      setTeamName("");
      setInstitution("");
      setCaptainName("");
      setCaptainPhone("");
      setCaptainEmail("");
      setCaptainYear("");
      setCaptainDepartment("");

      setMembers(
        Array(4)
          .fill(null)
          .map(() => ({
            name: "",
            email: "",
            phone: "",
            year: "",
            institution: "",
            department: "",
          }))
      );

      setPaymentProof(null);
    } catch (err: any) {
      setResult({ error: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-6">

      {/* PAYMENT SECTION */}
      <div className="rounded-2xl border-2 border-orange-400 bg-white/5 p-6 space-y-4">
        <h2 className="text-lg font-bold text-white">Payment & Verification</h2>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-dashed border-orange-400/50">
            <div className="text-xs text-slate-300 font-semibold">
              Scan QR to Pay Registration Fee
            </div>
            <div className="text-xs text-red-400 font-bold text-center">
              NO REFUND
            </div>

            <Image
              src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1763924172/qr_mmkscu.png"
              alt="AARVAM QR"
              width={180}
              height={180}
              className="rounded-md bg-white p-2 border border-slate-400"
            />

            <div className="text-xs text-slate-400 text-center">
              Amount: ₹3,750 (5 members × ₹750)
            </div>
          </div>

          {/* File Upload */}
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-sm font-semibold text-white block mb-2">
                Upload Payment Proof *
              </label>

              <label className="flex flex-col items-center gap-2 px-4 py-6 border-2 border-dashed border-orange-400/50 rounded-lg cursor-pointer hover:bg-white/5 transition">
                <span className="text-2xl">📤</span>
                <span className="text-sm font-medium text-slate-300">
                  {paymentProof
                    ? `✓ ${paymentProof.name}`
                    : "Click to upload or drag & drop"}
                </span>
                <span className="text-xs text-slate-400">
                  Supported: JPG, PNG, PDF (Max 5MB)
                </span>

                <input
                  type="file"
                  accept="image/*,application/pdf"
                  className="hidden"
                  onChange={(e) =>
                    setPaymentProof(e.target.files?.[0] || null)
                  }
                />
              </label>

              {!paymentProof && (
                <p className="text-xs text-red-400 mt-1">
                  ⚠️ Payment proof is required to submit
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* TEAM INFO */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">Team Information</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs font-medium text-slate-300">
              Team Name *
            </label>
            <input
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white"
              placeholder="Your awesome team name"
              required
            />
          </div>

          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs font-medium text-slate-300">
              Institution *
            </label>
            <input
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white"
              placeholder="College/University name"
              required
            />
          </div>
        </div>
      </div>

      {/* CAPTAIN INFO */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">Team Captain Details</h2>

        <div className="rounded-lg border border-orange-400/30 bg-white/5 p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-300">
                Name *
              </label>
              <input
                value={captainName}
                onChange={(e) => setCaptainName(e.target.value)}
                className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-300">
                Email *
              </label>
              <input
                value={captainEmail}
                onChange={(e) => setCaptainEmail(e.target.value)}
                type="email"
                className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-300">
                Phone *
              </label>
              <input
                value={captainPhone}
                onChange={(e) => setCaptainPhone(e.target.value)}
                type="tel"
                pattern="[0-9]{10}"
                className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white"
                required
              />
            </div>

           <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-300">Year *</label>
            <select
              value={captainYear}
              onChange={(e) => setCaptainYear(e.target.value)}
              className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="" className="bg-slate-900">
                Select Year
              </option>
              <option value="1st" className="bg-slate-900">
                1st Year
              </option>
              <option value="2nd" className="bg-slate-900">
                2nd Year
              </option>
              <option value="3rd" className="bg-slate-900">
                3rd Year
              </option>
              <option value="4th" className="bg-slate-900">
                4th Year
              </option>
            </select>
          </div>


            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-xs font-medium text-slate-300">
                Department *
              </label>
              <input
                value={captainDepartment}
                onChange={(e) => setCaptainDepartment(e.target.value)}
                className="rounded-md border border-slate-400/30 bg-white/5 px-3 py-2 text-sm text-white"
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* MEMBERS */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">Team Members (excluding captain) </h2>

        <div className="space-y-3">
          {members.map((member, idx) => (
            <MemberField
              key={idx}
              index={idx}
              member={member}
              onChange={(field, value) =>
                updateMember(idx, field, value)
              }
            />
          ))}
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={loading || !paymentProof}
        className="w-full rounded-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 font-semibold text-white shadow-md transition"
      >
        {loading
          ? "Submitting…"
          : paymentProof
          ? "Register Now"
          : "Upload Payment Proof to Continue"}
      </button>

      {result?.ok && (
        <p className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg p-3">
          ✓ Registration submitted successfully.
        </p>
      )}

      {result?.error && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
          ✗ {result.error}
        </p>
      )}
    </form>
  );
}
