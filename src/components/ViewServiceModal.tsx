import { X, CheckCircle2 } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'pending';
}

interface ViewServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ViewServiceModal({ service, onClose }: ViewServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-[600px] mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#dfe1e6]">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#0052cc]" />
            <h2 className="font-['Roboto:Bold',sans-serif] text-[#091e42] text-[20px]">
              Detalles del servicio
            </h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 rounded-full p-1 transition-colors"
          >
            <X className="w-5 h-5 text-[#5e6c84]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <label className="block font-['Roboto:Bold',sans-serif] text-[#091e42] text-[14px] mb-2">
              Nombre del servicio
            </label>
            <div className="bg-[#f4f5f7] rounded-lg p-4 border border-[#dfe1e6]">
              <p className="font-['Roboto:Regular',sans-serif] text-[#091e42] text-[14px]">
                {service.name}
              </p>
            </div>
          </div>

          <div>
            <label className="block font-['Roboto:Bold',sans-serif] text-[#091e42] text-[14px] mb-2">
              Descripción
            </label>
            <div className="bg-[#f4f5f7] rounded-lg p-4 border border-[#dfe1e6]">
              <p className="font-['Roboto:Regular',sans-serif] text-[#091e42] text-[14px]">
                {service.description}
              </p>
            </div>
          </div>

          <div>
            <label className="block font-['Roboto:Bold',sans-serif] text-[#091e42] text-[14px] mb-2">
              Estado
            </label>
            <div className="bg-[#f4f5f7] rounded-lg p-4 border border-[#dfe1e6]">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-['Roboto:Bold',sans-serif] ${
                service.status === 'active' 
                  ? 'bg-[#e3fcef] text-[#006644]' 
                  : 'bg-[#fff4e6] text-[#974f0c]'
              }`}>
                {service.status === 'active' ? 'Vigente' : 'En trámite'}
              </span>
            </div>
          </div>

          <div>
            <label className="block font-['Roboto:Bold',sans-serif] text-[#091e42] text-[14px] mb-2">
              ID del servicio
            </label>
            <div className="bg-[#f4f5f7] rounded-lg p-4 border border-[#dfe1e6]">
              <p className="font-['Roboto:Regular',sans-serif] text-[#5e6c84] text-[12px] font-mono">
                {service.id}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-[#dfe1e6]">
          <button
            onClick={onClose}
            className="bg-[#0052cc] hover:bg-[#0052cc]/90 text-white px-6 py-2 rounded-lg font-['Roboto:Bold',sans-serif] text-[14px] transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
