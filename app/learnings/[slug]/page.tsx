import { LayoutWrapper } from "@/components/layout-wrapper"
import Link from "next/link"

const posts: Record<string, any> = {
  "authenticity-and-worthiness-as-resistance": {
    title: "Authenticity and Worthiness as Resistance",
    date: "2026-05-07",
    content: `
“In this world, choosing authenticity and worthiness is an absolute act of resistance.”

Lo leí hace días mientras esperaba abordar un vuelo de regreso a casa, y me tomó días entenderlo.

Hoy, escuchando un audio de alguien que me importa mucho, me di cuenta de que, en un mundo de sobreinformación y constantes conflictos, esperar lo mejor de los demás, ser vulnerable, tener conversaciones difíciles, arreglar lo que está frágil y cultivar las relaciones que te importan con intención es, en esencia, un acto de resistencia.

Pero también la mejor inversión. Un ROI que hace compound en tu vida.

Y no es más que una elección.

Decirlo suena lindo; aplicarlo cuesta un montón. Pero el sentimiento está tremendo, y es un gran privilegio vivir con emoción. Más aún, rodearse de personas que tengan esa misma intención.
    `,
  },

  "consistency-and-attention": {
    title: "Consistency and Attention",
    date: "2025-12-25",
    content: `
*Note: This blog isn’t meant to be written in English. It’s just my inner language when I’m reflecting.*

Si miro mi pasado con cariño y observo mi presente con atención, hay muchas cosas de mi vida que me hacen sentir orgullosa. Agradezco cada etapa, cada situación. Really.

Por supuesto, siempre hay espacio para crecer. Para reconocer lo que pude haber hecho mejor, empujar con más intención y conocer nuevos límites. Pero el pasado no es algo que pueda cambiar. Lo único que sí puedo hacer con él es aprender.

Y en ese intento he pasado por mil ejercicios de autoanálisis: revisar objetivos, crear [the wheel of my life](https://play.aliabdaal.com/wheeloflife), leer libros, ver tutoriales, aprender sobre productividad. En la práctica, todo eso me llevó a una conclusión bastante simple: amo ser ordenada, pero me cuesta ser consistente si mi cerebro no siente urgencia, presión o una especie de “emergencia” que lo obligue a actuar.

En el trabajo, por ejemplo, soy determinada y organizada. Cuando se trata de aprender, tengo etapas muy distintas. Momentos en los que me obsesiono porque todo está atado a un objetivo claro, y otros en los que aprendo solo por curiosidad, por gusto, sin ningún plan detrás. A veces van juntas. A veces por separado. Ambas me definen.

Pero cuando reviso mis objetivos de este año, aparece la fricción. Uno de ellos era escribir más. Y ahí es donde noto lo que faltó. Escribí en mi journal, en espacios privados, pero no fui consistente en este blog o en este proyecto. ¿Por qué? Honestly, no lo sé del todo.

Analizando con más calma, veo que la atención es algo que quiero trabajar desde hace tiempo, pero que me cuesta más de lo que esperaba. Se me van las horas de trabajo. Me cuesta madrugar para tener más tiempo para mí. Y muchas veces elijo, sin culpa ni arrepentimiento, a mi familia y a mis amigos por encima de estos espacios de empuje personal o profesional. Y está bien. Pero también es parte del conflicto. ¿Se entiende?

Entonces pienso en la consistencia. En qué podría ayudarme a cambiar este approach. Despertar más temprano, por ejemplo, es algo que deseo incorporar a mi rutina. Lo he intentado cientos de veces. Y, aun así, mi cerebro decide que el frío, el cansancio y mil excusas más pesan más que el cambio. Me quedo justo ahí, en el umbral de la comodidad.

¿Este blog va a algún lado? No necesariamente. No pretendo enseñar nada. Es solo autoanálisis. Notas sobre lo que voy descubriendo en el camino. Y aunque estoy agradecida con mi presente, hay una parte de mí que quiere empujar un poco más. Y cuando pienso en eso, siempre vuelven las mismas dos palabras: consistencia y atención.

Sigo con el objetivo de escribir acá cada dos semanas. Tengo algunos proyectos que quiero compartir.

¿Para el mundo? Honestly, no. Con que este espacio sea mi propio accountability partner, estoy más que satisfecha. Siento que mi necesidad de mostrar, de validar afuera, bajó muchísimo desde que solté las redes sociales y ese impulso constante de publicar y compartirlo todo.

A veces incluso pienso que, en esta era, la atención (estar realmente presente) es un acto de rebeldía. Ojo, no hablo de llamar la atención, sino de sostenerla. De mirar con intención. Prestar atención te da espacio. Te permite percibirte, responder a las preguntas de tu cabeza con calma, sin ruido. Pero también te abre hacia afuera. Te deja ver a otros, notar lo que pasa alrededor, coleccionar recuerdos pequeños mientras el resto está haciendo doomscrolling en el celular.

Así que este texto es un reminder. Aunque hace tres meses me prometí escribir más y no lo hice, siempre es buen momento para volver. Y, en mi caso, para trabajar conscientemente en dos cosas que atraviesan muchos de mis sueños y ambiciones: consistencia y atención.

*Hoy vuelvo a escribir. Y por ahora, eso es suficiente.*
    `,
  },

  "why-i-decided-to-learn-in-public": {
    title: "Why I Decided to Learn in Public",
    date: "2025-10-02",
    content: `
Like many of you, I've written down lots of goals in my journal.  
And like many of you, I've also delayed them with the usual excuse: "my life is too busy" or "I don't have time."  

A few weeks ago, I decided to stop using social media for just one week. At first, it felt hard — I was angry, restless, and always wanting to check my phone because I was afraid of "losing touch with my friends." But the truth was simpler: I was wasting hours just scrolling.  

That week showed me how much I could actually do with my time. What I really needed wasn't more hours, but more focus and commitment.  

Looking back, the things that have helped me grow the most are:  
- Using what I learn in practice.  
- Sharing what I learn — in my journal or with friends.  
- Strong discipline and obsession when I want to learn something new or just achieve something.  

So this blog is my way to commit to myself:  
- To practice my coding and "vibe code" skills.  
- To share some thoughts and learnings along the way.  
- To keep myself accountable to the goals I care about.  

My goals right now? Stay away from endless social media, go back to coding, learn more about AI engineering, keep studying DeFi and economics, and hopefully apply new lessons to my daily life. Some things will help me grow, and some may fail — but both will teach me something.  

And.. well, this is the first draft of my journey. 

- Angela O.
    `,
  },
}

