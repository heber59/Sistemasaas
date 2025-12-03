import { useState } from 'react';
import { Eye, Pencil, Trash2, Plus, Search, ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft } from 'lucide-react';
import { ViewServiceModal } from './ViewServiceModal';
import { EditServiceModal } from './EditServiceModal';
import { DeleteServiceDialog } from './DeleteServiceDialog';

interface Suite {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'pending';
}

export function SuitesView() {
  const [suites, setSuites] = useState<Suite[]>([
    { id: '1', name: 'Suite Clientes', description: 'Suite para gestión de clientes', status: 'active' },
    { id: '2', name: 'Suite Ahorros', description: 'Suite para productos de ahorro', status: 'active' },
    { id: '3', name: 'Suite Credicar', description: 'Suite para gestión de créditos de cartera', status: 'active' },
    { id: '4', name: 'Suite de Tesorería', description: 'Suite para gestión de tesorería', status: 'active' },
    { id: '5', name: 'Otra Suite', description: 'Descripción de otra suite', status: 'active' },
  ]);

  const [viewingSuite, setViewingSuite] = useState<Suite | null>(null);
  const [editingSuite, setEditingSuite] = useState<Suite | null>(null);
  const [deletingSuite, setDeletingSuite] = useState<Suite | null>(null);

  const handleEdit = (suite: Suite, updates: Partial<Suite>) => {
    setSuites(suites.map(s => s.id === suite.id ? { ...s, ...updates } : s));
    setEditingSuite(null);
  };

  const handleDelete = (suiteId: string) => {
    setSuites(suites.filter(s => s.id !== suiteId));
    setDeletingSuite(null);
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
            Suites
          </p>
        </div>
        <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <div className="flex gap-[8px] items-center relative shrink-0 w-full">
            <ChevronLeft className="w-[20px] h-[20px] text-[#091e42]" />
            <p className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#091e42] text-[22px]">
              Suites
            </p>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] leading-[20px] text-[#5e6c84] text-[14px]">
            Descripción suite (pendiente).
          </p>
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
                Agregar suite
              </p>
            </button>
          </div>

          {/* Table Title */}
          <p className="font-['Roboto:Regular',sans-serif] leading-[24px] text-[#091e42] text-[16px]">
            Consulta de suites disponibles
          </p>

          {/* Table */}
          <div className="flex flex-col items-start relative shrink-0 w-full">
            {/* Table Header */}
            <div className="h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" style={{ border: '1px solid #dfe1e6' }}>
              <div className="flex h-[48px] items-start overflow-clip w-full">
                <div className="basis-0 bg-white grow">
                  <div className="box-border flex flex-col items-center justify-center p-[16px] relative w-full">
                    <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
                      Nombre de la suite
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
              {suites.map((suite, index) => (
                <div
                  key={suite.id}
                  className={`flex items-center justify-center overflow-clip w-full ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#ebecf0]'
                  }`}
                  style={{ borderBottom: '1px solid #dfe1e6' }}
                >
                  <div className="basis-0 grow">
                    <div className="box-border flex flex-col items-start justify-center p-[16px] relative w-full">
                      <p className="font-['Roboto:Regular',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
                        {suite.name}
                      </p>
                    </div>
                  </div>
                  <div className="box-border flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]">
                    <button
                      onClick={() => setViewingSuite(suite)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Eye className="w-[16px] h-[16px] text-[#091e42]" />
                    </button>
                  </div>
                  <div className={`box-border flex flex-col items-center justify-center p-[16px] gap-2 relative shrink-0 w-[70px] ${
                    index % 2 === 0 ? 'bg-white' : ''
                  }`}>
                    <button
                      onClick={() => setEditingSuite(suite)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Pencil className="w-[16px] h-[16px] text-[#0052cc]" />
                    </button>
                    {index % 2 === 1 && (
                      <button
                        onClick={() => setDeletingSuite(suite)}
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
                      1-{suites.length} of {suites.length}
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
        service={viewingSuite}
        onClose={() => setViewingSuite(null)}
      />

      <EditServiceModal
        service={editingSuite}
        onClose={() => setEditingSuite(null)}
        onSave={handleEdit}
      />

      <DeleteServiceDialog
        service={deletingSuite}
        onClose={() => setDeletingSuite(null)}
        onConfirm={handleDelete}
      />
    </>
  );
}
