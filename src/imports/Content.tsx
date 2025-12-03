import svgPaths from "./svg-r9hwprp1bp";

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[44px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consultar detalles del Servicio Saas.
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Header">
      <Text />
    </div>
  );
}

function Presente() {
  return (
    <div className="h-[32px] max-h-[32px] max-w-[152.216px] relative shrink-0 w-[152.216px]" data-name="Presente">
      <div className="absolute bottom-[-50%] left-0 right-[-15.62%] top-0" data-name="image 7" />
    </div>
  );
}

function BusinessUnit() {
  return (
    <div className="basis-0 grow h-[53px] min-h-px min-w-px relative shrink-0" data-name="Business unit">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center px-[16px] py-0 relative w-full">
          <Presente />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Name">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sergio Nieto
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Content">
      <Name />
    </div>
  );
}

function ContentPerson() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_1_69176)" id="person_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p39507900} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69176">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="basis-0 bg-[#0052cc] grow h-full min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Icon">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start p-[2px] relative size-full">
          <ContentPerson />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="Avatar">
      <Icon />
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end max-w-[180px] min-w-[32px] relative shrink-0 w-[32px]" data-name="User">
      <Content />
      <Avatar />
    </div>
  );
}

function User1() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-end justify-center px-[16px] py-[8px] relative shrink-0 w-[180px]" data-name="User">
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <User />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white box-border content-stretch flex h-[53px] items-center relative shadow-[0px_1px_2px_0px_rgba(9,30,66,0.13),0px_1px_3px_1px_rgba(9,30,66,0.13)] shrink-0 w-full z-[2]" data-name="Header">
      <BusinessUnit />
      <User1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#5e6c84] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MENU
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="heading">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsMdSettings() {
  return (
    <div className="absolute bottom-[16.67%] left-0 right-[16.67%] top-0" data-name="react-icons/MdSettings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31300)" id="react-icons/MdSettings">
          <g id="Vector"></g>
          <g id="Vector_2">
            <mask fill="white" id="path-1-inside-1_1_31300">
              <path d={svgPaths.p3c965b00} />
            </mask>
            <path d={svgPaths.p3c965b00} fill="var(--fill-0, #0052CC)" mask="url(#path-1-inside-1_1_31300)" stroke="var(--stroke-0, #0052CC)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_31300">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MyIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <ReactIconsMdSettings />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function NavigationChevronRight() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31322)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p4b63b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31322">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <NavigationChevronRight />
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text2 />
      <Icon1 />
    </div>
  );
}

function MyNavLink() {
  return (
    <div className="bg-[#ebecf0] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div aria-hidden="true" className="absolute border-[#0052cc] border-[0px_0px_0px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon />
          <Body />
        </div>
      </div>
    </div>
  );
}

function MyIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31318)" id="react-icons/MdOutlineCategory">
          <g id="Vector"></g>
          <path d={svgPaths.p411af80} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31318">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Suites
      </p>
    </div>
  );
}

function Body1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text3 />
    </div>
  );
}

function MyNavLink1() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon1 />
          <Body1 />
        </div>
      </div>
    </div>
  );
}

function MyIcon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31293)" id="react-icons/MdOutlineApps">
          <g id="Vector"></g>
          <path d={svgPaths.p3e8b1540} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31293">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicaciones
      </p>
    </div>
  );
}

function Body2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text4 />
    </div>
  );
}

function MyNavLink2() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon2 />
          <Body2 />
        </div>
      </div>
    </div>
  );
}

function MyIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31266)" id="react-icons/MdOutlineCorporateFare">
          <g id="Vector"></g>
          <path d={svgPaths.p3ad4d800} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31266">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Entidades
      </p>
    </div>
  );
}

function Body3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text5 />
    </div>
  );
}

function MyNavLink3() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon3 />
          <Body3 />
        </div>
      </div>
    </div>
  );
}

function MyIcon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31241)" id="react-icons/MdOutlineAccountTree">
          <g id="Vector"></g>
          <path d={svgPaths.p1f142c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31241">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso
      </p>
    </div>
  );
}

function Body4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text6 />
    </div>
  );
}

function MyNavLink4() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon4 />
          <Body4 />
        </div>
      </div>
    </div>
  );
}

function MyIcon5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_69198)" id="react-icons/MdMiscellaneousServices">
          <g id="Vector"></g>
          <path d={svgPaths.p21830c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Microservicios
      </p>
    </div>
  );
}

function Body5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text7 />
    </div>
  );
}

function MyNavLink5() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon5 />
          <Body5 />
        </div>
      </div>
    </div>
  );
}

function MyIcon6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31304)" id="react-icons/MdOutlineEngineering">
          <g id="Vector"></g>
          <path d={svgPaths.p1eaa3cf0} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31304">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Procesos
      </p>
    </div>
  );
}

function Body6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text8 />
    </div>
  );
}

function MyNavLink6() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon6 />
          <Body6 />
        </div>
      </div>
    </div>
  );
}

function MyIcon7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31162)" id="react-icons/MdOutlineEvent">
          <g id="Vector"></g>
          <path d={svgPaths.p12e7ad00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31162">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Eventos
      </p>
    </div>
  );
}

function Body7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text9 />
    </div>
  );
}

function MyNavLink7() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon7 />
          <Body7 />
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative w-full">
          <MyNavLink />
          <MyNavLink1 />
          <MyNavLink2 />
          <MyNavLink3 />
          <MyNavLink4 />
          <MyNavLink5 />
          <MyNavLink6 />
          <MyNavLink7 />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="0" transform="translate(0 2)" width="216" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="216" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-[24px] px-[16px] relative shrink-0 w-[248px]" data-name="divider">
      <Divider />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p1efcb880} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ActionLogout() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon">
      <ActionLogout />
    </div>
  );
}

function Text10() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar sesión
      </p>
    </div>
  );
}

function Body8() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text10 />
    </div>
  );
}

function NavLink() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="NavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <Icon2 />
          <Body8 />
        </div>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative size-full">
          <NavLink />
        </div>
      </div>
    </div>
  );
}

function BusinessUnit1() {
  return (
    <div className="h-[31.998px] relative shrink-0 w-[96px]" data-name="Business Unit">
      <div className="absolute aspect-[91/64] bottom-0 left-[calc(50%-0.25px)] top-0 translate-x-[-50%]" data-name="image 27" />
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-end px-[24px] py-[32px] relative shrink-0 w-[248px]" data-name="footerLogo">
      <BusinessUnit1 />
    </div>
  );
}

function Section() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="section">
      <Heading />
      <Div />
      <Divider1 />
      <Div1 />
      <FooterLogo />
    </div>
  );
}

function MyNav() {
  return (
    <div className="bg-[#fafbfc] h-full relative shrink-0" data-name="myNav">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <Section />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BreadcrumbLink() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inicio
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function BreadcrumbLink1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <Text11 />
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <BreadcrumbLink />
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">/</p>
      </div>
      <BreadcrumbLink1 />
    </div>
  );
}

function NavigationArrowBack() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31226)" id="Navigation/arrow_back">
          <g id="Vector"></g>
          <path d={svgPaths.p213ee031} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31226">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon">
      <NavigationArrowBack />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#091e42] text-[22px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción servicio (pendiente).
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Text13 />
    </div>
  );
}

function Hgroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Hgroup">
      <Breadcrumbs />
      <Container1 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0052cc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas vigentes
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Text14 />
    </div>
  );
}

function MyTab() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container2 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="bg-[#0052cc] h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function ReportProblemBlack24Dp() {
  return (
    <div className="absolute bottom-[-4.76%] left-0 right-0 top-[-9.52%]" data-name="report_problem_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_69194)" id="report_problem_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p268eda70} fill="var(--fill-0, #FF991F)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69194">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlertReportProblemOutline() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/report_problem_outline">
      <ReportProblemBlack24Dp />
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[14px]" data-name="Icon">
      <AlertReportProblemOutline />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicios Saas en trámite
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Icon4 />
      <Text15 />
    </div>
  );
}

function MyTab1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container3 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Group">
      <MyTab />
      <MyTab1 />
    </div>
  );
}

function TabContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab-Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Group1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_2px] border-solid bottom-[-2px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sin filtros aún.
      </p>
    </div>
  );
}

function ContainerTags() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-center relative shrink-0 w-[772px]" data-name="Container-tags">
      <Text16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="basis-0 bg-[#f4f5f7] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
          <ContainerTags />
        </div>
      </div>
    </div>
  );
}

function ActionFilterAltOff() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/Filter Alt Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31204)" id="Action/Filter Alt Off">
          <g id="Vector"></g>
          <path d={svgPaths.p15b19500} fill="var(--fill-0, #8993A4)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31204">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAltOff />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#6b778c] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quitar
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#a5adba] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon5 />
      <Text17 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p2ed64500} fill="var(--fill-0, #0052CC)" id="Vector_2" />
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function ActionFilterAlt() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/filter_alt">
      <Group2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAlt />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filtrar
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0052cc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon6 />
      <Text18 />
    </div>
  );
}

function ContainerButtons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container-buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full z-[1]" data-name="Container">
      <Section1 />
      <ContainerButtons />
    </div>
  );
}

function ContainerFilter() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-filter">
      <div className="flex flex-col items-end overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] isolate items-end p-[12px] relative w-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start pl-[16px] pr-0 py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#091e42] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

function ContentSearch() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31176)" id="Content/search">
          <g id="Vector"></g>
          <path d={svgPaths.p1cb35d00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31176">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentSearch />
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Palabra clave</p>
          </div>
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label />
      <TextField />
    </div>
  );
}

function Searchfield() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Searchfield">
      <TextField1 />
    </div>
  );
}

function AddBlack24Dp() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="add_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31198)" id="add_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p21cef280} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContentAdd() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/add">
      <AddBlack24Dp />
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentAdd />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agregar servicio Saas
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0052cc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Icon8 />
      <Text19 />
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[3]" data-name="Div">
      <Searchfield />
      <Button2 />
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 z-[2]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#091e42] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consulta de servicios Saas disponibles
      </p>
    </div>
  );
}

function Th() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Th">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nombre del servicio
          </p>
        </div>
      </div>
    </div>
  );
}

function Th1() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Th2() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acciones
      </p>
    </div>
  );
}

function THead() {
  return (
    <div className="h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="THead">
      <div className="content-stretch flex h-[48px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Th />
        <Th1 />
        <Th2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Td() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Generación de cobro x cliente
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility />
    </div>
  );
}

function Td1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon9 />
    </div>
  );
}

function ActionPencil() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil />
    </div>
  );
}

function Td2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon10 />
    </div>
  );
}

function Tr() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td />
        <Td1 />
        <Td2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Causación y cobro de intereses Moratorios
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility1 />
    </div>
  );
}

function Td4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon11 />
    </div>
  );
}

function ActionPencil1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil1 />
    </div>
  );
}

function Td5() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon12 />
    </div>
  );
}

function UiActionsDelete() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete />
    </div>
  );
}

function Td6() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon13 />
    </div>
  );
}

function Tr1() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td3 />
      <Td4 />
      <Td5 />
      <Td6 />
    </div>
  );
}

function Td7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Gestión contable de la cartera (provisiones + causaciones)
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility2 />
    </div>
  );
}

function Td8() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon14 />
    </div>
  );
}

function ActionPencil2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil2 />
    </div>
  );
}

function Td9() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon15 />
    </div>
  );
}

function Tr2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td7 />
        <Td8 />
        <Td9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Comisiones de gestión de cobro
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility3 />
    </div>
  );
}

function Td11() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon16 />
    </div>
  );
}

function ActionPencil3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil3 />
    </div>
  );
}

function Td12() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon17 />
    </div>
  );
}

function UiActionsDelete1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete1 />
    </div>
  );
}

function Td13() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon18 />
    </div>
  );
}

