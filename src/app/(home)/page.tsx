import ServiceBlock, { ServiceBlockProps } from '@/components/home/service-block';
import Image from 'next/image'


export default function Home() {

  const services: ServiceBlockProps[] = [
    {
      title: "Criação de sites",
      description: "Eu ofereço sites super interessantes e legais, estou escrevendo mais para essa frase ter algumas linhas",
      icon: "site.svg"
    }
  ]


  return (
    <main className="pt-20 px-16">
      <section id="hero-section" className="grid grid-cols-2 gap-16 h-[calc(100vh-100px)]  items-center ">
        <aside className="flex flex-col justify-evenly items-center gap-5 text-center  font-title">
          <p className="font-normal">Pense. Construa. Melhore.</p>
          <h1 className="text-4xl font-bold">Criando soluções digitais que seus  clientes amarão utilizar</h1>
          <button className="text-2xl text-white p-3 rounded-md
          bg-gradient-to-r from-accent/80 via-accent2  to-accent/80
          " >Entre em contato</button>
        </aside>
        <aside className=''>
          <Image src="/assets/mockExample.png" width={1024} height={1024} alt='Exemplos de projetos'
            className='w-full h-full object-contain'
          ></Image>
        </aside>
      </section>
      <section id='services-section' className='flex flex-col items-center gap-8'>
        <h1 className='font-title font-bold text-3xl' >Tudo o que você precisa para um site incrivel</h1>
        <aside className='w-full flex flex-col items-end'>
          <div className='flex gap-1 items-center'>
            <span className='w-14 h-1 bg-accent mt-1'></span>
            <h2 className='font-title font-bold text-2xl text-accent align-middle'>Serviços</h2>
          </div>
          <p className='font-normal font-bold text-xl'>Descubra os principais serviços que eu ofereço, desenvolvidos para garantir o sucesso do seu projeto</p>
        </aside>
        <section className='flex flex-wrap gap-8 p-8 bg-gray-100 rounded-2xl border border-gray-200 shadow-md  w-full'>
          {services.map((service, index) => (

            <ServiceBlock key={index} description={service.description} icon={service.icon} title={service.title}></ServiceBlock>
          ))}
        </section>
      </section>
    </main>
  );
}
