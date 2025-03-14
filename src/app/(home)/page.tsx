import Anchor from '@/components/home/anchor';
import CTAButton from '@/components/home/cta-button';
import ProjectBlock, { ProjectBlockProps } from '@/components/home/project-block';
import ServiceBlock, { ServiceBlockProps } from '@/components/home/service-block';
import BaseStack from '@/components/home/stack/base-stack';
import { IconStackProps } from '@/components/home/stack/icon-stack';
import Image from 'next/image'


export default function Home() {

  const services: ServiceBlockProps[] = [
    {
      title: "Website Creation",
      description: "I offer super interesting and cool websites, I am writing more so this sentence has a few lines",
      icon: "website.webp"
    },
    {
      title: "Landing Page",
      description: "I offer super interesting and cool websites, I am writing more so this sentence has a few lines",
      icon: "preview-landing-1-desktop.png"
    },
    {
      title: "E-commerce",
      description: "I offer super interesting and cool websites, I am writing more so this sentence has a few lines",
      icon: "ecommerce.webp"
    },
    {
      title: "API Consumption/Connection",
      description: "I offer super interesting and cool websites, I am writing more so this sentence has a few lines",
      icon: "api.webp"
    }
  ]


  const projects: ProjectBlockProps[] = [
    {
      accessLink: 'https://landing-page-positivus-chi.vercel.app/',
      githubLink: 'https://github.com/gabrielnovaisgs/landing-page-positivus',
      title: 'Positivus',
      imgSrc: `preview-landing-1-desktop.png`,
      description: `Positivus specializes in SEO, paid ads, social media marketing, and content creation to help businesses grow online. Backed by success stories and expert insights, we craft tailored strategies for measurable results.`
    },
    {
      accessLink: 'https://www.efestos.com.br/',
      githubLink: 'https://github.com/gabrielnovaisgs/efestos',
      title: 'Efestos',
      imgSrc: `preview-landing-4-desktop.png`,
      description: `Efestos is a software house that helps businesses grow online. We offer a range of services, including SEO, landing pages, E-commerce, and more.`
    },
    {
      accessLink: 'https://landing-page-travel-sandy.vercel.app/',
      githubLink: 'https://github.com/gabrielnovaisgs/travel-landing-page',
      title: 'Travelog',
      imgSrc: `preview-landing-2-desktop.png`,
      description: `Discover top destinations like Rome and the Maldives with our travel agency. Enjoy easy booking, value-packed categories, and exclusive promotions. Plan your dream getaway to paradise today!`
    }
    , {
      accessLink: 'https://real-state-landing-page-mauve.vercel.app/',
      githubLink: 'https://github.com/gabrielnovaisgs/real-state-landing-page',
      title: 'Logoipsum',
      imgSrc: `preview-landing-3-desktop.png`,
      description: `Explore modern residential and commercial properties with our intuitive real estate platform. Designed for clarity and engagement, we make finding your dream space effortless. Start your search today!`
    }
  ]


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
    <main className="">

      <div id="hero-section" className=''></div>

      <section className="h-[calc(70vh)] md:h-screen relative  items-center">
        <aside className="flex flex-col  items-center text-center font-title sticky top-32">
          <p className="font-medium text-xl py-2 px-4 border-dark border rounded-full">Hello!</p>

          <h1 className="text-4xl mt-4 md:text-7xl font-title font-semibold">I&apos;m <span className='text-accent'>Gabriel</span>,<br />Software Engineer</h1>
        </aside>
        <Image src="/assets/personal_1.png" width={1024} height={1024} alt='Exemplos de projetos'
          className='px-8 w-full object-contain object-bottom  absolute bottom-0  h-3/4'
        ></Image>

      </section >

      <section id="services-section"
        className='mx-4 relative gap-8  md:mx-16 text-white
          pt-4 md:pt-16 md:pb-8 px-8
          
        '>
        <Image src="/assets/gray-paint-compress.jpg" width={1024} height={1024} alt='Exemplos de projetos'
          className='w-full object-fill absolute top-0 left-0 h-full rounded-3xl  -z-20         '
        ></Image>
        <div className='w-full h-full absolute top-0 -z-20 left-0 bg-dark2/50 backdrop-blur-md rounded-3xl'></div>

        <div className='w-full md:my-8 flex flex-col md:flex-row text-white justify-center md:justify-between gap-4 z-20 items-center'>

          <h1 className='font-title font-bold text-5xl text-center' >My <span className='text-accent'>Services</span></h1>
          <p className='font-medium text-center md:text-left'>Discover the main services I offer, designed to ensure the success and excellence of your projects</p>
        </div>

        {/*<TitleBlock title='Serviços' className='items-end text-right'>Conheca os principais serviços que eu ofereço, desenvolvidos para garantir o sucesso do seu projeto</TitleBlock>*/}

        <section className='flex flex-wrap md:grid md:grid-cols-4 justify-center gap-8 py-8 md:p-8 w-full'>
          {services.map((service, index) => (

            <ServiceBlock key={index} description={service.description} icon={service.icon} title={service.title}></ServiceBlock>
          ))}
        </section>
      </section>
      <Anchor id="project-section"></Anchor>
      <section id='project-section' className='flex flex-col gap-8 mx-4 md:mx-16'>
        <h1 className='font-title font-bold text-5xl md:text-left text-center'>Lets have a look at my <span className='text-accent'>Portfolio</span></h1>
        <section className='flex flex-wrap justify-center gap-4 md:gap-8'>
          {projects.map((project, index) => (
            <ProjectBlock description={project.description} imgSrc={`${project.imgSrc}`} key={index} accessLink={project.accessLink} githubLink={project.githubLink} title={project.title}></ProjectBlock>
          ))
          }

        </section>
      </section>
      <Anchor id="stack-section"></Anchor>
      <section id='stack-section' className='flex flex-col gap-8'>
        <h1 className='font-title font-bold text-5xl text-center text-accent'>Skills</h1>
        <section className='flex flex-col items-center gap-8'>
          <BaseStack title='Programing Linguages' icons={programingLinguagesIcons}></BaseStack>
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