function Tr3() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td10 />
      <Td11 />
      <Td12 />
      <Td13 />
    </div>
  );
}

function Td14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Servicio Saas 5
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility4 />
    </div>
  );
}

function Td15() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon19 />
    </div>
  );
}

function ActionPencil4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil4 />
    </div>
  );
}

function Td16() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon20 />
    </div>
  );
}

function Tr4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td14 />
        <Td15 />
        <Td16 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="TBody">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Tr />
        <Tr1 />
        <Tr2 />
        <Tr3 />
        <Tr4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1-8 of 8
      </p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Label">
      <Text21 />
    </div>
  );
}

function NavigationFirstPage() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/first_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31222)" id="Navigation/first_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p23d2bf0} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31222">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationFirstPage />
    </div>
  );
}

function PaginationControl() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon21 />
    </div>
  );
}

function NavigationChevronLeft() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31289)" id="chevron_left_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13d11a80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31289">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronLeft />
    </div>
  );
}

function PaginationControl1() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon22 />
    </div>
  );
}

function NavigationChevronRight1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31270)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13ca2b80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31270">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronRight1 />
    </div>
  );
}

function PaginationControl2() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon23 />
    </div>
  );
}

function NavigationLastPage() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/last_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31311)" id="Navigation/last_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p2ca2ec00} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31311">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationLastPage />
    </div>
  );
}

function PaginationControl3() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon24 />
    </div>
  );
}

function Control() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Control">
      <PaginationControl />
      <PaginationControl1 />
      <PaginationControl2 />
      <PaginationControl3 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="basis-0 grow h-[50px] min-h-px min-w-px relative shrink-0" data-name="Pagination">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[50px] items-center justify-end px-[16px] py-0 relative w-full">
          <Label1 />
          <Control />
        </div>
      </div>
    </div>
  );
}

function TFoot() {
  return (
    <div className="h-[50px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="TFoot">
      <div className="content-stretch flex h-[50px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Pagination />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Table">
      <THead />
      <TBody />
      <TFoot />
    </div>
  );
}

function ContainerTable() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-table">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] isolate items-start p-[24px] relative w-full">
          <Div2 />
          <Text20 />
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2685d680} fill="var(--fill-0, white)" id="Rectangle 1" />
          <path d={svgPaths.p3d7c5c00} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PanToolAltBlack24Dp() {
  return (
    <div className="absolute bottom-0 left-[-4.55%] overflow-clip right-[-4.55%] top-0" data-name="pan_tool_alt_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group3 />
    </div>
  );
}

function ActionPointer() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/pointer">
      <PanToolAltBlack24Dp />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute bottom-[266px] content-stretch flex items-start left-[851px] size-[32px]" data-name="Icon">
      <ActionPointer />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1064px]" data-name="Container">
      <Hgroup />
      <TabContainer />
      <ContainerFilter />
      <ContainerTable />
      <Icon25 />
    </div>
  );
}

function Body9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Body">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[64px] py-[32px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Container">
      <MyNav />
      <Body9 />
    </div>
  );
}

function HomeScreenSaasD() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1024px] isolate items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Home screen/Saas-D">
      <Header1 />
      <Container6 />
    </div>
  );
}

function Presente1() {
  return (
    <div className="h-[32px] max-h-[32px] max-w-[152.216px] relative shrink-0 w-[152.216px]" data-name="Presente">
      <div className="absolute bottom-[-50%] left-0 right-[-15.62%] top-0" data-name="image 7" />
    </div>
  );
}

function BusinessUnit2() {
  return (
    <div className="basis-0 grow h-[53px] min-h-px min-w-px relative shrink-0" data-name="Business unit">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center px-[16px] py-0 relative w-full">
          <Presente1 />
        </div>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Name">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sergio Nieto
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Content">
      <Name1 />
    </div>
  );
}

function ContentPerson1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_1_69176)" id="person_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p39507900} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69176">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="basis-0 bg-[#0052cc] grow h-full min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Icon">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start p-[2px] relative size-full">
          <ContentPerson1 />
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="Avatar">
      <Icon26 />
    </div>
  );
}

function User2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end max-w-[180px] min-w-[32px] relative shrink-0 w-[32px]" data-name="User">
      <Content1 />
      <Avatar1 />
    </div>
  );
}

function User3() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-end justify-center px-[16px] py-[8px] relative shrink-0 w-[180px]" data-name="User">
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <User2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-white box-border content-stretch flex h-[53px] items-center relative shadow-[0px_1px_2px_0px_rgba(9,30,66,0.13),0px_1px_3px_1px_rgba(9,30,66,0.13)] shrink-0 w-full" data-name="Header">
      <BusinessUnit2 />
      <User3 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#5e6c84] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MENU
      </p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="heading">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsMdSettings1() {
  return (
    <div className="absolute bottom-[16.67%] left-0 right-[16.67%] top-0" data-name="react-icons/MdSettings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31300)" id="react-icons/MdSettings">
          <g id="Vector"></g>
          <g id="Vector_2">
            <mask fill="white" id="path-1-inside-1_1_31300">
              <path d={svgPaths.p3c965b00} />
            </mask>
            <path d={svgPaths.p3c965b00} fill="var(--fill-0, #0052CC)" mask="url(#path-1-inside-1_1_31300)" stroke="var(--stroke-0, #0052CC)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_31300">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MyIcon8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <ReactIconsMdSettings1 />
    </div>
  );
}

function Text23() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function NavigationChevronRight2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31322)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p4b63b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31322">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <NavigationChevronRight2 />
    </div>
  );
}

function Body10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text23 />
      <Icon27 />
    </div>
  );
}

function MyNavLink8() {
  return (
    <div className="bg-[#ebecf0] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div aria-hidden="true" className="absolute border-[#0052cc] border-[0px_0px_0px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon8 />
          <Body10 />
        </div>
      </div>
    </div>
  );
}

function MyIcon9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31318)" id="react-icons/MdOutlineCategory">
          <g id="Vector"></g>
          <path d={svgPaths.p411af80} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31318">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Suites
      </p>
    </div>
  );
}

function Body11() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text24 />
    </div>
  );
}

function MyNavLink9() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon9 />
          <Body11 />
        </div>
      </div>
    </div>
  );
}

function MyIcon10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31293)" id="react-icons/MdOutlineApps">
          <g id="Vector"></g>
          <path d={svgPaths.p3e8b1540} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31293">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicaciones
      </p>
    </div>
  );
}

function Body12() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text25 />
    </div>
  );
}

function MyNavLink10() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon10 />
          <Body12 />
        </div>
      </div>
    </div>
  );
}

function MyIcon11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31266)" id="react-icons/MdOutlineCorporateFare">
          <g id="Vector"></g>
          <path d={svgPaths.p3ad4d800} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31266">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Entidades
      </p>
    </div>
  );
}

function Body13() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text26 />
    </div>
  );
}

function MyNavLink11() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon11 />
          <Body13 />
        </div>
      </div>
    </div>
  );
}

function MyIcon12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31241)" id="react-icons/MdOutlineAccountTree">
          <g id="Vector"></g>
          <path d={svgPaths.p1f142c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31241">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso
      </p>
    </div>
  );
}

function Body14() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text27 />
    </div>
  );
}

function MyNavLink12() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon12 />
          <Body14 />
        </div>
      </div>
    </div>
  );
}

function MyIcon13() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_69198)" id="react-icons/MdMiscellaneousServices">
          <g id="Vector"></g>
          <path d={svgPaths.p21830c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Microservicios
      </p>
    </div>
  );
}

function Body15() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text28 />
    </div>
  );
}

function MyNavLink13() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon13 />
          <Body15 />
        </div>
      </div>
    </div>
  );
}

function MyIcon14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31304)" id="react-icons/MdOutlineEngineering">
          <g id="Vector"></g>
          <path d={svgPaths.p1eaa3cf0} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31304">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Procesos
      </p>
    </div>
  );
}

function Body16() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text29 />
    </div>
  );
}

function MyNavLink14() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon14 />
          <Body16 />
        </div>
      </div>
    </div>
  );
}

function MyIcon15() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31162)" id="react-icons/MdOutlineEvent">
          <g id="Vector"></g>
          <path d={svgPaths.p12e7ad00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31162">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Eventos
      </p>
    </div>
  );
}

function Body17() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text30 />
    </div>
  );
}

function MyNavLink15() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon15 />
          <Body17 />
        </div>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative w-full">
          <MyNavLink8 />
          <MyNavLink9 />
          <MyNavLink10 />
          <MyNavLink11 />
          <MyNavLink12 />
          <MyNavLink13 />
          <MyNavLink14 />
          <MyNavLink15 />
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="0" transform="translate(0 2)" width="216" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="216" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-[24px] px-[16px] relative shrink-0 w-[248px]" data-name="divider">
      <Divider2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p1efcb880} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ActionLogout1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group4 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon">
      <ActionLogout1 />
    </div>
  );
}

function Text31() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar sesión
      </p>
    </div>
  );
}

function Body18() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text31 />
    </div>
  );
}

function NavLink1() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="NavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <Icon28 />
          <Body18 />
        </div>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative size-full">
          <NavLink1 />
        </div>
      </div>
    </div>
  );
}

function BusinessUnit3() {
  return (
    <div className="h-[31.998px] relative shrink-0 w-[96px]" data-name="Business Unit">
      <div className="absolute aspect-[91/64] bottom-0 left-[calc(50%-0.25px)] top-0 translate-x-[-50%]" data-name="image 27" />
    </div>
  );
}

function FooterLogo1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-end px-[24px] py-[32px] relative shrink-0 w-[248px]" data-name="footerLogo">
      <BusinessUnit3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="section">
      <Heading1 />
      <Div3 />
      <Divider3 />
      <Div4 />
      <FooterLogo1 />
    </div>
  );
}

function MyNav1() {
  return (
    <div className="bg-[#fafbfc] h-full relative shrink-0" data-name="myNav">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <Section2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BreadcrumbLink2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inicio
      </p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function BreadcrumbLink3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <Text32 />
    </div>
  );
}

function Breadcrumbs1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <BreadcrumbLink2 />
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">/</p>
      </div>
      <BreadcrumbLink3 />
    </div>
  );
}

function NavigationArrowBack1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31226)" id="Navigation/arrow_back">
          <g id="Vector"></g>
          <path d={svgPaths.p213ee031} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31226">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon">
      <NavigationArrowBack1 />
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#091e42] text-[22px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon29 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción servicio (pendiente).
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Text34 />
    </div>
  );
}

function Hgroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Hgroup">
      <Breadcrumbs1 />
      <Container8 />
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0052cc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas vigentes
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Text35 />
    </div>
  );
}

function MyTab2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container9 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="bg-[#0052cc] h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function ReportProblemBlack24Dp1() {
  return (
    <div className="absolute bottom-[-4.76%] left-0 right-0 top-[-9.52%]" data-name="report_problem_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_69194)" id="report_problem_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p268eda70} fill="var(--fill-0, #FF991F)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69194">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlertReportProblemOutline1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/report_problem_outline">
      <ReportProblemBlack24Dp1 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[14px]" data-name="Icon">
      <AlertReportProblemOutline1 />
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicios Saas en trámite
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Icon30 />
      <Text36 />
    </div>
  );
}

function MyTab3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container10 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Group5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Group">
      <MyTab2 />
      <MyTab3 />
    </div>
  );
}

function TabContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab-Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Group5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_2px] border-solid bottom-[-2px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sin filtros aún.
      </p>
    </div>
  );
}

function ContainerTags1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-center relative shrink-0 w-[772px]" data-name="Container-tags">
      <Text37 />
    </div>
  );
}

function Section3() {
  return (
    <div className="basis-0 bg-[#f4f5f7] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
          <ContainerTags1 />
        </div>
      </div>
    </div>
  );
}

