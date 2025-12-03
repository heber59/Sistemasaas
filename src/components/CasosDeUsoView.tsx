import { useState } from 'react';
import { Eye, Pencil, Trash2, Plus, Search, ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft, X, Filter } from 'lucide-react';
import { ViewServiceModal } from './ViewServiceModal';
import { EditServiceModal } from './EditServiceModal';
import { DeleteServiceDialog } from './DeleteServiceDialog';

interface CasoDeUso {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'pending';
}

export function CasosDeUsoView() {
  const [casos, setCasos] = useState<CasoDeUso[]>([
    { id: '1', name: 'Invitar usuario Linix', description: 'Funcionalidad para invitar usuarios al sistema Linix', status: 'active' },
    { id: '2', name: 'Eliminar usuario Linix', description: 'Funcionalidad para eliminar usuarios del sistema', status: 'active' },
    { id: '3', name: 'Modificar privilegios usuario Linix', description: 'Gestión de permisos y privilegios de usuario', status: 'active' },
    { id: '4', name: 'Caso de uso 4', description: 'Descripción del caso de uso 4', status: 'active' },
    { id: '5', name: 'Caso de uso 5', description: 'Descripción del caso de uso 5', status: 'active' },
  ]);

  const [viewingCaso, setViewingCaso] = useState<CasoDeUso | null>(null);
  const [editingCaso, setEditingCaso] = useState<CasoDeUso | null>(null);
  const [deletingCaso, setDeletingCaso] = useState<CasoDeUso | null>(null);

  const handleEdit = (caso: CasoDeUso, updates: Partial<CasoDeUso>) => {
    setCasos(casos.map(c => c.id === caso.id ? { ...c, ...updates } : c));
    setEditingCaso(null);
  };

  const handleDelete = (casoId: string) => {
    setCasos(casos.filter(c => c.id !== casoId));
    setDeletingCaso(null);
  };

  return (
    <>
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="flex gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#5e6c84] text-[11px]">
            Inicio
          </p>
          <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#5e6c84] text-[11px]">/</p>
          <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[11px]">
            Casos de uso
          </p>
        </div>
        <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <div className="flex gap-[8px] items-center relative shrink-0 w-full">
            <ChevronLeft className="w-[20px] h-[20px] text-[#091e42]" />
            <p className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#091e42] text-[22px]">
              Casos de uso
            </p>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] leading-[20px] text-[#5e6c84] text-[14px]">
            Descripción caso de uso (pendiente).
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="relative rounded-[8px] shrink-0 w-full" style={{ border: '1px solid #dfe1e6' }}>
        <div className="box-border flex flex-col gap-[16px] items-end p-[12px] relative w-full">
          <div className="flex gap-[12px] items-center relative shrink-0 w-full">
            <div className="basis-0 bg-[#f4f5f7] grow rounded-[8px]" style={{ border: '1px solid #dfe1e6' }}>
              <div className="box-border flex flex-col gap-[12px] items-start p-[8px] relative w-full">
                <div className="flex gap-[6px] h-[20px] items-center relative shrink-0">
                  <p className="font-['Roboto:Regular',sans-serif] leading-[16px] text-[#5e6c84] text-[11px]">
                    Sin filtros aún.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] items-center">
              <button className="box-border flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 rounded-[8px] hover:bg-gray-50 transition-colors" style={{ border: '1px solid #a5adba' }}>
                <X className="w-[18px] h-[18px] text-[#6b778c]" />
                <p className="font-['Roboto:Bold',sans-serif] leading-[20px] text-[#6b778c] text-[14px]">
                  Quitar
                </p>
              </button>
              <button className="box-border flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 rounded-[8px] hover:bg-[#0052cc]/90 transition-colors" style={{ border: '1px solid #0052cc' }}>
                <Filter className="w-[18px] h-[18px] text-[#0052cc]" />
                <p className="font-['Roboto:Bold',sans-serif] leading-[20px] text-[#0052cc] text-[14px]">
                  Filtrar
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="relative rounded-[8px] shrink-0 w-full" style={{ border: '1px solid #dfe1e6' }}>
        <div className="box-border flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          {/* Search & Add Button */}
          <div className="flex items-end justify-between relative shrink-0 w-full">
            <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-[280px]">
              <div className="box-border flex gap-[10px] items-start pl-[16px] pr-0 py-0">
                <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[12px]">Buscar</p>
              </div>
              <div className="bg-white relative rounded-[8px] w-full" style={{ border: '1px solid #dfe1e6' }}>
                <div className="box-border flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
                  <input
                    type="text"
                    placeholder="Palabra clave"
                    className="basis-0 grow font-['Roboto:Regular',sans-serif] leading-[24px] text-[#5e6c84] text-[16px] outline-none bg-transparent"
                  />
                  <Search className="w-[18px] h-[18px] text-[#091e42]" />
                </div>
              </div>
            </div>
            <button className="bg-[#0052cc] box-border flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-0 rounded-[8px] hover:bg-[#0052cc]/90 transition-colors">
              <Plus className="w-[18px] h-[18px] text-white" />
              <p className="font-['Roboto:Bold',sans-serif] leading-[20px] text-white text-[14px]">
                Agregar caso de uso
              </p>
            </button>
          </div>

          {/* Table Title */}
          <p className="font-['Roboto:Regular',sans-serif] leading-[24px] text-[#091e42] text-[16px]">
            Consulta de casos de uso disponibles
          </p>

          {/* Table */}
          <div className="flex flex-col items-start relative shrink-0 w-full">
            {/* Table Header */}
            <div className="h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" style={{ border: '1px solid #dfe1e6' }}>
              <div className="flex h-[48px] items-start overflow-clip w-full">
                <div className="basis-0 bg-white grow">
                  <div className="box-border flex flex-col items-center justify-center p-[16px] relative w-full">
                    <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
                      Nombre del caso de uso
                    </p>
                  </div>
                </div>
                <div className="bg-[#ebecf0] box-border flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]">
                  <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
                    &nbsp;
                  </p>
                </div>
                <div className="bg-[#ebecf0] box-border flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]">
                  <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
                    Acciones
                  </p>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="relative shrink-0 w-full" style={{ borderLeft: '1px solid #dfe1e6', borderRight: '1px solid #dfe1e6' }}>
              {casos.map((caso, index) => (
                <div
                  key={caso.id}
                  className={`flex items-center justify-center overflow-clip w-full ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#ebecf0]'
                  }`}
                  style={{ borderBottom: '1px solid #dfe1e6' }}
                >
                  <div className="basis-0 grow">
                    <div className="box-border flex flex-col items-start justify-center p-[16px] relative w-full">
                      <p className="font-['Roboto:Regular',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
                        {caso.name}
                      </p>
                    </div>
                  </div>
                  <div className="box-border flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]">
                    <button
                      onClick={() => setViewingCaso(caso)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Eye className="w-[16px] h-[16px] text-[#091e42]" />
                    </button>
                  </div>
                  <div className={`box-border flex flex-col items-center justify-center p-[16px] gap-2 relative shrink-0 w-[70px] ${
                    index % 2 === 0 ? 'bg-white' : ''
                  }`}>
                    <button
                      onClick={() => setEditingCaso(caso)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Pencil className="w-[16px] h-[16px] text-[#0052cc]" />
                    </button>
                    {(index === 1 || index === 3) && (
                      <button
                        onClick={() => setDeletingCaso(caso)}
                        className="hover:scale-110 transition-transform"
                      >
                        <Trash2 className="w-[16px] h-[16px] text-[#DE350B]" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="h-[50px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" style={{ border: '1px solid #dfe1e6' }}>
              <div className="flex h-[50px] items-start overflow-clip w-full">
                <div className="basis-0 grow h-[50px]">
                  <div className="box-border flex gap-[16px] h-[50px] items-center justify-end px-[16px] py-0 relative w-full">
                    <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#5e6c84] text-[12px]">
                      1-{casos.length} of {casos.length}
                    </p>
                    <div className="flex gap-[8px] items-center">
                      <button className="flex items-start justify-end overflow-clip rounded-[4px] size-[24px] hover:bg-gray-100 transition-colors">
                        <ChevronsLeft className="w-[16px] h-[16px] m-1 text-[#5e6c84]" />
                      </button>
                      <button className="flex items-start justify-end overflow-clip rounded-[4px] size-[24px] hover:bg-gray-100 transition-colors">
                        <ChevronLeft className="w-[16px] h-[16px] m-1 text-[#5e6c84]" />
                      </button>
                      <button className="flex items-start justify-end overflow-clip rounded-[4px] size-[24px] hover:bg-gray-100 transition-colors">
                        <ChevronRight className="w-[16px] h-[16px] m-1 text-[#5e6c84]" />
                      </button>
                      <button className="flex items-start justify-end overflow-clip rounded-[4px] size-[24px] hover:bg-gray-100 transition-colors">
                        <ChevronsRight className="w-[16px] h-[16px] m-1 text-[#5e6c84]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ViewServiceModal
        service={viewingCaso}
        onClose={() => setViewingCaso(null)}
      />

      <EditServiceModal
        service={editingCaso}
        onClose={() => setEditingCaso(null)}
        onSave={handleEdit}
      />

      <DeleteServiceDialog
        service={deletingCaso}
        onClose={() => setDeletingCaso(null)}
        onConfirm={handleDelete}
      />
    </>
  );
}
