import { useState, useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'pending';
}

interface EditServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSave: (service: Service, updates: Partial<Service>) => void;
}

export function EditServiceModal({ service, onClose, onSave }: EditServiceModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'active' | 'pending'>('active');

  useEffect(() => {
    if (service) {
      setName(service.name);
      setDescription(service.description);
      setStatus(service.status);
    }
  }, [service]);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(service, { name, description, status });
  };

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
            <AlertCircle className="w-6 h-6 text-[#0052cc]" />
            <h2 className="font-['Roboto:Bold',sans-serif] text-[#091e42] text-[20px]">
              Editar servicio
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
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div className="bg-[#deebff] border border-[#0052cc] rounded-lg p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-[#0052cc] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-['Roboto:Bold',sans-serif] text-[#091e42] text-[14px] mb-1">
                  Información importante
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[#091e42] text-[12px]">
                  Los cambios realizados afectarán el servicio inmediatamente. Por favor, verifica la información antes de guardar.
                </p>
              </div>
            </div>

            <div>
              <label className="block font-['Roboto:Bold',sans-serif] text-[#091e42] text-[12px] mb-2">
                Nombre del servicio *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white rounded-lg px-4 py-3 border border-[#dfe1e6] font-['Roboto:Regular',sans-serif] text-[#091e42] text-[14px] outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc]/20 transition-all"
                placeholder="Ingrese el nombre del servicio"
              />
            </div>

            <div>
              <label className="block font-['Roboto:Bold',sans-serif] text-[#091e42] text-[12px] mb-2">
                Descripción *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                className="w-full bg-white rounded-lg px-4 py-3 border border-[#dfe1e6] font-['Roboto:Regular',sans-serif] text-[#091e42] text-[14px] outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc]/20 transition-all resize-none"
                placeholder="Ingrese la descripción del servicio"
              />
            </div>

            <div>
              <label className="block font-['Roboto:Bold',sans-serif] text-[#091e42] text-[12px] mb-2">
                Estado *
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as 'active' | 'pending')}
                className="w-full bg-white rounded-lg px-4 py-3 border border-[#dfe1e6] font-['Roboto:Regular',sans-serif] text-[#091e42] text-[14px] outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc]/20 transition-all"
              >
                <option value="active">Vigente</option>
                <option value="pending">En trámite</option>
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 p-6 border-t border-[#dfe1e6]">
            <button
              type="button"
              onClick={onClose}
              className="bg-white hover:bg-gray-50 text-[#091e42] px-6 py-2 rounded-lg font-['Roboto:Bold',sans-serif] text-[14px] border border-[#dfe1e6] transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#0052cc] hover:bg-[#0052cc]/90 text-white px-6 py-2 rounded-lg font-['Roboto:Bold',sans-serif] text-[14px] transition-colors"
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
