import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TechnicianSelectionProps } from "@/lib/types/booking";

export function TechnicianSelection({
  isVisible,
  isConfirmationActive,
  onBack,
  technicians,
  selectedTech,
  onSelect,
  onConfirm,
}: TechnicianSelectionProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col w-[450px] h-full bg-[#FAF5EB] transition-transform duration-300 ${
        isVisible
          ? "translate-x-0"
          : isConfirmationActive
            ? "-translate-x-full"
            : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-[#E5E1DA] text-center relative">
        <Button
          onClick={onBack}
          className="bg-transparent! absolute left-6 top-1/2 -translate-y-1/2 text-[#824C08]/60 hover:text-[#824C08]"
        >
          <ChevronRight size={24} className="rotate-180" />
        </Button>
        <h2 className="text-[24px] font-serif text-[#824C08]">Chọn nhân viên</h2>
      </div>

      {/* List of Technicians */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {technicians.map((tech) => (
          <div
            key={tech.id}
            onClick={() => onSelect(tech)}
            className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-colors ${
              selectedTech.id === tech.id
                ? "bg-[#824C08]/10 border border-[#824C08]/20"
                : "hover:bg-black/5"
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-[15px] font-bold text-[#282626]">
                  {tech.name}
                </h3>
                <p className="text-[13px] text-[#282626]/60">{tech.role}</p>
              </div>
            </div>
            {selectedTech.id === tech.id && (
              <Check size={20} className="text-[#824C08]" />
            )}
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-[#E5E1DA]">
        <Button
          onClick={onConfirm}
          className="w-full bg-[#824C08]! text-white h-[50px] rounded-sm font-bold uppercase tracking-widest"
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
}