// Función helper para convertir enlaces markdown a JSX
function parseMarkdownLinks(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match
  let key = 0

  while ((match = linkRegex.exec(text)) !== null) {
    // Agregar texto antes del enlace
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    
    // Agregar el enlace
    parts.push(
      <a
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline hover:text-muted-foreground transition-colors"
      >
        {match[1]}
      </a>
    )
    
    lastIndex = match.index + match[0].length
  }
  
  // Agregar el texto restante
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }
  
  return parts.length > 0 ? parts : [text]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <LayoutWrapper>
        <div className="space-y-6">
          <h1 className="text-4xl font-serif italic">Post not found</h1>
          <Link href="/learnings" className="text-muted-foreground hover:text-foreground">
            ← Back to learnings
          </Link>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <article className="space-y-8">
        <div className="space-y-4">
          <Link
            href="/learnings"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
          >
            ← Back to learnings
          </Link>

          <div className="space-y-2">
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-serif italic text-balance">{post.title}</h1>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content.split("\n").map((paragraph: string, index: number) => {
            if (paragraph.startsWith("## ")) {
              const headingText = paragraph.replace("## ", "")
              return (
                <h2 key={index} className="text-2xl font-serif mt-12 mb-4">
                  {parseMarkdownLinks(headingText)}
                </h2>
              )
            }
            if (paragraph.trim().match(/^\d+\./)) {
              const listText = paragraph.replace(/^\d+\.\s*/, "")
              return (
                <li key={index} className="ml-6 leading-relaxed text-muted-foreground">
                  {parseMarkdownLinks(listText)}
                </li>
              )
            }
            // Detectar texto en cursiva (envuelto en asteriscos)
            if (paragraph.trim().startsWith("*") && paragraph.trim().endsWith("*")) {
              const italicText = paragraph.trim().slice(1, -1)
              return (
                <p key={index} className="leading-relaxed text-foreground mb-6 italic text-muted-foreground">
                  {parseMarkdownLinks(italicText)}
                </p>
              )
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="leading-relaxed text-foreground mb-6">
                  {parseMarkdownLinks(paragraph)}
                </p>
              )
            }
            return null
          })}
        </div>
      </article>
    </LayoutWrapper>
  )
}