function ActionFilterAltOff1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/Filter Alt Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31204)" id="Action/Filter Alt Off">
          <g id="Vector"></g>
          <path d={svgPaths.p15b19500} fill="var(--fill-0, #8993A4)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31204">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAltOff1 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#6b778c] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quitar
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#a5adba] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon31 />
      <Text38 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p2ed64500} fill="var(--fill-0, #0052CC)" id="Vector_2" />
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function ActionFilterAlt1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/filter_alt">
      <Group6 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAlt1 />
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filtrar
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0052cc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon32 />
      <Text39 />
    </div>
  );
}

function ContainerButtons1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container-buttons">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full z-[1]" data-name="Container">
      <Section3 />
      <ContainerButtons1 />
    </div>
  );
}

function ContainerFilter1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-filter">
      <div className="flex flex-col items-end overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] isolate items-end p-[12px] relative w-full">
          <Container11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start pl-[16px] pr-0 py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#091e42] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

function ContentSearch1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31176)" id="Content/search">
          <g id="Vector"></g>
          <path d={svgPaths.p1cb35d00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31176">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentSearch1 />
    </div>
  );
}

function TextField2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Palabra clave</p>
          </div>
          <Icon33 />
        </div>
      </div>
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label2 />
      <TextField2 />
    </div>
  );
}

function Searchfield1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Searchfield">
      <TextField3 />
    </div>
  );
}

function AddBlack24Dp1() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="add_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31198)" id="add_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p21cef280} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContentAdd1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/add">
      <AddBlack24Dp1 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentAdd1 />
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agregar servicio Saas
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0052cc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Icon34 />
      <Text40 />
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[3]" data-name="Div">
      <Searchfield1 />
      <Button5 />
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 z-[2]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#091e42] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consulta de servicios Saas disponibles
      </p>
    </div>
  );
}

function Th3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Th">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nombre del servicio
          </p>
        </div>
      </div>
    </div>
  );
}

function Th4() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Th5() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acciones
      </p>
    </div>
  );
}

function THead1() {
  return (
    <div className="h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="THead">
      <div className="content-stretch flex h-[48px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Th3 />
        <Th4 />
        <Th5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Td17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Generación de cobro x cliente
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility5 />
    </div>
  );
}

function Td18() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon35 />
    </div>
  );
}

function ActionPencil5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil5 />
    </div>
  );
}

function Td19() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon36 />
    </div>
  );
}

function Tr5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td17 />
        <Td18 />
        <Td19 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Causación y cobro de intereses Moratorios
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility6 />
    </div>
  );
}

function Td21() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon37 />
    </div>
  );
}

function ActionPencil6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil6 />
    </div>
  );
}

function Td22() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon38 />
    </div>
  );
}

function UiActionsDelete2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete2 />
    </div>
  );
}

function Td23() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon39 />
    </div>
  );
}

function Tr6() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td20 />
      <Td21 />
      <Td22 />
      <Td23 />
    </div>
  );
}

function Td24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Gestión contable de la cartera (provisiones + causaciones)
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility7 />
    </div>
  );
}

function Td25() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon40 />
    </div>
  );
}

function ActionPencil7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil7 />
    </div>
  );
}

function Td26() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon41 />
    </div>
  );
}

function Tr7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td24 />
        <Td25 />
        <Td26 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Comisiones de gestión de cobro
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility8 />
    </div>
  );
}

function Td28() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon42 />
    </div>
  );
}

function ActionPencil8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil8 />
    </div>
  );
}

function Td29() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon43 />
    </div>
  );
}

function UiActionsDelete3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete3 />
    </div>
  );
}

function Td30() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon44 />
    </div>
  );
}

function Tr8() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td27 />
      <Td28 />
      <Td29 />
      <Td30 />
    </div>
  );
}

function Td31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Servicio Saas 5
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility9 />
    </div>
  );
}

function Td32() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon45 />
    </div>
  );
}

function ActionPencil9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil9 />
    </div>
  );
}

function Td33() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon46 />
    </div>
  );
}

function Tr9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td31 />
        <Td32 />
        <Td33 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TBody1() {
  return (
    <div className="relative shrink-0 w-full" data-name="TBody">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Tr5 />
        <Tr6 />
        <Tr7 />
        <Tr8 />
        <Tr9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1-8 of 8
      </p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Label">
      <Text42 />
    </div>
  );
}

function NavigationFirstPage1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/first_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31222)" id="Navigation/first_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p23d2bf0} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31222">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon47() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationFirstPage1 />
    </div>
  );
}

function PaginationControl4() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon47 />
    </div>
  );
}

function NavigationChevronLeft1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31289)" id="chevron_left_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13d11a80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31289">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon48() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronLeft1 />
    </div>
  );
}

function PaginationControl5() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon48 />
    </div>
  );
}

function NavigationChevronRight3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31270)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13ca2b80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31270">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon49() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronRight3 />
    </div>
  );
}

function PaginationControl6() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon49 />
    </div>
  );
}

function NavigationLastPage1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/last_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31311)" id="Navigation/last_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p2ca2ec00} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31311">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon50() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationLastPage1 />
    </div>
  );
}

function PaginationControl7() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon50 />
    </div>
  );
}

function Control1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Control">
      <PaginationControl4 />
      <PaginationControl5 />
      <PaginationControl6 />
      <PaginationControl7 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="basis-0 grow h-[50px] min-h-px min-w-px relative shrink-0" data-name="Pagination">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[50px] items-center justify-end px-[16px] py-0 relative w-full">
          <Label3 />
          <Control1 />
        </div>
      </div>
    </div>
  );
}

function TFoot1() {
  return (
    <div className="h-[50px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="TFoot">
      <div className="content-stretch flex h-[50px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Pagination1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Table">
      <THead1 />
      <TBody1 />
      <TFoot1 />
    </div>
  );
}

function ContainerTable1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-table">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] isolate items-start p-[24px] relative w-full">
          <Div5 />
          <Text41 />
          <Table1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1064px]" data-name="Container">
      <Hgroup1 />
      <TabContainer1 />
      <ContainerFilter1 />
      <ContainerTable1 />
    </div>
  );
}

function Body19() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Body">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[64px] py-[32px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <MyNav1 />
      <Body19 />
    </div>
  );
}

function Blanket() {
  return <div className="absolute bg-[rgba(9,30,66,0.54)] h-[1024px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1440px]" data-name="Blanket" />;
}

function Group7() {
  return (
    <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path d={svgPaths.p2685d680} fill="var(--fill-0, white)" id="Rectangle 1" />
          <path d={svgPaths.p3d7c5c00} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PanToolAltBlack24Dp1() {
  return (
    <div className="absolute bottom-0 left-[-4.55%] overflow-clip right-[-4.55%] top-0" data-name="pan_tool_alt_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group7 />
    </div>
  );
}

function ActionPointer1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/pointer">
      <PanToolAltBlack24Dp1 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="absolute content-stretch flex items-start left-[602px] size-[32px] top-[410px] z-[4]" data-name="Icon">
      <ActionPointer1 />
    </div>
  );
}

function Text43() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#091e42] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detalles
      </p>
    </div>
  );
}

function NavigationClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation/close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31150)" id="close_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31150">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextButton() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-0 relative shrink-0" data-name="Text Button">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#091e42] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Cerrar</p>
      </div>
      <NavigationClose />
    </button>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text43 />
      <TextButton />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Divider4() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 652 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="2" width="652" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="652" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start shrink-0 sticky top-0 w-full z-[3]" data-name="Header">
      <Container15 />
      <Divider4 />
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6c84] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detalles del servicio Generación de cobro x cliente
      </p>
    </div>
  );
}

function Divider5() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 2">
        <g id="Divider">
          <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="4 4" strokeWidth="2" x2="620" y1="1" y2="1" />
        </g>
      </svg>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Text44 />
      <Divider5 />
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicación a la que pertenece
      </p>
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicación 1
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text45 />
      <Text46 />
    </div>
  );
}

function BoxAttribute() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[6px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción del alcance del servicio
      </p>
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text47 />
      <Text48 />
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Text-area">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[16px] py-[6px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#5e6c84] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso que lo soportan
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[19px] px-[6px] py-0 top-[-10px]" data-name="Title">
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caso de uso 1
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Content">
      <Text50 />
    </div>
  );
}

function AlertInfoOutline() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/info_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31158)" id="info_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p29ef6f00} fill="var(--fill-0, #0065FF)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31158">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon52() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon">
      <AlertInfoOutline />
    </div>
  );
}

function BoxAttribute1() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Content4 />
          <Icon52 />
        </div>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caso de uso 2
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Content">
      <Text51 />
    </div>
  );
}

function AlertInfoOutline1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/info_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31281)" id="info_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p29ef6f00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31281">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon53() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <AlertInfoOutline1 />
    </div>
  );
}

function BoxAttribute2() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Content5 />
          <Icon53 />
        </div>
      </div>
    </div>
  );
}

function Fieldset() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Fieldset">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Title />
          <BoxAttribute1 />
          <BoxAttribute2 />
        </div>
      </div>
    </div>
  );
}

function ScrollContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Scroll container">
      <BoxAttribute />
      <TextArea />
      <Fieldset />
    </div>
  );
}

function Body20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full z-[2]" data-name="Body">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <Header4 />
          <ScrollContainer />
        </div>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar
      </p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#0052cc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <Text52 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-center flex flex-wrap gap-[20px] items-center justify-end relative shrink-0 w-full z-[1]" data-name="Button">
      <Button6 />
    </div>
  );
}

function ModalDetailsD() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] h-[605px] isolate items-start left-1/2 p-[24px] rounded-[8px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[700px]" data-name="(Modal) details-D">
      <Icon51 />
      <Header3 />
      <Body20 />
      <Button7 />
    </div>
  );
}

function HomeScreenSaasD1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1024px] items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Home screen/Saas-D">
      <Header2 />
      <Container13 />
      <Blanket />
      <ModalDetailsD />
    </div>
  );
}

function Presente2() {
  return (
    <div className="h-[32px] max-h-[32px] max-w-[152.216px] relative shrink-0 w-[152.216px]" data-name="Presente">
      <div className="absolute bottom-[-50%] left-0 right-[-15.62%] top-0" data-name="image 7" />
    </div>
  );
}

function BusinessUnit4() {
  return (
    <div className="basis-0 grow h-[53px] min-h-px min-w-px relative shrink-0" data-name="Business unit">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center px-[16px] py-0 relative w-full">
          <Presente2 />
        </div>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Name">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sergio Nieto
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Content">
      <Name2 />
    </div>
  );
}

function ContentPerson2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_1_69176)" id="person_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p39507900} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69176">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon54() {
  return (
    <div className="basis-0 bg-[#0052cc] grow h-full min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Icon">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start p-[2px] relative size-full">
          <ContentPerson2 />
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="Avatar">
      <Icon54 />
    </div>
  );
}

function User4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end max-w-[180px] min-w-[32px] relative shrink-0 w-[32px]" data-name="User">
      <Content6 />
      <Avatar2 />
    </div>
  );
}

function User5() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-end justify-center px-[16px] py-[8px] relative shrink-0 w-[180px]" data-name="User">
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <User4 />
    </div>
  );
}

