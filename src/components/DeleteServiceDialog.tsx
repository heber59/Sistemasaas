import { X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface Service {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'pending';
}

interface DeleteServiceDialogProps {
  service: Service | null;
  onClose: () => void;
  onConfirm: (serviceId: string) => void;
}

export function DeleteServiceDialog({ service, onClose, onConfirm }: DeleteServiceDialogProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  if (!service) return null;

  const handleDelete = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onConfirm(service.id);
      setShowSuccess(false);
      onClose();
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Success Modal */}
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-[400px] mx-4 p-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="bg-[#e3fcef] rounded-full p-4">
              <CheckCircle2 className="w-12 h-12 text-[#00875a]" />
            </div>
            <h3 className="font-['Roboto:Bold',sans-serif] text-[#091e42] text-[20px]">
              ¡Listo!
            </h3>
            <p className="font-['Roboto:Regular',sans-serif] text-[#5e6c84] text-[14px]">
              El servicio ha sido eliminado correctamente.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-[500px] mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#dfe1e6]">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-[#FF991F]" />
            <h2 className="font-['Roboto:Bold',sans-serif] text-[#091e42] text-[20px]">
              Eliminar
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
        <div className="p-6 space-y-4">
          <div className="bg-[#fff4e6] border border-[#ff991f] rounded-lg p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-[#ff991f] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-['Roboto:Bold',sans-serif] text-[#091e42] text-[14px] mb-1">
                Advertencia
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[#091e42] text-[12px]">
                Esta acción es irreversible. Una vez eliminado, no podrás recuperar este servicio.
              </p>
            </div>
          </div>

          <p className="font-['Roboto:Regular',sans-serif] text-[#091e42] text-[14px]">
            ¿Estás seguro de que deseas eliminar el servicio{' '}
            <span className="font-['Roboto:Bold',sans-serif]">"{service.name}"</span>?
          </p>

          <div className="bg-[#f4f5f7] rounded-lg p-4 border border-[#dfe1e6]">
            <p className="font-['Roboto:Regular',sans-serif] text-[#5e6c84] text-[12px]">
              <span className="font-['Roboto:Bold',sans-serif] text-[#091e42]">Nota:</span> Al eliminar este servicio, 
              se perderán todos los datos asociados y las configuraciones relacionadas.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-[#dfe1e6]">
          <button
            onClick={onClose}
            className="bg-white hover:bg-gray-50 text-[#091e42] px-6 py-2 rounded-lg font-['Roboto:Bold',sans-serif] text-[14px] border border-[#dfe1e6] transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="bg-[#DE350B] hover:bg-[#DE350B]/90 text-white px-6 py-2 rounded-lg font-['Roboto:Bold',sans-serif] text-[14px] transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
