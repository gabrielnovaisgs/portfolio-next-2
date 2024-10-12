import CTAButton from '@/components/home/cta-button';
import ProjectBlock, { ProjectBlockProps } from '@/components/home/project-block';
import ServiceBlock, { ServiceBlockProps } from '@/components/home/service-block';
import BaseStack from '@/components/home/stack/base-stack';
import { IconStackProps } from '@/components/home/stack/icon-stack';
import TitleBlock from '@/components/home/title-block';
import Image from 'next/image'


export default function Home() {

  const services: ServiceBlockProps[] = [
    {
      title: "Criação de sites",
      description: "Eu ofereço sites super interessantes e legais, estou escrevendo mais para essa frase ter algumas linhas",
      icon: "site.svg"
    },
    {
      title: "Landing Page",
      description: "Eu ofereço sites super interessantes e legais, estou escrevendo mais para essa frase ter algumas linhas",
      icon: "growth.svg"
    },
    {
      title: "E-commerce",
      description: "Eu ofereço sites super interessantes e legais, estou escrevendo mais para essa frase ter algumas linhas",
      icon: "car.svg"
    },
    {
      title: "Consumo/conexão de APIs",
      description: "Eu ofereço sites super interessantes e legais, estou escrevendo mais para essa frase ter algumas linhas",
      icon: "gear.svg"
    }
  ]

  const projects: ProjectBlockProps[] = [
    {
      accessLink: 'asdasd',
      githubLink: 'asdad',
      title: 'Site 1'
    },
    {
      accessLink: 'asdasd',
      githubLink: 'asdad',
      title: 'Site 2'
    }
    , {
      accessLink: 'asdasd',
      githubLink: 'asdad',
      title: 'Site 3'
    }
  ]


  const programingLinguagesIcons: IconStackProps[] = [
    {
      imageName: 'js',
      title: 'JavaScript',
      color: '#F0DB4F'
    }
  ]

  const backendIcons: IconStackProps[] = [
    {
      imageName: 'express',
      title: 'Express',
      color: '#393939'
    },
    {
      imageName: 'mysql',
      title: 'MySQL',
      color: '#00618A'
    },
    {
      imageName: 'postgresql',
      title: 'PostgreSQL',
      color: '#336791'
    },
    {
      imageName: 'firebase',
      title: 'Firebase',
      color: '#FF9100'
    }
  ]
  const devopsIcons: IconStackProps[] = [
    {
      imageName: 'express',
      title: 'Express',
      color: '#393939'
    },
    {
      imageName: 'mysql',
      title: 'MySQL',
      color: '#00618A'
    },
    {
      imageName: 'postgresql',
      title: 'PostgreSQL',
      color: '#336791'
    },
    {
      imageName: 'firebase',
      title: 'Firebase',
      color: '#FF9100'
    }
  ]
  const frontendIcons: IconStackProps[] = [
    {
      imageName: 'express',
      title: 'Express',
      color: '#393939'
    },
    {
      imageName: 'mysql',
      title: 'MySQL',
      color: '#00618A'
    },
    {
      imageName: 'postgresql',
      title: 'PostgreSQL',
      color: '#336791'
    },
    {
      imageName: 'firebase',
      title: 'Firebase',
      color: '#FF9100'
    }
  ]


  return (
    <main className="pt-20 px-16">
      <section id="hero-section" className="grid grid-cols-2 gap-16 h-[calc(100vh-100px)]  items-center ">
        <aside className="flex flex-col justify-evenly items-center gap-5 text-center  font-title">
          <p className="font-normal">Pense. Construa. Melhore.</p>
          <h1 className="text-4xl font-bold">Criando soluções digitais que seus  clientes amarão utilizar</h1>
          <CTAButton></CTAButton>
        </aside>
        <aside className=''>
          <Image src="/assets/mockExample.png" width={1024} height={1024} alt='Exemplos de projetos'
            className='w-full h-full object-contain'
          ></Image>
        </aside>
      </section>
      <section id='services-section' className='flex flex-col items-center gap-8'>
        <h1 className='font-title font-bold text-3xl' >Tudo o que você precisa para um site incrivel</h1>

        <TitleBlock title='Serviços' className='items-end'>Descubra os principais serviços que eu ofereço, desenvolvidos para garantir o sucesso do seu projeto</TitleBlock>

        <section className='flex flex-wrap justify-center gap-8 p-8 bg-gray-100 rounded-2xl border border-gray-200 shadow-md w-full'>
          {services.map((service, index) => (

            <ServiceBlock key={index} description={service.description} icon={service.icon} title={service.title}></ServiceBlock>
          ))}
        </section>
      </section>
      <section className='mt-16 flex flex-col gap-8'>
        <TitleBlock title='Projetos'>Conheça um pouco dos projetos que eu já fiz</TitleBlock>
        <section className='grid grid-cols-3 gap-8'>
          {projects.map((project, index) => (

            <ProjectBlock key={index} accessLink={project.accessLink} githubLink={project.githubLink} title={project.title}></ProjectBlock>
          ))
          }

        </section>
      </section>
      <section className='mt-16 flex flex-col gap-8'>
        <TitleBlock title='Stack e tecnologias' className='items-end'>Atuo com uma varidade de tecnologias</TitleBlock>
        <section className='w-full grid grid-cols-2 gap-8'>
          <BaseStack title='Linguagens de programação' icons={programingLinguagesIcons}></BaseStack>
          <BaseStack title='Backend' icons={backendIcons}></BaseStack>
          <BaseStack title='Devops' icons={devopsIcons}></BaseStack>
          <BaseStack title='Frontend' icons={frontendIcons}></BaseStack>
        </section>
      </section>

      <section className='my-16 flex justify-center items-center'>
        <div className='flex flex-col gap-8  rounded-lg items-center justify-center p-8 w-full border border-gray-100 bg-gray-100 shadow-lg '>
          <p className='text-2xl font-title text-accent font-bold'>Que tal tirar a sua ideia do papel? Entre em contato!</p>
          <CTAButton></CTAButton>
        </div>
      </section>

    </main>
  );
}