function Header5() {
  return (
    <div className="bg-white box-border content-stretch flex h-[53px] items-center relative shadow-[0px_1px_2px_0px_rgba(9,30,66,0.13),0px_1px_3px_1px_rgba(9,30,66,0.13)] shrink-0 w-full" data-name="Header">
      <BusinessUnit4 />
      <User5 />
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#5e6c84] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MENU
      </p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="heading">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Text53 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsMdSettings2() {
  return (
    <div className="absolute bottom-[16.67%] left-0 right-[16.67%] top-0" data-name="react-icons/MdSettings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31300)" id="react-icons/MdSettings">
          <g id="Vector"></g>
          <g id="Vector_2">
            <mask fill="white" id="path-1-inside-1_1_31300">
              <path d={svgPaths.p3c965b00} />
            </mask>
            <path d={svgPaths.p3c965b00} fill="var(--fill-0, #0052CC)" mask="url(#path-1-inside-1_1_31300)" stroke="var(--stroke-0, #0052CC)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_31300">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MyIcon16() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <ReactIconsMdSettings2 />
    </div>
  );
}

function Text54() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function NavigationChevronRight4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31322)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p4b63b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31322">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon55() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <NavigationChevronRight4 />
    </div>
  );
}

function Body21() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text54 />
      <Icon55 />
    </div>
  );
}

function MyNavLink16() {
  return (
    <div className="bg-[#ebecf0] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div aria-hidden="true" className="absolute border-[#0052cc] border-[0px_0px_0px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon16 />
          <Body21 />
        </div>
      </div>
    </div>
  );
}

function MyIcon17() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31318)" id="react-icons/MdOutlineCategory">
          <g id="Vector"></g>
          <path d={svgPaths.p411af80} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31318">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text55() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Suites
      </p>
    </div>
  );
}

function Body22() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text55 />
    </div>
  );
}

function MyNavLink17() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon17 />
          <Body22 />
        </div>
      </div>
    </div>
  );
}

function MyIcon18() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31293)" id="react-icons/MdOutlineApps">
          <g id="Vector"></g>
          <path d={svgPaths.p3e8b1540} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31293">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text56() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicaciones
      </p>
    </div>
  );
}

function Body23() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text56 />
    </div>
  );
}

function MyNavLink18() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon18 />
          <Body23 />
        </div>
      </div>
    </div>
  );
}

function MyIcon19() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31266)" id="react-icons/MdOutlineCorporateFare">
          <g id="Vector"></g>
          <path d={svgPaths.p3ad4d800} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31266">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text57() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Entidades
      </p>
    </div>
  );
}

function Body24() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text57 />
    </div>
  );
}

function MyNavLink19() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon19 />
          <Body24 />
        </div>
      </div>
    </div>
  );
}

function MyIcon20() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31241)" id="react-icons/MdOutlineAccountTree">
          <g id="Vector"></g>
          <path d={svgPaths.p1f142c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31241">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text58() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso
      </p>
    </div>
  );
}

function Body25() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text58 />
    </div>
  );
}

function MyNavLink20() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon20 />
          <Body25 />
        </div>
      </div>
    </div>
  );
}

function MyIcon21() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_69198)" id="react-icons/MdMiscellaneousServices">
          <g id="Vector"></g>
          <path d={svgPaths.p21830c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text59() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Microservicios
      </p>
    </div>
  );
}

function Body26() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text59 />
    </div>
  );
}

function MyNavLink21() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon21 />
          <Body26 />
        </div>
      </div>
    </div>
  );
}

function MyIcon22() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31304)" id="react-icons/MdOutlineEngineering">
          <g id="Vector"></g>
          <path d={svgPaths.p1eaa3cf0} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31304">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text60() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Procesos
      </p>
    </div>
  );
}

function Body27() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text60 />
    </div>
  );
}

function MyNavLink22() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon22 />
          <Body27 />
        </div>
      </div>
    </div>
  );
}

function MyIcon23() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31162)" id="react-icons/MdOutlineEvent">
          <g id="Vector"></g>
          <path d={svgPaths.p12e7ad00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31162">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text61() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Eventos
      </p>
    </div>
  );
}

function Body28() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text61 />
    </div>
  );
}

function MyNavLink23() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon23 />
          <Body28 />
        </div>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative w-full">
          <MyNavLink16 />
          <MyNavLink17 />
          <MyNavLink18 />
          <MyNavLink19 />
          <MyNavLink20 />
          <MyNavLink21 />
          <MyNavLink22 />
          <MyNavLink23 />
        </div>
      </div>
    </div>
  );
}

function Divider6() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="0" transform="translate(0 2)" width="216" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="216" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Divider7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-[24px] px-[16px] relative shrink-0 w-[248px]" data-name="divider">
      <Divider6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p1efcb880} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ActionLogout2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group8 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon">
      <ActionLogout2 />
    </div>
  );
}

function Text62() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar sesión
      </p>
    </div>
  );
}

function Body29() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text62 />
    </div>
  );
}

function NavLink2() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="NavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <Icon56 />
          <Body29 />
        </div>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative size-full">
          <NavLink2 />
        </div>
      </div>
    </div>
  );
}

function BusinessUnit5() {
  return (
    <div className="h-[31.998px] relative shrink-0 w-[96px]" data-name="Business Unit">
      <div className="absolute aspect-[91/64] bottom-0 left-[calc(50%-0.25px)] top-0 translate-x-[-50%]" data-name="image 27" />
    </div>
  );
}

function FooterLogo2() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-end px-[24px] py-[32px] relative shrink-0 w-[248px]" data-name="footerLogo">
      <BusinessUnit5 />
    </div>
  );
}

function Section4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="section">
      <Heading2 />
      <Div6 />
      <Divider7 />
      <Div7 />
      <FooterLogo2 />
    </div>
  );
}

function MyNav2() {
  return (
    <div className="bg-[#fafbfc] h-full relative shrink-0" data-name="myNav">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <Section4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BreadcrumbLink4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inicio
      </p>
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function BreadcrumbLink5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <Text63 />
    </div>
  );
}

function Breadcrumbs2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <BreadcrumbLink4 />
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">/</p>
      </div>
      <BreadcrumbLink5 />
    </div>
  );
}

function NavigationArrowBack2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31226)" id="Navigation/arrow_back">
          <g id="Vector"></g>
          <path d={svgPaths.p213ee031} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31226">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon">
      <NavigationArrowBack2 />
    </div>
  );
}

function Text64() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#091e42] text-[22px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon57 />
      <Text64 />
    </div>
  );
}

function Text65() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción servicio (pendiente).
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Text65 />
    </div>
  );
}

function Hgroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Hgroup">
      <Breadcrumbs2 />
      <Container17 />
    </div>
  );
}

function Text66() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0052cc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas vigentes
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Text66 />
    </div>
  );
}

function MyTab4() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container18 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="bg-[#0052cc] h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function ReportProblemBlack24Dp2() {
  return (
    <div className="absolute bottom-[-4.76%] left-0 right-0 top-[-9.52%]" data-name="report_problem_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_69194)" id="report_problem_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p268eda70} fill="var(--fill-0, #FF991F)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69194">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlertReportProblemOutline2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/report_problem_outline">
      <ReportProblemBlack24Dp2 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[14px]" data-name="Icon">
      <AlertReportProblemOutline2 />
    </div>
  );
}

function Text67() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicios Saas en trámite
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Icon58 />
      <Text67 />
    </div>
  );
}

function MyTab5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container19 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Group9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Group">
      <MyTab4 />
      <MyTab5 />
    </div>
  );
}

function TabContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab-Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Group9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_2px] border-solid bottom-[-2px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

function Text68() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sin filtros aún.
      </p>
    </div>
  );
}

function ContainerTags2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-center relative shrink-0 w-[772px]" data-name="Container-tags">
      <Text68 />
    </div>
  );
}

function Section5() {
  return (
    <div className="basis-0 bg-[#f4f5f7] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
          <ContainerTags2 />
        </div>
      </div>
    </div>
  );
}

function ActionFilterAltOff2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/Filter Alt Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31204)" id="Action/Filter Alt Off">
          <g id="Vector"></g>
          <path d={svgPaths.p15b19500} fill="var(--fill-0, #8993A4)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31204">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon59() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAltOff2 />
    </div>
  );
}

function Text69() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#6b778c] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quitar
      </p>
    </div>
  );
}

function Button8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#a5adba] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon59 />
      <Text69 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p2ed64500} fill="var(--fill-0, #0052CC)" id="Vector_2" />
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function ActionFilterAlt2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/filter_alt">
      <Group10 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAlt2 />
    </div>
  );
}

function Text70() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filtrar
      </p>
    </div>
  );
}

function Button9() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0052cc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon60 />
      <Text70 />
    </div>
  );
}

function ContainerButtons2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container-buttons">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full z-[1]" data-name="Container">
      <Section5 />
      <ContainerButtons2 />
    </div>
  );
}

function ContainerFilter2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-filter">
      <div className="flex flex-col items-end overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] isolate items-end p-[12px] relative w-full">
          <Container20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start pl-[16px] pr-0 py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#091e42] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

function ContentSearch2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31176)" id="Content/search">
          <g id="Vector"></g>
          <path d={svgPaths.p1cb35d00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31176">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentSearch2 />
    </div>
  );
}

function TextField4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Palabra clave</p>
          </div>
          <Icon61 />
        </div>
      </div>
    </div>
  );
}

function TextField5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label4 />
      <TextField4 />
    </div>
  );
}

function Searchfield2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Searchfield">
      <TextField5 />
    </div>
  );
}

function AddBlack24Dp2() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="add_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31198)" id="add_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p21cef280} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContentAdd2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/add">
      <AddBlack24Dp2 />
    </div>
  );
}

function Icon62() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentAdd2 />
    </div>
  );
}

function Text71() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agregar servicio Saas
      </p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#0052cc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Icon62 />
      <Text71 />
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[3]" data-name="Div">
      <Searchfield2 />
      <Button10 />
    </div>
  );
}

function Text72() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 z-[2]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#091e42] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consulta de servicios Saas disponibles
      </p>
    </div>
  );
}

function Th6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Th">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nombre del servicio
          </p>
        </div>
      </div>
    </div>
  );
}

function Th7() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Th8() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acciones
      </p>
    </div>
  );
}

function THead2() {
  return (
    <div className="h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="THead">
      <div className="content-stretch flex h-[48px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Th6 />
        <Th7 />
        <Th8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Td34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Generación de cobro x cliente
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility10 />
    </div>
  );
}

function Td35() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon63 />
    </div>
  );
}

function ActionPencil10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon64() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil10 />
    </div>
  );
}

function Td36() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon64 />
    </div>
  );
}

function Tr10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td34 />
        <Td35 />
        <Td36 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Causación y cobro de intereses Moratorios
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility11() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility11 />
    </div>
  );
}

function Td38() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon65 />
    </div>
  );
}

function ActionPencil11() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil11 />
    </div>
  );
}

function Td39() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon66 />
    </div>
  );
}

function UiActionsDelete4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon67() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete4 />
    </div>
  );
}

function Td40() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon67 />
    </div>
  );
}

function Tr11() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td37 />
      <Td38 />
      <Td39 />
      <Td40 />
    </div>
  );
}

function Td41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Gestión contable de la cartera (provisiones + causaciones)
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility12() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon68() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility12 />
    </div>
  );
}

function Td42() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon68 />
    </div>
  );
}

function ActionPencil12() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon69() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil12 />
    </div>
  );
}

function Td43() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon69 />
    </div>
  );
}

function Tr12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td41 />
        <Td42 />
        <Td43 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Comisiones de gestión de cobro
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility13() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon70() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility13 />
    </div>
  );
}

function Td45() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon70 />
    </div>
  );
}

function ActionPencil13() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon71() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil13 />
    </div>
  );
}

function Td46() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon71 />
    </div>
  );
}

function UiActionsDelete5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon72() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete5 />
    </div>
  );
}

function Td47() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon72 />
    </div>
  );
}

function Tr13() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td44 />
      <Td45 />
      <Td46 />
      <Td47 />
    </div>
  );
}

function Td48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Servicio Saas 5
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility14() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon73() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility14 />
    </div>
  );
}

function Td49() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon73 />
    </div>
  );
}

function ActionPencil14() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon74() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil14 />
    </div>
  );
}

