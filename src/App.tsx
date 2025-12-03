import { useState } from 'react';
import svgPaths from "./imports/svg-r9hwprp1bp";
import { Eye, Pencil, Plus, Filter, X, Search, ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft, Settings, AlertTriangle, User, Layers, GitBranch } from 'lucide-react';
import { ViewServiceModal } from './components/ViewServiceModal';
import { EditServiceModal } from './components/EditServiceModal';
import { SuitesView } from './components/SuitesView';
import { CasosDeUsoView } from './components/CasosDeUsoView';

interface Service {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'pending';
}

type ViewType = 'servicios' | 'suites' | 'casos-uso';

export default function App() {
  const [services, setServices] = useState<Service[]>([
    { id: '1', name: 'Generación de cobro x cliente', description: 'Sistema automatizado de generación de cobros por cliente', status: 'active' },
    { id: '2', name: 'Causación y cobro de intereses Moratorios', description: 'Gestión de intereses moratorios y cobros', status: 'active' },
    { id: '3', name: 'Gestión contable de la cartera (provisiones + causaciones)', description: 'Sistema completo de gestión contable', status: 'active' },
    { id: '4', name: 'Comisiones de gestión de cobro', description: 'Control de comisiones para gestiones de cobro', status: 'active' },
    { id: '5', name: 'Servicio Saas 5', description: 'Descripción del servicio 5', status: 'active' },
  ]);

  const [viewingService, setViewingService] = useState<Service | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState<'active' | 'pending'>('active');
  const [currentView, setCurrentView] = useState<ViewType>('servicios');

  const handleEdit = (service: Service, updates: Partial<Service>) => {
    setServices(services.map(s => s.id === service.id ? { ...s, ...updates } : s));
    setEditingService(null);
  };

  const filteredServices = services.filter(s => s.status === activeTab);

  return (
    <div className="bg-white flex flex-col h-screen overflow-hidden w-full">
      {/* Header */}
      <div className="bg-white box-border flex h-[53px] items-center relative shadow-[0px_1px_2px_0px_rgba(9,30,66,0.13),0px_1px_3px_1px_rgba(9,30,66,0.13)] shrink-0 w-full z-[2]">
        <div className="basis-0 grow h-[53px] min-h-px min-w-px relative shrink-0">
          <div className="flex flex-row items-center size-full">
            <div className="box-border flex h-[53px] items-center px-[16px] py-0 relative w-full">
              <div className="flex items-center gap-2">
                <Settings className="w-6 h-6 text-[#0052cc]" />
                <span className="font-['Roboto:Bold',sans-serif] text-[#0052cc]">Sistema SaaS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex flex-col h-full items-end justify-center px-[16px] py-[8px] relative shrink-0 w-[180px]" style={{ borderLeft: '1px solid #dfe1e6' }}>
          <div className="flex gap-[16px] items-center">
            <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
              Usuario Admin
            </p>
            <div className="flex items-center justify-center size-[32px] bg-[#0052cc] rounded-full">
              <User className="w-[18px] h-[18px] text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="bg-[#fafbfc] h-full relative shrink-0 w-[248px]" style={{ borderRight: '1px solid #dfe1e6' }}>
          <div className="flex flex-col h-full items-start overflow-clip">
            {/* Menu Heading */}
            <div className="box-border flex flex-col items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
              <p className="font-['Roboto:Bold',sans-serif] leading-[20px] text-[#5e6c84] text-[14px]">
                MENU
              </p>
            </div>

            {/* Menu Items */}
            <div className="box-border flex flex-col items-start px-[6px] py-0 relative w-full gap-1">
              <button
                onClick={() => setCurrentView('servicios')}
                className={`h-[40px] relative rounded-[4px] shrink-0 w-full ${
                  currentView === 'servicios' ? 'bg-[#ebecf0]' : 'hover:bg-[#ebecf0]'
                } transition-colors`}
                style={{ borderLeft: currentView === 'servicios' ? '5px solid #0052cc' : 'none' }}
              >
                <div className="box-border flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
                  <Settings className={`w-[24px] h-[24px] ${currentView === 'servicios' ? 'text-[#0052cc]' : 'text-[#091e42]'}`} />
                  <div className="basis-0 flex gap-[8px] grow h-full items-center">
                    <p className={`font-['Roboto:${currentView === 'servicios' ? 'Bold' : 'Regular'}',sans-serif] leading-[20px] ${
                      currentView === 'servicios' ? 'text-[#0052cc]' : 'text-[#091e42]'
                    } text-[14px]`}>
                      Servicio Saas
                    </p>
                    {currentView === 'servicios' && (
                      <ChevronRight className="w-[20px] h-[20px] text-[#0052cc]" />
                    )}
                  </div>
                </div>
              </button>

              <button
                onClick={() => setCurrentView('suites')}
                className={`h-[40px] relative rounded-[4px] shrink-0 w-full ${
                  currentView === 'suites' ? 'bg-[#ebecf0]' : 'hover:bg-[#ebecf0]'
                } transition-colors`}
                style={{ borderLeft: currentView === 'suites' ? '5px solid #0052cc' : 'none' }}
              >
                <div className="box-border flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
                  <Layers className={`w-[24px] h-[24px] ${currentView === 'suites' ? 'text-[#0052cc]' : 'text-[#091e42]'}`} />
                  <div className="basis-0 flex gap-[8px] grow h-full items-center">
                    <p className={`font-['Roboto:${currentView === 'suites' ? 'Bold' : 'Regular'}',sans-serif] leading-[20px] ${
                      currentView === 'suites' ? 'text-[#0052cc]' : 'text-[#091e42]'
                    } text-[14px]`}>
                      Suites
                    </p>
                    {currentView === 'suites' && (
                      <ChevronRight className="w-[20px] h-[20px] text-[#0052cc]" />
                    )}
                  </div>
                </div>
              </button>

              <button
                onClick={() => setCurrentView('casos-uso')}
                className={`h-[40px] relative rounded-[4px] shrink-0 w-full ${
                  currentView === 'casos-uso' ? 'bg-[#ebecf0]' : 'hover:bg-[#ebecf0]'
                } transition-colors`}
                style={{ borderLeft: currentView === 'casos-uso' ? '5px solid #0052cc' : 'none' }}
              >
                <div className="box-border flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
                  <GitBranch className={`w-[24px] h-[24px] ${currentView === 'casos-uso' ? 'text-[#0052cc]' : 'text-[#091e42]'}`} />
                  <div className="basis-0 flex gap-[8px] grow h-full items-center">
                    <p className={`font-['Roboto:${currentView === 'casos-uso' ? 'Bold' : 'Regular'}',sans-serif] leading-[20px] ${
                      currentView === 'casos-uso' ? 'text-[#0052cc]' : 'text-[#091e42]'
                    } text-[14px]`}>
                      Casos de uso
                    </p>
                    {currentView === 'casos-uso' && (
                      <ChevronRight className="w-[20px] h-[20px] text-[#0052cc]" />
                    )}
                  </div>
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="box-border flex flex-col items-start pb-[12px] pt-[24px] px-[16px] relative shrink-0 w-[248px]">
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 2">
                    <line stroke="#DFE1E6" strokeWidth="2" x2="216" y1="1" y2="1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Logout */}
            <div className="box-border flex flex-col items-start px-[6px] py-0 relative w-full">
              <div className="h-[40px] relative rounded-[4px] shrink-0 w-full hover:bg-[#ebecf0] cursor-pointer transition-colors">
                <div className="box-border flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
                  <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p1efcb880} fill="#091E42" />
                  </svg>
                  <p className="font-['Roboto:Regular',sans-serif] leading-[20px] text-[#091e42] text-[14px]">
                    Cerrar sesión
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 overflow-auto">
          <div className="flex flex-col items-center size-full">
            <div className="box-border flex flex-col gap-[24px] items-center px-[64px] py-[32px] relative w-full max-w-[1064px]">
              {currentView === 'servicios' && (
                <>
                  {/* Breadcrumbs & Header */}
                  <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                    <div className="flex gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#5e6c84] text-[11px]">
                        Inicio
                      </p>
                      <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#5e6c84] text-[11px]">/</p>
                      <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[11px]">
                        Servicio Saas
                      </p>
                    </div>
                    <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="flex gap-[8px] items-center relative shrink-0 w-full">
                        <ChevronLeft className="w-[20px] h-[20px] text-[#091e42]" />
                        <p className="font-['Roboto:Regular',sans-serif] leading-[28px] text-[#091e42] text-[22px]">
                          Servicio Saas
                        </p>
                      </div>
                      <p className="font-['Roboto:Regular',sans-serif] leading-[20px] text-[#5e6c84] text-[14px]">
                        Descripción servicio (pendiente).
                      </p>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="relative shrink-0 w-full" style={{ borderBottom: '2px solid #dfe1e6' }}>
                    <div className="box-border flex flex-col items-start px-[16px] py-0 relative w-full">
                      <div className="flex gap-[24px] items-start relative shrink-0">
                        <button
                          onClick={() => setActiveTab('active')}
                          className={`flex flex-col items-center overflow-clip relative shrink-0 pb-[4px] pt-[8px] ${
                            activeTab === 'active' ? 'border-b-4 border-[#0052cc]' : ''
                          }`}
                        >
                          <p className={`font-['Roboto:Bold',sans-serif] leading-[16px] text-[12px] ${
                            activeTab === 'active' ? 'text-[#0052cc]' : 'text-[#091e42]'
                          }`}>
                            Servicio Saas vigentes
                          </p>
                        </button>
                        <button
                          onClick={() => setActiveTab('pending')}
                          className={`flex flex-col items-center overflow-clip relative shrink-0 pb-[4px] pt-[8px] ${
                            activeTab === 'pending' ? 'border-b-4 border-[#0052cc]' : ''
                          }`}
                        >
                          <div className="flex gap-[4px] items-start">
                            <AlertTriangle className="w-[14px] h-[14px] text-[#FF991F]" />
                            <p className={`font-['Roboto:Bold',sans-serif] leading-[16px] text-[12px] ${
                              activeTab === 'pending' ? 'text-[#0052cc]' : 'text-[#091e42]'
                            }`}>
                              Servicios Saas en trámite
                            </p>
                          </div>
                        </button>
                      </div>
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
                            Agregar servicio Saas
                          </p>
                        </button>
                      </div>

                      {/* Table Title */}
                      <p className="font-['Roboto:Regular',sans-serif] leading-[24px] text-[#091e42] text-[16px]">
                        Consulta de servicios Saas disponibles
                      </p>

                      {/* Table */}
                      <div className="flex flex-col items-start relative shrink-0 w-full">
                        {/* Table Header */}
                        <div className="h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" style={{ border: '1px solid #dfe1e6' }}>
                          <div className="flex h-[48px] items-start overflow-clip w-full">
                            <div className="basis-0 bg-white grow">
                              <div className="box-border flex flex-col items-center justify-center p-[16px] relative w-full">
                                <p className="font-['Roboto:Bold',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
                                  Nombre del servicio
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
                          {filteredServices.map((service, index) => (
                            <div
                              key={service.id}
                              className={`flex items-center justify-center overflow-clip w-full ${
                                index % 2 === 0 ? 'bg-white' : 'bg-[#ebecf0]'
                              }`}
                              style={{ borderBottom: '1px solid #dfe1e6' }}
                            >
                              <div className="basis-0 grow">
                                <div className="box-border flex flex-col items-start justify-center p-[16px] relative w-full">
                                  <p className="font-['Roboto:Regular',sans-serif] leading-[16px] text-[#091e42] text-[12px]">
                                    {service.name}
                                  </p>
                                </div>
                              </div>
                              <div className="box-border flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]">
                                <button
                                  onClick={() => setViewingService(service)}
                                  className="hover:scale-110 transition-transform"
                                >
                                  <Eye className="w-[16px] h-[16px] text-[#091e42]" />
                                </button>
                              </div>
                              <div className={`box-border flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px] ${
                                index % 2 === 0 ? 'bg-white' : ''
                              }`}>
                                <button
                                  onClick={() => setEditingService(service)}
                                  className="hover:scale-110 transition-transform"
                                >
                                  <Pencil className="w-[16px] h-[16px] text-[#0052cc]" />
                                </button>
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
                                  1-{filteredServices.length} of {filteredServices.length}
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
                </>
              )}

              {currentView === 'suites' && <SuitesView />}
              {currentView === 'casos-uso' && <CasosDeUsoView />}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ViewServiceModal
        service={viewingService}
        onClose={() => setViewingService(null)}
      />

      <EditServiceModal
        service={editingService}
        onClose={() => setEditingService(null)}
        onSave={handleEdit}
      />
    </div>
  );
}