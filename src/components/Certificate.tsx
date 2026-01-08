"use client";

import { useState, useEffect } from "react";
import { getUserProfile, saveUserProfile, type UserProfile } from "@/lib/progress";

interface CertificateProps {
  courseName: string;
  certificateId: string;
  completedAt: string;
}

export function Certificate({ courseName, certificateId, completedAt }: CertificateProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    const savedProfile = getUserProfile();
    if (savedProfile) {
      setProfile(savedProfile);
      setName(savedProfile.name);
      setEmail(savedProfile.email);
      setCompany(savedProfile.company || "");
    } else {
      setIsEditing(true);
    }
  }, []);

  const handleSaveProfile = () => {
    if (!name || !email) return;

    const newProfile: UserProfile = { name, email, company: company || undefined };
    saveUserProfile(newProfile);
    setProfile(newProfile);
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const certificateUrl = profile
    ? `/api/certificate?name=${encodeURIComponent(profile.name)}&course=${encodeURIComponent(courseName)}&date=${encodeURIComponent(formatDate(completedAt))}&certId=${encodeURIComponent(certificateId)}`
    : null;

  const linkedInShareUrl = profile
    ? `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(courseName)}&organizationName=${encodeURIComponent("Contractor Finance Institute")}&issueYear=${new Date(completedAt).getFullYear()}&issueMonth=${new Date(completedAt).getMonth() + 1}&certUrl=${encodeURIComponent(`https://contractorfinanceinstitute.com/verify/${certificateId}`)}&certId=${encodeURIComponent(certificateId)}`
    : null;

  if (isEditing || !profile) {
    return (
      <div className="bg-[var(--panel)] rounded-2xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold text-[var(--text)] mb-2">
          Get Your Certificate
        </h3>
        <p className="text-[var(--muted)] mb-6">
          Enter your details to generate your personalized certificate.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Smith"
              className="w-full px-4 py-3 bg-[var(--bg)] border border-white/10 rounded-xl text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--teal)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-[var(--bg)] border border-white/10 rounded-xl text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--teal)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="ABC Construction"
              className="w-full px-4 py-3 bg-[var(--bg)] border border-white/10 rounded-xl text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--teal)]"
            />
          </div>

          <button
            onClick={handleSaveProfile}
            disabled={!name || !email}
            className="w-full px-6 py-3 bg-[var(--teal)] text-black font-semibold rounded-xl hover:bg-[var(--teal)]/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate Certificate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Certificate Preview */}
      <div className="bg-[var(--panel)] rounded-2xl p-6 border border-white/10">
        <div className="aspect-[1200/850] w-full rounded-lg overflow-hidden bg-gradient-to-br from-[var(--bg)] to-[var(--panel)] mb-6">
          {certificateUrl && (
            <img
              src={certificateUrl}
              alt="Certificate"
              className="w-full h-full object-contain"
            />
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {certificateUrl && (
            <a
              href={certificateUrl}
              download={`${courseName.replace(/\s+/g, "-")}-Certificate.svg`}
              className="flex-1 px-6 py-3 bg-[#0A0D1E] text-[var(--teal)] font-semibold rounded-xl border border-[var(--teal)] hover:bg-[var(--teal)] hover:text-black transition-all text-center"
            >
              Download Certificate
            </a>
          )}

          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-3 bg-[var(--panel)] text-[var(--text)] font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all"
          >
            Edit Name
          </button>
        </div>
      </div>

      {/* LinkedIn Share */}
      {linkedInShareUrl && (
        <div className="bg-gradient-to-br from-[var(--teal)]/10 to-[var(--violet-start)]/10 rounded-2xl p-6 border border-[var(--teal)]/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#0A66C2] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-[var(--text)] mb-1">
                Add to LinkedIn
              </h4>
              <p className="text-[var(--muted)] text-sm mb-4">
                Showcase your certification on your LinkedIn profile to stand out to potential clients and employers.
              </p>
              <a
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-semibold rounded-xl hover:bg-[#004182] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Add to Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Details */}
      <div className="bg-[var(--panel)]/50 rounded-xl p-4 border border-white/5">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-[var(--muted)]">Certificate ID</p>
            <p className="text-[var(--text)] font-mono">{certificateId}</p>
          </div>
          <div>
            <p className="text-[var(--muted)]">Issued</p>
            <p className="text-[var(--text)]">{formatDate(completedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