function Td50() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon74 />
    </div>
  );
}

function Tr14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td48 />
        <Td49 />
        <Td50 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TBody2() {
  return (
    <div className="relative shrink-0 w-full" data-name="TBody">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Tr10 />
        <Tr11 />
        <Tr12 />
        <Tr13 />
        <Tr14 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text73() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1-8 of 8
      </p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Label">
      <Text73 />
    </div>
  );
}

function NavigationFirstPage2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/first_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31222)" id="Navigation/first_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p23d2bf0} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31222">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon75() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationFirstPage2 />
    </div>
  );
}

function PaginationControl8() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon75 />
    </div>
  );
}

function NavigationChevronLeft2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31289)" id="chevron_left_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13d11a80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31289">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon76() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronLeft2 />
    </div>
  );
}

function PaginationControl9() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon76 />
    </div>
  );
}

function NavigationChevronRight5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31270)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13ca2b80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31270">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon77() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronRight5 />
    </div>
  );
}

function PaginationControl10() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon77 />
    </div>
  );
}

function NavigationLastPage2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/last_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31311)" id="Navigation/last_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p2ca2ec00} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31311">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon78() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationLastPage2 />
    </div>
  );
}

function PaginationControl11() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon78 />
    </div>
  );
}

function Control2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Control">
      <PaginationControl8 />
      <PaginationControl9 />
      <PaginationControl10 />
      <PaginationControl11 />
    </div>
  );
}

function Pagination2() {
  return (
    <div className="basis-0 grow h-[50px] min-h-px min-w-px relative shrink-0" data-name="Pagination">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[50px] items-center justify-end px-[16px] py-0 relative w-full">
          <Label5 />
          <Control2 />
        </div>
      </div>
    </div>
  );
}

function TFoot2() {
  return (
    <div className="h-[50px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="TFoot">
      <div className="content-stretch flex h-[50px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Pagination2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function Table2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Table">
      <THead2 />
      <TBody2 />
      <TFoot2 />
    </div>
  );
}

function ContainerTable2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-table">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] isolate items-start p-[24px] relative w-full">
          <Div8 />
          <Text72 />
          <Table2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1064px]" data-name="Container">
      <Hgroup2 />
      <TabContainer2 />
      <ContainerFilter2 />
      <ContainerTable2 />
    </div>
  );
}

function Body30() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Body">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[64px] py-[32px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <MyNav2 />
      <Body30 />
    </div>
  );
}

function Blanket1() {
  return <div className="absolute bg-[rgba(9,30,66,0.54)] h-[1024px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1440px]" data-name="Blanket" />;
}

function Text74() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#091e42] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detalles
      </p>
    </div>
  );
}

function NavigationClose1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation/close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31150)" id="close_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31150">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextButton1() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-0 relative shrink-0" data-name="Text Button">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#091e42] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Cerrar</p>
      </div>
      <NavigationClose1 />
    </button>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text74 />
      <TextButton1 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Divider8() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 652 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="2" width="652" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="652" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start shrink-0 sticky top-0 w-full z-[3]" data-name="Header">
      <Container24 />
      <Divider8 />
    </div>
  );
}

function Text75() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6c84] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detalles del servicio Generación de cobro x cliente
      </p>
    </div>
  );
}

function Divider9() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 2">
        <g id="Divider">
          <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="4 4" strokeWidth="2" x2="620" y1="1" y2="1" />
        </g>
      </svg>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Text75 />
      <Divider9 />
    </div>
  );
}

function Text76() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicación a la que pertenece
      </p>
    </div>
  );
}

function Text77() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicación 1
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text76 />
      <Text77 />
    </div>
  );
}

function BoxAttribute3() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[6px] relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción del alcance del servicio
      </p>
    </div>
  );
}

function Text79() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

function Content8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text78 />
      <Text79 />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Text-area">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[16px] py-[6px] relative w-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function Text80() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#5e6c84] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso que lo soportan
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[19px] px-[6px] py-0 top-[-10px]" data-name="Title">
      <Text80 />
    </div>
  );
}

function Text81() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caso de uso 1
      </p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Content">
      <Text81 />
    </div>
  );
}

function AlertInfoOutline2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/info_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31281)" id="info_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p29ef6f00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31281">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon79() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <AlertInfoOutline2 />
    </div>
  );
}

function BoxAttribute4() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Content9 />
          <Icon79 />
        </div>
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caso de uso 2
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Content">
      <Text82 />
    </div>
  );
}

function AlertInfoOutline3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/info_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31281)" id="info_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p29ef6f00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31281">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon80() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <AlertInfoOutline3 />
    </div>
  );
}

function BoxAttribute5() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Content10 />
          <Icon80 />
        </div>
      </div>
    </div>
  );
}

function Fieldset1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Fieldset">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Title1 />
          <BoxAttribute4 />
          <BoxAttribute5 />
        </div>
      </div>
    </div>
  );
}

function Body31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full z-[2]" data-name="Body">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <Header7 />
          <BoxAttribute3 />
          <TextArea1 />
          <Fieldset1 />
        </div>
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar
      </p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#0052cc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <Text83 />
    </div>
  );
}

function Button12() {
  return (
    <div className="content-center flex flex-wrap gap-[20px] items-center justify-end relative shrink-0 w-full z-[1]" data-name="Button">
      <Button11 />
    </div>
  );
}

function ModalDetailsD1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] h-[605px] isolate items-start left-1/2 p-[24px] rounded-[8px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[700px]" data-name="(Modal) details-D">
      <Header6 />
      <Body31 />
      <Button12 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[4.17%_17.28%_8.33%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 28">
        <g id="Group">
          <path d={svgPaths.p307b2100} fill="var(--fill-0, white)" id="Rectangle 2" />
          <path d={svgPaths.p335dcd00} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[4.17%_17.28%_8.33%_16.67%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function ActionTouchApp() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/touch_app">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group12 />
    </div>
  );
}

function Icon81() {
  return (
    <div className="absolute content-stretch flex items-start left-[362px] size-[32px] top-[190px] z-[4]" data-name="Icon">
      <ActionTouchApp />
    </div>
  );
}

function Text84() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[#091e42] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alcance funcional
      </p>
    </div>
  );
}

function NavigationClose2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation/close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31150)" id="close_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31150">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextButton2() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-0 relative shrink-0" data-name="Text Button">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#091e42] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Cerrar</p>
      </div>
      <NavigationClose2 />
    </button>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text84 />
      <TextButton2 />
    </div>
  );
}

function Divider10() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="2" width="402" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="402" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start shrink-0 sticky top-0 w-full z-[3]" data-name="Header">
      <Container25 />
      <Divider10 />
    </div>
  );
}

function Text85() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. (Descripción del caso de uso).
      </p>
    </div>
  );
}

function Body32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[2]" data-name="Body">
      <Text85 />
    </div>
  );
}

function Text86() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Entendido
      </p>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#0065ff] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <Text86 />
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full z-[1]" data-name="Div">
      <Button13 />
    </div>
  );
}

function ModalRequestCertificateConfirmationD() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] isolate items-center left-1/2 p-[24px] rounded-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[450px]" data-name="(Modal) request-certificate-confirmation-D">
      <Icon81 />
      <Header8 />
      <Body32 />
      <Div9 />
    </div>
  );
}

function HomeScreenSaasD2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1024px] items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Home screen/Saas-D">
      <Header5 />
      <Container22 />
      <Blanket1 />
      <ModalDetailsD1 />
      <Blanket1 />
      <ModalRequestCertificateConfirmationD />
    </div>
  );
}

function Presente3() {
  return (
    <div className="h-[32px] max-h-[32px] max-w-[152.216px] relative shrink-0 w-[152.216px]" data-name="Presente">
      <div className="absolute bottom-[-50%] left-0 right-[-15.62%] top-0" data-name="image 7" />
    </div>
  );
}

function BusinessUnit6() {
  return (
    <div className="basis-0 grow h-[53px] min-h-px min-w-px relative shrink-0" data-name="Business unit">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center px-[16px] py-0 relative w-full">
          <Presente3 />
        </div>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Name">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sergio Nieto
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Content">
      <Name3 />
    </div>
  );
}

function ContentPerson3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_1_69176)" id="person_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p39507900} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69176">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon82() {
  return (
    <div className="basis-0 bg-[#0052cc] grow h-full min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Icon">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start p-[2px] relative size-full">
          <ContentPerson3 />
        </div>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="Avatar">
      <Icon82 />
    </div>
  );
}

function User6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end max-w-[180px] min-w-[32px] relative shrink-0 w-[32px]" data-name="User">
      <Content11 />
      <Avatar3 />
    </div>
  );
}

function User7() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-end justify-center px-[16px] py-[8px] relative shrink-0 w-[180px]" data-name="User">
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <User6 />
    </div>
  );
}

function Header9() {
  return (
    <div className="bg-white box-border content-stretch flex h-[53px] items-center relative shadow-[0px_1px_2px_0px_rgba(9,30,66,0.13),0px_1px_3px_1px_rgba(9,30,66,0.13)] shrink-0 w-full" data-name="Header">
      <BusinessUnit6 />
      <User7 />
    </div>
  );
}

function Text87() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#5e6c84] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MENU
      </p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="heading">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Text87 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsMdSettings3() {
  return (
    <div className="absolute bottom-[16.67%] left-0 right-[16.67%] top-0" data-name="react-icons/MdSettings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31300)" id="react-icons/MdSettings">
          <g id="Vector"></g>
          <g id="Vector_2">
            <mask fill="white" id="path-1-inside-1_1_31300">
              <path d={svgPaths.p3c965b00} />
            </mask>
            <path d={svgPaths.p3c965b00} fill="var(--fill-0, #0052CC)" mask="url(#path-1-inside-1_1_31300)" stroke="var(--stroke-0, #0052CC)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_31300">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MyIcon24() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <ReactIconsMdSettings3 />
    </div>
  );
}

function Text88() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function NavigationChevronRight6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31322)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p4b63b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31322">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon83() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <NavigationChevronRight6 />
    </div>
  );
}

function Body33() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text88 />
      <Icon83 />
    </div>
  );
}

function MyNavLink24() {
  return (
    <div className="bg-[#ebecf0] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div aria-hidden="true" className="absolute border-[#0052cc] border-[0px_0px_0px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon24 />
          <Body33 />
        </div>
      </div>
    </div>
  );
}

function MyIcon25() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31318)" id="react-icons/MdOutlineCategory">
          <g id="Vector"></g>
          <path d={svgPaths.p411af80} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31318">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text89() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Suites
      </p>
    </div>
  );
}

function Body34() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text89 />
    </div>
  );
}

function MyNavLink25() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon25 />
          <Body34 />
        </div>
      </div>
    </div>
  );
}

function MyIcon26() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31293)" id="react-icons/MdOutlineApps">
          <g id="Vector"></g>
          <path d={svgPaths.p3e8b1540} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31293">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text90() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicaciones
      </p>
    </div>
  );
}

function Body35() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text90 />
    </div>
  );
}

function MyNavLink26() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon26 />
          <Body35 />
        </div>
      </div>
    </div>
  );
}

function MyIcon27() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31266)" id="react-icons/MdOutlineCorporateFare">
          <g id="Vector"></g>
          <path d={svgPaths.p3ad4d800} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31266">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text91() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Entidades
      </p>
    </div>
  );
}

function Body36() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text91 />
    </div>
  );
}

function MyNavLink27() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon27 />
          <Body36 />
        </div>
      </div>
    </div>
  );
}

function MyIcon28() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31241)" id="react-icons/MdOutlineAccountTree">
          <g id="Vector"></g>
          <path d={svgPaths.p1f142c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31241">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text92() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso
      </p>
    </div>
  );
}

function Body37() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text92 />
    </div>
  );
}

