import svgPaths from "./svg-kbffhi5guk";

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

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex h-[53px] items-center relative shadow-[0px_1px_2px_0px_rgba(9,30,66,0.13),0px_1px_3px_1px_rgba(9,30,66,0.13)] shrink-0 w-full z-[2]" data-name="Header">
      <BusinessUnit />
      <User1 />
    </div>
  );
}

function Text() {
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
          <Text />
        </div>
      </div>
    </div>
  );
}

function ReactIconsMdSettings() {
  return (
    <div className="absolute bottom-[16.67%] left-0 right-[16.67%] top-0" data-name="react-icons/MdSettings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_75483)" id="react-icons/MdSettings">
          <g id="Vector"></g>
          <g id="Vector_2">
            <mask fill="white" id="path-1-inside-1_3_75483">
              <path d={svgPaths.p3c965b00} />
            </mask>
            <path d={svgPaths.p3c965b00} fill="var(--fill-0, #091E42)" mask="url(#path-1-inside-1_3_75483)" stroke="var(--stroke-0, #091E42)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_75483">
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

function Text1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#091e42] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Servicio Saas
      </p>
    </div>
  );
}

function Body() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text1 />
    </div>
  );
}

function MyNavLink() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
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

function Text2() {
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
      <Text2 />
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

function Text3() {
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
      <Text3 />
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

function Text4() {
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
      <Text4 />
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

function ReactIconsMdOutlineAccountTree() {
  return (
    <div className="absolute bottom-[16.67%] left-0 right-[16.67%] top-0" data-name="react-icons/MdOutlineAccountTree">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_75487)" id="react-icons/MdOutlineAccountTree">
          <g id="Vector"></g>
          <path d={svgPaths.p2f850270} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_75487">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MyIcon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="myIcon">
      <ReactIconsMdOutlineAccountTree />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0052cc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso
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

function Body4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Body">
      <Text5 />
      <Icon1 />
    </div>
  );
}

function MyNavLink4() {
  return (
    <div className="bg-[#ebecf0] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="myNavLink">
      <div aria-hidden="true" className="absolute border-[#0052cc] border-[0px_0px_0px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Text6() {
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
      <Text6 />
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

function Text7() {
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
      <Text7 />
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

function Text8() {
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
      <Text8 />
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

function Text9() {
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
      <Text9 />
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

function Text10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#091e42] text-[11px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso
      </p>
    </div>
  );
}

function BreadcrumbLink1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Breadcrumb link">
      <Text10 />
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

function Text11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#091e42] text-[22px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Casos de uso
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#5e6c84] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Descripción caso de uso (pendiente).
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Text12 />
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

function Text13() {
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
      <Text13 />
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

function Icon4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAltOff />
    </div>
  );
}

function Text14() {
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
      <Icon4 />
      <Text14 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[-33.33%] left-0 right-[-33.33%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p2ed64500} fill="var(--fill-0, #0065FF)" id="Vector_2" />
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function ActionFilterAlt() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/filter_alt">
      <Group1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ActionFilterAlt />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0065ff] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Filtrar
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0065ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon5 />
      <Text15 />
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

function Container2() {
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
          <Container2 />
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

function Icon6() {
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
          <Icon6 />
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

function Icon7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="Icon">
      <ContentAdd />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#fafbfc] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agregar caso de uso
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0052cc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center min-w-[101px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Button">
      <Icon7 />
      <Text16 />
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

function Text17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 z-[2]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#091e42] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Consulta de casos de uso disponibles
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
            Nombre del caso de uso
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
            Invitar usuario Linix
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

function Icon8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility />
    </div>
  );
}

function Td1() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon8 />
    </div>
  );
}

function ActionPencil() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_72682)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_72682">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil />
    </div>
  );
}

function Td2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon9 />
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
            Eliminar usuario Linix
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

function Icon10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility1 />
    </div>
  );
}

function Td4() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon10 />
    </div>
  );
}

function ActionPencil1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_72682)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_72682">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil1 />
    </div>
  );
}

function Td5() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon11 />
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

function Icon12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete />
    </div>
  );
}

function Td6() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon12 />
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
            Modificar privilegios usuario Linix
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

function Icon13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility2 />
    </div>
  );
}

function Td8() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon13 />
    </div>
  );
}

function ActionPencil2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_72682)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_72682">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil2 />
    </div>
  );
}

function Td9() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon14 />
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
            Caso de uso 4
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

function Icon15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility3 />
    </div>
  );
}

function Td11() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon15 />
    </div>
  );
}

function ActionPencil3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_72682)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_72682">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil3 />
    </div>
  );
}

function Td12() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon16 />
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

function Icon17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <UiActionsDelete1 />
    </div>
  );
}

function Td13() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon17 />
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
            Caso de uso 5
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

function Icon18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Icon">
      <ActionVisibility4 />
    </div>
  );
}

function Td15() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon18 />
    </div>
  );
}

function ActionPencil4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0" data-name="Action/pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_72682)" id="edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1">
          <g id="Vector"></g>
          <path d={svgPaths.pdd81b00} fill="var(--fill-0, #0052CC)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_3_72682">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="content-stretch flex items-start relative rounded-[2px] shrink-0 size-[16px]" data-name="Icon">
      <ActionPencil4 />
    </div>
  );
}

function Td16() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative shrink-0 w-[70px]" data-name="Td">
      <Icon19 />
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

function Text18() {
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
      <Text18 />
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

function Icon20() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationFirstPage />
    </div>
  );
}

function PaginationControl() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon20 />
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

function Icon21() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronLeft />
    </div>
  );
}

function PaginationControl1() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon21 />
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

function Icon22() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationChevronRight1 />
    </div>
  );
}

function PaginationControl2() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon22 />
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

function Icon23() {
  return (
    <div className="box-border content-stretch flex items-start p-[4px] relative shrink-0 size-[24px]" data-name="Icon">
      <NavigationLastPage />
    </div>
  );
}

function PaginationControl3() {
  return (
    <div className="content-stretch flex items-start justify-end overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="Pagination control">
      <Icon23 />
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
          <Text17 />
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1064px]" data-name="Container">
      <Hgroup />
      <ContainerFilter />
      <ContainerTable />
    </div>
  );
}

function Body9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Body">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[64px] py-[32px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Container">
      <MyNav />
      <Body9 />
    </div>
  );
}

export default function HomeScreenSaasD() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Home screen/Saas-D">
      <Header />
      <Container4 />
    </div>
  );
}