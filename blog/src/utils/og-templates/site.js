import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async () => {
  const hostname = new URL(SITE.website).hostname;

  return satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#10131a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #212f3f 2%, transparent 0%), radial-gradient(circle at 75px 75px, #212f3f 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          color: "white",
          position: "relative",
        },
        children: [
          // 1. Gradiente Decorativo Superior Direito
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-150px",
                right: "-50px",
                width: "600px",
                height: "600px",
                background: "linear-gradient(140deg, #008fec, #2264e3)",
                filter: "blur(120px)",
                opacity: 0.3,
                borderRadius: "100%",
              },
            },
          },
          // 2. Gradiente Decorativo Inferior Esquerdo
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "-150px",
                left: "-50px",
                width: "500px",
                height: "500px",
                background: "linear-gradient(140deg, #2264e3, #008fec)",
                filter: "blur(120px)",
                opacity: 0.25,
                borderRadius: "100%",
              },
            },
          },

          // 3. Contenedor Central
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px",
                width: "90%",
              },
              children: [
                // Título do site
                {
                  type: "h1",
                  props: {
                    style: {
                      fontSize: 100,
                      fontWeight: 900,
                      letterSpacing: "-2px",
                      color: "white",
                      margin: "0 0 20px 0",
                      lineHeight: 1,
                      textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    },
                    children: SITE.title,
                  },
                },

                // Linha separadora
                {
                  type: "div",
                  props: {
                    style: {
                      width: "80px",
                      height: "6px",
                      backgroundColor: "#008fec",
                      borderRadius: "4px",
                      marginBottom: "30px",
                    },
                  },
                },

                // Descrição do site
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 36,
                      color: "#cbd5e1",
                      maxWidth: "80%",
                      margin: 0,
                      lineHeight: 1.4,
                      fontWeight: 400,
                    },
                    children: SITE.desc,
                  },
                },
              ],
            },
          },

          // 4. Footer: URL do site
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 143, 236, 0.06)",
                border: "1px solid rgba(0, 143, 236, 0.2)",
                padding: "12px 30px",
                borderRadius: "100px",
              },
              children: {
                type: "span",
                props: {
                  style: {
                    fontSize: 24,
                    color: "#94a3b8",
                    fontWeight: 600,
                    letterSpacing: "1px",
                  },
                  children: hostname,
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(SITE.title + SITE.desc + hostname),
    }
  );
};