function MyNavLink28() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon28 />
          <Body37 />
        </div>
      </div>
    </div>
  );
}

function MyIcon29() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_69198)" id="react-icons/MdMiscellaneousServices">
          <g id="Vector"></g>
          <path d={svgPaths.p21830c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text93() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Microservicios
      </p>
    </div>
  );
}

function Body38() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text93 />
    </div>
  );
}

function MyNavLink29() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon29 />
          <Body38 />
        </div>
      </div>
    </div>
  );
}

function MyIcon30() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31304)" id="react-icons/MdOutlineEngineering">
          <g id="Vector"></g>
          <path d={svgPaths.p1eaa3cf0} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31304">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text94() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Procesos
      </p>
    </div>
  );
}

function Body39() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text94 />
    </div>
  );
}

function MyNavLink30() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon30 />
          <Body39 />
        </div>
      </div>
    </div>
  );
}

function MyIcon31() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31162)" id="react-icons/MdOutlineEvent">
          <g id="Vector"></g>
          <path d={svgPaths.p12e7ad00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31162">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text95() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Eventos
      </p>
    </div>
  );
}

function Body40() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text95 />
    </div>
  );
}

function MyNavLink31() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon31 />
          <Body40 />
        </div>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative w-full">
          <MyNavLink24 />
          <MyNavLink25 />
          <MyNavLink26 />
          <MyNavLink27 />
          <MyNavLink28 />
          <MyNavLink29 />
          <MyNavLink30 />
          <MyNavLink31 />
        </div>
      </div>
    </div>
  );
}

function Divider11() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="0" transform="translate(0 2)" width="216" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="216" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Divider12() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-[24px] px-[16px] relative shrink-0 w-[248px]" data-name="divider">
      <Divider11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p1efcb880} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ActionLogout3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group13 />
    </div>
  );
}

function Icon84() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon">
      <ActionLogout3 />
    </div>
  );
}

function Text96() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar sesión
      </p>
    </div>
  );
}

function Body41() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text96 />
    </div>
  );
}

function NavLink3() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="NavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <Icon84 />
          <Body41 />
        </div>
      </div>
    </div>
  );
}

function Div11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative size-full">
          <NavLink3 />
        </div>
      </div>
    </div>
  );
}

function BusinessUnit7() {
  return (
    <div className="h-[31.998px] relative shrink-0 w-[96px]" data-name="Business Unit">
      <div className="absolute aspect-[91/64] bottom-0 left-[calc(50%-0.25px)] top-0 translate-x-[-50%]" data-name="image 27" />
    </div>
  );
}

function FooterLogo3() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-end px-[24px] py-[32px] relative shrink-0 w-[248px]" data-name="footerLogo">
      <BusinessUnit7 />
    </div>
  );
}

function Section6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="section">
      <Heading3 />
      <Div10 />
      <Divider12 />
      <Div11 />
      <FooterLogo3 />
    </div>
  );
}

function MyNav3() {
  return (
    <div className="bg-[#fafbfc] h-full relative shrink-0" data-name="myNav">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <Section6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BreadcrumbLink6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inicio
      </p>
    </div>
  );
}

function Text97() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function BreadcrumbLink7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <Text97 />
    </div>
  );
}

function Breadcrumbs3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <BreadcrumbLink6 />
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">/</p>
      </div>
      <BreadcrumbLink7 />
    </div>
  );
}

function NavigationArrowBack3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31226)" id="Navigation/arrow_back">
          <g id="Vector"></g>
          <path d={svgPaths.p213ee031} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31226">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon85() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon">
      <NavigationArrowBack3 />
    </div>
  );
}

function Text98() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#091e42] text-[22px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon85 />
      <Text98 />
    </div>
  );
}

function Text99() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción servicio (pendiente).
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Text99 />
    </div>
  );
}

function Hgroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Hgroup">
      <Breadcrumbs3 />
      <Container27 />
    </div>
  );
}

function Text100() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0052cc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas vigentes
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Text100 />
    </div>
  );
}

function MyTab6() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container28 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="bg-[#0052cc] h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function ReportProblemBlack24Dp3() {
  return (
    <div className="absolute bottom-[-4.76%] left-0 right-0 top-[-9.52%]" data-name="report_problem_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_69194)" id="report_problem_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p268eda70} fill="var(--fill-0, #FF991F)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69194">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlertReportProblemOutline3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/report_problem_outline">
      <ReportProblemBlack24Dp3 />
    </div>
  );
}

function Icon86() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[14px]" data-name="Icon">
      <AlertReportProblemOutline3 />
    </div>
  );
}

function Text101() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicios Saas en trámite
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Icon86 />
      <Text101 />
    </div>
  );
}

function MyTab7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container29 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Group14() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Group">
      <MyTab6 />
      <MyTab7 />
    </div>
  );
}

function TabContainer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab-Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Group14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_2px] border-solid bottom-[-2px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

function Text102() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sin filtros aún.
      </p>
    </div>
  );
}

function ContainerTags3() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-center relative shrink-0 w-[772px]" data-name="Container-tags">
      <Text102 />
    </div>
  );
}

function Section7() {
  return (
    <div className="basis-0 bg-[#f4f5f7] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
          <ContainerTags3 />
        </div>
      </div>
    </div>
  );
}

function ActionFilterAltOff3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/Filter Alt Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31204)" id="Action/Filter Alt Off">
          <g id="Vector"></g>
          <path d={svgPaths.p15b19500} fill="var(--fill-0, #8993A4)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31204">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon87() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAltOff3 />
    </div>
  );
}

function Text103() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#6b778c] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quitar
      </p>
    </div>
  );
}

function Button14() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#a5adba] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon87 />
      <Text103 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p2ed64500} fill="var(--fill-0, #0052CC)" id="Vector_2" />
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function ActionFilterAlt3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/filter_alt">
      <Group15 />
    </div>
  );
}

function Icon88() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAlt3 />
    </div>
  );
}

function Text104() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filtrar
      </p>
    </div>
  );
}

function Button15() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0052cc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon88 />
      <Text104 />
    </div>
  );
}

function ContainerButtons3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container-buttons">
      <Button14 />
      <Button15 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full z-[1]" data-name="Container">
      <Section7 />
      <ContainerButtons3 />
    </div>
  );
}

function ContainerFilter3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-filter">
      <div className="flex flex-col items-end overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] isolate items-end p-[12px] relative w-full">
          <Container30 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start pl-[16px] pr-0 py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#091e42] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

function ContentSearch3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31176)" id="Content/search">
          <g id="Vector"></g>
          <path d={svgPaths.p1cb35d00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31176">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon89() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentSearch3 />
    </div>
  );
}

function TextField6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Palabra clave</p>
          </div>
          <Icon89 />
        </div>
      </div>
    </div>
  );
}

function TextField7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label6 />
      <TextField6 />
    </div>
  );
}

function Searchfield3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Searchfield">
      <TextField7 />
    </div>
  );
}

function AddBlack24Dp3() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="add_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31198)" id="add_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p21cef280} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContentAdd3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/add">
      <AddBlack24Dp3 />
    </div>
  );
}

function Icon90() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentAdd3 />
    </div>
  );
}

function Text105() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agregar servicio Saas
      </p>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#0052cc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Icon90 />
      <Text105 />
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[3]" data-name="Div">
      <Searchfield3 />
      <Button16 />
    </div>
  );
}

function Text106() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 z-[2]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#091e42] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consulta de servicios Saas disponibles
      </p>
    </div>
  );
}

function Th9() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Th">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nombre del servicio
          </p>
        </div>
      </div>
    </div>
  );
}

function Th10() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Th11() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acciones
      </p>
    </div>
  );
}

function THead3() {
  return (
    <div className="h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="THead">
      <div className="content-stretch flex h-[48px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Th9 />
        <Th10 />
        <Th11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Td51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Generación de cobro x cliente
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility15() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon91() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility15 />
    </div>
  );
}

function Td52() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon91 />
    </div>
  );
}

function ActionPencil15() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon92() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil15 />
    </div>
  );
}

function Td53() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon92 />
    </div>
  );
}

function Tr15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td51 />
        <Td52 />
        <Td53 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Causación y cobro de intereses Moratorios
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility16() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon93() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility16 />
    </div>
  );
}

function Td55() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon93 />
    </div>
  );
}

function ActionPencil16() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon94() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil16 />
    </div>
  );
}

function Td56() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon94 />
    </div>
  );
}

function UiActionsDelete6() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon95() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete6 />
    </div>
  );
}

function Td57() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon95 />
    </div>
  );
}

function Tr16() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td54 />
      <Td55 />
      <Td56 />
      <Td57 />
    </div>
  );
}

function Td58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Gestión contable de la cartera (provisiones + causaciones)
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility17() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon96() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility17 />
    </div>
  );
}

function Td59() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon96 />
    </div>
  );
}

function ActionPencil17() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon97() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil17 />
    </div>
  );
}

function Td60() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon97 />
    </div>
  );
}

function Tr17() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td58 />
        <Td59 />
        <Td60 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Comisiones de gestión de cobro
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility18() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon98() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility18 />
    </div>
  );
}

function Td62() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon98 />
    </div>
  );
}

function ActionPencil18() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon99() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil18 />
    </div>
  );
}

function Td63() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon99 />
    </div>
  );
}

function UiActionsDelete7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon100() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete7 />
    </div>
  );
}

function Td64() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon100 />
    </div>
  );
}

function Tr18() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td61 />
      <Td62 />
      <Td63 />
      <Td64 />
    </div>
  );
}

function Td65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Servicio Saas 5
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility19() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon101() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility19 />
    </div>
  );
}

function Td66() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon101 />
    </div>
  );
}

function ActionPencil19() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon102() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil19 />
    </div>
  );
}

function Td67() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon102 />
    </div>
  );
}

function Tr19() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td65 />
        <Td66 />
        <Td67 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TBody3() {
  return (
    <div className="relative shrink-0 w-full" data-name="TBody">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Tr15 />
        <Tr16 />
        <Tr17 />
        <Tr18 />
        <Tr19 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text107() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1-8 of 8
      </p>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Label">
      <Text107 />
    </div>
  );
}

function NavigationFirstPage3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/first_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31222)" id="Navigation/first_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p23d2bf0} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31222">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon103() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationFirstPage3 />
    </div>
  );
}

function PaginationControl12() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon103 />
    </div>
  );
}

function NavigationChevronLeft3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31289)" id="chevron_left_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13d11a80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31289">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon104() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronLeft3 />
    </div>
  );
}

function PaginationControl13() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon104 />
    </div>
  );
}

function NavigationChevronRight7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31270)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13ca2b80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31270">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon105() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronRight7 />
    </div>
  );
}

function PaginationControl14() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon105 />
    </div>
  );
}

function NavigationLastPage3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/last_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31311)" id="Navigation/last_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p2ca2ec00} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31311">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon106() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationLastPage3 />
    </div>
  );
}

function PaginationControl15() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon106 />
    </div>
  );
}

function Control3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Control">
      <PaginationControl12 />
      <PaginationControl13 />
      <PaginationControl14 />
      <PaginationControl15 />
    </div>
  );
}

function Pagination3() {
  return (
    <div className="basis-0 grow h-[50px] min-h-px min-w-px relative shrink-0" data-name="Pagination">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[50px] items-center justify-end px-[16px] py-0 relative w-full">
          <Label7 />
          <Control3 />
        </div>
      </div>
    </div>
  );
}

function TFoot3() {
  return (
    <div className="h-[50px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="TFoot">
      <div className="content-stretch flex h-[50px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Pagination3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function Table3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Table">
      <THead3 />
      <TBody3 />
      <TFoot3 />
    </div>
  );
}

