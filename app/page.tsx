import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F4F7FB] font-[family-name:var(--font-inter)] text-mashcole-dark">
      
      <section className="max-w-[1800px] mx-auto px-4 lg:px-[64px] py-8 lg:py-[40px] flex flex-col gap-6 lg:gap-[32px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[32px]">
          <div className="col-span-1 lg:col-span-8 relative rounded-2xl lg:rounded-[32px] overflow-hidden bg-mashcole-dark text-white p-6 lg:p-[60px] flex flex-col justify-end shadow-xl min-h-[400px] lg:min-h-[640px]">
            <Image src="/caja.png" alt="Hero" fill className="object-cover z-0" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102552] via-[#102552]/40 to-transparent z-10" />
            <div className="relative z-20 max-w-[650px]">
              <p className="uppercase font-bold tracking-[0.1em] text-xs lg:text-[13px] mb-2 lg:mb-4 text-mashcole-yellow">SERVICE, INTEGRITY & PROFITABILITY</p>
              <h1 className="text-3xl lg:text-[64px] font-extrabold leading-[1.05] mb-4 lg:mb-6">Property Management<br />in Los Angeles</h1>
              <p className="text-sm lg:text-[18px] opacity-90 mb-4 lg:mb-8 leading-[1.6]">We provide leasing and property management services in Los Angeles, Long Beach, Orange County, and throughout Southern California.</p>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <button className="bg-[#1C3A79] border border-white/20 px-6 lg:px-8 py-3 lg:py-3.5 rounded-lg lg:rounded-[8px] font-bold hover:bg-[#152C5E] transition uppercase text-xs lg:text-[14px]">CONTACT US</button>
                <button className="bg-white text-mashcole-dark px-6 lg:px-8 py-3 lg:py-3.5 rounded-lg lg:rounded-[8px] font-bold hover:bg-gray-50 transition uppercase text-xs lg:text-[14px]">OUR SERVICES</button>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4 lg:gap-[32px]">
            <div className="flex-1 bg-gradient-to-b from-mashcole-dark to-mashcole-blue rounded-2xl lg:rounded-[32px] p-6 lg:p-[40px] text-white flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-xl lg:text-[32px] font-bold leading-tight mb-3 lg:mb-4">Request a Property Management Quote</h3>
                <p className="text-xs lg:text-[14px] opacity-80 leading-relaxed max-w-[300px]">
                  Mashcole Property Management, Inc. enables property owners to increase the value and profitability of their assets.
                </p>
              </div>
              <button className="self-end mt-4 lg:mt-0 bg-[#0B2E5C] border border-white/20 px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg lg:rounded-[8px] text-xs lg:text-[11px] font-bold uppercase tracking-wider">REQUEST A TOUR</button>
            </div>

            <div className="flex-1 bg-gradient-to-b from-black to-[#546C8A] rounded-2xl lg:rounded-[32px] p-6 lg:p-[40px] text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
               <div className="relative z-10">
                 <h3 className="text-xl lg:text-[32px] font-bold leading-tight mb-3 lg:mb-4">Free Market Analysis</h3>
                 <p className="text-xs lg:text-[14px] opacity-80 leading-relaxed max-w-[300px]">
                   Let our experts analyze and provide insights into your current property management agreement for free.
                 </p>
               </div>
               <button className="self-end relative z-10 mt-4 lg:mt-0 bg-[#1C3A79] border border-white/20 px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg lg:rounded-[8px] text-xs lg:text-[11px] font-bold uppercase tracking-wider">REQUEST A TOUR</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[32px]">
          
          <div className="col-span-1 lg:col-span-6 bg-white border border-gray-100 rounded-2xl lg:rounded-[32px] flex flex-col shadow-xl relative overflow-hidden">
            <div className="relative z-10 p-6 lg:p-[48px]">
              <h3 className="text-2xl lg:text-[36px] font-bold text-mashcole-dark mb-6 lg:mb-10 leading-tight">Offices in California</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full max-w-[550px]">
                <div className="flex flex-col gap-4 lg:gap-6 text-gray-600 font-medium">
                  <div className="flex items-start gap-3 text-sm lg:text-[15px]">
                    <div className="relative w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 mt-1"><Image src="/Vector.png" alt="Pin" fill className="object-contain" /></div> 
                    <p className="leading-[1.6]">26901 Agoura Road, Suite 250,<br/>Calabasas, CA 91301</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0"><Image src="/Icons Phone.png" alt="Phone" fill className="object-contain" /></div>
                    <p className="font-bold text-sm lg:text-[16px] text-mashcole-dark">(818) 888-8052</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-600 text-sm lg:text-[15px] font-medium">
                  <div className="relative w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 mt-1"><Image src="/Vector.png" alt="Pin" fill className="object-contain" /></div>
                  <p className="leading-[1.6]">3846 E Anaheim St, Long<br/>Beach, CA 90804</p>
                </div>
              </div>
            </div>
            
            <div className="lg:hidden absolute bottom-0 left-0 right-0 w-full h-[25%] pointer-events-none z-0">
              <Image 
                src="/palmeras.png" 
                alt="California City"
                fill
                className="object-cover object-bottom opacity-40" 
              />
            </div>
            
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 w-full h-[55%] pointer-events-none z-0">
              <Image 
                src="/palmeras.png" 
                alt="California City"
                fill
                className="object-cover object-bottom" 
              />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-6 bg-gradient-to-br from-[#0E5477] via-[#011824CC] via-[#032C41A3] to-[#032C41] rounded-2xl lg:rounded-[32px] p-6 lg:p-[48px] text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col items-start lg:items-end text-left lg:text-right">
              <h3 className="text-2xl lg:text-[36px] font-bold mb-2 lg:mb-3">Find Rentals</h3>
              <p className="text-sm lg:text-[16px] leading-[1.6] opacity-90 max-w-[440px]">With more than 7000 units available in the Greater Los Angeles area, we can help you find the right one for you.</p>
            </div>
            
            <div className="relative z-10 flex justify-between gap-3 lg:gap-6 w-full h-[160px] lg:h-[260px] my-4 lg:my-6">
                <div className="relative flex-1 rounded-2xl lg:rounded-[24px] overflow-hidden shadow-md"><Image src="/222-01.png" alt="P1" fill className="object-cover" /></div>
                <div className="relative flex-[1.2] rounded-2xl lg:rounded-[24px] overflow-hidden shadow-xl border border-white/10"><Image src="/319-01.png" alt="P2" fill className="object-cover" /></div>
                <div className="relative flex-1 rounded-2xl lg:rounded-[24px] overflow-hidden shadow-md hidden sm:block"><Image src="/casa.png" alt="P3" fill className="object-cover" /></div>
            </div>
            
            <button className="relative z-10 self-end lg:self-end bg-white text-[#032C41] px-6 lg:px-8 py-3 lg:py-3.5 rounded-lg lg:rounded-[8px] font-bold text-xs lg:text-[13px] uppercase tracking-wide hover:bg-gray-100 transition">
              SEE ALL RENTAL LISTINGS
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1800px] mx-auto px-4 lg:px-[64px] py-12 lg:py-[100px] flex flex-col items-center">
        
        <h2 className="text-2xl lg:text-[32px] font-bold text-mashcole-dark mb-8 lg:mb-[64px] font-[family-name:var(--font-inter)]">
          Data That Speaks
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 xl:gap-[120px] w-full">
          
          <div className="flex items-center gap-3 lg:gap-4">
             <span className="text-3xl lg:text-[56px] text-[#161C24] font-extrabold leading-none font-[family-name:var(--font-inter)]">
              375+
            </span>
            <p className="text-xs lg:text-[18px] leading-[27px] font-normal text-[#626B7D] uppercase tracking-[0em] font-[family-name:var(--font-inter)]">
              PROPERTIES<br />MANAGED
            </p>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <span className="text-3xl lg:text-[56px] text-[#161C24] font-extrabold leading-none font-[family-name:var(--font-inter)]">
              7,000+
            </span>
            <p className="text-xs lg:text-[18px] leading-[27px] font-normal text-[#626B7D] uppercase tracking-[0em] font-[family-name:var(--font-inter)]">
              UNITS<br />MANAGED
            </p>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
              <span className="text-3xl lg:text-[56px] text-[#161C24] font-extrabold leading-none font-[family-name:var(--font-inter)]">
              20+
            </span>
            <p className="text-xs lg:text-[18px] leading-[27px] font-normal text-[#626B7D] uppercase tracking-[0em] font-[family-name:var(--font-inter)]">
              YEARS OF<br />EXPERIENCE
            </p>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
           <span className="text-3xl lg:text-[56px] text-[#161C24] font-extrabold leading-none font-[family-name:var(--font-inter)]">
              20K+
            </span>
            <p className="text-xs lg:text-[18px] leading-[27px] font-normal text-[#626B7D] uppercase tracking-[0em] font-[family-name:var(--font-inter)]">
              CREDIT REPORT<br />A YEAR
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-[1800px] mx-auto px-4 lg:px-[64px] py-12 lg:py-[100px] flex flex-col items-center font-[family-name:var(--font-inter)]">
        
        <h2 className="text-3xl lg:text-[48px] font-bold text-mashcole-dark mb-4 text-center">
          Featured Rentals
        </h2>
        
        <p className="text-sm lg:text-[18px] text-[#626B7D] text-center max-w-[850px] mb-8 lg:mb-12 leading-[27px]">
          Explore our most popular rental properties, offering great quality living, and professional management you can count on. 
          <span className="text-mashcole-blue font-bold ml-2 cursor-pointer border-b-2 border-mashcole-blue uppercase text-xs lg:text-[14px] tracking-wider">
            SEE ALL
          </span>
        </p>

        <div className="w-full max-w-[950px] mb-12 lg:mb-20 px-4">
          <div className="bg-[#E8F0F8] rounded-2xl lg:rounded-[22px] p-2 lg:p-[10px]">
            <div className="bg-white rounded-xl lg:rounded-[16px] flex items-center h-12 lg:h-[64px] pl-4 lg:pl-6 pr-2 shadow-sm">
              <input 
                type="text" 
                placeholder="City, Neighborhood, Zip or Address" 
                className="flex-1 bg-transparent outline-none text-[#626B7D] placeholder:text-[#626B7D]/40 text-sm lg:text-[16px] font-normal"
              />
              
              <div className="flex items-center gap-2 lg:gap-4 px-3 lg:px-6 border-r border-gray-100 h-8 lg:h-10">
                <span className="text-[#626B7D] text-xs lg:text-[16px] font-semibold cursor-pointer hover:text-mashcole-blue transition hidden sm:inline">
                  Filters
                </span>
                <div className="relative cursor-pointer">
                  <svg className="w-5 h-5 lg:w-[22px] lg:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="#626B7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="21" y1="4" x2="14" y2="4"/><line x1="10" y1="4" x2="3" y2="4"/><line x1="21" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="3" y2="12"/><line x1="21" y1="20" x2="16" y2="20"/><line x1="12" y1="20" x2="3" y2="20"/><line x1="14" y1="2" x2="14" y2="6"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="16" y1="18" x2="16" y2="22"/>
                  </svg>
                  <span className="absolute -top-1.5 -right-1.5 bg-[#008BE7] text-white text-[8px] lg:text-[10px] w-4 lg:w-[18px] h-4 lg:h-[18px] flex items-center justify-center rounded-full font-bold border border-white">
                    1
                  </span>
                </div>
              </div>
              
              <button className="ml-2 lg:ml-4 bg-[#122332] w-10 lg:w-[54px] h-10 lg:h-[50px] rounded-xl lg:rounded-[14px] flex items-center justify-center hover:bg-black transition-all shadow-md">
                <svg className="w-5 h-5 lg:w-[22px] lg:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          
          {[
            { img: "/37.png", price: "$2,560", units: null, status: "Special!", beds: "1 - 2 BR", baths: "1 BA" },
            { img: "/774.png", price: "$1,685 - $3,800", units: "8", status: "Available Now", beds: "1 BR", baths: "2 BA" },
            { img: "/e.png", price: "$1,500 - $2,600", units: "3", status: "Special!", beds: "1 - 3 BR", baths: "1 - 2 BA" },
            { img: "/casam.png", price: "$2,500 - $4,500", units: "4", status: "Available Now", beds: "1 - 2 BR", baths: "1 BA" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-md rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 group cursor-pointer border border-white/40">
              <div className="relative h-[240px] w-full">
                <Image src={item.img} alt="Property" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {item.units && (
                  <div className="absolute top-4 left-0 bg-mashcole-dark text-white px-4 py-1.5 text-[12px] font-bold rounded-r-lg shadow-md">
                    {item.units} Units
                  </div>
                )}

                <div className={`absolute bottom-4 right-0 ${item.status === 'Special!' ? 'bg-mashcole-blue' : 'bg-mashcole-blue'} text-white px-5 py-1.5 text-[12px] font-bold rounded-l-lg shadow-md`}>
                  {item.status}
                </div>

                <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 w-8 h-8 flex items-center justify-center rounded-full shadow-md text-mashcole-dark"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg></button>
                  <button className="bg-white/90 w-8 h-8 flex items-center justify-center rounded-full shadow-md text-mashcole-dark"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m9 18 6-6-6-6"/></svg></button>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2">
                <p className="text-[14px] text-[#626B7D] font-medium">Apartments & Houses For Rent</p>
                <h4 className="text-[26px] font-extrabold text-mashcole-dark tracking-tight">{item.price}</h4>
                
                <div className="flex items-center gap-6 text-[#626B7D] text-[15px] mt-2 font-semibold">
                  <span className="flex items-center gap-2">
                    <Image src="/cama.svg" alt="Cama" width={20} height={20} className="opacity-80" />
                    <span>{item.beds}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Image src="/regadera.svg" alt="Regadera" width={20} height={20} className="opacity-80" />
                    <span>{item.baths}</span>
                  </span>
                </div>

                <p className="text-[14px] text-[#626B7D] mt-3 leading-[22px] font-normal">
                  732 E. Santa Clara St.,<br/>Ventura, CA 93001
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="max-w-[1800px] mx-auto px-4 lg:px-[64px] py-12 lg:py-[100px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 font-[family-name:var(--font-inter)]">
        
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center order-1 lg:order-1">
          <h2 className="text-2xl lg:text-[48px] font-bold text-mashcole-dark leading-[1.1] mb-4 lg:mb-6">
            The <span className="text-mashcole-blue">benefits</span> of our Property management services
          </h2>
          <p className="text-sm lg:text-[16px] text-[#626B7D] leading-[26px] mb-6 lg:mb-10 max-w-[520px]">
            Mashcole Property Management, Inc. operates within standards of excellence that guarantee successful management of multi-family operations. These principles have been entitled S.P.A.R.C.™ and are defined as:
          </p>

          <div 
            className="p-6 lg:p-10 rounded-2xl lg:rounded-[20px] shadow-sm max-w-[520px] border border-white/50"
            style={{
              background: `linear-gradient(180deg, #EAF2FB 0%, #EAF2FB2E 18%)`
            }}
          >
            <p className="text-sm lg:text-[18px] text-[#626B7D] mb-2 lg:mb-4 font-normal">Personal, one on one service</p>
            <h3 className="text-xl lg:text-[32px] font-bold text-mashcole-dark leading-tight">
              For <span className="font-extrabold">Owners</span> or <span className="font-extrabold">Renters</span>
            </h3>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center text-[#161C24] border-t lg:border-t-0 border-[#204186]/10 order-2 lg:order-2">
          {[
            "Staff", 
            "Pricing", 
            "Advertising", 
            "Rent Ready Units", 
            "Curb appeal"
          ].map((item, i) => (
            <div 
              key={i} 
              className="group flex items-center justify-between py-4 lg:py-8 border-b border-[#204186]/10 cursor-pointer hover:bg-white/20 transition-all px-2 lg:px-4"
            >
              <span className="text-lg lg:text-[28px] font-semibold text-[#161C24] transition-colors">
                {item}
              </span>
              <div className="text-[#161C24] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg className="w-5 h-5 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 lg:px-[64px] py-12 lg:py-[100px] font-[family-name:var(--font-inter)]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="flex flex-col justify-center pr-0 lg:pr-6 mb-8 lg:mb-0 order-1 md:order-1 lg:order-1">
            <h2 className="text-2xl lg:text-[48px] font-bold text-[#1A1A1A] leading-[1.1] mb-4 lg:mb-6">
              Blogs and Articles
            </h2>
            <p className="text-sm lg:text-[16px] text-[#626B7D] leading-[26px] font-normal mb-6 lg:mb-8 max-w-[450px]">
              At Mashcole Property Management, Inc. we're dedicated to keeping property owners and residents 
              informed about the latest developments in multi-family insights and efficient property management tips.
            </p>
            <button className="w-fit bg-[#204186] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg lg:rounded-[6px] font-bold text-xs lg:text-[13px] uppercase tracking-wider hover:bg-black transition-all shadow-md">
              SEE ALL
            </button>
          </div>

          {[
            { title: "What Kind of Neighborhood Is North Hollywood?", img: "/p-1.jpg" },
            { title: "Is Torrance, CA, a Good Place to Live? Uncover What Makes This City Unique", img: "/p-2.jpg" },
            { title: "Experience the Charm of Bellflower: An Insider's Perspective", img: "/p-3.jpg" },
            { title: "From Sunsets to Opportunities: Living the Dream in Bakersfield", img: "/p-4.jpg" },
            { title: "Unlock the Essence of Living in Van Nuys", img: "/p-5.jpg" }
          ].map((blog, idx) => (
            <div 
              key={idx} 
              className="relative h-[300px] lg:h-[480px] rounded-2xl lg:rounded-[24px] overflow-hidden group cursor-pointer shadow-md order-2 md:order-2 lg:order-2"
            >
              <Image 
                src={blog.img} 
                alt={blog.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10 z-10"
                style={{
                  background: `linear-gradient(180deg, rgba(50, 66, 86, 0) 30%, #1D55A3 100%)`
                }}
              >
                <h3 className="text-white text-lg lg:text-[24px] font-bold leading-[1.2]">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="w-full py-12 lg:py-[100px] bg-[#F6F8FB] flex justify-center">
        
        <div className="w-full max-w-[1400px] px-4 lg:px-6">
          
          <div className="w-full rounded-2xl lg:rounded-[24px] py-12 lg:py-[80px] px-6 lg:px-[40px] text-center text-white
            bg-gradient-to-r from-[#0099FF] to-[#114177] shadow-lg">

            <h2 className="text-2xl lg:text-[40px] font-semibold leading-[1.3] lg:leading-[52px] mb-3 lg:mb-4">
              Ready to Experience Stress-Free <br className="hidden lg:block" />
              Property Management?
            </h2>

            <p className="text-sm lg:text-[17px] text-white/80 mb-6 lg:mb-8">
              Maximize your rental income with our expert team.
            </p>

            <button className="bg-[#1DA1F2] hover:bg-[#0d8ae0] transition text-white text-xs lg:text-[13px] font-semibold tracking-wide px-5 lg:px-7 py-2 lg:py-3 rounded-full uppercase">
              Schedule Your Free Consultation Today
            </button>

          </div>

        </div>

      </section>

      <footer className="w-full bg-[#0F1E2E] text-white pt-12 lg:pt-[80px] pb-0 relative overflow-hidden">

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          <div>
            <h3 className="text-lg lg:text-[20px] font-semibold mb-4">Get In Touch</h3>
            <p className="text-xs lg:text-[13px] text-white/70 mb-4 lg:mb-6">
              MASHCOLE PROPERTY MANAGEMENT, INC.
            </p>

            <div className="flex flex-col gap-3 lg:gap-4 text-xs lg:text-[14px] text-white/80">

              <div className="flex items-start gap-3">
                <Image src="/Vector.svg" alt="Location" width={16} height={16} className="mt-1" />
                <p className="leading-[1.6]">26901 Agoura Road, Suite 250, Calabasas, CA 91301</p>
              </div>

              <div className="flex items-start gap-3">
                <Image src="/Vector.svg" alt="Location" width={16} height={16} className="mt-1" />
                <p className="leading-[1.6]">3846 E Anaheim St, Long Beach, CA 90804</p>
              </div>

              <div className="flex items-center gap-3">
                <Image src="/Icons Phone.svg" alt="Phone" width={16} height={16} />
                <p>(818) 888-8052</p>
              </div>

              <div className="flex items-center gap-3">
                <Image src="/Icons Phone (1).svg" alt="Email" width={16} height={16} />
                <p>info@mashcole.com</p>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-2 lg:gap-3 text-xs lg:text-[14px] text-white/80">
            <p>Home</p>
            <p>property management</p>
            <p>Find Rentals</p>
            <p>About</p>
            <p>Owners</p>
            <p>Resident</p>
            <p>Blogs</p>
            <p>Contact</p>
          </div>

          <div className="flex flex-col gap-3 lg:gap-4">
            <h3 className="text-lg lg:text-[20px] font-semibold mb-2">Follow Us</h3>
            <div className="flex flex-col gap-2 lg:gap-3">
              <a href="#" className="flex items-center gap-2 lg:gap-3 hover:text-white/70 transition text-xs lg:text-[14px]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-2 lg:gap-3 hover:text-white/70 transition text-xs lg:text-[14px]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 lg:gap-3 hover:text-white/70 transition text-xs lg:text-[14px]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                <span>TikTok</span>
              </a>
              <a href="#" className="flex items-center gap-2 lg:gap-3 hover:text-white/70 transition text-xs lg:text-[14px]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>YouTube</span>
              </a>
              <a href="#" className="flex items-center gap-2 lg:gap-3 hover:text-white/70 transition text-xs lg:text-[14px]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 lg:gap-3 hover:text-white/70 transition text-xs lg:text-[14px]">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.15 17.204c-.213.213-.488.348-.778.348s-.565-.135-.778-.348c-.213-.213-.348-.488-.348-.778s.135-.565.348-.778c.213-.213.488-.348.778-.348s.565.135.778.348c.213.213.348.488.348.778s-.135.565-.348.778zm3.404-6.513c-.213-.213-.488-.348-.778-.348s-.565.135-.778.348c-.213.213-.348.488-.348.778s.135.565.348.778c.213.213.488.348.778.348s.565-.135.778-.348c.213-.213.348-.488.348-.778s-.135-.565-.348-.778zm-5.309 1.205c1.008-.005 1.996-.253 2.894-.745-.521-.582-1.166-1.063-1.896-1.413-.728-.349-1.514-.524-2.306-.524-1.213 0-2.34.467-3.166 1.313-.825.846-1.292 1.964-1.292 3.166 0 .792.175 1.578.524 2.306.35.73.831 1.375 1.413 1.896-.493.898-.741 1.887-.746 2.895-.005 1.008.253 1.996.745 2.894.521.582 1.166 1.063 1.896 1.413.728.349 1.514.524 2.306.524 1.213 0 2.34-.467 3.166-1.313.825-.846 1.292-1.964 1.292-3.166 0-.792-.175-1.578-.524-2.306-.35-.73-.831-1.375-1.413-1.896.493-.898.741-1.887.746-2.895.005-1.008-.253-1.996-.745-2.894z"/></svg>
                <span>Yelp</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm lg:text-[16px] mb-4">Subscribe to our Newsletter</h3>

            <button className="bg-[#1DA1F2] hover:bg-[#0d8ae0] transition text-white text-xs lg:text-[13px] px-4 lg:px-5 py-2 rounded-md mb-4 lg:mb-6">
              SUBSCRIBE
            </button>

            <div className="flex items-center gap-4 lg:gap-6">
              <Image src="/Group1.png" alt="Logo" width={60} height={40} className="h-8 lg:h-[50px] w-auto" />
              <Image src="/Group.png" alt="Logo" width={60} height={40} className="h-8 lg:h-[50px] w-auto" />
            </div>
          </div>

        </div>

        <div className="mt-10 lg:mt-[60px] bg-[#E5E7EB] text-[#4B5563] rounded-t-2xl lg:rounded-t-[20px]">

          <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-4 lg:py-6 flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 items-center">

            <div className="flex items-center gap-3 lg:gap-4">
              <a href="#" className="w-7 h-7 lg:w-8 lg:h-8 bg-[#4B5563]/20 rounded-full flex items-center justify-center hover:bg-[#4B5563]/30 transition">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-7 h-7 lg:w-8 lg:h-8 bg-[#4B5563]/20 rounded-full flex items-center justify-center hover:bg-[#4B5563]/30 transition">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-7 h-7 lg:w-8 lg:h-8 bg-[#4B5563]/20 rounded-full flex items-center justify-center hover:bg-[#4B5563]/30 transition">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="#" className="w-7 h-7 lg:w-8 lg:h-8 bg-[#4B5563]/20 rounded-full flex items-center justify-center hover:bg-[#4B5563]/30 transition">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="w-7 h-7 lg:w-8 lg:h-8 bg-[#4B5563]/20 rounded-full flex items-center justify-center hover:bg-[#4B5563]/30 transition">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-7 h-7 lg:w-8 lg:h-8 bg-[#4B5563]/20 rounded-full flex items-center justify-center hover:bg-[#4B5563]/30 transition">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.15 17.204c-.213.213-.488.348-.778.348s-.565-.135-.778-.348c-.213-.213-.348-.488-.348-.778s.135-.565.348-.778c.213-.213.488-.348.778-.348s.565.135.778.348c.213.213.348.488.348.778s-.135.565-.348.778zm3.404-6.513c-.213-.213-.488-.348-.778-.348s-.565.135-.778.348c-.213.213-.348.488-.348.778s.135.565.348.778c.213.213.488.348.778.348s.565-.135.778-.348c.213-.213.348-.488.348-.778s-.135-.565-.348-.778zm-5.309 1.205c1.008-.005 1.996-.253 2.894-.745-.521-.582-1.166-1.063-1.896-1.413-.728-.349-1.514-.524-2.306-.524-1.213 0-2.34.467-3.166 1.313-.825.846-1.292 1.964-1.292 3.166 0 .792.175 1.578.524 2.306.35.73.831 1.375 1.413 1.896-.493.898-.741 1.887-.746 2.895-.005 1.008.253 1.996.745 2.894.521.582 1.166 1.063 1.896 1.413.728.349 1.514.524 2.306.524 1.213 0 2.34-.467 3.166-1.313.825-.846 1.292-1.964 1.292-3.166 0-.792-.175-1.578-.524-2.306-.35-.73-.831-1.375-1.413-1.896.493-.898.741-1.887.746-2.895.005-1.008-.253-1.996-.745-2.894z"/></svg>
              </a>
            </div>

            <div className="text-xs lg:text-[13px] max-w-[600px] text-center lg:text-left font-[family-name:var(--font-inter)]">
              Full-Service Property Management throughout Southern California. We manage residential properties efficiently and effectively in Los Angeles, Long Beach, Orange County, San Diego County, Riverside County, Kern County among others.
            </div>

            <div className="text-xs lg:text-[13px] text-center lg:text-right font-[family-name:var(--font-inter)]">
              DRE#: 01495377 | Privacy Policy | Terms of service
            </div>

          </div>

        </div>

      </footer>
    </div>
  );
}
