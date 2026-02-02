import { LucideIcon } from 'lucide-react';

interface TechIconProps {
    icon: LucideIcon;
    className?: string;
}

export function TechIcon({ icon: Icon, className = "w-10 h-10" }: TechIconProps) {
    return (
        <div className={`relative inline-flex items-center justify-center p-3 ${className.replace('w-', 'min-w-').replace('h-', 'min-h-')}`}>
            {/* Secondary Shape: Rotated gradient square behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[4px] transform rotate-6 z-0" />

            {/* Technical Accent: Small corner square */}
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#2563eb] rounded-[1px] shadow-sm z-20 border border-white" />

            {/* Another Accent: Bottom left dot */}
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-slate-300 rounded-full z-20" />

            {/* Main Icon with Gradient-like effect via Mask + Drop Shadow */}
            <div className="relative z-10 text-[#2563eb] filter drop-shadow-[0_2px_4px_rgba(37,99,235,0.2)]">
                <Icon
                    strokeWidth={1.5}
                    className="w-full h-full"
                />

                {/* Detail Overlay: A very subtle duplicate to create a 'cut' or distinct tech look, 
            or just relying on the strokeWidth and shadow for now. 
            Let's keep it clean but detailed. */}
            </div>
        </div>
    );
}