function ContainerTable3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-table">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] isolate items-start p-[24px] relative w-full">
          <Div12 />
          <Text106 />
          <Table3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1064px]" data-name="Container">
      <Hgroup3 />
      <TabContainer3 />
      <ContainerFilter3 />
      <ContainerTable3 />
    </div>
  );
}

function Body42() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Body">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[64px] py-[32px] relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <MyNav3 />
      <Body42 />
    </div>
  );
}

function Blanket2() {
  return <div className="absolute bg-[rgba(9,30,66,0.54)] h-[1024px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1440px]" data-name="Blanket" />;
}

function Text108() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#091e42] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detalles
      </p>
    </div>
  );
}

function NavigationClose3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation/close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31150)" id="close_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31150">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TextButton3() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center p-0 relative shrink-0" data-name="Text Button">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#091e42] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Cerrar</p>
      </div>
      <NavigationClose3 />
    </button>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text108 />
      <TextButton3 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
    </div>
  );
}

function Divider13() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 652 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="2" width="652" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="652" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start shrink-0 sticky top-0 w-full z-[3]" data-name="Header">
      <Container34 />
      <Divider13 />
    </div>
  );
}

function Text109() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6c84] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detalles del servicio Generación de cobro x cliente
      </p>
    </div>
  );
}

function Divider14() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 2">
        <g id="Divider">
          <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeDasharray="4 4" strokeWidth="2" x2="620" y1="1" y2="1" />
        </g>
      </svg>
    </div>
  );
}

function Header11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Text109 />
      <Divider14 />
    </div>
  );
}

function Text110() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicación a la que pertenece
      </p>
    </div>
  );
}

function Text111() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicación 1
      </p>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text110 />
      <Text111 />
    </div>
  );
}

function BoxAttribute6() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[16px] py-[6px] relative w-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function Text112() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción del alcance del servicio
      </p>
    </div>
  );
}

function Text113() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Text112 />
      <Text113 />
    </div>
  );
}

function TextArea2() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Text-area">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[16px] py-[6px] relative w-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function Text114() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#5e6c84] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso que lo soportan
      </p>
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[19px] px-[6px] py-0 top-[-10px]" data-name="Title">
      <Text114 />
    </div>
  );
}

function Text115() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caso de uso 1
      </p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Content">
      <Text115 />
    </div>
  );
}

function AlertInfoOutline4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/info_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31281)" id="info_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p29ef6f00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31281">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon107() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <AlertInfoOutline4 />
    </div>
  );
}

function BoxAttribute7() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Content14 />
          <Icon107 />
        </div>
      </div>
    </div>
  );
}

function Text116() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caso de uso 2
      </p>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Content">
      <Text116 />
    </div>
  );
}

function AlertInfoOutline5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/info_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31281)" id="info_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p29ef6f00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31281">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon108() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <AlertInfoOutline5 />
    </div>
  );
}

function BoxAttribute8() {
  return (
    <div className="bg-[#fafbfc] relative rounded-[8px] shrink-0 w-full" data-name="Box Attribute">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Content15 />
          <Icon108 />
        </div>
      </div>
    </div>
  );
}

function Fieldset2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Fieldset">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Title2 />
          <BoxAttribute7 />
          <BoxAttribute8 />
        </div>
      </div>
    </div>
  );
}

function ScrollContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Scroll container">
      <BoxAttribute6 />
      <TextArea2 />
      <Fieldset2 />
    </div>
  );
}

function Body43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full z-[2]" data-name="Body">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <Header11 />
          <ScrollContainer1 />
        </div>
      </div>
    </div>
  );
}

function Text117() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar
      </p>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#0065ff] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <Text117 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[4.17%_17.28%_8.33%_16.67%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 28">
        <g id="Group">
          <path d={svgPaths.p307b2100} fill="var(--fill-0, white)" id="Rectangle 2" />
          <path d={svgPaths.p335dcd00} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[4.17%_17.28%_8.33%_16.67%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function ActionTouchApp1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/touch_app">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group17 />
    </div>
  );
}

function Icon109() {
  return (
    <div className="absolute content-stretch flex items-start left-[612px] size-[32px] top-[8px]" data-name="Icon">
      <ActionTouchApp1 />
    </div>
  );
}

function Button18() {
  return (
    <div className="content-center flex flex-wrap gap-[20px] items-center justify-end relative shrink-0 w-full z-[1]" data-name="Button">
      <Button17 />
      <Icon109 />
    </div>
  );
}

function ModalDetailsD2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] h-[605px] isolate items-start left-1/2 p-[24px] rounded-[8px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[700px]" data-name="(Modal) details-D">
      <Header10 />
      <Body43 />
      <Button18 />
    </div>
  );
}

function HomeScreenSaasD3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1024px] items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Home screen/Saas-D">
      <Header9 />
      <Container32 />
      <Blanket2 />
      <ModalDetailsD2 />
    </div>
  );
}

function Presente4() {
  return (
    <div className="h-[32px] max-h-[32px] max-w-[152.216px] relative shrink-0 w-[152.216px]" data-name="Presente">
      <div className="absolute bottom-[-50%] left-0 right-[-15.62%] top-0" data-name="image 7" />
    </div>
  );
}

function BusinessUnit8() {
  return (
    <div className="basis-0 grow h-[53px] min-h-px min-w-px relative shrink-0" data-name="Business unit">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center px-[16px] py-0 relative w-full">
          <Presente4 />
        </div>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Name">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sergio Nieto
      </p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Content">
      <Name4 />
    </div>
  );
}

function ContentPerson4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_1_69176)" id="person_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p39507900} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69176">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon110() {
  return (
    <div className="basis-0 bg-[#0052cc] grow h-full min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Icon">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start p-[2px] relative size-full">
          <ContentPerson4 />
        </div>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="Avatar">
      <Icon110 />
    </div>
  );
}

function User8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end max-w-[180px] min-w-[32px] relative shrink-0 w-[32px]" data-name="User">
      <Content16 />
      <Avatar4 />
    </div>
  );
}

function User9() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-end justify-center px-[16px] py-[8px] relative shrink-0 w-[180px]" data-name="User">
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <User8 />
    </div>
  );
}

function Header12() {
  return (
    <div className="bg-white box-border content-stretch flex h-[53px] items-center relative shadow-[0px_1px_2px_0px_rgba(9,30,66,0.13),0px_1px_3px_1px_rgba(9,30,66,0.13)] shrink-0 w-full z-[2]" data-name="Header">
      <BusinessUnit8 />
      <User9 />
    </div>
  );
}

function Text118() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#5e6c84] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        MENU
      </p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="heading">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-[32px] px-[16px] relative w-full">
          <Text118 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsMdSettings4() {
  return (
    <div className="absolute bottom-[16.67%] left-0 right-[16.67%] top-0" data-name="react-icons/MdSettings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31300)" id="react-icons/MdSettings">
          <g id="Vector"></g>
          <g id="Vector_2">
            <mask fill="white" id="path-1-inside-1_1_31300">
              <path d={svgPaths.p3c965b00} />
            </mask>
            <path d={svgPaths.p3c965b00} fill="var(--fill-0, #0052CC)" mask="url(#path-1-inside-1_1_31300)" stroke="var(--stroke-0, #0052CC)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_31300">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MyIcon32() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <ReactIconsMdSettings4 />
    </div>
  );
}

function Text119() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function NavigationChevronRight8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31322)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p4b63b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31322">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon111() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[20px]" data-name="Icon">
      <NavigationChevronRight8 />
    </div>
  );
}

function Body44() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text119 />
      <Icon111 />
    </div>
  );
}

function MyNavLink32() {
  return (
    <div className="bg-[#ebecf0] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div aria-hidden="true" className="absolute border-[#0052cc] border-[0px_0px_0px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon32 />
          <Body44 />
        </div>
      </div>
    </div>
  );
}

function MyIcon33() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31318)" id="react-icons/MdOutlineCategory">
          <g id="Vector"></g>
          <path d={svgPaths.p411af80} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31318">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text120() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Suites
      </p>
    </div>
  );
}

function Body45() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text120 />
    </div>
  );
}

function MyNavLink33() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon33 />
          <Body45 />
        </div>
      </div>
    </div>
  );
}

function MyIcon34() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31293)" id="react-icons/MdOutlineApps">
          <g id="Vector"></g>
          <path d={svgPaths.p3e8b1540} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31293">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text121() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aplicaciones
      </p>
    </div>
  );
}

function Body46() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text121 />
    </div>
  );
}

function MyNavLink34() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon34 />
          <Body46 />
        </div>
      </div>
    </div>
  );
}

function MyIcon35() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31266)" id="react-icons/MdOutlineCorporateFare">
          <g id="Vector"></g>
          <path d={svgPaths.p3ad4d800} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31266">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text122() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Entidades
      </p>
    </div>
  );
}

function Body47() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text122 />
    </div>
  );
}

function MyNavLink35() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon35 />
          <Body47 />
        </div>
      </div>
    </div>
  );
}

function MyIcon36() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31241)" id="react-icons/MdOutlineAccountTree">
          <g id="Vector"></g>
          <path d={svgPaths.p1f142c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31241">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text123() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso
      </p>
    </div>
  );
}

function Body48() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text123 />
    </div>
  );
}

function MyNavLink36() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon36 />
          <Body48 />
        </div>
      </div>
    </div>
  );
}

function MyIcon37() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_69198)" id="react-icons/MdMiscellaneousServices">
          <g id="Vector"></g>
          <path d={svgPaths.p21830c00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text124() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Microservicios
      </p>
    </div>
  );
}

function Body49() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text124 />
    </div>
  );
}

function MyNavLink37() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon37 />
          <Body49 />
        </div>
      </div>
    </div>
  );
}

function MyIcon38() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31304)" id="react-icons/MdOutlineEngineering">
          <g id="Vector"></g>
          <path d={svgPaths.p1eaa3cf0} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31304">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text125() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Procesos
      </p>
    </div>
  );
}

function Body50() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text125 />
    </div>
  );
}

function MyNavLink38() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon38 />
          <Body50 />
        </div>
      </div>
    </div>
  );
}

function MyIcon39() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31162)" id="react-icons/MdOutlineEvent">
          <g id="Vector"></g>
          <path d={svgPaths.p12e7ad00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31162">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text126() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Eventos
      </p>
    </div>
  );
}

function Body51() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text126 />
    </div>
  );
}

function MyNavLink39() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <MyIcon39 />
          <Body51 />
        </div>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative w-full">
          <MyNavLink32 />
          <MyNavLink33 />
          <MyNavLink34 />
          <MyNavLink35 />
          <MyNavLink36 />
          <MyNavLink37 />
          <MyNavLink38 />
          <MyNavLink39 />
        </div>
      </div>
    </div>
  );
}

function Divider15() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-[-2px]" style={{ "--fill-0": "rgba(223, 225, 230, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 2">
          <g id="Divider">
            <rect fill="#DFE1E6" height="0" transform="translate(0 2)" width="216" />
            <line id="Stroke" stroke="var(--stroke-0, #DFE1E6)" strokeWidth="2" x2="216" y1="1" y2="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Divider16() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-[24px] px-[16px] relative shrink-0 w-[248px]" data-name="divider">
      <Divider15 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p1efcb880} fill="var(--fill-0, #091E42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ActionLogout4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
        </g>
      </svg>
      <Group18 />
    </div>
  );
}

function Icon112() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[24px]" data-name="Icon">
      <ActionLogout4 />
    </div>
  );
}

function Text127() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cerrar sesión
      </p>
    </div>
  );
}

function Body52() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text127 />
    </div>
  );
}

function NavLink4() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="NavLink">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center pl-[16px] pr-[8px] py-0 relative w-full">
          <Icon112 />
          <Body52 />
        </div>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="div">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[6px] py-0 relative size-full">
          <NavLink4 />
        </div>
      </div>
    </div>
  );
}

