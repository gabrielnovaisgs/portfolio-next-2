import Anchor from '@/components/home/anchor';
import CTAButton from '@/components/home/cta-button';
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

  /*
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
  ]*/


  const programingLinguagesIcons: IconStackProps[] = [
    {
      imageName: 'js.svg',
      title: 'JavaScript',
      color: '#F0DB4F'
    },
    {
      imageName: 'typescript.svg',
      title: 'TypeScript',
      color: '#3078C6'
    },
    {
      imageName: 'python.svg',
      title: 'Python',
      color: '#F0DB4F'
    },
    {
      imageName: 'php.svg',
      title: 'PHP',
      color: '#8992BA'
    }
  ]

  const backendIcons: IconStackProps[] = [
    {
      imageName: 'express.svg',
      title: 'Express',
      color: '#393939'
    },
    {
      imageName: 'mysql.svg',
      title: 'MySQL',
      color: '#00618A'
    },
    {
      imageName: 'postgresql.svg',
      title: 'PostgreSQL',
      color: '#336791'
    },
    {
      imageName: 'firebase.svg',
      title: 'Firebase',
      color: '#F68220'
    }
  ]
  const devopsIcons: IconStackProps[] = [
    {
      imageName: 'docker.svg',
      title: 'Docker',
      color: '#009DDB'
    },
    {
      imageName: 'actions.svg',
      title: 'Actions',
      color: '#2088FF'
    },
    {
      imageName: 'nginx.svg',
      title: 'Nginx',
      color: '#009900'
    },
    {
      imageName: 'oracle.svg',
      title: 'OCI',
      color: '#EA1B21'
    },
    {
      imageName: 'ansible.svg',
      title: 'Ansible',
      color: '#000000'
    }
  ]
  const frontendIcons: IconStackProps[] = [
    {
      imageName: 'react.svg',
      title: 'React',
      color: '#53C1DE'
    },
    {
      imageName: 'nextjs.svg',
      title: 'NextJS',
      color: '#000000'
    },
    {
      imageName: 'svelte.svg',
      title: 'Svelte',
      color: '#FF4510'
    },
    {
      imageName: 'figma.svg',
      title: 'Figma',
      color: '#000000'
    },
    {
      imageName: 'tailwind.svg',
      title: 'Tailwind',
      color: '#38BDF8'
    },
  ]


  return (
    <main className="pt-8 md:pt-20 px-6 md:px-16">

      <div id="hero-section" className=''></div>

      <section className="grid md:grid-cols-2 md:gap-16 h-[calc(100vh-100px)]  items-center ">
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

      <Anchor id="services-section"></Anchor>
      <section className='flex flex-col items-center gap-8'>
        <h1 className='font-title font-bold text-3xl text-center' >Tudo o que você precisa para um site incrivel</h1>

        <TitleBlock title='Serviços' className='items-end text-right'>Descubra os principais serviços que eu ofereço, desenvolvidos para garantir o sucesso do seu projeto</TitleBlock>

        <section className='flex flex-wrap justify-center gap-8 p-8 bg-gray-100 rounded-2xl border border-gray-200 shadow-md w-full'>
          {services.map((service, index) => (

            <ServiceBlock key={index} description={service.description} icon={service.icon} title={service.title}></ServiceBlock>
          ))}
        </section>
      </section>
      {/*<Anchor id="project-section"></Anchor>
      <section id='project-section' className='flex flex-col gap-8'>
        <TitleBlock title='Projetos'>Conheça um pouco dos projetos que eu já fiz</TitleBlock>
        <section className='grid md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectBlock key={index} accessLink={project.accessLink} githubLink={project.githubLink} title={project.title}></ProjectBlock>
          ))
          }

        </section>
      </section>*/}
      <Anchor id="stack-section"></Anchor>
      <section id='stack-section' className='flex flex-col gap-8'>
        <TitleBlock title='Stack e tecnologias' className='items-end'>Atuo com uma varidade de tecnologias</TitleBlock>
        <section className='flex flex-col md:grid grid-cols-2 justify-evenly items-center gap-8'>
          <BaseStack title='Linguagens de programação' icons={programingLinguagesIcons}></BaseStack>
          <BaseStack title='Backend' icons={backendIcons}></BaseStack>
          <BaseStack title='Frontend' icons={frontendIcons}></BaseStack>
          <BaseStack title='Devops' icons={devopsIcons}></BaseStack>
        </section>
      </section>

      <section className='my-16 flex justify-center items-center'>
        <div className='flex flex-col gap-8  rounded-lg items-center justify-center p-8  border border-gray-100 bg-gray-100 shadow-lg '>
          <p className='text-2xl text-center font-title text-accent font-bold'>Que tal tirar a sua ideia do papel? <br></br>Entre em contato!</p>
          <CTAButton></CTAButton>
        </div>
      </section>

    </main >


  );

}
