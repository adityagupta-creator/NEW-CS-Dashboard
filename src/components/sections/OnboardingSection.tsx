import { mockOnboarding } from "@/data/mockData";
import { DataField } from "@/components/DataField";
export function OnboardingSection() {
  const d = mockOnboarding;
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-lg font-semibold">User Onboarding</h2>
      </div>
      <div className="section-card">
        <h3 className="text-sm font-semibold mb-3 gold-accent">Personal Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DataField label="Name" value={d.name} />
          <DataField label="Mobile" value={d.mobile} mono />
          <DataField label="Name as per PAN" value={d.nameAsPan} />
          <DataField label="Email" value={d.email} />
        </div>
      </div>
      <div className="section-card">
        <h3 className="text-sm font-semibold mb-3 gold-accent">KYC Verification</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DataField label="PAN (Masked)" value={d.pan} mono />
          <DataField label="PAN Verification" value={d.panVerified ? `Verified on ${d.panVerificationDate}` : `Not Verified (${d.panAttempts} attempts)`} status={d.panVerified ? "success" : "fail"} />
          <DataField label="Aadhaar (Masked)" value={d.aadhar} mono />
          <DataField label="Aadhaar Verification" value={d.aadharVerified ? `Verified on ${d.aadharVerificationDate}` : `Not Verified (${d.aadharAttempts} attempts)`} status={d.aadharVerified ? "success" : "fail"} />
        </div>
      </div>
      <div className="section-card">
        <h3 className="text-sm font-semibold mb-3 gold-accent">Bank Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DataField label="Account Number" value={d.bankAccount} mono />
          <DataField label="IFSC Code" value={d.ifsc} mono />
          <DataField label="Verification Status" value={d.bankVerificationStatus} status="success" />
          <DataField label="Verification Date" value={d.bankVerificationDate} />
        </div>
      </div>
      <div className="section-card">
        <h3 className="text-sm font-semibold mb-3 gold-accent">Gold Balance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <DataField label="Consolidated Gold" value={d.consolidatedGold} mono />
          <DataField label="Leased Gold" value={d.leasedGold} mono />
          <DataField label="Accumulated SIP Gold" value={d.accumulatedSipGold} mono />
          <DataField label="Redeemable Gold" value={d.redeemableGold} mono />
          <DataField label="Locked Gold" value={d.lockedGold} mono />
        </div>
      </div>
    </div>
  );
}