function BusinessUnit9() {
  return (
    <div className="h-[31.998px] relative shrink-0 w-[96px]" data-name="Business Unit">
      <div className="absolute aspect-[91/64] bottom-0 left-[calc(50%-0.25px)] top-0 translate-x-[-50%]" data-name="image 27" />
    </div>
  );
}

function FooterLogo4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-end px-[24px] py-[32px] relative shrink-0 w-[248px]" data-name="footerLogo">
      <BusinessUnit9 />
    </div>
  );
}

function Section8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="section">
      <Heading4 />
      <Div13 />
      <Divider16 />
      <Div14 />
      <FooterLogo4 />
    </div>
  );
}

function MyNav4() {
  return (
    <div className="bg-[#fafbfc] h-full relative shrink-0" data-name="myNav">
      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <Section8 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BreadcrumbLink8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inicio
      </p>
    </div>
  );
}

function Text128() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function BreadcrumbLink9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <Text128 />
    </div>
  );
}

function Breadcrumbs4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Breadcrumbs">
      <BreadcrumbLink8 />
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">/</p>
      </div>
      <BreadcrumbLink9 />
    </div>
  );
}

function NavigationArrowBack4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_31226)" id="Navigation/arrow_back">
          <g id="Vector"></g>
          <path d={svgPaths.p213ee031} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31226">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon113() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[20px]" data-name="Icon">
      <NavigationArrowBack4 />
    </div>
  );
}

function Text129() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#091e42] text-[22px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon113 />
      <Text129 />
    </div>
  );
}

function Text130() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción servicio (pendiente).
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Text130 />
    </div>
  );
}

function Hgroup4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Hgroup">
      <Breadcrumbs4 />
      <Container36 />
    </div>
  );
}

function Text131() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0052cc] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas vigentes
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Text131 />
    </div>
  );
}

function MyTab8() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container37 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="bg-[#0052cc] h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function ReportProblemBlack24Dp4() {
  return (
    <div className="absolute bottom-[-4.76%] left-0 right-0 top-[-9.52%]" data-name="report_problem_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g clipPath="url(#clip0_1_69194)" id="report_problem_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p268eda70} fill="var(--fill-0, #FF991F)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_69194">
            <rect fill="white" height="16" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AlertReportProblemOutline4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Alert/report_problem_outline">
      <ReportProblemBlack24Dp4 />
    </div>
  );
}

function Icon114() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[14px]" data-name="Icon">
      <AlertReportProblemOutline4 />
    </div>
  );
}

function Text132() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicios Saas en trámite
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Icon114 />
      <Text132 />
    </div>
  );
}

function MyTab9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="myTab">
      <div className="h-[8px] shrink-0 w-[25px]" data-name="Pading" />
      <Container38 />
      <div className="h-[4px] shrink-0 w-[25px]" data-name="Pading" />
      <div className="h-[4px] shrink-0 w-full" data-name="Indicator" />
    </div>
  );
}

function Group19() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Group">
      <MyTab8 />
      <MyTab9 />
    </div>
  );
}

function TabContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tab-Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
          <Group19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_2px] border-solid bottom-[-2px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

function Text133() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5e6c84] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sin filtros aún.
      </p>
    </div>
  );
}

function ContainerTags4() {
  return (
    <div className="content-stretch flex gap-[6px] h-[20px] items-center relative shrink-0 w-[772px]" data-name="Container-tags">
      <Text133 />
    </div>
  );
}

function Section9() {
  return (
    <div className="basis-0 bg-[#f4f5f7] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Section">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
          <ContainerTags4 />
        </div>
      </div>
    </div>
  );
}

function ActionFilterAltOff4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/Filter Alt Off">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31204)" id="Action/Filter Alt Off">
          <g id="Vector"></g>
          <path d={svgPaths.p15b19500} fill="var(--fill-0, #8993A4)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31204">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon115() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAltOff4 />
    </div>
  );
}

function Text134() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#6b778c] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quitar
      </p>
    </div>
  );
}

function Button19() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#a5adba] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon115 />
      <Text134 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p2ed64500} fill="var(--fill-0, #0052CC)" id="Vector_2" />
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function ActionFilterAlt4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/filter_alt">
      <Group20 />
    </div>
  );
}

function Icon116() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAlt4 />
    </div>
  );
}

function Text135() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filtrar
      </p>
    </div>
  );
}

function Button20() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0052cc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon116 />
      <Text135 />
    </div>
  );
}

function ContainerButtons4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container-buttons">
      <Button19 />
      <Button20 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full z-[1]" data-name="Container">
      <Section9 />
      <ContainerButtons4 />
    </div>
  );
}

function ContainerFilter4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-filter">
      <div className="flex flex-col items-end overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] isolate items-end p-[12px] relative w-full">
          <Container39 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start pl-[16px] pr-0 py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#091e42] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

function ContentSearch4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_31176)" id="Content/search">
          <g id="Vector"></g>
          <path d={svgPaths.p1cb35d00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31176">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon117() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentSearch4 />
    </div>
  );
}

function TextField8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Palabra clave</p>
          </div>
          <Icon117 />
        </div>
      </div>
    </div>
  );
}

function TextField9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text field">
      <Label8 />
      <TextField8 />
    </div>
  );
}

function Searchfield4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[280px]" data-name="Searchfield">
      <TextField9 />
    </div>
  );
}

function AddBlack24Dp4() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="add_black_24dp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_31198)" id="add_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p21cef280} fill="var(--fill-0, #FAFBFC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31198">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ContentAdd4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content/add">
      <AddBlack24Dp4 />
    </div>
  );
}

function Icon118() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentAdd4 />
    </div>
  );
}

function Text136() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agregar servicio Saas
      </p>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#0052cc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0 w-[199px]" data-name="Button">
      <Icon118 />
      <Text136 />
    </div>
  );
}

function Div15() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[3]" data-name="Div">
      <Searchfield4 />
      <Button21 />
    </div>
  );
}

function Text137() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 z-[2]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#091e42] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consulta de servicios Saas disponibles
      </p>
    </div>
  );
}

function Th12() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Th">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Nombre del servicio
          </p>
        </div>
      </div>
    </div>
  );
}

function Th13() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Th14() {
  return (
    <div className="bg-[#ebecf0] box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Th">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acciones
      </p>
    </div>
  );
}

function THead4() {
  return (
    <div className="h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="THead">
      <div className="content-stretch flex h-[48px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Th12 />
        <Th13 />
        <Th14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function Td68() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Generación de cobro x cliente
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility20() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon119() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility20 />
    </div>
  );
}

function Td69() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon119 />
    </div>
  );
}

function ActionPencil20() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon120() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil20 />
    </div>
  );
}

function Td70() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon120 />
    </div>
  );
}

function Tr20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td68 />
        <Td69 />
        <Td70 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td71() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Causación y cobro de intereses Moratorios
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility21() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon121() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility21 />
    </div>
  );
}

function Td72() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon121 />
    </div>
  );
}

function ActionPencil21() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon122() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil21 />
    </div>
  );
}

function Td73() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon122 />
    </div>
  );
}

function UiActionsDelete8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon123() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete8 />
    </div>
  );
}

function Td74() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon123 />
    </div>
  );
}

function Tr21() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td71 />
      <Td72 />
      <Td73 />
      <Td74 />
    </div>
  );
}

function Td75() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Gestión contable de la cartera (provisiones + causaciones)
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility22() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon124() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility22 />
    </div>
  );
}

function Td76() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon124 />
    </div>
  );
}

function ActionPencil22() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon125() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil22 />
    </div>
  );
}

function Td77() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon125 />
    </div>
  );
}

function Tr22() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td75 />
        <Td76 />
        <Td77 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Td78() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Comisiones de gestión de cobro
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility23() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon126() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility23 />
    </div>
  );
}

function Td79() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon126 />
    </div>
  );
}

function ActionPencil23() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon127() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil23 />
    </div>
  );
}

function Td80() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon127 />
    </div>
  );
}

function UiActionsDelete9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="UI Actions/delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #DE350B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon128() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete9 />
    </div>
  );
}

function Td81() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon128 />
    </div>
  );
}

function Tr23() {
  return (
    <div className="bg-[#ebecf0] content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Tr">
      <Td78 />
      <Td79 />
      <Td80 />
      <Td81 />
    </div>
  );
}

function Td82() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Td">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#091e42] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Servicio Saas 5
          </p>
        </div>
      </div>
    </div>
  );
}

function ActionVisibility24() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Action/visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31230)" id="visibility_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.pd22ee00} fill="var(--fill-0, #091E42)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31230">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon129() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility24 />
    </div>
  );
}

function Td83() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon129 />
    </div>
  );
}

function ActionPencil24() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31218)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31218">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon130() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil24 />
    </div>
  );
}

function Td84() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon130 />
    </div>
  );
}

function Tr24() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <Td82 />
        <Td83 />
        <Td84 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TBody4() {
  return (
    <div className="relative shrink-0 w-full" data-name="TBody">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Tr20 />
        <Tr21 />
        <Tr22 />
        <Tr23 />
        <Tr24 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text138() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#5e6c84] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1-8 of 8
      </p>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Label">
      <Text138 />
    </div>
  );
}

function NavigationFirstPage4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/first_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31222)" id="Navigation/first_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p23d2bf0} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31222">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon131() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationFirstPage4 />
    </div>
  );
}

function PaginationControl16() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon131 />
    </div>
  );
}

function NavigationChevronLeft4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31289)" id="chevron_left_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13d11a80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31289">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon132() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronLeft4 />
    </div>
  );
}

function PaginationControl17() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon132 />
    </div>
  );
}

function NavigationChevronRight9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31270)" id="chevron_right_black_24dp 1">
          <g id="Vector"></g>
          <path d={svgPaths.p13ca2b80} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31270">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon133() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronRight9 />
    </div>
  );
}

function PaginationControl18() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon133 />
    </div>
  );
}

function NavigationLastPage4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Navigation/last_page">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31311)" id="Navigation/last_page">
          <g id="Vector" opacity="0.87"></g>
          <path d={svgPaths.p2ca2ec00} fill="var(--fill-0, #5E6C84)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_31311">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon134() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationLastPage4 />
    </div>
  );
}

function PaginationControl19() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon134 />
    </div>
  );
}

function Control4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Control">
      <PaginationControl16 />
      <PaginationControl17 />
      <PaginationControl18 />
      <PaginationControl19 />
    </div>
  );
}

function Pagination4() {
  return (
    <div className="basis-0 grow h-[50px] min-h-px min-w-px relative shrink-0" data-name="Pagination">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[50px] items-center justify-end px-[16px] py-0 relative w-full">
          <Label9 />
          <Control4 />
        </div>
      </div>
    </div>
  );
}

function TFoot4() {
  return (
    <div className="h-[50px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="TFoot">
      <div className="content-stretch flex h-[50px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Pagination4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe1e6] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function Table4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Table">
      <THead4 />
      <TBody4 />
      <TFoot4 />
    </div>
  );
}

function ContainerTable4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container-table">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] isolate items-start p-[24px] relative w-full">
          <Div15 />
          <Text137 />
          <Table4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1064px]" data-name="Container">
      <Hgroup4 />
      <TabContainer4 />
      <ContainerFilter4 />
      <ContainerTable4 />
    </div>
  );
}

function Body53() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Body">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[64px] py-[32px] relative size-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Container">
      <MyNav4 />
      <Body53 />
    </div>
  );
}

function HomeScreenSaasD4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1024px] isolate items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Home screen/Saas-D">
      <Header12 />
      <Container41 />
    </div>
  );
}

export default function Content17() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative size-full" data-name="Content">
      <Header />
      <HomeScreenSaasD />
      <HomeScreenSaasD1 />
      <HomeScreenSaasD2 />
      <HomeScreenSaasD3 />
      <HomeScreenSaasD4 />
    </div>
  );
}